import { createDirectus, rest, readItems, readItem, createItem, updateItem } from '@directus/sdk'

export const usePurchaseOrderCart = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())
  const { logAction } = useAudit()
  const { $auth } = useNuxtApp()
  const loading = ref(false)
  const error = ref(null)

  const getPurchaseOrderCart = async (cartId) => {
    try {
      loading.value = true
      error.value = null
      
      return await client.request(
        readItem('purchase_order_carts', cartId, {
          fields: [
            '*',
            'company.*',
            'requester.*',
            'approver.*',
            'cart_items.*',
            'cart_items.product.*',
            'approval_workflow.*'
          ]
        })
      )
    } catch (err) {
      error.value = err.message
      console.error('Error fetching purchase order cart:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  const createPurchaseOrderCart = async (purchaseOrderData) => {
    try {
      loading.value = true
      error.value = null
      
      const currentUser = $auth.user
      if (!currentUser) throw new Error('User not authenticated')

      const poCart = {
        ...purchaseOrderData,
        po_number: await generatePONumber(),
        requester_id: currentUser.id,
        status: 'draft',
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('purchase_order_carts', poCart))
      await logAction('purchase_order_cart_created', 'purchase_order_carts', result.id, purchaseOrderData)
      return result
    } catch (err) {
      error.value = err.message
      console.error('Error creating purchase order cart:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const addItemToPOCart = async (cartId, productId, quantity, unitPrice) => {
    try {
      const cartItem = {
        cart_id: cartId,
        product_id: productId,
        quantity,
        unit_price: unitPrice,
        total_price: quantity * unitPrice,
        created_at: new Date().toISOString()
      }

      const result = await client.request(createItem('purchase_order_cart_items', cartItem))
      await updateCartTotals(cartId)
      await logAction('item_added_to_po_cart', 'purchase_order_carts', cartId, { product_id: productId, quantity })
      return result
    } catch (error) {
      console.error('Error adding item to PO cart:', error)
      throw error
    }
  }

  const removeItemFromPOCart = async (cartId, itemId) => {
    try {
      await client.request(deleteItem('purchase_order_cart_items', itemId))
      await updateCartTotals(cartId)
      await logAction('item_removed_from_po_cart', 'purchase_order_carts', cartId, { item_id: itemId })
    } catch (error) {
      console.error('Error removing item from PO cart:', error)
      throw error
    }
  }

  const submitForApproval = async (cartId, approverIds = []) => {
    try {
      const updateData = {
        status: 'pending_approval',
        submitted_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      // Create approval workflow entries
      for (const approverId of approverIds) {
        await client.request(
          createItem('purchase_order_approvals', {
            cart_id: cartId,
            approver_id: approverId,
            status: 'pending',
            created_at: new Date().toISOString()
          })
        )
      }

      const result = await client.request(updateItem('purchase_order_carts', cartId, updateData))
      await logAction('purchase_order_submitted_for_approval', 'purchase_order_carts', cartId, { approver_ids: approverIds })
      return result
    } catch (error) {
      console.error('Error submitting for approval:', error)
      throw error
    }
  }

  const approvePurchaseOrder = async (cartId, approverId, comments = '') => {
    try {
      // Update approval record
      await client.request(
        updateItem('purchase_order_approvals', {
          cart_id: cartId,
          approver_id: approverId
        }, {
          status: 'approved',
          comments,
          approved_at: new Date().toISOString()
        })
      )

      // Check if all required approvals are complete
      const pendingApprovals = await client.request(
        readItems('purchase_order_approvals', {
          filter: {
            cart_id: { _eq: cartId },
            status: { _eq: 'pending' }
          }
        })
      )

      // If no pending approvals, mark as approved
      if (pendingApprovals.length === 0) {
        await client.request(
          updateItem('purchase_order_carts', cartId, {
            status: 'approved',
            approved_at: new Date().toISOString()
          })
        )
      }

      await logAction('purchase_order_approved', 'purchase_order_carts', cartId, { approver_id: approverId, comments })
    } catch (error) {
      console.error('Error approving purchase order:', error)
      throw error
    }
  }

  const rejectPurchaseOrder = async (cartId, approverId, reason = '') => {
    try {
      await client.request(
        updateItem('purchase_order_approvals', {
          cart_id: cartId,
          approver_id: approverId
        }, {
          status: 'rejected',
          rejection_reason: reason,
          rejected_at: new Date().toISOString()
        })
      )

      await client.request(
        updateItem('purchase_order_carts', cartId, {
          status: 'rejected',
          rejected_at: new Date().toISOString()
        })
      )

      await logAction('purchase_order_rejected', 'purchase_order_carts', cartId, { approver_id: approverId, reason })
    } catch (error) {
      console.error('Error rejecting purchase order:', error)
      throw error
    }
  }

  const convertToOrder = async (cartId) => {
    try {
      const poCart = await getPurchaseOrderCart(cartId)
      if (!poCart || poCart.status !== 'approved') {
        throw new Error('Purchase order must be approved before conversion')
      }

      // Create order from PO cart
      const orderData = {
        company_id: poCart.company_id,
        customer_id: poCart.requester_id,
        po_number: poCart.po_number,
        status: 'pending',
        order_type: 'purchase_order',
        created_at: new Date().toISOString()
      }

      const { createOrder } = useOrders()
      const order = await createOrder(orderData)

      // Update PO cart status
      await client.request(
        updateItem('purchase_order_carts', cartId, {
          status: 'converted',
          order_id: order.id,
          converted_at: new Date().toISOString()
        })
      )

      await logAction('purchase_order_converted_to_order', 'purchase_order_carts', cartId, { order_id: order.id })
      return order
    } catch (error) {
      console.error('Error converting to order:', error)
      throw error
    }
  }

  const updateCartTotals = async (cartId) => {
    try {
      const items = await client.request(
        readItems('purchase_order_cart_items', {
          filter: { cart_id: { _eq: cartId } }
        })
      )

      const subtotal = items.reduce((sum, item) => sum + item.total_price, 0)
      const taxAmount = subtotal * 0.08 // 8% tax - should be configurable
      const total = subtotal + taxAmount

      await client.request(
        updateItem('purchase_order_carts', cartId, {
          subtotal,
          tax_amount: taxAmount,
          total,
          updated_at: new Date().toISOString()
        })
      )
    } catch (error) {
      console.error('Error updating cart totals:', error)
    }
  }

  const generatePONumber = async () => {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `PO-${timestamp}-${random}`
  }

  const getPOStatuses = () => {
    return [
      { value: 'draft', label: 'Draft', color: 'grey' },
      { value: 'pending_approval', label: 'Pending Approval', color: 'orange' },
      { value: 'approved', label: 'Approved', color: 'green' },
      { value: 'rejected', label: 'Rejected', color: 'red' },
      { value: 'converted', label: 'Converted to Order', color: 'blue' }
    ]
  }

  return {
    loading,
    error,
    getPurchaseOrderCart,
    createPurchaseOrderCart,
    addItemToPOCart,
    removeItemFromPOCart,
    submitForApproval,
    approvePurchaseOrder,
    rejectPurchaseOrder,
    convertToOrder,
    getPOStatuses
  }
}
  
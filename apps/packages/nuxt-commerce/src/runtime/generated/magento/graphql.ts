// @ts-nocheck
/* eslint-disable @stylistic/member-delimiter-style */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import type * as VueCompositionApi from '@vue/composition-api'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type ReactiveFunction<TParam> = () => TParam
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string, output: string }
  String: { input: string, output: string }
  Boolean: { input: boolean, output: boolean }
  Int: { input: number, output: number }
  Float: { input: number, output: number }
}

/** Defines the bundle products to add to the cart. */
export type AddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input']
  /** An array of bundle products to add. */
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>
}

/** Contains details about the cart after adding bundle products. */
export type AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput'
  /** The cart after adding products. */
  cart: Cart
}

/** Defines the configurable products to add to the cart. */
export type AddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input']
  /** An array of configurable products to add. */
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>
}

/** Contains details about the cart after adding configurable products. */
export type AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput'
  /** The cart after adding products. */
  cart: Cart
}

export type AddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars['String']['input']
  /** An array of downloadable products to add. */
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>
}

/** Contains details about the cart after adding downloadable products. */
export type AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput'
  /** The cart after adding products. */
  cart: Cart
}

/** Contains details about the cart after adding products to it. */
export type AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput'
  /** The cart after products have been added. */
  cart: Cart
  /** Contains errors encountered while adding an item to the cart. */
  user_errors: Array<Maybe<Error>>
}

/** Contains products to add to an existing compare list. */
export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input']
}

/** Contains details about the cart after adding products to it. */
export type AddProductsToNewCartOutput = {
  __typename?: 'AddProductsToNewCartOutput'
  /** The cart after products have been added. */
  cart: Maybe<Cart>
  /** Contains errors encountered while adding an item to the cart. */
  user_errors: Maybe<Array<Maybe<CartUserInputError>>>
}

/** Contains the customer's wish list and any errors encountered. */
export type AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput'
  /** An array of errors encountered while adding products to a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist
}

/** Defines the simple and group products to add to the cart. */
export type AddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** An array of simple and group items to add. */
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>
}

/** Contains details about the cart after adding simple or group products. */
export type AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput'
  /** The cart after adding products. */
  cart: Cart
}

/** Defines the virtual products to add to the cart. */
export type AddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** An array of virtual products to add. */
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>
}

/** Contains details about the cart after adding virtual products. */
export type AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput'
  /** The cart after adding products. */
  cart: Cart
}

/** Contains the resultant wish list and any error information. */
export type AddWishlistItemsToCartOutput = {
  __typename?: 'AddWishlistItemsToCartOutput'
  /** An array of errors encountered while adding products to the customer's cart. */
  add_wishlist_items_to_cart_user_errors: Array<Maybe<WishlistCartUserInputError>>
  /** Indicates whether the attempt to add items to the customer's cart was successful. */
  status: Scalars['Boolean']['output']
  /** Contains the wish list with all items that were successfully added. */
  wishlist: Wishlist
}

/** Contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export type Aggregation = {
  __typename?: 'Aggregation'
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String']['output']
  /** The number of options in the aggregation group. */
  count: Maybe<Scalars['Int']['output']>
  /** The aggregation display name. */
  label: Maybe<Scalars['String']['output']>
  /** Array of options for the aggregation. */
  options: Maybe<Array<Maybe<AggregationOption>>>
  /** The relative position of the attribute in a layered navigation block. */
  position: Maybe<Scalars['Int']['output']>
}

/** An implementation of `AggregationOptionInterface`. */
export type AggregationOption = AggregationOptionInterface & {
  __typename?: 'AggregationOption'
  /** The number of items that match the aggregation option. */
  count: Maybe<Scalars['Int']['output']>
  /** The display label for an aggregation option. */
  label: Maybe<Scalars['String']['output']>
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output']
}

/** Defines aggregation option fields. */
export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count: Maybe<Scalars['Int']['output']>
  /** The display label for an aggregation option. */
  label: Maybe<Scalars['String']['output']>
  /** The internal ID that represents the value of the option. */
  value: Scalars['String']['output']
}

/** Filter category aggregations in layered navigation. */
export type AggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly: InputMaybe<Scalars['Boolean']['input']>
}

/** An input object that specifies the filters used in product aggregations. */
export type AggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category: InputMaybe<AggregationsCategoryFilterInput>
}

export type ApplePayConfig = PaymentConfigItem & {
  __typename?: 'ApplePayConfig'
  /** The styles for the ApplePay Smart Button configuration */
  button_styles: Maybe<ButtonStyles>
  /** The payment method code as defined in the payment gateway */
  code: Maybe<Scalars['String']['output']>
  /** Indicates whether the payment method is displayed */
  is_visible: Maybe<Scalars['Boolean']['output']>
  /** Defines the payment intent (Authorize or Capture */
  payment_intent: Maybe<Scalars['String']['output']>
  /** The payment source for the payment method */
  payment_source: Maybe<Scalars['String']['output']>
  /** The PayPal parameters required to load the JS SDK */
  sdk_params: Maybe<Array<Maybe<SdkParams>>>
  /** The relative order the payment method is displayed on the checkout page */
  sort_order: Maybe<Scalars['String']['output']>
  /** The name displayed for the payment method */
  title: Maybe<Scalars['String']['output']>
}

/** Apple Pay inputs */
export type ApplePayMethodInput = {
  /** The payment source for the payment method */
  payment_source: InputMaybe<Scalars['String']['input']>
  /** The payment services order ID */
  payments_order_id: InputMaybe<Scalars['String']['input']>
  /** PayPal order ID */
  paypal_order_id: InputMaybe<Scalars['String']['input']>
}

/** Contains the applied coupon code. */
export type AppliedCoupon = {
  __typename?: 'AppliedCoupon'
  /** The coupon code the shopper applied to the card. */
  code: Scalars['String']['output']
}

/** Specifies the coupon code to apply to the cart. */
export type ApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** A valid coupon code. */
  coupon_code: Scalars['String']['input']
}

/** Contains details about the cart after applying a coupon. */
export type ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput'
  /** The cart after applying a coupon. */
  cart: Cart
}

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int']['input']
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String']['input']
}

/** Contains the results of the request to assign a compare list. */
export type AssignCompareListToCustomerOutput = {
  __typename?: 'AssignCompareListToCustomerOutput'
  /** The contents of the customer's compare list. */
  compare_list: Maybe<CompareList>
  /** Indicates whether the compare list was successfully assigned to the customer. */
  result: Scalars['Boolean']['output']
}

/** Contains details about the attribute, including the code and type. */
export type Attribute = {
  __typename?: 'Attribute'
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code: Maybe<Scalars['String']['output']>
  /** Attribute options list. */
  attribute_options: Maybe<Array<Maybe<AttributeOption>>>
  /** The data type of the attribute. */
  attribute_type: Maybe<Scalars['String']['output']>
  /** The type of entity that defines the attribute. */
  entity_type: Maybe<Scalars['String']['output']>
  /** The frontend input type of the attribute. */
  input_type: Maybe<Scalars['String']['output']>
  /** Details about the storefront properties configured for the attribute. */
  storefront_properties: Maybe<StorefrontProperties>
}

/** List of all entity types. Populated by the modules introducing EAV entities. */
export type AttributeEntityTypeEnum
  = | 'CATALOG_CATEGORY'
    | 'CATALOG_PRODUCT'
    | 'CUSTOMER'
    | 'CUSTOMER_ADDRESS'

/** An input object that specifies the filters used for attributes. */
export type AttributeFilterInput = {
  /** Whether a product or category attribute can be compared against another or not. */
  is_comparable: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute can be filtered or not. */
  is_filterable: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute can be filtered in search or not. */
  is_filterable_in_search: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute can use HTML on front or not. */
  is_html_allowed_on_front: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute can be searched or not. */
  is_searchable: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute can be used for price rules or not. */
  is_used_for_price_rules: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute is used for promo rules or not. */
  is_used_for_promo_rules: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute is visible in advanced search or not. */
  is_visible_in_advanced_search: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute is visible on front or not. */
  is_visible_on_front: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute has WYSIWYG enabled or not. */
  is_wysiwyg_enabled: InputMaybe<Scalars['Boolean']['input']>
  /** Whether a product or category attribute is used in product listing or not. */
  used_in_product_listing: InputMaybe<Scalars['Boolean']['input']>
}

/** EAV attribute frontend input types. */
export type AttributeFrontendInputEnum
  = | 'BOOLEAN'
    | 'DATE'
    | 'DATETIME'
    | 'FILE'
    | 'GALLERY'
    | 'HIDDEN'
    | 'IMAGE'
    | 'MEDIA_IMAGE'
    | 'MULTILINE'
    | 'MULTISELECT'
    | 'PRICE'
    | 'SELECT'
    | 'TEXT'
    | 'TEXTAREA'
    | 'UNDEFINED'
    | 'WEIGHT'

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code: InputMaybe<Scalars['String']['input']>
  /** The type of entity that defines the attribute. */
  entity_type: InputMaybe<Scalars['String']['input']>
}

/** Specifies selected option for a select or multiselect attribute value. */
export type AttributeInputSelectedOption = {
  /** The attribute option value. */
  value: Scalars['String']['input']
}

/** Base EAV implementation of CustomAttributeMetadataInterface. */
export type AttributeMetadata = CustomAttributeMetadataInterface & {
  __typename?: 'AttributeMetadata'
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output']
  /** Default attribute value. */
  default_value: Maybe<Scalars['String']['output']>
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum
  /** The frontend class of the attribute. */
  frontend_class: Maybe<Scalars['String']['output']>
  /** The frontend input type of the attribute. */
  frontend_input: Maybe<AttributeFrontendInputEnum>
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output']
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output']
  /** The label assigned to the attribute. */
  label: Maybe<Scalars['String']['output']>
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>
}

/** Attribute metadata retrieval error. */
export type AttributeMetadataError = {
  __typename?: 'AttributeMetadataError'
  /** Attribute metadata retrieval error message. */
  message: Scalars['String']['output']
  /** Attribute metadata retrieval error type. */
  type: AttributeMetadataErrorType
}

/** Attribute metadata retrieval error types. */
export type AttributeMetadataErrorType
  /** The requested attribute was not found. */
  = | 'ATTRIBUTE_NOT_FOUND'
  /** The requested entity was not found. */
    | 'ENTITY_NOT_FOUND'
  /** The filter cannot be applied as it does not belong to the entity */
    | 'FILTER_NOT_FOUND'
  /** Not categorized error, see the error message. */
    | 'UNDEFINED'

/** Defines an attribute option. */
export type AttributeOption = {
  __typename?: 'AttributeOption'
  /** The label assigned to the attribute option. */
  label: Maybe<Scalars['String']['output']>
  /** The attribute option value. */
  value: Maybe<Scalars['String']['output']>
}

/** Base EAV implementation of CustomAttributeOptionInterface. */
export type AttributeOptionMetadata = CustomAttributeOptionInterface & {
  __typename?: 'AttributeOptionMetadata'
  /** Is the option value default. */
  is_default: Scalars['Boolean']['output']
  /** The label assigned to the attribute option. */
  label: Scalars['String']['output']
  /** The attribute option value. */
  value: Scalars['String']['output']
}

export type AttributeSelectedOption = AttributeSelectedOptionInterface & {
  __typename?: 'AttributeSelectedOption'
  /** The attribute selected option label. */
  label: Scalars['String']['output']
  /** The attribute selected option value. */
  value: Scalars['String']['output']
}

export type AttributeSelectedOptionInterface = {
  /** The attribute selected option label. */
  label: Scalars['String']['output']
  /** The attribute selected option value. */
  value: Scalars['String']['output']
}

export type AttributeSelectedOptions = AttributeValueInterface & {
  __typename?: 'AttributeSelectedOptions'
  /** The attribute code. */
  code: Scalars['ID']['output']
  selected_options: Array<Maybe<AttributeSelectedOptionInterface>>
}

export type AttributeValue = AttributeValueInterface & {
  __typename?: 'AttributeValue'
  /** The attribute code. */
  code: Scalars['ID']['output']
  /** The attribute value. */
  value: Scalars['String']['output']
}

/** Specifies the value for attribute. */
export type AttributeValueInput = {
  /** The code of the attribute. */
  attribute_code: Scalars['String']['input']
  /** An array containing selected options for a select or multiselect attribute. */
  selected_options: InputMaybe<Array<InputMaybe<AttributeInputSelectedOption>>>
  /** The value assigned to the attribute. */
  value: InputMaybe<Scalars['String']['input']>
}

export type AttributeValueInterface = {
  /** The attribute code. */
  code: Scalars['ID']['output']
}

/** Metadata of EAV attributes associated to form */
export type AttributesFormOutput = {
  __typename?: 'AttributesFormOutput'
  /** Errors of retrieving certain attributes metadata. */
  errors: Array<Maybe<AttributeMetadataError>>
  /** Requested attributes metadata. */
  items: Array<Maybe<CustomAttributeMetadataInterface>>
}

/** Metadata of EAV attributes. */
export type AttributesMetadataOutput = {
  __typename?: 'AttributesMetadataOutput'
  /** Errors of retrieving certain attributes metadata. */
  errors: Array<Maybe<AttributeMetadataError>>
  /** Requested attributes metadata. */
  items: Array<Maybe<CustomAttributeMetadataInterface>>
}

/** Describes a payment method that the shopper can use to pay for the order. */
export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod'
  /** The payment method code. */
  code: Scalars['String']['output']
  /** If the payment method is an online integration */
  is_deferred: Scalars['Boolean']['output']
  /** The payment method title. */
  title: Scalars['String']['output']
}

/** Contains details about the possible shipping methods and carriers. */
export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod'
  /** The cost of shipping using this shipping method. */
  amount: Money
  /** Indicates whether this shipping method can be applied to the cart. */
  available: Scalars['Boolean']['output']
  /** @deprecated The field should not be used on the storefront. */
  base_amount: Maybe<Money>
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output']
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output']
  /** Describes an error condition. */
  error_message: Maybe<Scalars['String']['output']>
  /** A shipping method code associated with a carrier. The value could be null if no method is available. */
  method_code: Maybe<Scalars['String']['output']>
  /** The label for the shipping method code. The value could be null if no method is available. */
  method_title: Maybe<Scalars['String']['output']>
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money
}

export type BatchMutationStatus
  = | 'FAILURE'
    | 'MIXED_RESULTS'
    | 'SUCCESS'

/** Defines the billing address. */
export type BillingAddressInput = {
  /** Defines a billing address. */
  address: InputMaybe<CartAddressInput>
  /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
  customer_address_id: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_as_shipping: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping: InputMaybe<Scalars['Boolean']['input']>
}

/** The billing address information */
export type BillingAddressPaymentSourceInput = {
  /** The first line of the address */
  address_line_1: InputMaybe<Scalars['String']['input']>
  /** The second line of the address */
  address_line_2: InputMaybe<Scalars['String']['input']>
  /** The city of the address */
  city: InputMaybe<Scalars['String']['input']>
  /** The country of the address */
  country_code: Scalars['String']['input']
  /** The postal code of the address */
  postal_code: InputMaybe<Scalars['String']['input']>
  /** The region of the address */
  region: InputMaybe<Scalars['String']['input']>
}

/** Contains details about the billing address. */
export type BillingCartAddress = CartAddressInterface & {
  __typename?: 'BillingCartAddress'
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output']
  /** The company specified for the billing or shipping address. */
  company: Maybe<Scalars['String']['output']>
  /** An object containing the country label and code. */
  country: CartAddressCountry
  /** @deprecated The field is used only in shipping address. */
  customer_notes: Maybe<Scalars['String']['output']>
  /** The customer's fax number. */
  fax: Maybe<Scalars['String']['output']>
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output']
  /** Id of the customer address. */
  id: Maybe<Scalars['Int']['output']>
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output']
  /** The middle name of the person associated with the billing/shipping address. */
  middlename: Maybe<Scalars['String']['output']>
  /** The ZIP or postal code of the billing or shipping address. */
  postcode: Maybe<Scalars['String']['output']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: Maybe<Scalars['String']['output']>
  /** An object containing the region label and code. */
  region: Maybe<CartAddressRegion>
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>
  /** A value such as Sr., Jr., or III. */
  suffix: Maybe<Scalars['String']['output']>
  /** The telephone number for the billing or shipping address. */
  telephone: Maybe<Scalars['String']['output']>
  /** The unique id of the customer address. */
  uid: Scalars['String']['output']
  /** The VAT company number for billing or shipping address. */
  vat_id: Maybe<Scalars['String']['output']>
}

export type BraintreeCcVaultInput = {
  device_data: InputMaybe<Scalars['String']['input']>
  public_hash: Scalars['String']['input']
}

export type BraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. */
  device_data: InputMaybe<Scalars['String']['input']>
  /** States whether the payment details (Credit/Debit Card, PayPal Account) entered by a customer should be tokenized for later usage. Required only if Vault is enabled for the relevant Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean']['input']
  /** The one-time payment token generated by Braintree payment gateway based on payment details (Card, PayPal). Required field to make sale transaction. */
  payment_method_nonce: Scalars['String']['input']
}

export type BraintreeVaultInput = {
  device_data: InputMaybe<Scalars['String']['input']>
  public_hash: Scalars['String']['input']
}

/** Contains details about an individual category that comprises a breadcrumb. */
export type Breadcrumb = {
  __typename?: 'Breadcrumb'
  /**
   * The ID of the category.
   * @deprecated Use `category_uid` instead.
   */
  category_id: Maybe<Scalars['Int']['output']>
  /** The category level. */
  category_level: Maybe<Scalars['Int']['output']>
  /** The display name of the category. */
  category_name: Maybe<Scalars['String']['output']>
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID']['output']
  /** The URL key of the category. */
  category_url_key: Maybe<Scalars['String']['output']>
  /** The URL path of the category. */
  category_url_path: Maybe<Scalars['String']['output']>
}

/** An implementation for bundle product cart items. */
export type BundleCartItem = CartItemInterface & {
  __typename?: 'BundleCartItem'
  /** An array containing the bundle options the shopper selected. */
  bundle_options: Array<Maybe<SelectedBundleOption>>
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>
  /** The entered gift message for the cart item */
  gift_message: Maybe<GiftMessage>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output']
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output']
  /** Message to display when the product is not available with this selected option. */
  not_available_message: Maybe<Scalars['String']['output']>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>
  /** Details about an item in the cart. */
  product: ProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output']
}

/** Defines bundle product options for `CreditMemoItemInterface`. */
export type BundleCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem'
  /** A list of bundle options that are assigned to a bundle product that is part of a credit memo. */
  bundle_options: Maybe<Array<Maybe<ItemSelectedBundleOption>>>
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output']
  /** The order item the credit memo is applied to. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>
}

/** Defines bundle product options for `InvoiceItemInterface`. */
export type BundleInvoiceItem = InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem'
  /** A list of bundle options that are assigned to an invoiced bundle product. */
  bundle_options: Maybe<Array<Maybe<ItemSelectedBundleOption>>>
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output']
  /** Details about an individual order item. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>
}

/** Defines an individual item within a bundle product. */
export type BundleItem = {
  __typename?: 'BundleItem'
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** An array of additional options for this bundle item. */
  options: Maybe<Array<Maybe<BundleItemOption>>>
  /** A number indicating the sequence order of this item compared to the other bundle items. */
  position: Maybe<Scalars['Int']['output']>
  /** The range of prices for the product */
  price_range: PriceRange
  /** Indicates whether the item must be included in the bundle. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The SKU of the bundle product. */
  sku: Maybe<Scalars['String']['output']>
  /** The display name of the item. */
  title: Maybe<Scalars['String']['output']>
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type: Maybe<Scalars['String']['output']>
  /** The unique ID for a `BundleItem` object. */
  uid: Maybe<Scalars['ID']['output']>
}

/** Defines the characteristics that comprise a specific bundle item and its options. */
export type BundleItemOption = {
  __typename?: 'BundleItemOption'
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity: Maybe<Scalars['Boolean']['output']>
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id: Maybe<Scalars['Int']['output']>
  /** Indicates whether this option is the default option. */
  is_default: Maybe<Scalars['Boolean']['output']>
  /** The text that identifies the bundled item option. */
  label: Maybe<Scalars['String']['output']>
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position: Maybe<Scalars['Int']['output']>
  /** The price of the selected option. */
  price: Maybe<Scalars['Float']['output']>
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>
  /** Contains details about this product option. */
  product: Maybe<ProductInterface>
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated Use `quantity` instead.
   */
  qty: Maybe<Scalars['Float']['output']>
  /** The quantity of this specific bundle item. */
  quantity: Maybe<Scalars['Float']['output']>
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID']['output']
}

/** Defines the input for a bundle option. */
export type BundleOptionInput = {
  /** The ID of the option. */
  id: Scalars['Int']['input']
  /** The number of the selected item to add to the cart. */
  quantity: Scalars['Float']['input']
  /** An array with the chosen value of the option. */
  value: Array<InputMaybe<Scalars['String']['input']>>
}

/** Defines bundle product options for `OrderItemInterface`. */
export type BundleOrderItem = OrderItemInterface & {
  __typename?: 'BundleOrderItem'
  /** A list of bundle options that are assigned to the bundle product. */
  bundle_options: Maybe<Array<Maybe<ItemSelectedBundleOption>>>
  /** The final discount information for the product. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The entered option for the base product, such as a logo or image. */
  entered_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The selected gift message for the order item */
  gift_message: Maybe<GiftMessage>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output']
  /** The SKU of parent product. */
  parent_sku: Maybe<Scalars['String']['output']>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<OrderItemPrices>
  /** The ProductInterface object, which contains details about the base product */
  product: Maybe<ProductInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The type of product, such as simple, configurable, etc. */
  product_type: Maybe<Scalars['String']['output']>
  /** URL key of the base product. */
  product_url_key: Maybe<Scalars['String']['output']>
  /** The number of canceled items. */
  quantity_canceled: Maybe<Scalars['Float']['output']>
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>
  /** The number of units ordered for this item. */
  quantity_ordered: Maybe<Scalars['Float']['output']>
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>
  /** The number of returned items. */
  quantity_returned: Maybe<Scalars['Float']['output']>
  /** The number of shipped items. */
  quantity_shipped: Maybe<Scalars['Float']['output']>
  /** The selected options for the base product, such as color or size. */
  selected_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The status of the order item. */
  status: Maybe<Scalars['String']['output']>
}

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'BundleProduct'
  /** @deprecated Use the `custom_attributes` field instead. */
  activity: Maybe<Scalars['String']['output']>
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  climate: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  collar: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** Product custom attributes. */
  custom_attributesV2: Maybe<ProductCustomAttributes>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the bundle product has a dynamic SKU. */
  dynamic_sku: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight: Maybe<Scalars['Boolean']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  format: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  gender: Maybe<Scalars['String']['output']>
  /** Returns a value indicating gift message availability for the product. */
  gift_message_available: Scalars['Boolean']['output']
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>
  /** @deprecated Use the `custom_attributes` field instead. */
  is_seller_product: Maybe<Scalars['Int']['output']>
  /** An array containing information about individual bundle items. */
  items: Maybe<Array<Maybe<BundleItem>>>
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  material: Maybe<Scalars['String']['output']>
  /** Maximum Qty Allowed in Shopping Cart */
  max_sale_qty: Maybe<Scalars['Float']['output']>
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>
  /** Minimum Qty Allowed in Shopping Cart */
  min_sale_qty: Maybe<Scalars['Float']['output']>
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  new: Maybe<Scalars['Int']['output']>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric: Maybe<Scalars['Int']['output']>
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>
  /** The price details of the main product */
  price_details: Maybe<PriceDetails>
  /** The range of prices for the product */
  price_range: PriceRange
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view: Maybe<PriceViewEnum>
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>
  /** Amount of available stock */
  quantity: Maybe<Scalars['Float']['output']>
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output']
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output']
  /** The list of products reviews. */
  reviews: ProductReviews
  /** @deprecated Use the `custom_attributes` field instead. */
  sale: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  seller_id: Maybe<Scalars['Int']['output']>
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items: Maybe<ShipBundleItemsEnum>
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  size: Maybe<Scalars['Int']['output']>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sm_featured: Maybe<Scalars['Int']['output']>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general: Maybe<Scalars['String']['output']>
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output']
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>
}

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductCustom_AttributesV2Args = {
  filters: InputMaybe<AttributeFilterInput>
}

/** Defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** Defines a single bundle product. */
export type BundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<InputMaybe<BundleOptionInput>>
  /** The ID and value of the option. */
  customizable_options: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>
  /** The quantity and SKU of the bundle product. */
  data: CartItemInput
}

/** Defines bundle product options for `ShipmentItemInterface`. */
export type BundleShipmentItem = ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem'
  /** A list of bundle options that are assigned to a shipped product. */
  bundle_options: Maybe<Array<Maybe<ItemSelectedBundleOption>>>
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output']
  /** The order item associated with the shipment item. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output']
}

/** Defines bundle product options for `WishlistItemInterface`. */
export type BundleWishlistItem = WishlistItemInterface & {
  __typename?: 'BundleWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output']
  /** An array containing information about the selected bundle items. */
  bundle_options: Maybe<Array<Maybe<SelectedBundleOption>>>
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output']
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output']
}

export type ButtonStyles = {
  __typename?: 'ButtonStyles'
  /** The button color */
  color: Maybe<Scalars['String']['output']>
  /** The button height in pixels */
  height: Maybe<Scalars['Int']['output']>
  /** The button label */
  label: Maybe<Scalars['String']['output']>
  /** The button layout */
  layout: Maybe<Scalars['String']['output']>
  /** The button shape */
  shape: Maybe<Scalars['String']['output']>
  /** Indicates whether the tagline is displayed */
  tagline: Maybe<Scalars['Boolean']['output']>
  /** Defines if the button uses default height. If the value is false, the value of height is used */
  use_default_height: Maybe<Scalars['Boolean']['output']>
}

export type CancelOrderError = {
  __typename?: 'CancelOrderError'
  /** An error code that is specific to cancel order. */
  code: CancelOrderErrorCode
  /** A localized error message. */
  message: Scalars['String']['output']
}

export type CancelOrderErrorCode
  = | 'INVALID_ORDER_STATUS'
    | 'ORDER_CANCELLATION_DISABLED'
    | 'ORDER_NOT_FOUND'
    | 'PARTIAL_ORDER_ITEM_SHIPPED'
    | 'UNAUTHORISED'
    | 'UNDEFINED'

/** Defines the order to cancel. */
export type CancelOrderInput = {
  /** The unique ID of an `Order` type. */
  order_id: Scalars['ID']['input']
  /** Cancellation reason. */
  reason: Scalars['String']['input']
}

/** Contains the updated customer order and error message if any. */
export type CancelOrderOutput = {
  __typename?: 'CancelOrderOutput'
  /** Error encountered while cancelling the order. */
  error: Maybe<Scalars['String']['output']>
  errorV2: Maybe<CancelOrderError>
  /** Updated customer order. */
  order: Maybe<CustomerOrder>
}

export type CancellationReason = {
  __typename?: 'CancellationReason'
  description: Scalars['String']['output']
}

export type Card = {
  __typename?: 'Card'
  /** Card bin details */
  bin_details: Maybe<CardBin>
  /** Expiration month of the card */
  card_expiry_month: Maybe<Scalars['String']['output']>
  /** Expiration year of the card */
  card_expiry_year: Maybe<Scalars['String']['output']>
  /** Last four digits of the card */
  last_digits: Maybe<Scalars['String']['output']>
  /** Name on the card */
  name: Maybe<Scalars['String']['output']>
}

export type CardBin = {
  __typename?: 'CardBin'
  /** Card bin number */
  bin: Maybe<Scalars['String']['output']>
}

/** The card payment source information */
export type CardPaymentSourceInput = {
  /** The billing address of the card */
  billing_address: BillingAddressPaymentSourceInput
  /** The name on the cardholder */
  name: InputMaybe<Scalars['String']['input']>
}

/** The card payment source information */
export type CardPaymentSourceOutput = {
  __typename?: 'CardPaymentSourceOutput'
  /** The brand of the card */
  brand: Maybe<Scalars['String']['output']>
  /** The expiry of the card */
  expiry: Maybe<Scalars['String']['output']>
  /** The last digits of the card */
  last_digits: Maybe<Scalars['String']['output']>
}

/** Contains the contents and other details about a guest or customer cart. */
export type Cart = {
  __typename?: 'Cart'
  /** @deprecated Use `applied_coupons` instead. */
  applied_coupon: Maybe<AppliedCoupon>
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code. */
  applied_coupons: Maybe<Array<Maybe<AppliedCoupon>>>
  /** An array of available payment methods. */
  available_payment_methods: Maybe<Array<Maybe<AvailablePaymentMethod>>>
  /** The billing address assigned to the cart. */
  billing_address: Maybe<BillingCartAddress>
  /** The email address of the guest or customer. */
  email: Maybe<Scalars['String']['output']>
  /** The entered gift message for the cart */
  gift_message: Maybe<GiftMessage>
  /** The unique ID for a `Cart` object. */
  id: Scalars['ID']['output']
  /** Indicates whether the cart contains only virtual products. */
  is_virtual: Scalars['Boolean']['output']
  /**
   * An array of products that have been added to the cart.
   * @deprecated Use `itemsV2` instead.
   */
  items: Maybe<Array<Maybe<CartItemInterface>>>
  itemsV2: Maybe<CartItems>
  /** Pricing details for the quote. */
  prices: Maybe<CartPrices>
  /** Indicates which payment method was applied to the cart. */
  selected_payment_method: Maybe<SelectedPaymentMethod>
  /** An array of shipping addresses assigned to the cart. */
  shipping_addresses: Array<Maybe<ShippingCartAddress>>
  /** The total number of items in the cart. */
  total_quantity: Scalars['Float']['output']
}

/** Contains the contents and other details about a guest or customer cart. */
export type CartItemsV2Args = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<QuoteItemsSortInput>
}

/** Contains details the country in a billing or shipping address. */
export type CartAddressCountry = {
  __typename?: 'CartAddressCountry'
  /** The country code. */
  code: Scalars['String']['output']
  /** The display label for the country. */
  label: Scalars['String']['output']
}

/** Defines the billing or shipping address to be applied to the cart. */
export type CartAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['input']
  /** The company specified for the billing or shipping address. */
  company: InputMaybe<Scalars['String']['input']>
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars['String']['input']
  /** The customer's fax number. */
  fax: InputMaybe<Scalars['String']['input']>
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['input']
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['input']
  /** The middle name of the person associated with the billing/shipping address. */
  middlename: InputMaybe<Scalars['String']['input']>
  /** The ZIP or postal code of the billing or shipping address. */
  postcode: InputMaybe<Scalars['String']['input']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: InputMaybe<Scalars['String']['input']>
  /** A string that defines the state or province of the billing or shipping address. */
  region: InputMaybe<Scalars['String']['input']>
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id: InputMaybe<Scalars['Int']['input']>
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book: InputMaybe<Scalars['Boolean']['input']>
  /** An array containing the street for the billing or shipping address. */
  street: Array<InputMaybe<Scalars['String']['input']>>
  /** A value such as Sr., Jr., or III. */
  suffix: InputMaybe<Scalars['String']['input']>
  /** The telephone number for the billing or shipping address. */
  telephone: InputMaybe<Scalars['String']['input']>
  /** The VAT company number for billing or shipping address. */
  vat_id: InputMaybe<Scalars['String']['input']>
}

export type CartAddressInterface = {
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output']
  /** The company specified for the billing or shipping address. */
  company: Maybe<Scalars['String']['output']>
  /** An object containing the country label and code. */
  country: CartAddressCountry
  /** The customer's fax number. */
  fax: Maybe<Scalars['String']['output']>
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output']
  /** Id of the customer address. */
  id: Maybe<Scalars['Int']['output']>
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output']
  /** The middle name of the person associated with the billing/shipping address. */
  middlename: Maybe<Scalars['String']['output']>
  /** The ZIP or postal code of the billing or shipping address. */
  postcode: Maybe<Scalars['String']['output']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: Maybe<Scalars['String']['output']>
  /** An object containing the region label and code. */
  region: Maybe<CartAddressRegion>
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>
  /** A value such as Sr., Jr., or III. */
  suffix: Maybe<Scalars['String']['output']>
  /** The telephone number for the billing or shipping address. */
  telephone: Maybe<Scalars['String']['output']>
  /** The unique id of the customer address. */
  uid: Scalars['String']['output']
  /** The VAT company number for billing or shipping address. */
  vat_id: Maybe<Scalars['String']['output']>
}

/** Contains details about the region in a billing or shipping address. */
export type CartAddressRegion = {
  __typename?: 'CartAddressRegion'
  /** The state or province code. */
  code: Maybe<Scalars['String']['output']>
  /** The display label for the region. */
  label: Maybe<Scalars['String']['output']>
  /** The unique ID for a pre-defined region. */
  region_id: Maybe<Scalars['Int']['output']>
}

/** Contains information about discounts applied to the cart. */
export type CartDiscount = {
  __typename?: 'CartDiscount'
  /** The amount of the discount applied to the item. */
  amount: Money
  /** The description of the discount. */
  label: Array<Maybe<Scalars['String']['output']>>
}

export type CartDiscountType
  = | 'ITEM'
    | 'SHIPPING'

export type CartItemError = {
  __typename?: 'CartItemError'
  /** An error code that describes the error encountered */
  code: CartItemErrorType
  /** A localized error message */
  message: Scalars['String']['output']
}

export type CartItemErrorType
  = | 'ITEM_INCREMENTS'
    | 'ITEM_QTY'
    | 'UNDEFINED'

/** Defines an item to be added to the cart. */
export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text. */
  entered_options: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>
  /** For a child product, the SKU of its parent product. */
  parent_sku: InputMaybe<Scalars['String']['input']>
  /** The amount or number of an item to add. */
  quantity: Scalars['Float']['input']
  /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
  selected_options: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** The SKU of the product. */
  sku: Scalars['String']['input']
}

/** An interface for products in a cart. */
export type CartItemInterface = {
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output']
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output']
  /** Message to display when the product is not available with this selected option. */
  not_available_message: Maybe<Scalars['String']['output']>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>
  /** Details about an item in the cart. */
  product: ProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output']
}

/** Contains details about the price of the item, including taxes and discounts. */
export type CartItemPrices = {
  __typename?: 'CartItemPrices'
  /** The price discount for the unit price of the item represents the difference between its regular price and final price. */
  catalog_discount: Maybe<ProductDiscount>
  /** An array of discounts to be applied to the cart item. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** An array of FPTs applied to the cart item. */
  fixed_product_taxes: Maybe<Array<Maybe<FixedProductTax>>>
  /** The value of the original unit price for the item, including discounts. */
  original_item_price: Money
  /** The value of the original price multiplied by the quantity of the item. */
  original_row_total: Money
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: Money
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price_including_tax: Money
  /** The price discount multiplied by the item quantity represents the total difference between the regular price and the final price for the entire quote item. */
  row_catalog_discount: Maybe<ProductDiscount>
  /** The value of the price multiplied by the quantity of the item. */
  row_total: Money
  /** The value of `row_total` plus the tax applied to the item. */
  row_total_including_tax: Money
  /** The total of all discounts applied to the item. */
  total_item_discount: Maybe<Money>
}

/** Deprecated: The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
export type CartItemQuantity = {
  __typename?: 'CartItemQuantity'
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  cart_item_id: Scalars['Int']['output']
  /** @deprecated The `ShippingCartAddress.cart_items` field now returns `CartItemInterface`. */
  quantity: Scalars['Float']['output']
}

/** Contains details about the price of a selected customizable value. */
export type CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice'
  /** Indicates whether the price type is fixed, percent, or dynamic. */
  type: PriceTypeEnum
  /** A string that describes the unit of the value. */
  units: Scalars['String']['output']
  /** A price value. */
  value: Scalars['Float']['output']
}

/** A single item to be updated. */
export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id: InputMaybe<Scalars['Int']['input']>
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid: InputMaybe<Scalars['ID']['input']>
  /** An array that defines customizable options for the product. */
  customizable_options: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>
  /** Gift message details for the cart item */
  gift_message: InputMaybe<GiftMessageInput>
  /** The new quantity of the item. */
  quantity: InputMaybe<Scalars['Float']['input']>
}

export type CartItems = {
  __typename?: 'CartItems'
  /** An array of products that have been added to the cart. */
  items: Array<Maybe<CartItemInterface>>
  /** Metadata for pagination rendering. */
  page_info: Maybe<SearchResultPageInfo>
  /** The number of returned cart items. */
  total_count: Scalars['Int']['output']
}

/** Contains details about the final price of items in the cart, including discount and tax information. */
export type CartPrices = {
  __typename?: 'CartPrices'
  /** An array containing the names and amounts of taxes applied to each item in the cart. */
  applied_taxes: Maybe<Array<Maybe<CartTaxItem>>>
  /** @deprecated Use discounts instead. */
  discount: Maybe<CartDiscount>
  /** An array containing cart rule discounts, store credit and gift cards applied to the cart. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The total, including discounts, taxes, shipping, and other fees. */
  grand_total: Maybe<Money>
  /** The total of the cart, including discounts, shipping, and other fees without tax. */
  grand_total_excluding_tax: Maybe<Money>
  /** The subtotal without any applied taxes. */
  subtotal_excluding_tax: Maybe<Money>
  /** The subtotal including any applied taxes. */
  subtotal_including_tax: Maybe<Money>
  /** The subtotal with any discounts applied, but not taxes. */
  subtotal_with_discount_excluding_tax: Maybe<Money>
}

/** Contains tax information about an item in the cart. */
export type CartTaxItem = {
  __typename?: 'CartTaxItem'
  /** The amount of tax applied to the item. */
  amount: Money
  /** The description of the tax. */
  label: Scalars['String']['output']
}

export type CartUserInputError = Error & {
  __typename?: 'CartUserInputError'
  /** A cart-specific error code. */
  code: CartUserInputErrorType
  /** A localized error message. */
  message: Scalars['String']['output']
}

export type CartUserInputErrorType
  = | 'COULD_NOT_FIND_CART_ITEM'
    | 'INSUFFICIENT_STOCK'
    | 'INVALID_PARAMETER_VALUE'
    | 'NOT_SALABLE'
    | 'PRODUCT_NOT_FOUND'
    | 'REQUIRED_PARAMETER_MISSING'
    | 'UNDEFINED'

export type CatalogAttributeApplyToEnum
  = | 'BUNDLE'
    | 'CATEGORY'
    | 'CONFIGURABLE'
    | 'DOWNLOADABLE'
    | 'GROUPED'
    | 'SIMPLE'
    | 'VIRTUAL'

/** Swatch attribute metadata. */
export type CatalogAttributeMetadata = CustomAttributeMetadataInterface & {
  __typename?: 'CatalogAttributeMetadata'
  /** To which catalog types an attribute can be applied. */
  apply_to: Maybe<Array<Maybe<CatalogAttributeApplyToEnum>>>
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output']
  /** Default attribute value. */
  default_value: Maybe<Scalars['String']['output']>
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum
  /** The frontend class of the attribute. */
  frontend_class: Maybe<Scalars['String']['output']>
  /** The frontend input type of the attribute. */
  frontend_input: Maybe<AttributeFrontendInputEnum>
  /** Whether a product or category attribute can be compared against another or not. */
  is_comparable: Maybe<Scalars['Boolean']['output']>
  /** Whether a product or category attribute can be filtered or not. */
  is_filterable: Maybe<Scalars['Boolean']['output']>
  /** Whether a product or category attribute can be filtered in search or not. */
  is_filterable_in_search: Maybe<Scalars['Boolean']['output']>
  /** Whether a product or category attribute can use HTML on front or not. */
  is_html_allowed_on_front: Maybe<Scalars['Boolean']['output']>
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output']
  /** Whether a product or category attribute can be searched or not. */
  is_searchable: Maybe<Scalars['Boolean']['output']>
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output']
  /** Whether a product or category attribute can be used for price rules or not. */
  is_used_for_price_rules: Maybe<Scalars['Boolean']['output']>
  /** Whether a product or category attribute is used for promo rules or not. */
  is_used_for_promo_rules: Maybe<Scalars['Boolean']['output']>
  /** Whether a product or category attribute is visible in advanced search or not. */
  is_visible_in_advanced_search: Maybe<Scalars['Boolean']['output']>
  /** Whether a product or category attribute is visible on front or not. */
  is_visible_on_front: Maybe<Scalars['Boolean']['output']>
  /** Whether a product or category attribute has WYSIWYG enabled or not. */
  is_wysiwyg_enabled: Maybe<Scalars['Boolean']['output']>
  /** The label assigned to the attribute. */
  label: Maybe<Scalars['String']['output']>
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>
  /** Input type of the swatch attribute option. */
  swatch_input_type: Maybe<SwatchInputTypeEnum>
  /** Whether update product preview image or not. */
  update_product_preview_image: Maybe<Scalars['Boolean']['output']>
  /** Whether use product image for swatch or not. */
  use_product_image_for_swatch: Maybe<Scalars['Boolean']['output']>
  /** Whether a product or category attribute is used in product listing or not. */
  used_in_product_listing: Maybe<Scalars['Boolean']['output']>
}

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid: InputMaybe<FilterEqualTypeInput>
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids: InputMaybe<FilterEqualTypeInput>
  /** Filter by the display name of the category. */
  name: InputMaybe<FilterMatchTypeInput>
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid: InputMaybe<FilterEqualTypeInput>
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id: InputMaybe<FilterEqualTypeInput>
  /** Filter by the part of the URL that identifies the category. */
  url_key: InputMaybe<FilterEqualTypeInput>
  /** Filter by the URL path for the category. */
  url_path: InputMaybe<FilterEqualTypeInput>
}

/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  amtoolkit_robots: Maybe<Scalars['String']['output']>
  available_sort_by: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** An array of breadcrumb items. */
  breadcrumbs: Maybe<Array<Maybe<Breadcrumb>>>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>
  category_code: Maybe<Scalars['String']['output']>
  children_count: Maybe<Scalars['String']['output']>
  /** Contains a category CMS block. */
  cms_block: Maybe<CmsBlock>
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>
  custom_layout_update_file: Maybe<Scalars['String']['output']>
  /** The attribute to use for sorting. */
  default_sort_by: Maybe<Scalars['String']['output']>
  /** An optional description of the category. */
  description: Maybe<Scalars['String']['output']>
  display_mode: Maybe<Scalars['String']['output']>
  filter_price_range: Maybe<Scalars['Float']['output']>
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>
  image: Maybe<Scalars['String']['output']>
  include_in_menu: Maybe<Scalars['Int']['output']>
  is_anchor: Maybe<Scalars['Int']['output']>
  landing_page: Maybe<Scalars['Int']['output']>
  /** The depth of the category within the tree. */
  level: Maybe<Scalars['Int']['output']>
  meta_description: Maybe<Scalars['String']['output']>
  meta_keywords: Maybe<Scalars['String']['output']>
  meta_product_set_id: Maybe<Scalars['String']['output']>
  meta_title: Maybe<Scalars['String']['output']>
  /** The display name of the category. */
  name: Maybe<Scalars['String']['output']>
  /** The full category path. */
  path: Maybe<Scalars['String']['output']>
  /** The category path within the store. */
  path_in_store: Maybe<Scalars['String']['output']>
  /** The position of the category relative to other categories at the same level in tree. */
  position: Maybe<Scalars['Int']['output']>
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count: Maybe<Scalars['Int']['output']>
  /** The list of products assigned to the category. */
  products: Maybe<CategoryProducts>
  sync_to_facebook_catalog: Maybe<Scalars['Int']['output']>
  thumbnail: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output']
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>
  /** The URL key assigned to the category. */
  url_key: Maybe<Scalars['String']['output']>
  /** The URL path assigned to the category. */
  url_path: Maybe<Scalars['String']['output']>
  /** The part of the category URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>
}

/** Contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<ProductAttributeSortInput>
}

/** Contains details about the products assigned to a category. */
export type CategoryProducts = {
  __typename?: 'CategoryProducts'
  /** An array of products that are assigned to the category. */
  items: Maybe<Array<Maybe<ProductInterface>>>
  /** Pagination metadata. */
  page_info: Maybe<SearchResultPageInfo>
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count: Maybe<Scalars['Int']['output']>
}

/** Contains a collection of `CategoryTree` objects and pagination information. */
export type CategoryResult = {
  __typename?: 'CategoryResult'
  /** A list of categories that match the filter criteria. */
  items: Maybe<Array<Maybe<CategoryTree>>>
  /** An object that includes the `page_info` and `currentPage` values specified in the query. */
  page_info: Maybe<SearchResultPageInfo>
  /** The total number of categories that match the criteria. */
  total_count: Maybe<Scalars['Int']['output']>
}

/** Contains the hierarchy of categories. */
export type CategoryTree = CategoryInterface & RoutableInterface & {
  __typename?: 'CategoryTree'
  amtoolkit_robots: Maybe<Scalars['String']['output']>
  available_sort_by: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** An array of breadcrumb items. */
  breadcrumbs: Maybe<Array<Maybe<Breadcrumb>>>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>
  category_code: Maybe<Scalars['String']['output']>
  /** A tree of child categories. */
  children: Maybe<Array<Maybe<CategoryTree>>>
  children_count: Maybe<Scalars['String']['output']>
  /** Contains a category CMS block. */
  cms_block: Maybe<CmsBlock>
  /**
   * The timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>
  custom_layout_update_file: Maybe<Scalars['String']['output']>
  /** The attribute to use for sorting. */
  default_sort_by: Maybe<Scalars['String']['output']>
  /** An optional description of the category. */
  description: Maybe<Scalars['String']['output']>
  display_mode: Maybe<Scalars['String']['output']>
  filter_price_range: Maybe<Scalars['Float']['output']>
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use `uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>
  image: Maybe<Scalars['String']['output']>
  include_in_menu: Maybe<Scalars['Int']['output']>
  is_anchor: Maybe<Scalars['Int']['output']>
  landing_page: Maybe<Scalars['Int']['output']>
  /** The depth of the category within the tree. */
  level: Maybe<Scalars['Int']['output']>
  meta_description: Maybe<Scalars['String']['output']>
  meta_keywords: Maybe<Scalars['String']['output']>
  meta_product_set_id: Maybe<Scalars['String']['output']>
  meta_title: Maybe<Scalars['String']['output']>
  /** The display name of the category. */
  name: Maybe<Scalars['String']['output']>
  /** The full category path. */
  path: Maybe<Scalars['String']['output']>
  /** The category path within the store. */
  path_in_store: Maybe<Scalars['String']['output']>
  /** The position of the category relative to other categories at the same level in tree. */
  position: Maybe<Scalars['Int']['output']>
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count: Maybe<Scalars['Int']['output']>
  /** The list of products assigned to the category. */
  products: Maybe<CategoryProducts>
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  sync_to_facebook_catalog: Maybe<Scalars['Int']['output']>
  thumbnail: Maybe<Scalars['String']['output']>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID']['output']
  /**
   * The timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>
  /** The URL key assigned to the category. */
  url_key: Maybe<Scalars['String']['output']>
  /** The URL path assigned to the category. */
  url_path: Maybe<Scalars['String']['output']>
  /** The part of the category URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>
}

/** Contains the hierarchy of categories. */
export type CategoryTreeProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<ProductAttributeSortInput>
}

/** Defines details about an individual checkout agreement. */
export type CheckoutAgreement = {
  __typename?: 'CheckoutAgreement'
  /** The ID for a checkout agreement. */
  agreement_id: Scalars['Int']['output']
  /** The checkbox text for the checkout agreement. */
  checkbox_text: Scalars['String']['output']
  /** Required. The text of the agreement. */
  content: Scalars['String']['output']
  /** The height of the text box where the Terms and Conditions statement appears during checkout. */
  content_height: Maybe<Scalars['String']['output']>
  /** Indicates whether the `content` text is in HTML format. */
  is_html: Scalars['Boolean']['output']
  /** Indicates whether agreements are accepted automatically or manually. */
  mode: CheckoutAgreementMode
  /** The name given to the condition. */
  name: Scalars['String']['output']
}

/** Indicates how agreements are accepted. */
export type CheckoutAgreementMode
  /** Conditions are automatically accepted upon checkout. */
  = | 'AUTO'
  /** Shoppers must manually accept the conditions to place an order. */
    | 'MANUAL'

/** An error encountered while adding an item to the cart. */
export type CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError'
  /** An error code that is specific to Checkout. */
  code: CheckoutUserInputErrorCodes
  /** A localized error message. */
  message: Scalars['String']['output']
  /** The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']['output']>>
}

export type CheckoutUserInputErrorCodes
  = | 'INSUFFICIENT_STOCK'
    | 'NOT_SALABLE'
    | 'PRODUCT_NOT_FOUND'
    | 'REORDER_NOT_AVAILABLE'
    | 'UNDEFINED'

/** Contains details about a specific CMS block. */
export type CmsBlock = {
  __typename?: 'CmsBlock'
  /** The content of the CMS block in raw HTML. */
  content: Maybe<Scalars['String']['output']>
  /** The CMS block identifier. */
  identifier: Maybe<Scalars['String']['output']>
  /** The title assigned to the CMS block. */
  title: Maybe<Scalars['String']['output']>
}

/** Contains an array CMS block items. */
export type CmsBlocks = {
  __typename?: 'CmsBlocks'
  /** An array of CMS blocks. */
  items: Maybe<Array<Maybe<CmsBlock>>>
}

/** Contains details about a CMS page. */
export type CmsPage = RoutableInterface & {
  __typename?: 'CmsPage'
  /** The content of the CMS page in raw HTML. */
  content: Maybe<Scalars['String']['output']>
  /** The heading that displays at the top of the CMS page. */
  content_heading: Maybe<Scalars['String']['output']>
  /** The ID of a CMS page. */
  identifier: Maybe<Scalars['String']['output']>
  /** A brief description of the page for search results listings. */
  meta_description: Maybe<Scalars['String']['output']>
  /** A brief description of the page for search results listings. */
  meta_keywords: Maybe<Scalars['String']['output']>
  /** A page title that is indexed by search engines and appears in search results listings. */
  meta_title: Maybe<Scalars['String']['output']>
  /** The design layout of the page, indicating the number of columns and navigation features used on the page. */
  page_layout: Maybe<Scalars['String']['output']>
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** The name that appears in the breadcrumb trail navigation and in the browser title bar and tab. */
  title: Maybe<Scalars['String']['output']>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
  /** The URL key of the CMS page, which is often based on the `content_heading`. */
  url_key: Maybe<Scalars['String']['output']>
}

export type ColorSwatchData = SwatchDataInterface & {
  __typename?: 'ColorSwatchData'
  /** The value can be represented as color (HEX code), image link, or text. */
  value: Maybe<Scalars['String']['output']>
}

/** Contains an attribute code that is used for product comparisons. */
export type ComparableAttribute = {
  __typename?: 'ComparableAttribute'
  /** An attribute code that is enabled for product comparisons. */
  code: Scalars['String']['output']
  /** The label of the attribute code. */
  label: Scalars['String']['output']
}

/** Defines an object used to iterate through items for product comparisons. */
export type ComparableItem = {
  __typename?: 'ComparableItem'
  /** An array of product attributes that can be used to compare products. */
  attributes: Array<Maybe<ProductAttribute>>
  /** Details about a product in a compare list. */
  product: ProductInterface
  /** The unique ID of an item in a compare list. */
  uid: Scalars['ID']['output']
}

/** Contains iterable information such as the array of items, the count, and attributes that represent the compare list. */
export type CompareList = {
  __typename?: 'CompareList'
  /** An array of attributes that can be used for comparing products. */
  attributes: Maybe<Array<Maybe<ComparableAttribute>>>
  /** The number of items in the compare list. */
  item_count: Scalars['Int']['output']
  /** An array of products to compare. */
  items: Maybe<Array<Maybe<ComparableItem>>>
  /** The unique ID assigned to the compare list. */
  uid: Scalars['ID']['output']
}

/** Update the quote and complete the order */
export type CompleteOrderInput = {
  /** The customer cart ID */
  cartId: Scalars['String']['input']
  /** PayPal order ID */
  id: Scalars['String']['input']
}

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue'
  /** Text that can contain HTML tags. */
  html: Scalars['String']['output']
}

/** Contains details about a configurable product attribute option. */
export type ConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption'
  /** The ID assigned to the attribute. */
  code: Maybe<Scalars['String']['output']>
  /** A string that describes the configurable attribute option. */
  label: Maybe<Scalars['String']['output']>
  /** The unique ID for a `ConfigurableAttributeOption` object. */
  uid: Scalars['ID']['output']
  /** A unique index number assigned to the configurable product option. */
  value_index: Maybe<Scalars['Int']['output']>
}

/** An implementation for configurable product cart items. */
export type ConfigurableCartItem = CartItemInterface & {
  __typename?: 'ConfigurableCartItem'
  /** An array containing the configuranle options the shopper selected. */
  configurable_options: Array<Maybe<SelectedConfigurableOption>>
  /** Product details of the cart item. */
  configured_variant: ProductInterface
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>
  /** The entered gift message for the cart item */
  gift_message: Maybe<GiftMessage>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output']
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output']
  /** Message to display when the product is not available with this selected option. */
  not_available_message: Maybe<Scalars['String']['output']>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>
  /** Details about an item in the cart. */
  product: ProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output']
}

/** Describes configurable options that have been selected and can be selected as a result of the previous selections. */
export type ConfigurableOptionAvailableForSelection = {
  __typename?: 'ConfigurableOptionAvailableForSelection'
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output']
  /** An array of selectable option value IDs. */
  option_value_uids: Array<Maybe<Scalars['ID']['output']>>
}

export type ConfigurableOrderItem = OrderItemInterface & {
  __typename?: 'ConfigurableOrderItem'
  /** The final discount information for the product. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The entered option for the base product, such as a logo or image. */
  entered_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The selected gift message for the order item */
  gift_message: Maybe<GiftMessage>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output']
  /** The SKU of parent product. */
  parent_sku: Maybe<Scalars['String']['output']>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<OrderItemPrices>
  /** The ProductInterface object, which contains details about the base product */
  product: Maybe<ProductInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The type of product, such as simple, configurable, etc. */
  product_type: Maybe<Scalars['String']['output']>
  /** URL key of the base product. */
  product_url_key: Maybe<Scalars['String']['output']>
  /** The number of canceled items. */
  quantity_canceled: Maybe<Scalars['Float']['output']>
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>
  /** The number of units ordered for this item. */
  quantity_ordered: Maybe<Scalars['Float']['output']>
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>
  /** The number of returned items. */
  quantity_returned: Maybe<Scalars['Float']['output']>
  /** The number of shipped items. */
  quantity_shipped: Maybe<Scalars['Float']['output']>
  /** The selected options for the base product, such as color or size. */
  selected_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The status of the order item. */
  status: Maybe<Scalars['String']['output']>
}

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'ConfigurableProduct'
  /** @deprecated Use the `custom_attributes` field instead. */
  activity: Maybe<Scalars['String']['output']>
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  climate: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  collar: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>
  /** An array of options for the configurable product. */
  configurable_options: Maybe<Array<Maybe<ConfigurableProductOptions>>>
  /** An array of media gallery items and other details about selected configurable product options as well as details about remaining selectable options. */
  configurable_product_options_selection: Maybe<ConfigurableProductOptionsSelection>
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** Product custom attributes. */
  custom_attributesV2: Maybe<ProductCustomAttributes>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  format: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  gender: Maybe<Scalars['String']['output']>
  /** Returns a value indicating gift message availability for the product. */
  gift_message_available: Scalars['Boolean']['output']
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>
  /** @deprecated Use the `custom_attributes` field instead. */
  is_seller_product: Maybe<Scalars['Int']['output']>
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  material: Maybe<Scalars['String']['output']>
  /** Maximum Qty Allowed in Shopping Cart */
  max_sale_qty: Maybe<Scalars['Float']['output']>
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>
  /** Minimum Qty Allowed in Shopping Cart */
  min_sale_qty: Maybe<Scalars['Float']['output']>
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  new: Maybe<Scalars['Int']['output']>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric: Maybe<Scalars['Int']['output']>
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>
  /** The range of prices for the product */
  price_range: PriceRange
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>
  /** Amount of available stock */
  quantity: Maybe<Scalars['Float']['output']>
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output']
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output']
  /** The list of products reviews. */
  reviews: ProductReviews
  /** @deprecated Use the `custom_attributes` field instead. */
  sale: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  seller_id: Maybe<Scalars['Int']['output']>
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  size: Maybe<Scalars['Int']['output']>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sm_featured: Maybe<Scalars['Int']['output']>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general: Maybe<Scalars['String']['output']>
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output']
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>
  /** An array of simple product variants. */
  variants: Maybe<Array<Maybe<ConfigurableVariant>>>
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>
}

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductConfigurable_Product_Options_SelectionArgs = {
  configurableOptionValueUids: InputMaybe<Array<Scalars['ID']['input']>>
}

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductCustom_AttributesV2Args = {
  filters: InputMaybe<AttributeFilterInput>
}

/** Defines basic features of a configurable product and its simple product variants. */
export type ConfigurableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

export type ConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>
  /** The quantity and SKU of the configurable product. */
  data: CartItemInput
  /** The SKU of the parent configurable product. */
  parent_sku: InputMaybe<Scalars['String']['input']>
  variant_sku: InputMaybe<Scalars['String']['input']>
}

/** Contains details about configurable product options. */
export type ConfigurableProductOption = {
  __typename?: 'ConfigurableProductOption'
  /** An attribute code that uniquely identifies a configurable option. */
  attribute_code: Scalars['String']['output']
  /** The display name of the option. */
  label: Scalars['String']['output']
  /** The unique ID of the configurable option. */
  uid: Scalars['ID']['output']
  /** An array of values that are applicable for this option. */
  values: Maybe<Array<Maybe<ConfigurableProductOptionValue>>>
}

/** Defines a value for a configurable product option. */
export type ConfigurableProductOptionValue = {
  __typename?: 'ConfigurableProductOptionValue'
  /** Indicates whether the product is available with this selected option. */
  is_available: Scalars['Boolean']['output']
  /** Indicates whether the value is the default. */
  is_use_default: Scalars['Boolean']['output']
  /** The display name of the value. */
  label: Scalars['String']['output']
  /** The URL assigned to the thumbnail of the swatch image. */
  swatch: Maybe<SwatchDataInterface>
  /** The unique ID of the value. */
  uid: Scalars['ID']['output']
}

/** Defines configurable attributes for the specified product. */
export type ConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions'
  /** A string that identifies the attribute. */
  attribute_code: Maybe<Scalars['String']['output']>
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id: Maybe<Scalars['String']['output']>
  /**
   * The ID assigned to the attribute.
   * @deprecated Use `attribute_uid` instead.
   */
  attribute_id_v2: Maybe<Scalars['Int']['output']>
  /** The unique ID for an `Attribute` object. */
  attribute_uid: Scalars['ID']['output']
  /**
   * The configurable option ID number assigned by the system.
   * @deprecated Use `uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** A displayed string that describes the configurable product option. */
  label: Maybe<Scalars['String']['output']>
  /** A number that indicates the order in which the attribute is displayed. */
  position: Maybe<Scalars['Int']['output']>
  /**
   * This is the same as a product's `id` field.
   * @deprecated `product_id` is not needed and can be obtained from its parent.
   */
  product_id: Maybe<Scalars['Int']['output']>
  /** The unique ID for a `ConfigurableProductOptions` object. */
  uid: Scalars['ID']['output']
  /** Indicates whether the option is the default. */
  use_default: Maybe<Scalars['Boolean']['output']>
  /** An array that defines the `value_index` codes assigned to the configurable product. */
  values: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>
}

/** Contains metadata corresponding to the selected configurable options. */
export type ConfigurableProductOptionsSelection = {
  __typename?: 'ConfigurableProductOptionsSelection'
  /** An array of all possible configurable options. */
  configurable_options: Maybe<Array<Maybe<ConfigurableProductOption>>>
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>
  /** The configurable options available for further selection based on the current selection. */
  options_available_for_selection: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>
  /** A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option. */
  variant: Maybe<SimpleProduct>
}

/** Contains the index number assigned to a configurable product option. */
export type ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues'
  /** The label of the product on the default store. */
  default_label: Maybe<Scalars['String']['output']>
  /** The label of the product. */
  label: Maybe<Scalars['String']['output']>
  /** The label of the product on the current store. */
  store_label: Maybe<Scalars['String']['output']>
  /** Swatch data for a configurable product option. */
  swatch_data: Maybe<SwatchDataInterface>
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  uid: Maybe<Scalars['ID']['output']>
  /** Indicates whether to use the default_label. */
  use_default_value: Maybe<Scalars['Boolean']['output']>
  /**
   * A unique index number assigned to the configurable product option.
   * @deprecated Use `uid` instead.
   */
  value_index: Maybe<Scalars['Int']['output']>
}

/** Contains all the simple product variants of a configurable product. */
export type ConfigurableVariant = {
  __typename?: 'ConfigurableVariant'
  /** An array of configurable attribute options. */
  attributes: Maybe<Array<Maybe<ConfigurableAttributeOption>>>
  /** An array of linked simple products. */
  product: Maybe<SimpleProduct>
}

/** A configurable product wish list item. */
export type ConfigurableWishlistItem = WishlistItemInterface & {
  __typename?: 'ConfigurableWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output']
  /**
   * The SKU of the simple product corresponding to a set of selected configurable options.
   * @deprecated Use `ConfigurableWishlistItem.configured_variant.sku` instead.
   */
  child_sku: Scalars['String']['output']
  /** An array of selected configurable options. */
  configurable_options: Maybe<Array<Maybe<SelectedConfigurableOption>>>
  /** Product details of the selected variant. The value is null if some options are not configured. */
  configured_variant: Maybe<ProductInterface>
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output']
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output']
}

export type ConfirmCancelOrderInput = {
  /** Confirmation Key to cancel the order. */
  confirmation_key: Scalars['String']['input']
  /** The unique ID of an `Order` type. */
  order_id: Scalars['ID']['input']
}

/** Contains details about a customer email address to confirm. */
export type ConfirmEmailInput = {
  /** The key to confirm the email address. */
  confirmation_key: Scalars['String']['input']
  /** The email address to be confirmed. */
  email: Scalars['String']['input']
}

/** List of account confirmation statuses. */
export type ConfirmationStatusEnum
  /** Account confirmation not required */
  = | 'ACCOUNT_CONFIRMATION_NOT_REQUIRED'
  /** Account confirmed */
    | 'ACCOUNT_CONFIRMED'

export type ContactUsInput = {
  /** The shopper's comment to the merchant. */
  comment: Scalars['String']['input']
  /** The email address of the shopper. */
  email: Scalars['String']['input']
  /** The full name of the shopper. */
  name: Scalars['String']['input']
  /** The shopper's telephone number. */
  telephone: InputMaybe<Scalars['String']['input']>
}

/** Contains the status of the request. */
export type ContactUsOutput = {
  __typename?: 'ContactUsOutput'
  /** Indicates whether the request was successful. */
  status: Scalars['Boolean']['output']
}

export type Country = {
  __typename?: 'Country'
  /** An array of regions within a particular country. */
  available_regions: Maybe<Array<Maybe<Region>>>
  /** The name of the country in English. */
  full_name_english: Maybe<Scalars['String']['output']>
  /** The name of the country in the current locale. */
  full_name_locale: Maybe<Scalars['String']['output']>
  /** The unique ID for a `Country` object. */
  id: Maybe<Scalars['String']['output']>
  /** The three-letter abbreviation of the country, such as USA. */
  three_letter_abbreviation: Maybe<Scalars['String']['output']>
  /** The two-letter abbreviation of the country, such as US. */
  two_letter_abbreviation: Maybe<Scalars['String']['output']>
}

/** The list of country codes. */
export type CountryCodeEnum
  /** Andorra */
  = | 'AD'
  /** United Arab Emirates */
    | 'AE'
  /** Afghanistan */
    | 'AF'
  /** Antigua & Barbuda */
    | 'AG'
  /** Anguilla */
    | 'AI'
  /** Albania */
    | 'AL'
  /** Armenia */
    | 'AM'
  /** Netherlands Antilles */
    | 'AN'
  /** Angola */
    | 'AO'
  /** Antarctica */
    | 'AQ'
  /** Argentina */
    | 'AR'
  /** American Samoa */
    | 'AS'
  /** Austria */
    | 'AT'
  /** Australia */
    | 'AU'
  /** Aruba */
    | 'AW'
  /** Åland Islands */
    | 'AX'
  /** Azerbaijan */
    | 'AZ'
  /** Bosnia & Herzegovina */
    | 'BA'
  /** Barbados */
    | 'BB'
  /** Bangladesh */
    | 'BD'
  /** Belgium */
    | 'BE'
  /** Burkina Faso */
    | 'BF'
  /** Bulgaria */
    | 'BG'
  /** Bahrain */
    | 'BH'
  /** Burundi */
    | 'BI'
  /** Benin */
    | 'BJ'
  /** St. Barthélemy */
    | 'BL'
  /** Bermuda */
    | 'BM'
  /** Brunei */
    | 'BN'
  /** Bolivia */
    | 'BO'
  /** Brazil */
    | 'BR'
  /** Bahamas */
    | 'BS'
  /** Bhutan */
    | 'BT'
  /** Bouvet Island */
    | 'BV'
  /** Botswana */
    | 'BW'
  /** Belarus */
    | 'BY'
  /** Belize */
    | 'BZ'
  /** Canada */
    | 'CA'
  /** Cocos (Keeling) Islands */
    | 'CC'
  /** Congo-Kinshasa */
    | 'CD'
  /** Central African Republic */
    | 'CF'
  /** Congo-Brazzaville */
    | 'CG'
  /** Switzerland */
    | 'CH'
  /** Côte d’Ivoire */
    | 'CI'
  /** Cook Islands */
    | 'CK'
  /** Chile */
    | 'CL'
  /** Cameroon */
    | 'CM'
  /** China */
    | 'CN'
  /** Colombia */
    | 'CO'
  /** Costa Rica */
    | 'CR'
  /** Cuba */
    | 'CU'
  /** Cape Verde */
    | 'CV'
  /** Christmas Island */
    | 'CX'
  /** Cyprus */
    | 'CY'
  /** Czech Republic */
    | 'CZ'
  /** Germany */
    | 'DE'
  /** Djibouti */
    | 'DJ'
  /** Denmark */
    | 'DK'
  /** Dominica */
    | 'DM'
  /** Dominican Republic */
    | 'DO'
  /** Algeria */
    | 'DZ'
  /** Ecuador */
    | 'EC'
  /** Estonia */
    | 'EE'
  /** Egypt */
    | 'EG'
  /** Western Sahara */
    | 'EH'
  /** Eritrea */
    | 'ER'
  /** Spain */
    | 'ES'
  /** Ethiopia */
    | 'ET'
  /** Finland */
    | 'FI'
  /** Fiji */
    | 'FJ'
  /** Falkland Islands */
    | 'FK'
  /** Micronesia */
    | 'FM'
  /** Faroe Islands */
    | 'FO'
  /** France */
    | 'FR'
  /** Gabon */
    | 'GA'
  /** United Kingdom */
    | 'GB'
  /** Grenada */
    | 'GD'
  /** Georgia */
    | 'GE'
  /** French Guiana */
    | 'GF'
  /** Guernsey */
    | 'GG'
  /** Ghana */
    | 'GH'
  /** Gibraltar */
    | 'GI'
  /** Greenland */
    | 'GL'
  /** Gambia */
    | 'GM'
  /** Guinea */
    | 'GN'
  /** Guadeloupe */
    | 'GP'
  /** Equatorial Guinea */
    | 'GQ'
  /** Greece */
    | 'GR'
  /** South Georgia & South Sandwich Islands */
    | 'GS'
  /** Guatemala */
    | 'GT'
  /** Guam */
    | 'GU'
  /** Guinea-Bissau */
    | 'GW'
  /** Guyana */
    | 'GY'
  /** Hong Kong SAR China */
    | 'HK'
  /** Heard &amp; McDonald Islands */
    | 'HM'
  /** Honduras */
    | 'HN'
  /** Croatia */
    | 'HR'
  /** Haiti */
    | 'HT'
  /** Hungary */
    | 'HU'
  /** Indonesia */
    | 'ID'
  /** Ireland */
    | 'IE'
  /** Israel */
    | 'IL'
  /** Isle of Man */
    | 'IM'
  /** India */
    | 'IN'
  /** British Indian Ocean Territory */
    | 'IO'
  /** Iraq */
    | 'IQ'
  /** Iran */
    | 'IR'
  /** Iceland */
    | 'IS'
  /** Italy */
    | 'IT'
  /** Jersey */
    | 'JE'
  /** Jamaica */
    | 'JM'
  /** Jordan */
    | 'JO'
  /** Japan */
    | 'JP'
  /** Kenya */
    | 'KE'
  /** Kyrgyzstan */
    | 'KG'
  /** Cambodia */
    | 'KH'
  /** Kiribati */
    | 'KI'
  /** Comoros */
    | 'KM'
  /** St. Kitts & Nevis */
    | 'KN'
  /** North Korea */
    | 'KP'
  /** South Korea */
    | 'KR'
  /** Kuwait */
    | 'KW'
  /** Cayman Islands */
    | 'KY'
  /** Kazakhstan */
    | 'KZ'
  /** Laos */
    | 'LA'
  /** Lebanon */
    | 'LB'
  /** St. Lucia */
    | 'LC'
  /** Liechtenstein */
    | 'LI'
  /** Sri Lanka */
    | 'LK'
  /** Liberia */
    | 'LR'
  /** Lesotho */
    | 'LS'
  /** Lithuania */
    | 'LT'
  /** Luxembourg */
    | 'LU'
  /** Latvia */
    | 'LV'
  /** Libya */
    | 'LY'
  /** Morocco */
    | 'MA'
  /** Monaco */
    | 'MC'
  /** Moldova */
    | 'MD'
  /** Montenegro */
    | 'ME'
  /** St. Martin */
    | 'MF'
  /** Madagascar */
    | 'MG'
  /** Marshall Islands */
    | 'MH'
  /** Macedonia */
    | 'MK'
  /** Mali */
    | 'ML'
  /** Myanmar (Burma) */
    | 'MM'
  /** Mongolia */
    | 'MN'
  /** Macau SAR China */
    | 'MO'
  /** Northern Mariana Islands */
    | 'MP'
  /** Martinique */
    | 'MQ'
  /** Mauritania */
    | 'MR'
  /** Montserrat */
    | 'MS'
  /** Malta */
    | 'MT'
  /** Mauritius */
    | 'MU'
  /** Maldives */
    | 'MV'
  /** Malawi */
    | 'MW'
  /** Mexico */
    | 'MX'
  /** Malaysia */
    | 'MY'
  /** Mozambique */
    | 'MZ'
  /** Namibia */
    | 'NA'
  /** New Caledonia */
    | 'NC'
  /** Niger */
    | 'NE'
  /** Norfolk Island */
    | 'NF'
  /** Nigeria */
    | 'NG'
  /** Nicaragua */
    | 'NI'
  /** Netherlands */
    | 'NL'
  /** Norway */
    | 'NO'
  /** Nepal */
    | 'NP'
  /** Nauru */
    | 'NR'
  /** Niue */
    | 'NU'
  /** New Zealand */
    | 'NZ'
  /** Oman */
    | 'OM'
  /** Panama */
    | 'PA'
  /** Peru */
    | 'PE'
  /** French Polynesia */
    | 'PF'
  /** Papua New Guinea */
    | 'PG'
  /** Philippines */
    | 'PH'
  /** Pakistan */
    | 'PK'
  /** Poland */
    | 'PL'
  /** St. Pierre & Miquelon */
    | 'PM'
  /** Pitcairn Islands */
    | 'PN'
  /** Palestinian Territories */
    | 'PS'
  /** Portugal */
    | 'PT'
  /** Palau */
    | 'PW'
  /** Paraguay */
    | 'PY'
  /** Qatar */
    | 'QA'
  /** Réunion */
    | 'RE'
  /** Romania */
    | 'RO'
  /** Serbia */
    | 'RS'
  /** Russia */
    | 'RU'
  /** Rwanda */
    | 'RW'
  /** Saudi Arabia */
    | 'SA'
  /** Solomon Islands */
    | 'SB'
  /** Seychelles */
    | 'SC'
  /** Sudan */
    | 'SD'
  /** Sweden */
    | 'SE'
  /** Singapore */
    | 'SG'
  /** St. Helena */
    | 'SH'
  /** Slovenia */
    | 'SI'
  /** Svalbard & Jan Mayen */
    | 'SJ'
  /** Slovakia */
    | 'SK'
  /** Sierra Leone */
    | 'SL'
  /** San Marino */
    | 'SM'
  /** Senegal */
    | 'SN'
  /** Somalia */
    | 'SO'
  /** Suriname */
    | 'SR'
  /** São Tomé & Príncipe */
    | 'ST'
  /** El Salvador */
    | 'SV'
  /** Syria */
    | 'SY'
  /** Eswatini */
    | 'SZ'
  /** Turks & Caicos Islands */
    | 'TC'
  /** Chad */
    | 'TD'
  /** French Southern Territories */
    | 'TF'
  /** Togo */
    | 'TG'
  /** Thailand */
    | 'TH'
  /** Tajikistan */
    | 'TJ'
  /** Tokelau */
    | 'TK'
  /** Timor-Leste */
    | 'TL'
  /** Turkmenistan */
    | 'TM'
  /** Tunisia */
    | 'TN'
  /** Tonga */
    | 'TO'
  /** Turkey */
    | 'TR'
  /** Trinidad & Tobago */
    | 'TT'
  /** Tuvalu */
    | 'TV'
  /** Taiwan */
    | 'TW'
  /** Tanzania */
    | 'TZ'
  /** Ukraine */
    | 'UA'
  /** Uganda */
    | 'UG'
  /** U.S. Outlying Islands */
    | 'UM'
  /** United States */
    | 'US'
  /** Uruguay */
    | 'UY'
  /** Uzbekistan */
    | 'UZ'
  /** Vatican City */
    | 'VA'
  /** St. Vincent & Grenadines */
    | 'VC'
  /** Venezuela */
    | 'VE'
  /** British Virgin Islands */
    | 'VG'
  /** U.S. Virgin Islands */
    | 'VI'
  /** Vietnam */
    | 'VN'
  /** Vanuatu */
    | 'VU'
  /** Wallis & Futuna */
    | 'WF'
  /** Samoa */
    | 'WS'
  /** Yemen */
    | 'YE'
  /** Mayotte */
    | 'YT'
  /** South Africa */
    | 'ZA'
  /** Zambia */
    | 'ZM'
  /** Zimbabwe */
    | 'ZW'

/** Contains an array of product IDs to use for creating a compare list. */
export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type CreateGuestCartInput = {
  /** Optional client-generated ID */
  cart_uid: InputMaybe<Scalars['ID']['input']>
}

export type CreateGuestCartOutput = {
  __typename?: 'CreateGuestCartOutput'
  /** The newly created cart. */
  cart: Maybe<Cart>
}

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput'
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output']
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output']
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output']
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output']
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output']
}

/** Contains payment order details that are used while processing the payment order */
export type CreatePaymentOrderInput = {
  /** The customer cart ID */
  cartId: Scalars['String']['input']
  /** Defines the origin location for that payment request */
  location: PaymentLocation
  /** The code for the payment method used in the order */
  methodCode: Scalars['String']['input']
  /** The identifiable payment source for the payment method */
  paymentSource: Scalars['String']['input']
  /** Indicates whether the payment information should be vaulted */
  vaultIntent: InputMaybe<Scalars['Boolean']['input']>
}

/** Contains payment order details that are used while processing the payment order */
export type CreatePaymentOrderOutput = {
  __typename?: 'CreatePaymentOrderOutput'
  /** The amount of the payment order */
  amount: Maybe<Scalars['Float']['output']>
  /** The currency of the payment order */
  currency_code: Maybe<Scalars['String']['output']>
  /** PayPal order ID */
  id: Maybe<Scalars['String']['output']>
  /** The order ID generated by Payment Services */
  mp_order_id: Maybe<Scalars['String']['output']>
  /** The status of the payment order */
  status: Maybe<Scalars['String']['output']>
}

/** Defines a new product review. */
export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['input']
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>
  /** The SKU of the reviewed product. */
  sku: Scalars['String']['input']
  /** The summary (title) of the review. */
  summary: Scalars['String']['input']
  /** The review text. */
  text: Scalars['String']['input']
}

/** Contains the completed product review. */
export type CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput'
  /** Product review details. */
  review: ProductReview
}

/** Describe the variables needed to create a vault payment token */
export type CreateVaultCardPaymentTokenInput = {
  /** Description of the vaulted card */
  card_description: InputMaybe<Scalars['String']['input']>
  /** The setup token obtained by the createVaultCardSetupToken endpoint */
  setup_token_id: Scalars['String']['input']
}

/** The vault token id and information about the payment source */
export type CreateVaultCardPaymentTokenOutput = {
  __typename?: 'CreateVaultCardPaymentTokenOutput'
  /** The payment source information */
  payment_source: PaymentSourceOutput
  /** The vault payment token information */
  vault_token_id: Scalars['String']['output']
}

/** Describe the variables needed to create a vault card setup token */
export type CreateVaultCardSetupTokenInput = {
  /** The setup token information */
  setup_token: VaultSetupTokenInput
  /** The 3DS mode */
  three_ds_mode: InputMaybe<ThreeDsMode>
}

/** The setup token id information */
export type CreateVaultCardSetupTokenOutput = {
  __typename?: 'CreateVaultCardSetupTokenOutput'
  /** The setup token id */
  setup_token: Scalars['String']['output']
}

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type CreditCardDetailsInput = {
  /** The credit card expiration month. */
  cc_exp_month: Scalars['Int']['input']
  /** The credit card expiration year. */
  cc_exp_year: Scalars['Int']['input']
  /** The last 4 digits of the credit card. */
  cc_last_4: Scalars['Int']['input']
  /** The credit card type. */
  cc_type: Scalars['String']['input']
}

/** Contains credit memo details. */
export type CreditMemo = {
  __typename?: 'CreditMemo'
  /** Comments on the credit memo. */
  comments: Maybe<Array<Maybe<SalesCommentItem>>>
  /** The unique ID for a `CreditMemo` object. */
  id: Scalars['ID']['output']
  /** An array containing details about refunded items. */
  items: Maybe<Array<Maybe<CreditMemoItemInterface>>>
  /** The sequential credit memo number. */
  number: Scalars['String']['output']
  /** Details about the total refunded amount. */
  total: Maybe<CreditMemoTotal>
}

export type CreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem'
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output']
  /** The order item the credit memo is applied to. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>
}

/** Credit memo item details. */
export type CreditMemoItemInterface = {
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output']
  /** The order item the credit memo is applied to. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>
}

/** Contains credit memo price details. */
export type CreditMemoTotal = {
  __typename?: 'CreditMemoTotal'
  /** An adjustment manually applied to the order. */
  adjustment: Money
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money
  /** The applied discounts to the credit memo. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money
  /** Details about the shipping and handling costs for the credit memo. */
  shipping_handling: Maybe<ShippingHandling>
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money
  /** The credit memo tax details. */
  taxes: Maybe<Array<Maybe<TaxItem>>>
  /** The shipping amount for the credit memo. */
  total_shipping: Money
  /** The amount of tax applied to the credit memo. */
  total_tax: Money
}

export type Currency = {
  __typename?: 'Currency'
  /** An array of three-letter currency codes accepted by the store, such as USD and EUR. */
  available_currency_codes: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** The base currency set for the store, such as USD. */
  base_currency_code: Maybe<Scalars['String']['output']>
  /** The symbol for the specified base currency, such as $. */
  base_currency_symbol: Maybe<Scalars['String']['output']>
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code: Maybe<Scalars['String']['output']>
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_symbol: Maybe<Scalars['String']['output']>
  /** The currency that is displayed by default, such as USD. */
  default_display_currency_code: Maybe<Scalars['String']['output']>
  /** The currency symbol that is displayed by default, such as $. */
  default_display_currency_symbol: Maybe<Scalars['String']['output']>
  /** An array of exchange rates for currencies defined in the store. */
  exchange_rates: Maybe<Array<Maybe<ExchangeRate>>>
}

/** The list of available currency codes. */
export type CurrencyEnum
  = | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZM'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BUK'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHE'
    | 'CHF'
    | 'CHW'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EEK'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEK'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GQE'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LSM'
    | 'LTL'
    | 'LVL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIC'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RHD'
    | 'ROL'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SKK'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'STD'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMM'
    | 'TND'
    | 'TOP'
    | 'TRL'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEB'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'YTL'
    | 'ZAR'
    | 'ZMK'
    | 'ZWD'

/** Defines an array of custom attributes. */
export type CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata'
  /** An array of attributes. */
  items: Maybe<Array<Maybe<Attribute>>>
}

/** An interface containing fields that define the EAV attribute. */
export type CustomAttributeMetadataInterface = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output']
  /** Default attribute value. */
  default_value: Maybe<Scalars['String']['output']>
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum
  /** The frontend class of the attribute. */
  frontend_class: Maybe<Scalars['String']['output']>
  /** The frontend input type of the attribute. */
  frontend_input: Maybe<AttributeFrontendInputEnum>
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output']
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output']
  /** The label assigned to the attribute. */
  label: Maybe<Scalars['String']['output']>
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>
}

export type CustomAttributeOptionInterface = {
  /** Is the option value default. */
  is_default: Scalars['Boolean']['output']
  /** The label assigned to the attribute option. */
  label: Scalars['String']['output']
  /** The attribute option value. */
  value: Scalars['String']['output']
}

/** Defines the customer name, addresses, and other details. */
export type Customer = {
  __typename?: 'Customer'
  /** An array containing the customer's shipping and billing addresses. */
  addresses: Maybe<Array<Maybe<CustomerAddress>>>
  /** An array containing the customer's shipping and billing addresses. */
  addressesV2: Maybe<CustomerAddresses>
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: Scalars['Boolean']['output']
  /** The contents of the customer's compare list. */
  compare_list: Maybe<CompareList>
  /** The customer's confirmation status. */
  confirmation_status: ConfirmationStatusEnum
  /** Timestamp indicating when the account was created. */
  created_at: Maybe<Scalars['String']['output']>
  /** Customer's custom attributes. */
  custom_attributes: Maybe<Array<Maybe<AttributeValueInterface>>>
  /** The customer's date of birth. */
  date_of_birth: Maybe<Scalars['String']['output']>
  /** The ID assigned to the billing address. */
  default_billing: Maybe<Scalars['String']['output']>
  /** The ID assigned to the shipping address. */
  default_shipping: Maybe<Scalars['String']['output']>
  /**
   * The customer's date of birth.
   * @deprecated Use `date_of_birth` instead.
   */
  dob: Maybe<Scalars['String']['output']>
  /** The customer's email address. Required. */
  email: Maybe<Scalars['String']['output']>
  /** The customer's first name. */
  firstname: Maybe<Scalars['String']['output']>
  /** The customer's gender (Male - 1, Female - 2). */
  gender: Maybe<Scalars['Int']['output']>
  /** @deprecated Customer group should not be exposed in the storefront scenarios. */
  group_id: Maybe<Scalars['Int']['output']>
  /**
   * The ID assigned to the customer.
   * @deprecated `id` is not needed as part of `Customer`, because on the server side, it can be identified based on the customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id: Maybe<Scalars['Int']['output']>
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed: Maybe<Scalars['Boolean']['output']>
  /** The customer's family name. */
  lastname: Maybe<Scalars['String']['output']>
  /** The customer's middle name. */
  middlename: Maybe<Scalars['String']['output']>
  orders: Maybe<CustomerOrders>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: Maybe<Scalars['String']['output']>
  /** Contains the customer's product reviews. */
  reviews: ProductReviews
  /** A value such as Sr., Jr., or III. */
  suffix: Maybe<Scalars['String']['output']>
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  taxvat: Maybe<Scalars['String']['output']>
  /**
   * Return a customer's wish lists.
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2` instead.
   */
  wishlist: Wishlist
  /** Retrieve the wish list identified by the unique ID for a `Wishlist` object. */
  wishlist_v2: Maybe<Wishlist>
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Adobe Commerce. */
  wishlists: Array<Maybe<Wishlist>>
}

/** Defines the customer name, addresses, and other details. */
export type CustomerAddressesV2Args = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** Defines the customer name, addresses, and other details. */
export type CustomerCustom_AttributesArgs = {
  attributeCodes: InputMaybe<Array<Scalars['ID']['input']>>
}

/** Defines the customer name, addresses, and other details. */
export type CustomerOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  filter: InputMaybe<CustomerOrdersFilterInput>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  scope: InputMaybe<ScopeTypeEnum>
  sort: InputMaybe<CustomerOrderSortInput>
}

/** Defines the customer name, addresses, and other details. */
export type CustomerReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** Defines the customer name, addresses, and other details. */
export type CustomerWishlist_V2Args = {
  id: Scalars['ID']['input']
}

/** Defines the customer name, addresses, and other details. */
export type CustomerWishlistsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** Contains detailed information about a customer's billing or shipping address. */
export type CustomerAddress = {
  __typename?: 'CustomerAddress'
  /** The customer's city or town. */
  city: Maybe<Scalars['String']['output']>
  /** The customer's company. */
  company: Maybe<Scalars['String']['output']>
  /** The customer's country. */
  country_code: Maybe<CountryCodeEnum>
  /**
   * The customer's country.
   * @deprecated Use `country_code` instead.
   */
  country_id: Maybe<Scalars['String']['output']>
  /** @deprecated Use custom_attributesV2 instead. */
  custom_attributes: Maybe<Array<Maybe<CustomerAddressAttribute>>>
  /** Custom attributes assigned to the customer address. */
  custom_attributesV2: Array<Maybe<AttributeValueInterface>>
  /**
   * The customer ID
   * @deprecated `customer_id` is not needed as part of `CustomerAddress`. The `id` is a unique identifier for the addresses.
   */
  customer_id: Maybe<Scalars['Int']['output']>
  /** Indicates whether the address is the customer's default billing address. */
  default_billing: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the address is the customer's default shipping address. */
  default_shipping: Maybe<Scalars['Boolean']['output']>
  /** Contains any extension attributes for the address. */
  extension_attributes: Maybe<Array<Maybe<CustomerAddressAttribute>>>
  /** The customer's fax number. */
  fax: Maybe<Scalars['String']['output']>
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Maybe<Scalars['String']['output']>
  /** The ID of a `CustomerAddress` object. */
  id: Maybe<Scalars['Int']['output']>
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Maybe<Scalars['String']['output']>
  /** The middle name of the person associated with the shipping/billing address. */
  middlename: Maybe<Scalars['String']['output']>
  /** The customer's ZIP or postal code. */
  postcode: Maybe<Scalars['String']['output']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: Maybe<Scalars['String']['output']>
  /** An object containing the region name, region code, and region ID. */
  region: Maybe<CustomerAddressRegion>
  /** The unique ID for a pre-defined region. */
  region_id: Maybe<Scalars['Int']['output']>
  /** An array of strings that define the street number and name. */
  street: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** A value such as Sr., Jr., or III. */
  suffix: Maybe<Scalars['String']['output']>
  /** The customer's telephone number. */
  telephone: Maybe<Scalars['String']['output']>
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id: Maybe<Scalars['String']['output']>
}

/** Contains detailed information about a customer's billing or shipping address. */
export type CustomerAddressCustom_AttributesV2Args = {
  attributeCodes: InputMaybe<Array<Scalars['ID']['input']>>
}

/** Specifies the attribute code and value of a customer address attribute. */
export type CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute'
  /** The name assigned to the customer address attribute. */
  attribute_code: Maybe<Scalars['String']['output']>
  /** The value assigned to the customer address attribute. */
  value: Maybe<Scalars['String']['output']>
}

/** Specifies the attribute code and value of a customer attribute. */
export type CustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars['String']['input']
  /** The value assigned to the attribute. */
  value: Scalars['String']['input']
}

/** Contains details about a billing or shipping address. */
export type CustomerAddressInput = {
  /** The customer's city or town. */
  city: InputMaybe<Scalars['String']['input']>
  /** The customer's company. */
  company: InputMaybe<Scalars['String']['input']>
  /** The two-letter code representing the customer's country. */
  country_code: InputMaybe<CountryCodeEnum>
  country_id: InputMaybe<CountryCodeEnum>
  custom_attributes: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>
  /** Custom attributes assigned to the customer address. */
  custom_attributesV2: InputMaybe<Array<InputMaybe<AttributeValueInput>>>
  /** Indicates whether the address is the default billing address. */
  default_billing: InputMaybe<Scalars['Boolean']['input']>
  /** Indicates whether the address is the default shipping address. */
  default_shipping: InputMaybe<Scalars['Boolean']['input']>
  /** The customer's fax number. */
  fax: InputMaybe<Scalars['String']['input']>
  /** The first name of the person associated with the billing/shipping address. */
  firstname: InputMaybe<Scalars['String']['input']>
  /** The family name of the person associated with the billing/shipping address. */
  lastname: InputMaybe<Scalars['String']['input']>
  /** The middle name of the person associated with the billing/shipping address. */
  middlename: InputMaybe<Scalars['String']['input']>
  /** The customer's ZIP or postal code. */
  postcode: InputMaybe<Scalars['String']['input']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: InputMaybe<Scalars['String']['input']>
  /** An object containing the region name, region code, and region ID. */
  region: InputMaybe<CustomerAddressRegionInput>
  /** An array of strings that define the street number and name. */
  street: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** A value such as Sr., Jr., or III. */
  suffix: InputMaybe<Scalars['String']['input']>
  /** The customer's telephone number. */
  telephone: InputMaybe<Scalars['String']['input']>
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id: InputMaybe<Scalars['String']['input']>
}

/** Defines the customer's state or province. */
export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion'
  /** The state or province name. */
  region: Maybe<Scalars['String']['output']>
  /** The address region code. */
  region_code: Maybe<Scalars['String']['output']>
  /** The unique ID for a pre-defined region. */
  region_id: Maybe<Scalars['Int']['output']>
}

/** Defines the customer's state or province. */
export type CustomerAddressRegionInput = {
  /** The state or province name. */
  region: InputMaybe<Scalars['String']['input']>
  /** The address region code. */
  region_code: InputMaybe<Scalars['String']['input']>
  /** The unique ID for a pre-defined region. */
  region_id: InputMaybe<Scalars['Int']['input']>
}

export type CustomerAddresses = {
  __typename?: 'CustomerAddresses'
  /** An array containing the customer's shipping and billing addresses. */
  items: Maybe<Array<Maybe<CustomerAddress>>>
  /** Contains pagination metadata. */
  page_info: Maybe<SearchResultPageInfo>
  /** The total count of customer addresses. */
  total_count: Maybe<Scalars['Int']['output']>
}

/** Customer attribute metadata. */
export type CustomerAttributeMetadata = CustomAttributeMetadataInterface & {
  __typename?: 'CustomerAttributeMetadata'
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  code: Scalars['ID']['output']
  /** Default attribute value. */
  default_value: Maybe<Scalars['String']['output']>
  /** The type of entity that defines the attribute. */
  entity_type: AttributeEntityTypeEnum
  /** The frontend class of the attribute. */
  frontend_class: Maybe<Scalars['String']['output']>
  /** The frontend input type of the attribute. */
  frontend_input: Maybe<AttributeFrontendInputEnum>
  /** The template used for the input of the attribute (e.g., 'date'). */
  input_filter: Maybe<InputFilterEnum>
  /** Whether the attribute value is required. */
  is_required: Scalars['Boolean']['output']
  /** Whether the attribute value must be unique. */
  is_unique: Scalars['Boolean']['output']
  /** The label assigned to the attribute. */
  label: Maybe<Scalars['String']['output']>
  /** The number of lines of the attribute value. */
  multiline_count: Maybe<Scalars['Int']['output']>
  /** Attribute options. */
  options: Array<Maybe<CustomAttributeOptionInterface>>
  /** The position of the attribute in the form. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The validation rules of the attribute value. */
  validate_rules: Maybe<Array<Maybe<ValidationRule>>>
}

/** An input object for creating a customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: InputMaybe<Scalars['Boolean']['input']>
  /** The customer's custom attributes. */
  custom_attributes: InputMaybe<Array<InputMaybe<AttributeValueInput>>>
  /** The customer's date of birth. */
  date_of_birth: InputMaybe<Scalars['String']['input']>
  dob: InputMaybe<Scalars['String']['input']>
  /** The customer's email address. */
  email: Scalars['String']['input']
  /** The customer's first name. */
  firstname: Scalars['String']['input']
  /** The customer's gender (Male - 1, Female - 2). */
  gender: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed: InputMaybe<Scalars['Boolean']['input']>
  /** The customer's family name. */
  lastname: Scalars['String']['input']
  /** The customer's middle name. */
  middlename: InputMaybe<Scalars['String']['input']>
  /** The customer's password. */
  password: InputMaybe<Scalars['String']['input']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: InputMaybe<Scalars['String']['input']>
  /** A value such as Sr., Jr., or III. */
  suffix: InputMaybe<Scalars['String']['input']>
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat: InputMaybe<Scalars['String']['input']>
}

/** Contains details about a single downloadable product. */
export type CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct'
  /** The date and time the purchase was made. */
  date: Maybe<Scalars['String']['output']>
  /** The fully qualified URL to the download file. */
  download_url: Maybe<Scalars['String']['output']>
  /** The unique ID assigned to the item. */
  order_increment_id: Maybe<Scalars['String']['output']>
  /** The remaining number of times the customer can download the product. */
  remaining_downloads: Maybe<Scalars['String']['output']>
  /** Indicates when the product becomes available for download. Options are `Pending` and `Invoiced`. */
  status: Maybe<Scalars['String']['output']>
}

/** Contains a list of downloadable products. */
export type CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts'
  /** An array of purchased downloadable items. */
  items: Maybe<Array<Maybe<CustomerDownloadableProduct>>>
}

/** An input object that assigns or updates customer attributes. */
export type CustomerInput = {
  /** The customer's date of birth. */
  date_of_birth: InputMaybe<Scalars['String']['input']>
  dob: InputMaybe<Scalars['String']['input']>
  /** The customer's email address. Required when creating a customer. */
  email: InputMaybe<Scalars['String']['input']>
  /** The customer's first name. */
  firstname: InputMaybe<Scalars['String']['input']>
  /** The customer's gender (Male - 1, Female - 2). */
  gender: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed: InputMaybe<Scalars['Boolean']['input']>
  /** The customer's family name. */
  lastname: InputMaybe<Scalars['String']['input']>
  /** The customer's middle name. */
  middlename: InputMaybe<Scalars['String']['input']>
  /** The customer's password. */
  password: InputMaybe<Scalars['String']['input']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: InputMaybe<Scalars['String']['input']>
  /** A value such as Sr., Jr., or III. */
  suffix: InputMaybe<Scalars['String']['input']>
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat: InputMaybe<Scalars['String']['input']>
}

/** Contains details about each of the customer's orders. */
export type CustomerOrder = {
  __typename?: 'CustomerOrder'
  /** Coupons applied to the order. */
  applied_coupons: Array<Maybe<AppliedCoupon>>
  /** List of available order actions. */
  available_actions: Array<Maybe<OrderActionType>>
  /** The billing address for the order. */
  billing_address: Maybe<OrderAddress>
  /** The shipping carrier for the order delivery. */
  carrier: Maybe<Scalars['String']['output']>
  /** Comments about the order. */
  comments: Maybe<Array<Maybe<SalesCommentItem>>>
  /** @deprecated Use the `order_date` field instead. */
  created_at: Maybe<Scalars['String']['output']>
  /** A list of credit memos. */
  credit_memos: Maybe<Array<Maybe<CreditMemo>>>
  /** Returns customer information from order. */
  customer_info: OrderCustomerInfo
  /** Order customer email. */
  email: Maybe<Scalars['String']['output']>
  /** The entered gift message for the order */
  gift_message: Maybe<GiftMessage>
  /** @deprecated Use the `totals.grand_total` field instead. */
  grand_total: Maybe<Scalars['Float']['output']>
  /** The unique ID for a `CustomerOrder` object. */
  id: Scalars['ID']['output']
  /** @deprecated Use the `id` field instead. */
  increment_id: Maybe<Scalars['String']['output']>
  /** A list of invoices for the order. */
  invoices: Array<Maybe<Invoice>>
  /** `TRUE` if the order is virtual */
  is_virtual: Scalars['Boolean']['output']
  /** An array containing the items purchased in this order. */
  items: Maybe<Array<Maybe<OrderItemInterface>>>
  /** The order number. */
  number: Scalars['String']['output']
  /** The date the order was placed. */
  order_date: Scalars['String']['output']
  /** @deprecated Use the `number` field instead. */
  order_number: Scalars['String']['output']
  /** The date the order status was last updated. */
  order_status_change_date: Scalars['String']['output']
  /** Payment details for the order. */
  payment_methods: Maybe<Array<Maybe<OrderPaymentMethod>>>
  /** A list of shipments for the order. */
  shipments: Maybe<Array<Maybe<OrderShipment>>>
  /** The shipping address for the order. */
  shipping_address: Maybe<OrderAddress>
  /** The delivery method for the order. */
  shipping_method: Maybe<Scalars['String']['output']>
  /** The current status of the order. */
  status: Scalars['String']['output']
  /** The token that can be used to retrieve the order using order query. */
  token: Scalars['String']['output']
  /** Details about the calculated totals for this order. */
  total: Maybe<OrderTotal>
}

/** CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type CustomerOrderSortInput = {
  /** This enumeration indicates whether to return results in ascending or descending order */
  sort_direction: SortEnum
  /** Specifies the field to use for sorting */
  sort_field: CustomerOrderSortableField
}

/** Specifies the field to use for sorting */
export type CustomerOrderSortableField
  /** Sorts customer orders by created_at field */
  = | 'CREATED_AT'
  /** Sorts customer orders by number */
    | 'NUMBER'

/** The collection of orders that match the conditions defined in the filter. */
export type CustomerOrders = {
  __typename?: 'CustomerOrders'
  /** Date of the first order placed in the store */
  date_of_first_order: Maybe<Scalars['String']['output']>
  /** An array of customer orders. */
  items: Array<Maybe<CustomerOrder>>
  /** Contains pagination metadata. */
  page_info: Maybe<SearchResultPageInfo>
  /** The total count of customer orders. */
  total_count: Maybe<Scalars['Int']['output']>
}

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order base grand total value. */
  grand_total: InputMaybe<FilterRangeTypeInput>
  /** Filters by order number. */
  number: InputMaybe<FilterStringTypeInput>
  /** Filters by order created_at time. */
  order_date: InputMaybe<FilterRangeTypeInput>
  /** Filters by order status. */
  status: InputMaybe<FilterEqualTypeInput>
}

/** Contains details about a newly-created or updated customer. */
export type CustomerOutput = {
  __typename?: 'CustomerOutput'
  /** Customer details after creating or updating a customer. */
  customer: Customer
}

/** Contains payment tokens stored in the customer's vault. */
export type CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens'
  /** An array of payment tokens. */
  items: Array<Maybe<PaymentToken>>
}

/** Contains a customer authorization token. */
export type CustomerToken = {
  __typename?: 'CustomerToken'
  /** The customer authorization token. */
  token: Maybe<Scalars['String']['output']>
}

/** An input object for updating a customer. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance: InputMaybe<Scalars['Boolean']['input']>
  /** The customer's custom attributes. */
  custom_attributes: InputMaybe<Array<InputMaybe<AttributeValueInput>>>
  /** The customer's date of birth. */
  date_of_birth: InputMaybe<Scalars['String']['input']>
  dob: InputMaybe<Scalars['String']['input']>
  /** The customer's first name. */
  firstname: InputMaybe<Scalars['String']['input']>
  /** The customer's gender (Male - 1, Female - 2). */
  gender: InputMaybe<Scalars['Int']['input']>
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed: InputMaybe<Scalars['Boolean']['input']>
  /** The customer's family name. */
  lastname: InputMaybe<Scalars['String']['input']>
  /** The customer's middle name. */
  middlename: InputMaybe<Scalars['String']['input']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: InputMaybe<Scalars['String']['input']>
  /** A value such as Sr., Jr., or III. */
  suffix: InputMaybe<Scalars['String']['input']>
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat: InputMaybe<Scalars['String']['input']>
}

/** Contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** The Stock Keeping Unit of the base product. */
  product_sku: Maybe<Scalars['String']['output']>
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output']
  /** An object that defines a text area. */
  value: Maybe<CustomizableAreaValue>
}

/** Defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue'
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters: Maybe<Scalars['Int']['output']>
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID']['output']
}

/** Contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output']
  /** An array that defines a set of checkbox values. */
  value: Maybe<Array<Maybe<CustomizableCheckboxValue>>>
}

/** Defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue'
  /** The ID assigned to the value. */
  option_type_id: Maybe<Scalars['Int']['output']>
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>
  /** The order in which the checkbox value is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID']['output']
}

/** Contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** The Stock Keeping Unit of the base product. */
  product_sku: Maybe<Scalars['String']['output']>
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output']
  /** An object that defines a date field in a customizable option. */
  value: Maybe<CustomizableDateValue>
}

/** Defines the customizable date type. */
export type CustomizableDateTypeEnum
  = | 'DATE'
    | 'DATE_TIME'
    | 'TIME'

/** Defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  __typename?: 'CustomizableDateValue'
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>
  /** DATE, DATE_TIME or TIME */
  type: Maybe<CustomizableDateTypeEnum>
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID']['output']
}

/** Contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output']
  /** An array that defines the set of options for a drop down menu. */
  value: Maybe<Array<Maybe<CustomizableDropDownValue>>>
}

/** Defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue'
  /** The ID assigned to the value. */
  option_type_id: Maybe<Scalars['Int']['output']>
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID']['output']
}

/** Contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** The Stock Keeping Unit of the base product. */
  product_sku: Maybe<Scalars['String']['output']>
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output']
  /** An object that defines a text field. */
  value: Maybe<CustomizableFieldValue>
}

/** Defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue'
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters: Maybe<Scalars['Int']['output']>
  /** The price of the custom value. */
  price: Maybe<Scalars['Float']['output']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID']['output']
}

/** Contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** The Stock Keeping Unit of the base product. */
  product_sku: Maybe<Scalars['String']['output']>
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output']
  /** An object that defines a file value. */
  value: Maybe<CustomizableFileValue>
}

/** Defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  __typename?: 'CustomizableFileValue'
  /** The file extension to accept. */
  file_extension: Maybe<Scalars['String']['output']>
  /** The maximum width of an image. */
  image_size_x: Maybe<Scalars['Int']['output']>
  /** The maximum height of an image. */
  image_size_y: Maybe<Scalars['Int']['output']>
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID']['output']
}

/** Contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output']
  /** An array that defines the set of options for a multiselect. */
  value: Maybe<Array<Maybe<CustomizableMultipleValue>>>
}

/** Defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue'
  /** The ID assigned to the value. */
  option_type_id: Maybe<Scalars['Int']['output']>
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID']['output']
}

/** Defines a customizable option. */
export type CustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id: InputMaybe<Scalars['Int']['input']>
  /** The unique ID for a `CartItemInterface` object. */
  uid: InputMaybe<Scalars['ID']['input']>
  /** The string value of the option. */
  value_string: Scalars['String']['input']
}

/** Contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output']
}

/** Contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>
}

/** Contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption'
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id: Maybe<Scalars['Int']['output']>
  /** Indicates whether the option is required. */
  required: Maybe<Scalars['Boolean']['output']>
  /** The order in which the option is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID']['output']
  /** An array that defines a set of radio buttons. */
  value: Maybe<Array<Maybe<CustomizableRadioValue>>>
}

/** Defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue'
  /** The ID assigned to the value. */
  option_type_id: Maybe<Scalars['Int']['output']>
  /** The price assigned to this option. */
  price: Maybe<Scalars['Float']['output']>
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type: Maybe<PriceTypeEnum>
  /** The Stock Keeping Unit for this option. */
  sku: Maybe<Scalars['String']['output']>
  /** The order in which the radio button is displayed. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name for this option. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID']['output']
}

/** Contains the results of the request to delete a compare list. */
export type DeleteCompareListOutput = {
  __typename?: 'DeleteCompareListOutput'
  /** Indicates whether the compare list was successfully deleted. */
  result: Scalars['Boolean']['output']
}

/** Indicates whether the request succeeded and returns the remaining customer payment tokens. */
export type DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput'
  /** A container for the customer's remaining payment tokens. */
  customerPaymentTokens: Maybe<CustomerPaymentTokens>
  /** Indicates whether the request succeeded. */
  result: Scalars['Boolean']['output']
}

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item, shipping. */
export type Discount = {
  __typename?: 'Discount'
  /** The amount of the discount. */
  amount: Money
  /** The type of the entity the discount is applied to. */
  applied_to: CartDiscountType
  /** The coupon related to the discount. */
  coupon: Maybe<AppliedCoupon>
  /** A description of the discount. */
  label: Scalars['String']['output']
}

/** An implementation for downloadable product cart items. */
export type DownloadableCartItem = CartItemInterface & {
  __typename?: 'DownloadableCartItem'
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output']
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output']
  /** An array containing information about the links for the downloadable product added to the cart. */
  links: Maybe<Array<Maybe<DownloadableProductLinks>>>
  /** Message to display when the product is not available with this selected option. */
  not_available_message: Maybe<Scalars['String']['output']>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>
  /** Details about an item in the cart. */
  product: ProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output']
  /** An array containing information about samples of the selected downloadable product. */
  samples: Maybe<Array<Maybe<DownloadableProductSamples>>>
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output']
}

/** Defines downloadable product options for `CreditMemoItemInterface`. */
export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem'
  /** Details about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** A list of downloadable links that are refunded from the downloadable product. */
  downloadable_links: Maybe<Array<Maybe<DownloadableItemsLinks>>>
  /** The unique ID for a `CreditMemoItemInterface` object. */
  id: Scalars['ID']['output']
  /** The order item the credit memo is applied to. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product, including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>
}

export type DownloadableFileTypeEnum
  = | 'FILE'
    | 'URL'

/** Defines downloadable product options for `InvoiceItemInterface`. */
export type DownloadableInvoiceItem = InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem'
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** A list of downloadable links that are invoiced from the downloadable product. */
  downloadable_links: Maybe<Array<Maybe<DownloadableItemsLinks>>>
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output']
  /** Details about an individual order item. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>
}

/** Defines characteristics of the links for downloadable product. */
export type DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks'
  /** A number indicating the sort order. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name of the link. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID']['output']
}

/** Defines downloadable product options for `OrderItemInterface`. */
export type DownloadableOrderItem = OrderItemInterface & {
  __typename?: 'DownloadableOrderItem'
  /** The final discount information for the product. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** A list of downloadable links that are ordered from the downloadable product. */
  downloadable_links: Maybe<Array<Maybe<DownloadableItemsLinks>>>
  /** The entered option for the base product, such as a logo or image. */
  entered_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The selected gift message for the order item */
  gift_message: Maybe<GiftMessage>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output']
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<OrderItemPrices>
  /** The ProductInterface object, which contains details about the base product */
  product: Maybe<ProductInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The type of product, such as simple, configurable, etc. */
  product_type: Maybe<Scalars['String']['output']>
  /** URL key of the base product. */
  product_url_key: Maybe<Scalars['String']['output']>
  /** The number of canceled items. */
  quantity_canceled: Maybe<Scalars['Float']['output']>
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>
  /** The number of units ordered for this item. */
  quantity_ordered: Maybe<Scalars['Float']['output']>
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>
  /** The number of returned items. */
  quantity_returned: Maybe<Scalars['Float']['output']>
  /** The number of shipped items. */
  quantity_shipped: Maybe<Scalars['Float']['output']>
  /** The selected options for the base product, such as color or size. */
  selected_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The status of the order item. */
  status: Maybe<Scalars['String']['output']>
}

/** Defines a product that the shopper downloads. */
export type DownloadableProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'DownloadableProduct'
  /** @deprecated Use the `custom_attributes` field instead. */
  activity: Maybe<Scalars['String']['output']>
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  climate: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  collar: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** Product custom attributes. */
  custom_attributesV2: Maybe<ProductCustomAttributes>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>
  /** An array containing information about the links for this downloadable product. */
  downloadable_product_links: Maybe<Array<Maybe<DownloadableProductLinks>>>
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples: Maybe<Array<Maybe<DownloadableProductSamples>>>
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  format: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  gender: Maybe<Scalars['String']['output']>
  /** Returns a value indicating gift message availability for the product. */
  gift_message_available: Scalars['Boolean']['output']
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>
  /** @deprecated Use the `custom_attributes` field instead. */
  is_seller_product: Maybe<Scalars['Int']['output']>
  /** A value of 1 indicates that each link in the array must be purchased separately. */
  links_purchased_separately: Maybe<Scalars['Int']['output']>
  /** The heading above the list of downloadable products. */
  links_title: Maybe<Scalars['String']['output']>
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  material: Maybe<Scalars['String']['output']>
  /** Maximum Qty Allowed in Shopping Cart */
  max_sale_qty: Maybe<Scalars['Float']['output']>
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>
  /** Minimum Qty Allowed in Shopping Cart */
  min_sale_qty: Maybe<Scalars['Float']['output']>
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  new: Maybe<Scalars['Int']['output']>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric: Maybe<Scalars['Int']['output']>
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>
  /** The range of prices for the product */
  price_range: PriceRange
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>
  /** Amount of available stock */
  quantity: Maybe<Scalars['Float']['output']>
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output']
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output']
  /** The list of products reviews. */
  reviews: ProductReviews
  /** @deprecated Use the `custom_attributes` field instead. */
  sale: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  seller_id: Maybe<Scalars['Int']['output']>
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  size: Maybe<Scalars['Int']['output']>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sm_featured: Maybe<Scalars['Int']['output']>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general: Maybe<Scalars['String']['output']>
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output']
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>
}

/** Defines a product that the shopper downloads. */
export type DownloadableProductCustom_AttributesV2Args = {
  filters: InputMaybe<AttributeFilterInput>
}

/** Defines a product that the shopper downloads. */
export type DownloadableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** Defines a single downloadable product. */
export type DownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>
  /** The quantity and SKU of the downloadable product. */
  data: CartItemInput
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>
}

/** Defines characteristics of a downloadable product. */
export type DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks'
  /** @deprecated This information should not be exposed on frontend. */
  id: Maybe<Scalars['Int']['output']>
  /** @deprecated This information should not be exposed on frontend. */
  is_shareable: Maybe<Scalars['Boolean']['output']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type: Maybe<DownloadableFileTypeEnum>
  /** @deprecated This information should not be exposed on frontend. */
  number_of_downloads: Maybe<Scalars['Int']['output']>
  /** The price of the downloadable product. */
  price: Maybe<Scalars['Float']['output']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file: Maybe<Scalars['String']['output']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type: Maybe<DownloadableFileTypeEnum>
  /** The full URL to the downloadable sample. */
  sample_url: Maybe<Scalars['String']['output']>
  /** A number indicating the sort order. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name of the link. */
  title: Maybe<Scalars['String']['output']>
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID']['output']
}

/** Contains the link ID for the downloadable product. */
export type DownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars['Int']['input']
}

/** Defines characteristics of a downloadable product. */
export type DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples'
  /** @deprecated This information should not be exposed on frontend. */
  id: Maybe<Scalars['Int']['output']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file: Maybe<Scalars['String']['output']>
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type: Maybe<DownloadableFileTypeEnum>
  /** The full URL to the downloadable sample. */
  sample_url: Maybe<Scalars['String']['output']>
  /** A number indicating the sort order. */
  sort_order: Maybe<Scalars['Int']['output']>
  /** The display name of the sample. */
  title: Maybe<Scalars['String']['output']>
}

/** A downloadable product wish list item. */
export type DownloadableWishlistItem = WishlistItemInterface & {
  __typename?: 'DownloadableWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output']
  /** An array containing information about the selected links. */
  links_v2: Maybe<Array<Maybe<DownloadableProductLinks>>>
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output']
  /** An array containing information about the selected samples. */
  samples: Maybe<Array<Maybe<DownloadableProductSamples>>>
}

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars['ID']['input']
  /** Text the customer entered. */
  value: Scalars['String']['input']
}

/** Contains the `uid`, `relative_url`, and `type` attributes. */
export type EntityUrl = {
  __typename?: 'EntityUrl'
  /** @deprecated Use `relative_url` instead. */
  canonical_url: Maybe<Scalars['String']['output']>
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, or similar object associated with the specified URL. This could be a product, category, or CMS page UID. */
  entity_uid: Maybe<Scalars['ID']['output']>
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirectCode: Maybe<Scalars['Int']['output']>
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
}

/** An error encountered while adding an item to the the cart. */
export type Error = {
  /** A cart-specific error code. */
  code: CartUserInputErrorType
  /** A localized error message. */
  message: Scalars['String']['output']
}

export type ErrorInterface = {
  /** The returned error message. */
  message: Scalars['String']['output']
}

/** Contains details about an address. */
export type EstimateAddressInput = {
  /** The two-letter code representing the customer's country. */
  country_code: CountryCodeEnum
  /** The customer's ZIP or postal code. */
  postcode: InputMaybe<Scalars['String']['input']>
  /** An object containing the region name, region code, and region ID. */
  region: InputMaybe<CustomerAddressRegionInput>
}

export type EstimateTotalsInput = {
  /** Customer's address to estimate totals. */
  address: EstimateAddressInput
  /** The unique ID of the cart to query. */
  cart_id: Scalars['String']['input']
  /** Selected shipping method to estimate totals. */
  shipping_method: InputMaybe<ShippingMethodInput>
}

/** Estimate totals output. */
export type EstimateTotalsOutput = {
  __typename?: 'EstimateTotalsOutput'
  /** Cart after totals estimation */
  cart: Maybe<Cart>
}

/** Lists the exchange rate. */
export type ExchangeRate = {
  __typename?: 'ExchangeRate'
  /** Specifies the store’s default currency to exchange to. */
  currency_to: Maybe<Scalars['String']['output']>
  /** The exchange rate for the store’s default currency. */
  rate: Maybe<Scalars['Float']['output']>
}

export type FastlaneConfig = PaymentConfigItem & {
  __typename?: 'FastlaneConfig'
  /** The payment method code as defined in the payment gateway */
  code: Maybe<Scalars['String']['output']>
  /** Indicates whether the payment method is displayed */
  is_visible: Maybe<Scalars['Boolean']['output']>
  /** Defines the payment intent (Authorize or Capture */
  payment_intent: Maybe<Scalars['String']['output']>
  /** The payment source for the payment method */
  payment_source: Maybe<Scalars['String']['output']>
  /** The PayPal parameters required to load the JS SDK */
  sdk_params: Maybe<Array<Maybe<SdkParams>>>
  /** The relative order the payment method is displayed on the checkout page */
  sort_order: Maybe<Scalars['String']['output']>
  /** The name displayed for the payment method */
  title: Maybe<Scalars['String']['output']>
}

/** Fastlane Payment inputs */
export type FastlaneMethodInput = {
  /** The payment source for the payment method */
  payment_source: InputMaybe<Scalars['String']['input']>
  /** The single use token from Fastlane */
  paypal_fastlane_token: InputMaybe<Scalars['String']['input']>
}

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq: InputMaybe<Scalars['String']['input']>
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FilterMatchTypeEnum
  = | 'FULL'
    | 'PARTIAL'

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** Use this attribute to fuzzy match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match: InputMaybe<Scalars['String']['input']>
  /** Filter match type for fine-tuned results. Possible values FULL or PARTIAL. If match_type is not provided, returned results will default to FULL match. */
  match_type: InputMaybe<FilterMatchTypeEnum>
}

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from: InputMaybe<Scalars['String']['input']>
  /** Use this attribute to specify the highest possible value in the range. */
  to: InputMaybe<Scalars['String']['input']>
}

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq: InputMaybe<Scalars['String']['input']>
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match: InputMaybe<Scalars['String']['input']>
}

/** Defines the comparison operators that can be used in a filter. */
export type FilterTypeInput = {
  /** Equals. */
  eq: InputMaybe<Scalars['String']['input']>
  finset: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** From. Must be used with the `to` field. */
  from: InputMaybe<Scalars['String']['input']>
  /** Greater than. */
  gt: InputMaybe<Scalars['String']['input']>
  /** Greater than or equal to. */
  gteq: InputMaybe<Scalars['String']['input']>
  /** In. The value can contain a set of comma-separated values. */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like: InputMaybe<Scalars['String']['input']>
  /** Less than. */
  lt: InputMaybe<Scalars['String']['input']>
  /** Less than or equal to. */
  lteq: InputMaybe<Scalars['String']['input']>
  /** More than or equal to. */
  moreq: InputMaybe<Scalars['String']['input']>
  /** Not equal to. */
  neq: InputMaybe<Scalars['String']['input']>
  /** Not in. The value can contain a set of comma-separated values. */
  nin: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Not null. */
  notnull: InputMaybe<Scalars['String']['input']>
  /** Is null. */
  null: InputMaybe<Scalars['String']['input']>
  /** To. Must be used with the `from` field. */
  to: InputMaybe<Scalars['String']['input']>
}

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  __typename?: 'FixedProductTax'
  /** The amount of the Fixed Product Tax. */
  amount: Maybe<Money>
  /** The display label assigned to the Fixed Product Tax. */
  label: Maybe<Scalars['String']['output']>
}

/** Lists display settings for the Fixed Product Tax. */
export type FixedProductTaxDisplaySettings
  /** The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.' */
  = | 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS'
  /** The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'. */
    | 'EXCLUDE_FPT_WITHOUT_DETAILS'
  /** The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query. */
    | 'FPT_DISABLED'
  /** The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'. */
    | 'INCLUDE_FPT_WITHOUT_DETAILS'
  /** The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'. */
    | 'INCLUDE_FPT_WITH_DETAILS'

/** Identifies which customer requires remote shopping assistance. */
export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars['String']['input']
}

/** Contains the generated customer token. */
export type GenerateCustomerTokenAsAdminOutput = {
  __typename?: 'GenerateCustomerTokenAsAdminOutput'
  /** The generated customer token. */
  customer_token: Scalars['String']['output']
}

/** Gets the payment SDK URLs and values */
export type GetPaymentSdkOutput = {
  __typename?: 'GetPaymentSDKOutput'
  /** The payment SDK parameters */
  sdkParams: Maybe<Array<Maybe<PaymentSdkParamsItem>>>
}

export type GiftCardInfo = {
  __typename?: 'GiftCardInfo'
  /** Query by balance. */
  balance: Maybe<Money>
  /** Query by code. */
  code: Maybe<Scalars['String']['output']>
}

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  __typename?: 'GiftMessage'
  /** Sender name */
  from: Scalars['String']['output']
  /** Gift message text */
  message: Scalars['String']['output']
  /** Recipient name */
  to: Scalars['String']['output']
}

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars['String']['input']
  /** Gift message text */
  message: Scalars['String']['input']
  /** Recipient name */
  to: Scalars['String']['input']
}

export type GooglePayButtonStyles = {
  __typename?: 'GooglePayButtonStyles'
  /** The button color */
  color: Maybe<Scalars['String']['output']>
  /** The button height in pixels */
  height: Maybe<Scalars['Int']['output']>
  /** The button type */
  type: Maybe<Scalars['String']['output']>
}

export type GooglePayConfig = PaymentConfigItem & {
  __typename?: 'GooglePayConfig'
  /** The styles for the GooglePay Button configuration */
  button_styles: Maybe<GooglePayButtonStyles>
  /** The payment method code as defined in the payment gateway */
  code: Maybe<Scalars['String']['output']>
  /** Indicates whether the payment method is displayed */
  is_visible: Maybe<Scalars['Boolean']['output']>
  /** Defines the payment intent (Authorize or Capture */
  payment_intent: Maybe<Scalars['String']['output']>
  /** The payment source for the payment method */
  payment_source: Maybe<Scalars['String']['output']>
  /** The PayPal parameters required to load the JS SDK */
  sdk_params: Maybe<Array<Maybe<SdkParams>>>
  /** The relative order the payment method is displayed on the checkout page */
  sort_order: Maybe<Scalars['String']['output']>
  /** 3DS mode */
  three_ds_mode: Maybe<ThreeDsMode>
  /** The name displayed for the payment method */
  title: Maybe<Scalars['String']['output']>
}

/** Google Pay inputs */
export type GooglePayMethodInput = {
  /** The payment source for the payment method */
  payment_source: InputMaybe<Scalars['String']['input']>
  /** The payment services order ID */
  payments_order_id: InputMaybe<Scalars['String']['input']>
  /** PayPal order ID */
  paypal_order_id: InputMaybe<Scalars['String']['input']>
}

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProduct = PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'GroupedProduct'
  /** @deprecated Use the `custom_attributes` field instead. */
  activity: Maybe<Scalars['String']['output']>
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  climate: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  collar: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** Product custom attributes. */
  custom_attributesV2: Maybe<ProductCustomAttributes>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  format: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  gender: Maybe<Scalars['String']['output']>
  /** Returns a value indicating gift message availability for the product. */
  gift_message_available: Scalars['Boolean']['output']
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>
  /** @deprecated Use the `custom_attributes` field instead. */
  is_seller_product: Maybe<Scalars['Int']['output']>
  /** An array containing grouped product items. */
  items: Maybe<Array<Maybe<GroupedProductItem>>>
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  material: Maybe<Scalars['String']['output']>
  /** Maximum Qty Allowed in Shopping Cart */
  max_sale_qty: Maybe<Scalars['Float']['output']>
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>
  /** Minimum Qty Allowed in Shopping Cart */
  min_sale_qty: Maybe<Scalars['Float']['output']>
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  new: Maybe<Scalars['Int']['output']>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric: Maybe<Scalars['Int']['output']>
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>
  /** The range of prices for the product */
  price_range: PriceRange
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>
  /** Amount of available stock */
  quantity: Maybe<Scalars['Float']['output']>
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output']
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output']
  /** The list of products reviews. */
  reviews: ProductReviews
  /** @deprecated Use the `custom_attributes` field instead. */
  sale: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  seller_id: Maybe<Scalars['Int']['output']>
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  size: Maybe<Scalars['Int']['output']>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sm_featured: Maybe<Scalars['Int']['output']>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general: Maybe<Scalars['String']['output']>
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output']
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>
}

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductCustom_AttributesV2Args = {
  filters: InputMaybe<AttributeFilterInput>
}

/** Defines a grouped product, which consists of simple standalone products that are presented as a group. */
export type GroupedProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** Contains information about an individual grouped product item. */
export type GroupedProductItem = {
  __typename?: 'GroupedProductItem'
  /** The relative position of this item compared to the other group items. */
  position: Maybe<Scalars['Int']['output']>
  /** Details about this product option. */
  product: Maybe<ProductInterface>
  /** The quantity of this grouped product item. */
  qty: Maybe<Scalars['Float']['output']>
}

/** A grouped product wish list item. */
export type GroupedProductWishlistItem = WishlistItemInterface & {
  __typename?: 'GroupedProductWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output']
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output']
}

/** Input to retrieve a guest order based on token. */
export type GuestOrderCancelInput = {
  /** Cancellation reason. */
  reason: Scalars['String']['input']
  /** Order token. */
  token: Scalars['String']['input']
}

export type HostedFieldsConfig = PaymentConfigItem & {
  __typename?: 'HostedFieldsConfig'
  /** Vault payment method code */
  cc_vault_code: Maybe<Scalars['String']['output']>
  /** The payment method code as defined in the payment gateway */
  code: Maybe<Scalars['String']['output']>
  /** Card vault enabled */
  is_vault_enabled: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the payment method is displayed */
  is_visible: Maybe<Scalars['Boolean']['output']>
  /** Defines the payment intent (Authorize or Capture */
  payment_intent: Maybe<Scalars['String']['output']>
  /** The payment source for the payment method */
  payment_source: Maybe<Scalars['String']['output']>
  /** Card and bin details required */
  requires_card_details: Maybe<Scalars['Boolean']['output']>
  /** The PayPal parameters required to load the JS SDK */
  sdk_params: Maybe<Array<Maybe<SdkParams>>>
  /** The relative order the payment method is displayed on the checkout page */
  sort_order: Maybe<Scalars['String']['output']>
  /**
   * Whether 3DS is activated; true if 3DS mode is not OFF.
   * @deprecated Use 'three_ds_mode' instead.
   */
  three_ds: Maybe<Scalars['Boolean']['output']>
  /** 3DS mode */
  three_ds_mode: Maybe<ThreeDsMode>
  /** The name displayed for the payment method */
  title: Maybe<Scalars['String']['output']>
}

/** Hosted Fields payment inputs */
export type HostedFieldsInput = {
  /** Card bin number */
  cardBin: InputMaybe<Scalars['String']['input']>
  /** Expiration month of the card */
  cardExpiryMonth: InputMaybe<Scalars['String']['input']>
  /** Expiration year of the card */
  cardExpiryYear: InputMaybe<Scalars['String']['input']>
  /** Last four digits of the card */
  cardLast4: InputMaybe<Scalars['String']['input']>
  /** Name on the card */
  holderName: InputMaybe<Scalars['String']['input']>
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the Payment Services payment integration. */
  is_active_payment_token_enabler: InputMaybe<Scalars['Boolean']['input']>
  /** The payment source for the payment method */
  payment_source: InputMaybe<Scalars['String']['input']>
  /** The payment services order ID */
  payments_order_id: InputMaybe<Scalars['String']['input']>
  /** PayPal order ID */
  paypal_order_id: InputMaybe<Scalars['String']['input']>
}

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input']
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input']
}

/** Contains the secure URL used for the Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  __typename?: 'HostedProUrl'
  /** The secure URL generated by PayPal. */
  secure_form_url: Maybe<Scalars['String']['output']>
}

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input']
}

/** Contains target path parameters. */
export type HttpQueryParameter = {
  __typename?: 'HttpQueryParameter'
  /** A parameter name. */
  name: Maybe<Scalars['String']['output']>
  /** A parameter value. */
  value: Maybe<Scalars['String']['output']>
}

export type ImageSwatchData = SwatchDataInterface & {
  __typename?: 'ImageSwatchData'
  /** The URL assigned to the thumbnail of the swatch image. */
  thumbnail: Maybe<Scalars['String']['output']>
  /** The value can be represented as color (HEX code), image link, or text. */
  value: Maybe<Scalars['String']['output']>
}

/** List of templates/filters applied to customer attribute input. */
export type InputFilterEnum
  /** Forces attribute input to follow the date format. */
  = | 'DATE'
  /** Escape HTML Entities. */
    | 'ESCAPEHTML'
  /** There are no templates or filters to be applied. */
    | 'NONE'
  /** Strip HTML Tags. */
    | 'STRIPTAGS'
  /** Strip whitespace (or other characters) from the beginning and end of the input. */
    | 'TRIM'

export type InsufficientStockError = Error & {
  __typename?: 'InsufficientStockError'
  /** A cart-specific error code. */
  code: CartUserInputErrorType
  /** A localized error message. */
  message: Scalars['String']['output']
  /** Amount of available stock */
  quantity: Maybe<Scalars['Float']['output']>
}

/** Contains an error message when an internal error occurred. */
export type InternalError = ErrorInterface & {
  __typename?: 'InternalError'
  /** The returned error message. */
  message: Scalars['String']['output']
}

/** Contains invoice details. */
export type Invoice = {
  __typename?: 'Invoice'
  /** Comments on the invoice. */
  comments: Maybe<Array<Maybe<SalesCommentItem>>>
  /** The unique ID for a `Invoice` object. */
  id: Scalars['ID']['output']
  /** Invoiced product details. */
  items: Maybe<Array<Maybe<InvoiceItemInterface>>>
  /** Sequential invoice number. */
  number: Scalars['String']['output']
  /** Invoice total amount details. */
  total: Maybe<InvoiceTotal>
}

export type InvoiceItem = InvoiceItemInterface & {
  __typename?: 'InvoiceItem'
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output']
  /** Details about an individual order item. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>
}

/** Contains detailes about invoiced items. */
export type InvoiceItemInterface = {
  /** Information about the final discount amount for the base product, including discounts on options. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The unique ID for an `InvoiceItemInterface` object. */
  id: Scalars['ID']['output']
  /** Details about an individual order item. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>
}

/** Contains price details from an invoice. */
export type InvoiceTotal = {
  __typename?: 'InvoiceTotal'
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money
  /** The applied discounts to the invoice. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money
  /** Details about the shipping and handling costs for the invoice. */
  shipping_handling: Maybe<ShippingHandling>
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes. */
  subtotal: Money
  /** The invoice tax details. */
  taxes: Maybe<Array<Maybe<TaxItem>>>
  /** The shipping amount for the invoice. */
  total_shipping: Money
  /** The amount of tax applied to the invoice. */
  total_tax: Money
}

/** Contains the result of the `isEmailAvailable` query. */
export type IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput'
  /** Indicates whether the specified email address can be used to create a customer. */
  is_email_available: Maybe<Scalars['Boolean']['output']>
}

/** A list of options of the selected bundle product. */
export type ItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption'
  /**
   * The unique ID for a `ItemSelectedBundleOption` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output']
  /** The label of the option. */
  label: Scalars['String']['output']
  /** The unique ID for a `ItemSelectedBundleOption` object. */
  uid: Scalars['ID']['output']
  /** A list of products that represent the values of the parent option. */
  values: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>
}

/** A list of values for the selected bundle product. */
export type ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue'
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object.
   * @deprecated Use `uid` instead.
   */
  id: Scalars['ID']['output']
  /** The price of the child bundle product. */
  price: Money
  /** The name of the child bundle product. */
  product_name: Scalars['String']['output']
  /** The SKU of the child bundle product. */
  product_sku: Scalars['String']['output']
  /** The number of this bundle product that were ordered. */
  quantity: Scalars['Float']['output']
  /** The unique ID for a `ItemSelectedBundleOptionValue` object. */
  uid: Scalars['ID']['output']
}

/** Contains a key-value pair. */
export type KeyValue = {
  __typename?: 'KeyValue'
  /** The name part of the key/value pair. */
  name: Maybe<Scalars['String']['output']>
  /** The value part of the key/value pair. */
  value: Maybe<Scalars['String']['output']>
}

/** Contains information for rendering layered navigation. */
export type LayerFilter = {
  __typename?: 'LayerFilter'
  /**
   * An array of filter items.
   * @deprecated Use `Aggregation.options` instead.
   */
  filter_items: Maybe<Array<Maybe<LayerFilterItemInterface>>>
  /**
   * The count of filter items in filter group.
   * @deprecated Use `Aggregation.count` instead.
   */
  filter_items_count: Maybe<Scalars['Int']['output']>
  /**
   * The name of a layered navigation filter.
   * @deprecated Use `Aggregation.label` instead.
   */
  name: Maybe<Scalars['String']['output']>
  /**
   * The request variable name for a filter query.
   * @deprecated Use `Aggregation.attribute_code` instead.
   */
  request_var: Maybe<Scalars['String']['output']>
}

export type LayerFilterItem = LayerFilterItemInterface & {
  __typename?: 'LayerFilterItem'
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count: Maybe<Scalars['Int']['output']>
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label: Maybe<Scalars['String']['output']>
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string: Maybe<Scalars['String']['output']>
}

export type LayerFilterItemInterface = {
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count: Maybe<Scalars['Int']['output']>
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label: Maybe<Scalars['String']['output']>
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string: Maybe<Scalars['String']['output']>
}

/** Defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry'
  /** Details about the content of the media gallery item. */
  content: Maybe<ProductMediaGalleryEntriesContent>
  /** Indicates whether the image is hidden from view. */
  disabled: Maybe<Scalars['Boolean']['output']>
  /** The path of the image on the server. */
  file: Maybe<Scalars['String']['output']>
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** The alt text displayed on the storefront when the user points to the image. */
  label: Maybe<Scalars['String']['output']>
  /** Either `image` or `video`. */
  media_type: Maybe<Scalars['String']['output']>
  /** The media item's position after it has been sorted. */
  position: Maybe<Scalars['Int']['output']>
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID']['output']
  /** Details about the content of a video item. */
  video_content: Maybe<ProductMediaGalleryEntriesVideoContent>
}

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Indicates whether the image is hidden from view. */
  disabled: Maybe<Scalars['Boolean']['output']>
  /** The label of the product image or video. */
  label: Maybe<Scalars['String']['output']>
  /** The media item's position after it has been sorted. */
  position: Maybe<Scalars['Int']['output']>
  /** The URL of the product image or video. */
  url: Maybe<Scalars['String']['output']>
}

export type MessageStyleLogo = {
  __typename?: 'MessageStyleLogo'
  /** The type of logo for the PayPal Pay Later messaging */
  type: Maybe<Scalars['String']['output']>
}

export type MessageStyles = {
  __typename?: 'MessageStyles'
  /** The message layout */
  layout: Maybe<Scalars['String']['output']>
  /** The message logo */
  logo: Maybe<MessageStyleLogo>
}

export type ModuleConfiguration = {
  __typename?: 'ModuleConfiguration'
  /** The Public Key of the Stripe payment. */
  apiKey: Maybe<Scalars['String']['output']>
  /** Module Version and Partner ID etc */
  appInfo: Maybe<Array<Maybe<Scalars['String']['output']>>>
  /** Serialized options that can be used to initialize the Elements object */
  elementsOptions: Maybe<Scalars['String']['output']>
  /** Locale */
  locale: Maybe<Scalars['String']['output']>
  /** Betas and API version */
  options: Maybe<ModuleOptions>
}

export type ModuleOptions = {
  __typename?: 'ModuleOptions'
  /** API Version */
  apiVersion: Maybe<Scalars['String']['output']>
  /** Betas. */
  betas: Maybe<Array<Maybe<Scalars['String']['output']>>>
}

/** Defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  __typename?: 'Money'
  /** A three-letter currency code, such as USD or EUR. */
  currency: Maybe<CurrencyEnum>
  /** A number expressing a monetary value. */
  value: Maybe<Scalars['Float']['output']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Add one or more bundle products to the specified cart. We recommend using `addProductsToCart` instead. */
  addBundleProductsToCart: Maybe<AddBundleProductsToCartOutput>
  /** Add one or more configurable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addConfigurableProductsToCart: Maybe<AddConfigurableProductsToCartOutput>
  /** Add one or more downloadable products to the specified cart. We recommend using `addProductsToCart` instead. */
  addDownloadableProductsToCart: Maybe<AddDownloadableProductsToCartOutput>
  /** Add any type of product to the cart. */
  addProductsToCart: Maybe<AddProductsToCartOutput>
  /** Add products to the specified compare list. */
  addProductsToCompareList: Maybe<CompareList>
  /** Creates a new cart and add any type of product to it */
  addProductsToNewCart: Maybe<AddProductsToNewCartOutput>
  /** Add one or more products to the specified wish list. This mutation supports all product types. */
  addProductsToWishlist: Maybe<AddProductsToWishlistOutput>
  /** Add one or more simple products to the specified cart. We recommend using `addProductsToCart` instead. */
  addSimpleProductsToCart: Maybe<AddSimpleProductsToCartOutput>
  /** Saves a payment method on the logged in customer */
  addStripePaymentMethod: Maybe<StripePaymentMethod>
  /** Add one or more virtual products to the specified cart. We recommend using `addProductsToCart` instead. */
  addVirtualProductsToCart: Maybe<AddVirtualProductsToCartOutput>
  /** Add items in the specified wishlist to the customer's cart. */
  addWishlistItemsToCart: Maybe<AddWishlistItemsToCartOutput>
  /** Apply a pre-defined coupon code to the specified cart. */
  applyCouponToCart: Maybe<ApplyCouponToCartOutput>
  /** Assign the specified compare list to the logged in customer. */
  assignCompareListToCustomer: Maybe<AssignCompareListToCustomerOutput>
  /** Assign a logged-in customer to the specified guest shopping cart. */
  assignCustomerToGuestCart: Cart
  /** Cancel the specified customer order. */
  cancelOrder: Maybe<CancelOrderOutput>
  /** Change the password for the logged-in customer. */
  changeCustomerPassword: Maybe<Customer>
  /** Synchronizes order details and place the order */
  completeOrder: Maybe<PlaceOrderOutput>
  /** Cancel the specified guest customer order. */
  confirmCancelOrder: Maybe<CancelOrderOutput>
  /** Confirms the email address for a customer. */
  confirmEmail: Maybe<CustomerOutput>
  /** Send a 'Contact Us' email to the merchant. */
  contactUs: Maybe<ContactUsOutput>
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String']['output']
  /** Creates Client Token for Braintree PayPal Javascript SDK initialization. */
  createBraintreePayPalClientToken: Scalars['String']['output']
  /** Creates Client Token for Braintree PayPal Vault Javascript SDK initialization. */
  createBraintreePayPalVaultClientToken: Scalars['String']['output']
  /** Create a new compare list. The compare list is saved for logged in customers. */
  createCompareList: Maybe<CompareList>
  /** @deprecated Use `createCustomerV2` instead. */
  createCustomer: Maybe<CustomerOutput>
  /** Create a billing or shipping address for a customer or guest. */
  createCustomerAddress: Maybe<CustomerAddress>
  /** Create a customer account. */
  createCustomerV2: Maybe<CustomerOutput>
  /**
   * Create an empty shopping cart for a guest or logged in user
   * @deprecated Use `Mutation.createGuestCart` or `Query.customerCart` for logged in customer
   */
  createEmptyCart: Maybe<Scalars['String']['output']>
  /** Create a new shopping cart */
  createGuestCart: Maybe<CreateGuestCartOutput>
  /** Initiate a transaction and receive a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken: Maybe<CreatePayflowProTokenOutput>
  /** Creates a payment order for further payment processing */
  createPaymentOrder: Maybe<CreatePaymentOrderOutput>
  /** Initiate an Express Checkout transaction and receive a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken: Maybe<PaypalExpressTokenOutput>
  /** Create a product review for the specified product. */
  createProductReview: CreateProductReviewOutput
  /** Creates a vault payment token */
  createVaultCardPaymentToken: Maybe<CreateVaultCardPaymentTokenOutput>
  /** Creates a vault card setup token */
  createVaultCardSetupToken: Maybe<CreateVaultCardSetupTokenOutput>
  /** Delete the specified compare list. */
  deleteCompareList: Maybe<DeleteCompareListOutput>
  /** Delete customer account */
  deleteCustomer: Maybe<Scalars['Boolean']['output']>
  /** Delete the billing or shipping address of a customer. */
  deleteCustomerAddress: Maybe<Scalars['Boolean']['output']>
  /** Delete a customer's payment token. */
  deletePaymentToken: Maybe<DeletePaymentTokenOutput>
  /** Deletes a saved payment method from a logged in customer */
  deleteStripePaymentMethod: Maybe<Scalars['String']['output']>
  /** Estimate shipping method(s) for cart based on address */
  estimateShippingMethods: Maybe<Array<Maybe<AvailableShippingMethod>>>
  /** Estimate totals for cart based on the address */
  estimateTotals: EstimateTotalsOutput
  /** Generate a token for specified customer. */
  generateCustomerToken: Maybe<CustomerToken>
  /** Request a customer token so that an administrator can perform remote shopping assistance. */
  generateCustomerTokenAsAdmin: Maybe<GenerateCustomerTokenAsAdminOutput>
  /** Handle a payment response and save the payment in Quote. Use this mutation for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse: Maybe<PayflowProResponseOutput>
  /** List all saved payment methods of a logged in customer */
  listStripePaymentMethods: Maybe<Array<Maybe<StripePaymentMethod>>>
  /** Add gift card to quote. */
  lofAddGiftCardToQuote: Maybe<Res>
  /** Apply customer balance to quote. */
  lofApplyCustomerBalanceToCart: Maybe<Res>
  /** Redeem gift card to customer. */
  lofGiftCardRedeem: Maybe<Res>
  /** Transfer the contents of a guest cart into the cart of a logged-in customer. */
  mergeCarts: Cart
  /** Convert the quote into an order. */
  placeOrder: Maybe<PlaceOrderOutput>
  /** Remove a previously-applied coupon from the cart. The cart must contain at least one item in order to remove the coupon. */
  removeCouponFromCart: Maybe<RemoveCouponFromCartOutput>
  /** Delete the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist. */
  removeItemFromCart: Maybe<RemoveItemFromCartOutput>
  /** Remove products from the specified compare list. */
  removeProductsFromCompareList: Maybe<CompareList>
  /** Remove one or more products from the specified wish list. */
  removeProductsFromWishlist: Maybe<RemoveProductsFromWishlistOutput>
  /** Add all products from a customer's previous order to the cart. */
  reorderItems: Maybe<ReorderItemsOutput>
  /** Request to cancel specified guest order. */
  requestGuestOrderCancel: Maybe<CancelOrderOutput>
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail: Maybe<Scalars['Boolean']['output']>
  /** Resends the confirmation email to a customer. */
  resendConfirmationEmail: Maybe<Scalars['Boolean']['output']>
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using `requestPasswordResetEmail`. */
  resetPassword: Maybe<Scalars['Boolean']['output']>
  /** Revoke the customer token. */
  revokeCustomerToken: Maybe<RevokeCustomerTokenOutput>
  /** Send a message on behalf of a customer to the specified email addresses. */
  sendEmailToFriend: Maybe<SendEmailToFriendOutput>
  /** Set the billing address on a specific cart. */
  setBillingAddressOnCart: Maybe<SetBillingAddressOnCartOutput>
  /** Sets the cart as inactive */
  setCartAsInactive: Maybe<SetCartAsInactiveOutput>
  /** Assign the email address of a guest to the cart. */
  setGuestEmailOnCart: Maybe<SetGuestEmailOnCartOutput>
  /**
   * Set the cart payment method and convert the cart into an order.
   * @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request.
   */
  setPaymentMethodAndPlaceOrder: Maybe<PlaceOrderOutput>
  /** Apply a payment method to the cart. */
  setPaymentMethodOnCart: Maybe<SetPaymentMethodOnCartOutput>
  /** Set one or more shipping addresses on a specific cart. */
  setShippingAddressesOnCart: Maybe<SetShippingAddressesOnCartOutput>
  /** Set one or more delivery methods on a cart. */
  setShippingMethodsOnCart: Maybe<SetShippingMethodsOnCartOutput>
  /** Subscribe the specified email to the store's newsletter. */
  subscribeEmailToNewsletter: Maybe<SubscribeEmailToNewsletterOutput>
  /** Synchronizes the payment order details for further payment processing */
  syncPaymentOrder: Maybe<Scalars['Boolean']['output']>
  /** Modify items in the cart. */
  updateCartItems: Maybe<UpdateCartItemsOutput>
  /** @deprecated Use `updateCustomerV2` instead. */
  updateCustomer: Maybe<CustomerOutput>
  /** Update the billing or shipping address of a customer or guest. */
  updateCustomerAddress: Maybe<CustomerAddress>
  /** Change the email address for the logged-in customer. */
  updateCustomerEmail: Maybe<CustomerOutput>
  /** Update the customer's personal information. */
  updateCustomerV2: Maybe<CustomerOutput>
  /** Update one or more products in the specified wish list. */
  updateProductsInWishlist: Maybe<UpdateProductsInWishlistOutput>
}

export type MutationAddBundleProductsToCartArgs = {
  input: InputMaybe<AddBundleProductsToCartInput>
}

export type MutationAddConfigurableProductsToCartArgs = {
  input: InputMaybe<AddConfigurableProductsToCartInput>
}

export type MutationAddDownloadableProductsToCartArgs = {
  input: InputMaybe<AddDownloadableProductsToCartInput>
}

export type MutationAddProductsToCartArgs = {
  cartId: Scalars['String']['input']
  cartItems: Array<CartItemInput>
}

export type MutationAddProductsToCompareListArgs = {
  input: InputMaybe<AddProductsToCompareListInput>
}

export type MutationAddProductsToNewCartArgs = {
  cartItems: Array<CartItemInput>
}

export type MutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID']['input']
  wishlistItems: Array<WishlistItemInput>
}

export type MutationAddSimpleProductsToCartArgs = {
  input: InputMaybe<AddSimpleProductsToCartInput>
}

export type MutationAddStripePaymentMethodArgs = {
  input: StripePaymentMethodId
}

export type MutationAddVirtualProductsToCartArgs = {
  input: InputMaybe<AddVirtualProductsToCartInput>
}

export type MutationAddWishlistItemsToCartArgs = {
  wishlistId: Scalars['ID']['input']
  wishlistItemIds: InputMaybe<Array<Scalars['ID']['input']>>
}

export type MutationApplyCouponToCartArgs = {
  input: InputMaybe<ApplyCouponToCartInput>
}

export type MutationAssignCompareListToCustomerArgs = {
  uid: Scalars['ID']['input']
}

export type MutationAssignCustomerToGuestCartArgs = {
  cart_id: Scalars['String']['input']
}

export type MutationCancelOrderArgs = {
  input: CancelOrderInput
}

export type MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String']['input']
  newPassword: Scalars['String']['input']
}

export type MutationCompleteOrderArgs = {
  input: InputMaybe<CompleteOrderInput>
}

export type MutationConfirmCancelOrderArgs = {
  input: ConfirmCancelOrderInput
}

export type MutationConfirmEmailArgs = {
  input: ConfirmEmailInput
}

export type MutationContactUsArgs = {
  input: ContactUsInput
}

export type MutationCreateBraintreePayPalVaultClientTokenArgs = {
  input: InputMaybe<BraintreeVaultInput>
}

export type MutationCreateCompareListArgs = {
  input: InputMaybe<CreateCompareListInput>
}

export type MutationCreateCustomerArgs = {
  input: CustomerInput
}

export type MutationCreateCustomerAddressArgs = {
  input: CustomerAddressInput
}

export type MutationCreateCustomerV2Args = {
  input: CustomerCreateInput
}

export type MutationCreateEmptyCartArgs = {
  input: InputMaybe<CreateEmptyCartInput>
}

export type MutationCreateGuestCartArgs = {
  input: InputMaybe<CreateGuestCartInput>
}

export type MutationCreatePayflowProTokenArgs = {
  input: PayflowProTokenInput
}

export type MutationCreatePaymentOrderArgs = {
  input: CreatePaymentOrderInput
}

export type MutationCreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput
}

export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput
}

export type MutationCreateVaultCardPaymentTokenArgs = {
  input: CreateVaultCardPaymentTokenInput
}

export type MutationCreateVaultCardSetupTokenArgs = {
  input: CreateVaultCardSetupTokenInput
}

export type MutationDeleteCompareListArgs = {
  uid: Scalars['ID']['input']
}

export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String']['input']
}

export type MutationDeleteStripePaymentMethodArgs = {
  input: StripePaymentMethodId
}

export type MutationEstimateShippingMethodsArgs = {
  input: EstimateTotalsInput
}

export type MutationEstimateTotalsArgs = {
  input: EstimateTotalsInput
}

export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type MutationGenerateCustomerTokenAsAdminArgs = {
  input: GenerateCustomerTokenAsAdminInput
}

export type MutationHandlePayflowProResponseArgs = {
  input: PayflowProResponseInput
}

export type MutationLofAddGiftCardToQuoteArgs = {
  cart_id: Scalars['String']['input']
  code: Scalars['String']['input']
}

export type MutationLofApplyCustomerBalanceToCartArgs = {
  cart_id: Scalars['String']['input']
}

export type MutationLofGiftCardRedeemArgs = {
  code: Scalars['String']['input']
  customer_id: Scalars['String']['input']
}

export type MutationMergeCartsArgs = {
  destination_cart_id: InputMaybe<Scalars['String']['input']>
  source_cart_id: Scalars['String']['input']
}

export type MutationPlaceOrderArgs = {
  input: InputMaybe<PlaceOrderInput>
}

export type MutationRemoveCouponFromCartArgs = {
  input: InputMaybe<RemoveCouponFromCartInput>
}

export type MutationRemoveItemFromCartArgs = {
  input: InputMaybe<RemoveItemFromCartInput>
}

export type MutationRemoveProductsFromCompareListArgs = {
  input: InputMaybe<RemoveProductsFromCompareListInput>
}

export type MutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID']['input']
  wishlistItemsIds: Array<Scalars['ID']['input']>
}

export type MutationReorderItemsArgs = {
  orderNumber: Scalars['String']['input']
}

export type MutationRequestGuestOrderCancelArgs = {
  input: GuestOrderCancelInput
}

export type MutationRequestPasswordResetEmailArgs = {
  email: Scalars['String']['input']
}

export type MutationResendConfirmationEmailArgs = {
  email: Scalars['String']['input']
}

export type MutationResetPasswordArgs = {
  email: Scalars['String']['input']
  newPassword: Scalars['String']['input']
  resetPasswordToken: Scalars['String']['input']
}

export type MutationSendEmailToFriendArgs = {
  input: InputMaybe<SendEmailToFriendInput>
}

export type MutationSetBillingAddressOnCartArgs = {
  input: InputMaybe<SetBillingAddressOnCartInput>
}

export type MutationSetCartAsInactiveArgs = {
  cartId: Scalars['String']['input']
}

export type MutationSetGuestEmailOnCartArgs = {
  input: InputMaybe<SetGuestEmailOnCartInput>
}

export type MutationSetPaymentMethodAndPlaceOrderArgs = {
  input: InputMaybe<SetPaymentMethodAndPlaceOrderInput>
}

export type MutationSetPaymentMethodOnCartArgs = {
  input: InputMaybe<SetPaymentMethodOnCartInput>
}

export type MutationSetShippingAddressesOnCartArgs = {
  input: InputMaybe<SetShippingAddressesOnCartInput>
}

export type MutationSetShippingMethodsOnCartArgs = {
  input: InputMaybe<SetShippingMethodsOnCartInput>
}

export type MutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String']['input']
}

export type MutationSyncPaymentOrderArgs = {
  input: InputMaybe<SyncPaymentOrderInput>
}

export type MutationUpdateCartItemsArgs = {
  input: InputMaybe<UpdateCartItemsInput>
}

export type MutationUpdateCustomerArgs = {
  input: CustomerInput
}

export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int']['input']
  input: InputMaybe<CustomerAddressInput>
}

export type MutationUpdateCustomerEmailArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type MutationUpdateCustomerV2Args = {
  input: CustomerUpdateInput
}

export type MutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID']['input']
  wishlistItems: Array<WishlistItemUpdateInput>
}

/** Contains an error message when an invalid UID was specified. */
export type NoSuchEntityUidError = ErrorInterface & {
  __typename?: 'NoSuchEntityUidError'
  /** The returned error message. */
  message: Scalars['String']['output']
  /** The specified invalid unique ID of an object. */
  uid: Scalars['ID']['output']
}

/** Contains the order ID. */
export type Order = {
  __typename?: 'Order'
  /** The client secret of the PaymentIntent or SetupIntent that is associated with this order */
  client_secret: Maybe<Scalars['String']['output']>
  /** @deprecated Use `order_number` instead. */
  order_id: Maybe<Scalars['String']['output']>
  /** The unique ID for an `Order` object. */
  order_number: Scalars['String']['output']
}

/** The list of available order actions. */
export type OrderActionType
  = | 'CANCEL'
    | 'REORDER'

/** Contains detailed information about an order's billing and shipping addresses. */
export type OrderAddress = {
  __typename?: 'OrderAddress'
  /** The city or town. */
  city: Scalars['String']['output']
  /** The customer's company. */
  company: Maybe<Scalars['String']['output']>
  /** The customer's country. */
  country_code: Maybe<CountryCodeEnum>
  /** The fax number. */
  fax: Maybe<Scalars['String']['output']>
  /** The first name of the person associated with the shipping/billing address. */
  firstname: Scalars['String']['output']
  /** The family name of the person associated with the shipping/billing address. */
  lastname: Scalars['String']['output']
  /** The middle name of the person associated with the shipping/billing address. */
  middlename: Maybe<Scalars['String']['output']>
  /** The customer's ZIP or postal code. */
  postcode: Maybe<Scalars['String']['output']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: Maybe<Scalars['String']['output']>
  /** The state or province name. */
  region: Maybe<Scalars['String']['output']>
  /** The unique ID for a `Region` object of a pre-defined region. */
  region_id: Maybe<Scalars['ID']['output']>
  /** An array of strings that define the street number and name. */
  street: Array<Maybe<Scalars['String']['output']>>
  /** A value such as Sr., Jr., or III. */
  suffix: Maybe<Scalars['String']['output']>
  /** The telephone number. */
  telephone: Maybe<Scalars['String']['output']>
  /** The customer's Value-added tax (VAT) number (for corporate customers). */
  vat_id: Maybe<Scalars['String']['output']>
}

export type OrderCustomerInfo = {
  __typename?: 'OrderCustomerInfo'
  /** First name of the customer */
  firstname: Scalars['String']['output']
  /** Last name of the customer */
  lastname: Maybe<Scalars['String']['output']>
  /** Middle name of the customer */
  middlename: Maybe<Scalars['String']['output']>
  /** Prefix of the customer */
  prefix: Maybe<Scalars['String']['output']>
  /** Suffix of the customer */
  suffix: Maybe<Scalars['String']['output']>
}

/** Input to retrieve an order based on details. */
export type OrderInformationInput = {
  /** Order billing address email. */
  email: Scalars['String']['input']
  /** Order billing address lastname. */
  lastname: Scalars['String']['input']
  /** Order number. */
  number: Scalars['String']['input']
}

export type OrderItem = OrderItemInterface & {
  __typename?: 'OrderItem'
  /** The final discount information for the product. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The entered option for the base product, such as a logo or image. */
  entered_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The selected gift message for the order item */
  gift_message: Maybe<GiftMessage>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output']
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<OrderItemPrices>
  /** The ProductInterface object, which contains details about the base product */
  product: Maybe<ProductInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The type of product, such as simple, configurable, etc. */
  product_type: Maybe<Scalars['String']['output']>
  /** URL key of the base product. */
  product_url_key: Maybe<Scalars['String']['output']>
  /** The number of canceled items. */
  quantity_canceled: Maybe<Scalars['Float']['output']>
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>
  /** The number of units ordered for this item. */
  quantity_ordered: Maybe<Scalars['Float']['output']>
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>
  /** The number of returned items. */
  quantity_returned: Maybe<Scalars['Float']['output']>
  /** The number of shipped items. */
  quantity_shipped: Maybe<Scalars['Float']['output']>
  /** The selected options for the base product, such as color or size. */
  selected_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The status of the order item. */
  status: Maybe<Scalars['String']['output']>
}

/** Order item details. */
export type OrderItemInterface = {
  /** The final discount information for the product. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The entered option for the base product, such as a logo or image. */
  entered_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The selected gift message for the order item */
  gift_message: Maybe<GiftMessage>
  /** The unique ID for an `OrderItemInterface` object. */
  id: Scalars['ID']['output']
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<OrderItemPrices>
  /** The ProductInterface object, which contains details about the base product */
  product: Maybe<ProductInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price of the base product, including selected options. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The type of product, such as simple, configurable, etc. */
  product_type: Maybe<Scalars['String']['output']>
  /** URL key of the base product. */
  product_url_key: Maybe<Scalars['String']['output']>
  /** The number of canceled items. */
  quantity_canceled: Maybe<Scalars['Float']['output']>
  /** The number of invoiced items. */
  quantity_invoiced: Maybe<Scalars['Float']['output']>
  /** The number of units ordered for this item. */
  quantity_ordered: Maybe<Scalars['Float']['output']>
  /** The number of refunded items. */
  quantity_refunded: Maybe<Scalars['Float']['output']>
  /** The number of returned items. */
  quantity_returned: Maybe<Scalars['Float']['output']>
  /** The number of shipped items. */
  quantity_shipped: Maybe<Scalars['Float']['output']>
  /** The selected options for the base product, such as color or size. */
  selected_options: Maybe<Array<Maybe<OrderItemOption>>>
  /** The status of the order item. */
  status: Maybe<Scalars['String']['output']>
}

/** Represents order item options like selected or entered. */
export type OrderItemOption = {
  __typename?: 'OrderItemOption'
  /** The name of the option. */
  label: Scalars['String']['output']
  /** The value of the option. */
  value: Scalars['String']['output']
}

export type OrderItemPrices = {
  __typename?: 'OrderItemPrices'
  /** An array of discounts to be applied to the cart item. */
  discounts: Maybe<Array<Maybe<Discount>>>
  fixed_product_taxes: Array<Maybe<FixedProductTax>>
  /** The original price of the item. */
  original_price: Maybe<Money>
  /** The original price of the item including tax. */
  original_price_including_tax: Maybe<Money>
  /** The value of the original price multiplied by the quantity of the item. */
  original_row_total: Money
  /** The value of the original price multiplied by the quantity of the item including tax. */
  original_row_total_including_tax: Money
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price: Money
  /** The price of the item before any discounts were applied. The price that might include tax, depending on the configured display settings for cart. */
  price_including_tax: Money
  /** The value of the price multiplied by the quantity of the item. */
  row_total: Money
  /** The value of `row_total` plus the tax applied to the item. */
  row_total_including_tax: Money
  /** The total of all discounts applied to the item. */
  total_item_discount: Money
}

/** Contains details about the payment method used to pay for the order. */
export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod'
  /** Additional data per payment method type. */
  additional_data: Maybe<Array<Maybe<KeyValue>>>
  /** The label that describes the payment method. */
  name: Scalars['String']['output']
  /** The payment method code that indicates how the order was paid for. */
  type: Scalars['String']['output']
}

/** Contains order shipment details. */
export type OrderShipment = {
  __typename?: 'OrderShipment'
  /** Comments added to the shipment. */
  comments: Maybe<Array<Maybe<SalesCommentItem>>>
  /** The unique ID for a `OrderShipment` object. */
  id: Scalars['ID']['output']
  /** An array of items included in the shipment. */
  items: Maybe<Array<Maybe<ShipmentItemInterface>>>
  /** The sequential credit shipment number. */
  number: Scalars['String']['output']
  /** An array of shipment tracking details. */
  tracking: Maybe<Array<Maybe<ShipmentTracking>>>
}

/** Input to retrieve an order based on token. */
export type OrderTokenInput = {
  /** Order token. */
  token: Scalars['String']['input']
}

/** Contains details about the sales total amounts used to calculate the final price. */
export type OrderTotal = {
  __typename?: 'OrderTotal'
  /** The final base grand total amount in the base currency. */
  base_grand_total: Money
  /** The applied discounts to the order. */
  discounts: Maybe<Array<Maybe<Discount>>>
  /** The final total amount, including shipping, discounts, and taxes. */
  grand_total: Money
  /** Details about the shipping and handling costs for the order. */
  shipping_handling: Maybe<ShippingHandling>
  /**
   * The subtotal of the order, excluding shipping, discounts, and taxes.
   * @deprecated Use subtotal_excl_tax field instead
   */
  subtotal: Money
  /** The subtotal of the order, excluding taxes. */
  subtotal_excl_tax: Money
  /** The subtotal of the order, including taxes. */
  subtotal_incl_tax: Money
  /** The order tax details. */
  taxes: Maybe<Array<Maybe<TaxItem>>>
  /** The shipping amount for the order. */
  total_shipping: Money
  /** The amount of tax applied to the order. */
  total_tax: Money
}

/** Contains required input for Payflow Express Checkout payments. */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input']
  /** The token returned by the createPaypalExpressToken mutation. */
  token: Scalars['String']['input']
}

/** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input']
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input']
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input']
}

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkMode
  = | 'LIVE'
    | 'TEST'

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
  __typename?: 'PayflowLinkToken'
  /** The mode for the Payflow transaction. */
  mode: Maybe<PayflowLinkMode>
  /** The PayPal URL used for requesting a Payflow form. */
  paypal_url: Maybe<Scalars['String']['output']>
  /** The secure token generated by PayPal. */
  secure_token: Maybe<Scalars['String']['output']>
  /** The secure token ID generated by PayPal. */
  secure_token_id: Maybe<Scalars['String']['output']>
}

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input']
}

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: CreditCardDetailsInput
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler: InputMaybe<Scalars['Boolean']['input']>
}

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input']
  /** The payload returned from PayPal. */
  paypal_payload: Scalars['String']['input']
}

export type PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput'
  /** The cart with the updated selected payment method. */
  cart: Cart
}

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  __typename?: 'PayflowProToken'
  /** The RESPMSG returned by PayPal. If the `result` is `0`, then `response_message` is `Approved`. */
  response_message: Scalars['String']['output']
  /** A non-zero value if any errors occurred. */
  result: Scalars['Int']['output']
  /** The RESULT returned by PayPal. A value of `0` indicates the transaction was approved. */
  result_code: Scalars['Int']['output']
  /** A secure token generated by PayPal. */
  secure_token: Scalars['String']['output']
  /** A secure token ID generated by PayPal. */
  secure_token_id: Scalars['String']['output']
}

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars['String']['input']
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput
}

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input']
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String']['input']
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input']
}

export type PaymentCommonConfig = PaymentConfigItem & {
  __typename?: 'PaymentCommonConfig'
  /** The payment method code as defined in the payment gateway */
  code: Maybe<Scalars['String']['output']>
  /** Indicates whether the payment method is displayed */
  is_visible: Maybe<Scalars['Boolean']['output']>
  /** Defines the payment intent (Authorize or Capture */
  payment_intent: Maybe<Scalars['String']['output']>
  /** The PayPal parameters required to load the JS SDK */
  sdk_params: Maybe<Array<Maybe<SdkParams>>>
  /** The relative order the payment method is displayed on the checkout page */
  sort_order: Maybe<Scalars['String']['output']>
  /** The name displayed for the payment method */
  title: Maybe<Scalars['String']['output']>
}

/** Contains payment fields that are common to all types of payment methods. */
export type PaymentConfigItem = {
  /** The payment method code as defined in the payment gateway */
  code: Maybe<Scalars['String']['output']>
  /** Indicates whether the payment method is displayed */
  is_visible: Maybe<Scalars['Boolean']['output']>
  /** Defines the payment intent (Authorize or Capture */
  payment_intent: Maybe<Scalars['String']['output']>
  /** The PayPal parameters required to load the JS SDK */
  sdk_params: Maybe<Array<Maybe<SdkParams>>>
  /** The relative order the payment method is displayed on the checkout page */
  sort_order: Maybe<Scalars['String']['output']>
  /** The name displayed for the payment method */
  title: Maybe<Scalars['String']['output']>
}

/** Retrieves the payment configuration for a given location */
export type PaymentConfigOutput = {
  __typename?: 'PaymentConfigOutput'
  /** ApplePay payment method configuration */
  apple_pay: Maybe<ApplePayConfig>
  /** Fastlane payment method configuration */
  fastlane: Maybe<FastlaneConfig>
  /** GooglePay payment method configuration */
  google_pay: Maybe<GooglePayConfig>
  /** Hosted fields payment method configuration */
  hosted_fields: Maybe<HostedFieldsConfig>
  /** Smart Buttons payment method configuration */
  smart_buttons: Maybe<SmartButtonsConfig>
}

/** Defines the origin location for that payment request */
export type PaymentLocation
  = | 'ADMIN'
    | 'CART'
    | 'CHECKOUT'
    | 'MINICART'
    | 'PRODUCT_DETAIL'

/** Defines the payment method. */
export type PaymentMethodInput = {
  braintree: InputMaybe<BraintreeInput>
  braintree_ach_direct_debit: InputMaybe<BraintreeInput>
  braintree_ach_direct_debit_vault: InputMaybe<BraintreeVaultInput>
  braintree_applepay_vault: InputMaybe<BraintreeVaultInput>
  braintree_cc_vault: InputMaybe<BraintreeCcVaultInput>
  braintree_googlepay_vault: InputMaybe<BraintreeVaultInput>
  braintree_paypal: InputMaybe<BraintreeInput>
  braintree_paypal_vault: InputMaybe<BraintreeVaultInput>
  /** The internal name for the payment method. */
  code: Scalars['String']['input']
  /** Required input for PayPal Hosted pro payments. */
  hosted_pro: InputMaybe<HostedProInput>
  /** Required input for Payflow Express Checkout payments. */
  payflow_express: InputMaybe<PayflowExpressInput>
  /** Required input for PayPal Payflow Link and Payments Advanced payments. */
  payflow_link: InputMaybe<PayflowLinkInput>
  /** Required input for PayPal Payflow Pro and Payment Pro payments. */
  payflowpro: InputMaybe<PayflowProInput>
  /** Required input for PayPal Payflow Pro vault payments. */
  payflowpro_cc_vault: InputMaybe<VaultTokenInput>
  /** Required input for Apple Pay button */
  payment_services_paypal_apple_pay: InputMaybe<ApplePayMethodInput>
  /** Required input for fastlane */
  payment_services_paypal_fastlane: InputMaybe<FastlaneMethodInput>
  /** Required input for Google Pay button */
  payment_services_paypal_google_pay: InputMaybe<GooglePayMethodInput>
  /** Required input for Hosted Fields */
  payment_services_paypal_hosted_fields: InputMaybe<HostedFieldsInput>
  /** Required input for Smart buttons */
  payment_services_paypal_smart_buttons: InputMaybe<SmartButtonMethodInput>
  /** Required input for vault */
  payment_services_paypal_vault: InputMaybe<VaultMethodInput>
  /** Required input for Express Checkout and Payments Standard payments. */
  paypal_express: InputMaybe<PaypalExpressInput>
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number: InputMaybe<Scalars['String']['input']>
  /** Required input for Stripe Payments */
  stripe_payments: InputMaybe<StripePaymentsInput>
}

/** Contains the payment order details */
export type PaymentOrderOutput = {
  __typename?: 'PaymentOrderOutput'
  /** PayPal order ID */
  id: Maybe<Scalars['String']['output']>
  /** The order ID generated by Payment Services */
  mp_order_id: Maybe<Scalars['String']['output']>
  /** Details about the card used on the order */
  payment_source_details: Maybe<PaymentSourceDetails>
  /** The status of the payment order */
  status: Maybe<Scalars['String']['output']>
}

export type PaymentSdkParamsItem = {
  __typename?: 'PaymentSDKParamsItem'
  /** The payment method code used in the order */
  code: Maybe<Scalars['String']['output']>
  /** The payment SDK parameters */
  params: Maybe<Array<Maybe<SdkParams>>>
}

export type PaymentSourceDetails = {
  __typename?: 'PaymentSourceDetails'
  /** Details about the card used on the order */
  card: Maybe<Card>
}

/** The payment source information */
export type PaymentSourceInput = {
  /** The card payment source information */
  card: CardPaymentSourceInput
}

/** The payment source information */
export type PaymentSourceOutput = {
  __typename?: 'PaymentSourceOutput'
  /** The card payment source information */
  card: CardPaymentSourceOutput
}

/** The stored payment method available to the customer. */
export type PaymentToken = {
  __typename?: 'PaymentToken'
  /** A description of the stored account details. */
  details: Maybe<Scalars['String']['output']>
  /** The payment method code associated with the token. */
  payment_method_code: Scalars['String']['output']
  /** The public hash of the token. */
  public_hash: Scalars['String']['output']
  /** Specifies the payment token type. */
  type: PaymentTokenTypeEnum
}

/** The list of available payment token types. */
export type PaymentTokenTypeEnum
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  = | 'account'
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
    | 'card'

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars['String']['input']
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars['String']['input']
}

/** Deprecated. Use `PaypalExpressTokenOutput` instead. */
export type PaypalExpressToken = {
  __typename?: 'PaypalExpressToken'
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details.
   * @deprecated Use `PaypalExpressTokenOutput.paypal_urls` instead.
   */
  paypal_urls: Maybe<PaypalExpressUrlList>
  /**
   * The token returned by PayPal.
   * @deprecated Use `PaypalExpressTokenOutput.token` instead.
   */
  token: Maybe<Scalars['String']['output']>
}

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars['String']['input']
  /** The payment method code. */
  code: Scalars['String']['input']
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button: InputMaybe<Scalars['Boolean']['input']>
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: PaypalExpressUrlsInput
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit: InputMaybe<Scalars['Boolean']['input']>
}

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput'
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details. */
  paypal_urls: Maybe<PaypalExpressUrlList>
  /** The token returned by PayPal. */
  token: Maybe<Scalars['String']['output']>
}

/** Contains a set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList'
  /** The PayPal URL that allows the buyer to edit their checkout details. */
  edit: Maybe<Scalars['String']['output']>
  /** The URL to the PayPal login page. */
  start: Maybe<Scalars['String']['output']>
}

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String']['input']
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url: InputMaybe<Scalars['String']['input']>
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String']['input']
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url: InputMaybe<Scalars['String']['input']>
}

/** Contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>
}

/** Defines Pickup Location information. */
export type PickupLocation = {
  __typename?: 'PickupLocation'
  city: Maybe<Scalars['String']['output']>
  contact_name: Maybe<Scalars['String']['output']>
  country_id: Maybe<Scalars['String']['output']>
  description: Maybe<Scalars['String']['output']>
  email: Maybe<Scalars['String']['output']>
  fax: Maybe<Scalars['String']['output']>
  latitude: Maybe<Scalars['Float']['output']>
  longitude: Maybe<Scalars['Float']['output']>
  name: Maybe<Scalars['String']['output']>
  phone: Maybe<Scalars['String']['output']>
  pickup_location_code: Maybe<Scalars['String']['output']>
  postcode: Maybe<Scalars['String']['output']>
  region: Maybe<Scalars['String']['output']>
  region_id: Maybe<Scalars['Int']['output']>
  street: Maybe<Scalars['String']['output']>
}

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city: InputMaybe<FilterTypeInput>
  /** Filter by country. */
  country_id: InputMaybe<FilterTypeInput>
  /** Filter by pickup location name. */
  name: InputMaybe<FilterTypeInput>
  /** Filter by pickup location code. */
  pickup_location_code: InputMaybe<FilterTypeInput>
  /** Filter by postcode. */
  postcode: InputMaybe<FilterTypeInput>
  /** Filter by region. */
  region: InputMaybe<FilterTypeInput>
  /** Filter by region id. */
  region_id: InputMaybe<FilterTypeInput>
  /** Filter by street. */
  street: InputMaybe<FilterTypeInput>
}

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city: InputMaybe<SortEnum>
  /** Name of the contact person. */
  contact_name: InputMaybe<SortEnum>
  /** Id of the country in two letters. */
  country_id: InputMaybe<SortEnum>
  /** Description of the pickup location. */
  description: InputMaybe<SortEnum>
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance: InputMaybe<SortEnum>
  /** Contact email of the pickup location. */
  email: InputMaybe<SortEnum>
  /** Contact fax of the pickup location. */
  fax: InputMaybe<SortEnum>
  /** Geographic latitude where pickup location is placed. */
  latitude: InputMaybe<SortEnum>
  /** Geographic longitude where pickup location is placed. */
  longitude: InputMaybe<SortEnum>
  /** The pickup location name. Customer use this to identify the pickup location. */
  name: InputMaybe<SortEnum>
  /** Contact phone number of the pickup location. */
  phone: InputMaybe<SortEnum>
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code: InputMaybe<SortEnum>
  /** Postcode where pickup location is placed. */
  postcode: InputMaybe<SortEnum>
  /** Name of the region. */
  region: InputMaybe<SortEnum>
  /** Id of the region. */
  region_id: InputMaybe<SortEnum>
  /** Street where pickup location is placed. */
  street: InputMaybe<SortEnum>
}

/** Top level object returned in a pickup locations search. */
export type PickupLocations = {
  __typename?: 'PickupLocations'
  /** An array of pickup locations that match the specific search request. */
  items: Maybe<Array<Maybe<PickupLocation>>>
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info: Maybe<SearchResultPageInfo>
  /** The number of products returned. */
  total_count: Maybe<Scalars['Int']['output']>
}

/** An error encountered while placing an order. */
export type PlaceOrderError = {
  __typename?: 'PlaceOrderError'
  /** An error code that is specific to place order. */
  code: PlaceOrderErrorCodes
  /** A localized error message. */
  message: Scalars['String']['output']
}

export type PlaceOrderErrorCodes
  = | 'CART_NOT_ACTIVE'
    | 'CART_NOT_FOUND'
    | 'GUEST_EMAIL_MISSING'
    | 'UNABLE_TO_PLACE_ORDER'
    | 'UNDEFINED'

/** Specifies the quote to be converted to an order. */
export type PlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
}

/** Contains the results of the request to place an order. */
export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput'
  /** An array of place order errors. */
  errors: Array<Maybe<PlaceOrderError>>
  /**
   * The ID of the order.
   * @deprecated Use `orderV2` instead.
   */
  order: Maybe<Order>
  /** Full order information. */
  orderV2: Maybe<CustomerOrder>
}

/** Deprecated. Use `ProductPrice` instead. Defines the price of a product as well as any tax-related adjustments. */
export type Price = {
  __typename?: 'Price'
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Use `ProductPrice` instead.
   */
  adjustments: Maybe<Array<Maybe<PriceAdjustment>>>
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Use `ProductPrice` instead.
   */
  amount: Maybe<Money>
}

/** Deprecated. Taxes will be included or excluded in the price. Defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
  __typename?: 'PriceAdjustment'
  /** The amount of the price adjustment and its currency code. */
  amount: Maybe<Money>
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  code: Maybe<PriceAdjustmentCodesEnum>
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated `PriceAdjustment` is deprecated.
   */
  description: Maybe<PriceAdjustmentDescriptionEnum>
}

/** `PriceAdjustment.code` is deprecated. */
export type PriceAdjustmentCodesEnum
  = | 'TAX'
    | 'WEEE'
    | 'WEEE_TAX'

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export type PriceAdjustmentDescriptionEnum
  = | 'EXCLUDED'
    | 'INCLUDED'

/** Can be used to retrieve the main price details in case of bundle product */
export type PriceDetails = {
  __typename?: 'PriceDetails'
  /** The percentage of discount applied to the main product price */
  discount_percentage: Maybe<Scalars['Float']['output']>
  /** The final price after applying the discount to the main product */
  main_final_price: Maybe<Scalars['Float']['output']>
  /** The regular price of the main product */
  main_price: Maybe<Scalars['Float']['output']>
}

/** Contains the price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  __typename?: 'PriceRange'
  /** The highest possible price for the product. */
  maximum_price: Maybe<ProductPrice>
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice
}

/** Defines the price type. */
export type PriceTypeEnum
  = | 'DYNAMIC'
    | 'FIXED'
    | 'PERCENT'

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export type PriceViewEnum
  = | 'AS_LOW_AS'
    | 'PRICE_RANGE'

/** Contains a product attribute code and value. */
export type ProductAttribute = {
  __typename?: 'ProductAttribute'
  /** The unique identifier for a product attribute code. */
  code: Scalars['String']['output']
  /** The display value of the attribute. */
  value: Scalars['String']['output']
}

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Activity */
  activity: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Category Gear */
  category_gear: InputMaybe<FilterEqualTypeInput>
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id: InputMaybe<FilterEqualTypeInput>
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid: InputMaybe<FilterEqualTypeInput>
  /** Filter product by category URL path. */
  category_url_path: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Climate */
  climate: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Collar */
  collar: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Color */
  color: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Description */
  description: InputMaybe<FilterMatchTypeInput>
  /** Attribute label: Eco Collection */
  eco_collection: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Erin Recommends */
  erin_recommends: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Features */
  features_bags: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Format */
  format: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Gender */
  gender: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Is Seller Product */
  is_seller_product: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Material */
  material: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Product Name */
  name: InputMaybe<FilterMatchTypeInput>
  /** Attribute label: New */
  new: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Pattern */
  pattern: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Performance Fabric */
  performance_fabric: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Price */
  price: InputMaybe<FilterRangeTypeInput>
  /** Attribute label: Sale */
  sale: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Short Description */
  short_description: InputMaybe<FilterMatchTypeInput>
  /** Attribute label: Size */
  size: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: SKU */
  sku: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Sleeve */
  sleeve: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Strap/Handle */
  strap_bags: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Style Bags */
  style_bags: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Style Bottom */
  style_bottom: InputMaybe<FilterEqualTypeInput>
  /** Attribute label: Style General */
  style_general: InputMaybe<FilterEqualTypeInput>
  /** The part of the URL that identifies the product */
  url_key: InputMaybe<FilterEqualTypeInput>
}

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name: InputMaybe<SortEnum>
  /** Sort by the position assigned to each product. */
  position: InputMaybe<SortEnum>
  /** Attribute label: Price */
  price: InputMaybe<SortEnum>
  /** Sort by the search relevance score (default). */
  relevance: InputMaybe<SortEnum>
}

/** Product custom attributes */
export type ProductCustomAttributes = {
  __typename?: 'ProductCustomAttributes'
  /** Errors when retrieving custom attributes metadata. */
  errors: Array<Maybe<AttributeMetadataError>>
  /** Requested custom attributes */
  items: Array<Maybe<AttributeValueInterface>>
}

/** Contains the discount applied to a product price. */
export type ProductDiscount = {
  __typename?: 'ProductDiscount'
  /** The actual value of the discount. */
  amount_off: Maybe<Scalars['Float']['output']>
  /** The discount expressed a percentage. */
  percent_off: Maybe<Scalars['Float']['output']>
}

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id: InputMaybe<FilterTypeInput>
  /** The product's country of origin. */
  country_of_manufacture: InputMaybe<FilterTypeInput>
  /** The timestamp indicating when the product was created. */
  created_at: InputMaybe<FilterTypeInput>
  /** The name of a custom layout. */
  custom_layout: InputMaybe<FilterTypeInput>
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update: InputMaybe<FilterTypeInput>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: InputMaybe<FilterTypeInput>
  /** Indicates whether a gift message is available. */
  gift_message_available: InputMaybe<FilterTypeInput>
  /** Indicates whether additional attributes have been created for the product. */
  has_options: InputMaybe<FilterTypeInput>
  /** The relative path to the main image on the product page. */
  image: InputMaybe<FilterTypeInput>
  /** The label assigned to a product image. */
  image_label: InputMaybe<FilterTypeInput>
  /** A number representing the product's manufacturer. */
  manufacturer: InputMaybe<FilterTypeInput>
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price: InputMaybe<FilterTypeInput>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: InputMaybe<FilterTypeInput>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: InputMaybe<FilterTypeInput>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: InputMaybe<FilterTypeInput>
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price: InputMaybe<FilterTypeInput>
  /** The product name. Customers use this name to identify the product. */
  name: InputMaybe<FilterTypeInput>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date: InputMaybe<FilterTypeInput>
  /** The end date for new product listings. */
  news_to_date: InputMaybe<FilterTypeInput>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: InputMaybe<FilterTypeInput>
  /** The keyword required to perform a logical OR comparison. */
  or: InputMaybe<ProductFilterInput>
  /** The price of an item. */
  price: InputMaybe<FilterTypeInput>
  /** Indicates whether the product has required options. */
  required_options: InputMaybe<FilterTypeInput>
  /** A short description of the product. Its use depends on the theme. */
  short_description: InputMaybe<FilterTypeInput>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: InputMaybe<FilterTypeInput>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: InputMaybe<FilterTypeInput>
  /** The label assigned to a product's small image. */
  small_image_label: InputMaybe<FilterTypeInput>
  /** The beginning date that a product has a special price. */
  special_from_date: InputMaybe<FilterTypeInput>
  /** The discounted price of the product. Do not include the currency code. */
  special_price: InputMaybe<FilterTypeInput>
  /** The end date that a product has a special price. */
  special_to_date: InputMaybe<FilterTypeInput>
  /** The file name of a swatch image. */
  swatch_image: InputMaybe<FilterTypeInput>
  /** The relative path to the product's thumbnail image. */
  thumbnail: InputMaybe<FilterTypeInput>
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label: InputMaybe<FilterTypeInput>
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price: InputMaybe<FilterTypeInput>
  /** The timestamp indicating when the product was updated. */
  updated_at: InputMaybe<FilterTypeInput>
  /** The part of the URL that identifies the product */
  url_key: InputMaybe<FilterTypeInput>
  url_path: InputMaybe<FilterTypeInput>
  /** The weight of the item, in units defined by the store. */
  weight: InputMaybe<FilterTypeInput>
}

/** Contains product image information, including the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  __typename?: 'ProductImage'
  /** Indicates whether the image is hidden from view. */
  disabled: Maybe<Scalars['Boolean']['output']>
  /** The label of the product image or video. */
  label: Maybe<Scalars['String']['output']>
  /** The media item's position after it has been sorted. */
  position: Maybe<Scalars['Int']['output']>
  /** The URL of the product image or video. */
  url: Maybe<Scalars['String']['output']>
}

export type ProductImageThumbnail
  /** Use thumbnail of product as image. */
  = | 'ITSELF'
  /** Use thumbnail of product's parent as image. */
    | 'PARENT'

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars['String']['input']
}

/** Contains fields that are common to all types of products. */
export type ProductInterface = {
  /** @deprecated Use the `custom_attributes` field instead. */
  activity: Maybe<Scalars['String']['output']>
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  climate: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  collar: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** Product custom attributes. */
  custom_attributesV2: Maybe<ProductCustomAttributes>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  format: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  gender: Maybe<Scalars['String']['output']>
  /** Returns a value indicating gift message availability for the product. */
  gift_message_available: Scalars['Boolean']['output']
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>
  /** @deprecated Use the `custom_attributes` field instead. */
  is_seller_product: Maybe<Scalars['Int']['output']>
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  material: Maybe<Scalars['String']['output']>
  /** Maximum Qty Allowed in Shopping Cart */
  max_sale_qty: Maybe<Scalars['Float']['output']>
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>
  /** Minimum Qty Allowed in Shopping Cart */
  min_sale_qty: Maybe<Scalars['Float']['output']>
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  new: Maybe<Scalars['Int']['output']>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric: Maybe<Scalars['Int']['output']>
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>
  /** The range of prices for the product */
  price_range: PriceRange
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>
  /** Amount of available stock */
  quantity: Maybe<Scalars['Float']['output']>
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output']
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output']
  /** The list of products reviews. */
  reviews: ProductReviews
  /** @deprecated Use the `custom_attributes` field instead. */
  sale: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  seller_id: Maybe<Scalars['Int']['output']>
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  size: Maybe<Scalars['Int']['output']>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sm_featured: Maybe<Scalars['Int']['output']>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general: Maybe<Scalars['String']['output']>
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output']
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>
}

/** Contains fields that are common to all types of products. */
export type ProductInterfaceCustom_AttributesV2Args = {
  filters: InputMaybe<AttributeFilterInput>
}

/** Contains fields that are common to all types of products. */
export type ProductInterfaceReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** An implementation of `ProductLinksInterface`. */
export type ProductLinks = ProductLinksInterface & {
  __typename?: 'ProductLinks'
  /** One of related, associated, upsell, or crosssell. */
  link_type: Maybe<Scalars['String']['output']>
  /** The SKU of the linked product. */
  linked_product_sku: Maybe<Scalars['String']['output']>
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type: Maybe<Scalars['String']['output']>
  /** The position within the list of product links. */
  position: Maybe<Scalars['Int']['output']>
  /** The identifier of the linked product. */
  sku: Maybe<Scalars['String']['output']>
}

/** Contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type: Maybe<Scalars['String']['output']>
  /** The SKU of the linked product. */
  linked_product_sku: Maybe<Scalars['String']['output']>
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type: Maybe<Scalars['String']['output']>
  /** The position within the list of product links. */
  position: Maybe<Scalars['Int']['output']>
  /** The identifier of the linked product. */
  sku: Maybe<Scalars['String']['output']>
}

/** Contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent'
  /** The image in base64 format. */
  base64_encoded_data: Maybe<Scalars['String']['output']>
  /** The file name of the image. */
  name: Maybe<Scalars['String']['output']>
  /** The MIME type of the file, such as image/png. */
  type: Maybe<Scalars['String']['output']>
}

/** Contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent'
  /** Must be external-video. */
  media_type: Maybe<Scalars['String']['output']>
  /** A description of the video. */
  video_description: Maybe<Scalars['String']['output']>
  /** Optional data about the video. */
  video_metadata: Maybe<Scalars['String']['output']>
  /** Describes the video source. */
  video_provider: Maybe<Scalars['String']['output']>
  /** The title of the video. */
  video_title: Maybe<Scalars['String']['output']>
  /** The URL to the video. */
  video_url: Maybe<Scalars['String']['output']>
}

/** Represents a product price. */
export type ProductPrice = {
  __typename?: 'ProductPrice'
  /** The price discount. Represents the difference between the regular and final price. */
  discount: Maybe<ProductDiscount>
  /** The final price of the product after applying discounts. */
  final_price: Money
  /** An array of the multiple Fixed Product Taxes that can be applied to a product price. */
  fixed_product_taxes: Maybe<Array<Maybe<FixedProductTax>>>
  /** The regular price of the product. */
  regular_price: Money
}

/** Deprecated. Use `PriceRange` instead. Contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
  __typename?: 'ProductPrices'
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `to` value.
   * @deprecated Use `PriceRange.maximum_price` instead.
   */
  maximalPrice: Maybe<Price>
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the `from` value.
   * @deprecated Use `PriceRange.minimum_price` instead.
   */
  minimalPrice: Maybe<Price>
  /**
   * The base price of a product.
   * @deprecated Use `regular_price` from `PriceRange.minimum_price` or `PriceRange.maximum_price` instead.
   */
  regularPrice: Maybe<Price>
}

/** Contains details of a product review. */
export type ProductReview = {
  __typename?: 'ProductReview'
  /** The average of all ratings for this product. */
  average_rating: Scalars['Float']['output']
  /** The date the review was created. */
  created_at: Scalars['String']['output']
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars['String']['output']
  /** The reviewed product. */
  product: ProductInterface
  /** An array of ratings by rating category, such as quality, price, and value. */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>
  /** The summary (title) of the review. */
  summary: Scalars['String']['output']
  /** The review text. */
  text: Scalars['String']['output']
}

/** Contains data about a single aspect of a product review. */
export type ProductReviewRating = {
  __typename?: 'ProductReviewRating'
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output']
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String']['output']
}

/** Contains the reviewer's rating for a single aspect of a review. */
export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String']['input']
  /** An encoded rating value ID. */
  value_id: Scalars['String']['input']
}

/** Contains details about a single aspect of a product review. */
export type ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata'
  /** An encoded rating ID. */
  id: Scalars['String']['output']
  /** The label assigned to an aspect of a product that is being rated, such as quality or price. */
  name: Scalars['String']['output']
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>
}

/** Contains details about a single value in a product review. */
export type ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata'
  /** A ratings scale, such as the number of stars awarded. */
  value: Scalars['String']['output']
  /** An encoded rating value ID. */
  value_id: Scalars['String']['output']
}

/** Contains an array of metadata about each aspect of a product review. */
export type ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata'
  /** An array of product reviews sorted by position. */
  items: Array<Maybe<ProductReviewRatingMetadata>>
}

/** Contains an array of product reviews. */
export type ProductReviews = {
  __typename?: 'ProductReviews'
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo
}

/** Deprecated. Use `ProductAttributeSortInput` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture: InputMaybe<SortEnum>
  /** The timestamp indicating when the product was created. */
  created_at: InputMaybe<SortEnum>
  /** The name of a custom layout. */
  custom_layout: InputMaybe<SortEnum>
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update: InputMaybe<SortEnum>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: InputMaybe<SortEnum>
  /** Indicates whether a gift message is available. */
  gift_message_available: InputMaybe<SortEnum>
  /** Indicates whether additional attributes have been created for the product. */
  has_options: InputMaybe<SortEnum>
  /** The relative path to the main image on the product page. */
  image: InputMaybe<SortEnum>
  /** The label assigned to a product image. */
  image_label: InputMaybe<SortEnum>
  /** A number representing the product's manufacturer. */
  manufacturer: InputMaybe<SortEnum>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: InputMaybe<SortEnum>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: InputMaybe<SortEnum>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: InputMaybe<SortEnum>
  /** The product name. Customers use this name to identify the product. */
  name: InputMaybe<SortEnum>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date: InputMaybe<SortEnum>
  /** The end date for new product listings. */
  news_to_date: InputMaybe<SortEnum>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: InputMaybe<SortEnum>
  /** The price of the item. */
  price: InputMaybe<SortEnum>
  /** Indicates whether the product has required options. */
  required_options: InputMaybe<SortEnum>
  /** A short description of the product. Its use depends on the theme. */
  short_description: InputMaybe<SortEnum>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: InputMaybe<SortEnum>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: InputMaybe<SortEnum>
  /** The label assigned to a product's small image. */
  small_image_label: InputMaybe<SortEnum>
  /** The beginning date that a product has a special price. */
  special_from_date: InputMaybe<SortEnum>
  /** The discounted price of the product. */
  special_price: InputMaybe<SortEnum>
  /** The end date that a product has a special price. */
  special_to_date: InputMaybe<SortEnum>
  /** Indicates the criteria to sort swatches. */
  swatch_image: InputMaybe<SortEnum>
  /** The relative path to the product's thumbnail image. */
  thumbnail: InputMaybe<SortEnum>
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label: InputMaybe<SortEnum>
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price: InputMaybe<SortEnum>
  /** The timestamp indicating when the product was updated. */
  updated_at: InputMaybe<SortEnum>
  /** The part of the URL that identifies the product */
  url_key: InputMaybe<SortEnum>
  url_path: InputMaybe<SortEnum>
  /** The weight of the item, in units defined by the store. */
  weight: InputMaybe<SortEnum>
}

/** This enumeration states whether a product stock status is in stock or out of stock */
export type ProductStockStatus
  = | 'IN_STOCK'
    | 'OUT_OF_STOCK'

/** Deprecated. Use `TierPrice` instead. Defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
  __typename?: 'ProductTierPrices'
  /**
   * The ID of the customer group.
   * @deprecated Not relevant for the storefront.
   */
  customer_group_id: Maybe<Scalars['String']['output']>
  /**
   * The percentage discount of the item.
   * @deprecated Use `TierPrice.discount` instead.
   */
  percentage_value: Maybe<Scalars['Float']['output']>
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated Use `TierPrice.quantity` instead.
   */
  qty: Maybe<Scalars['Float']['output']>
  /**
   * The price of the fixed price item.
   * @deprecated Use `TierPrice.final_price` instead.
   */
  value: Maybe<Scalars['Float']['output']>
  /**
   * The ID assigned to the website.
   * @deprecated Not relevant for the storefront.
   */
  website_id: Maybe<Scalars['Float']['output']>
}

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  __typename?: 'ProductVideo'
  /** Indicates whether the image is hidden from view. */
  disabled: Maybe<Scalars['Boolean']['output']>
  /** The label of the product image or video. */
  label: Maybe<Scalars['String']['output']>
  /** The media item's position after it has been sorted. */
  position: Maybe<Scalars['Int']['output']>
  /** The URL of the product image or video. */
  url: Maybe<Scalars['String']['output']>
  /** Contains a `ProductMediaGalleryEntriesVideoContent` object. */
  video_content: Maybe<ProductMediaGalleryEntriesVideoContent>
}

/** Contains the results of a `products` query. */
export type Products = {
  __typename?: 'Products'
  /** A bucket that contains the attribute code and label for each filterable option. */
  aggregations: Maybe<Array<Maybe<Aggregation>>>
  /**
   * Layered navigation filters array.
   * @deprecated Use `aggregations` instead.
   */
  filters: Maybe<Array<Maybe<LayerFilter>>>
  /** An array of products that match the specified search criteria. */
  items: Maybe<Array<Maybe<ProductInterface>>>
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info: Maybe<SearchResultPageInfo>
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields: Maybe<SortFields>
  /** An array of search suggestions for case when search query have no results. */
  suggestions: Maybe<Array<Maybe<SearchSuggestion>>>
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count: Maybe<Scalars['Int']['output']>
}

/** Contains the results of a `products` query. */
export type ProductsAggregationsArgs = {
  filter: InputMaybe<AggregationsFilterInput>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve EAV attributes associated to a frontend form. Use countries query provided by DirectoryGraphQl module to retrieve region_id and country_id attribute options. */
  attributesForm: AttributesFormOutput
  /** Returns a list of attributes metadata for a given entity type. */
  attributesList: Maybe<AttributesMetadataOutput>
  /** Get a list of available store views and their config information. */
  availableStores: Maybe<Array<Maybe<StoreConfig>>>
  /** Return information about the specified shopping cart. */
  cart: Maybe<Cart>
  /** Return a list of categories that match the specified filter. */
  categories: Maybe<CategoryResult>
  /**
   * Search for categories that match the criteria specified in the `search` and `filter` attributes.
   * @deprecated Use `categories` instead.
   */
  category: Maybe<CategoryTree>
  /**
   * Return an array of categories based on the specified filters.
   * @deprecated Use `categories` instead.
   */
  categoryList: Maybe<Array<Maybe<CategoryTree>>>
  /** Return Terms and Conditions configuration information. */
  checkoutAgreements: Maybe<Array<Maybe<CheckoutAgreement>>>
  /** Return information about CMS blocks. */
  cmsBlocks: Maybe<CmsBlocks>
  /** Return details about a CMS page. */
  cmsPage: Maybe<CmsPage>
  /** Return products that have been added to the specified compare list. */
  compareList: Maybe<CompareList>
  /** The countries query provides information for all countries. */
  countries: Maybe<Array<Maybe<Country>>>
  /** The countries query provides information for a single country. */
  country: Maybe<Country>
  /** Return information about the store's currency. */
  currency: Maybe<Currency>
  /**
   * Return the attribute type, given an attribute code and entity type.
   * @deprecated Use `customAttributeMetadataV2` query instead.
   */
  customAttributeMetadata: Maybe<CustomAttributeMetadata>
  /** Retrieve EAV attributes metadata. */
  customAttributeMetadataV2: AttributesMetadataOutput
  /** Return detailed information about a customer account. */
  customer: Maybe<Customer>
  /** Return information about the customer's shopping cart. */
  customerCart: Cart
  /** Return a list of downloadable products the customer has purchased. */
  customerDownloadableProducts: Maybe<CustomerDownloadableProducts>
  /** @deprecated Use the `customer` query instead. */
  customerOrders: Maybe<CustomerOrders>
  /** Return a list of customer payment tokens stored in the vault. */
  customerPaymentTokens: Maybe<CustomerPaymentTokens>
  /** Retrieve the secure PayPal URL for a Payments Pro Hosted Solution transaction. */
  getHostedProUrl: Maybe<HostedProUrl>
  /** Retrieve payment credentials for a transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken: Maybe<PayflowLinkToken>
  /** Retrieves the payment configuration for a given location */
  getPaymentConfig: Maybe<PaymentConfigOutput>
  /** Retrieves the payment details for the order */
  getPaymentOrder: Maybe<PaymentOrderOutput>
  /** Gets the payment SDK urls and values */
  getPaymentSDK: Maybe<GetPaymentSdkOutput>
  /** Get the module's configuration to initialize Stripe Elements. */
  getStripeConfiguration: Maybe<ModuleConfiguration>
  /** Retrieves the vault configuration */
  getVaultConfig: Maybe<VaultConfigOutput>
  /** Retrieve guest order details based on number, email and billing last name. */
  guestOrder: CustomerOrder
  /** Retrieve guest order details based on token. */
  guestOrderByToken: CustomerOrder
  /** Check whether the specified email has already been used to create a customer account. */
  isEmailAvailable: Maybe<IsEmailAvailableOutput>
  /** Query gift card info by id. */
  lofGiftCardInfo: Maybe<GiftCardInfo>
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations: Maybe<PickupLocations>
  /** Return the active ratings attributes and the values each rating can have. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata
  /** Search for products that match the criteria specified in the `search` and `filter` attributes. */
  products: Maybe<Products>
  recaptchaFormConfig: Maybe<ReCaptchaConfigOutput>
  /** Returns details about Google reCAPTCHA V3-Invisible configuration. */
  recaptchaV3Config: Maybe<ReCaptchaConfigurationV3>
  /** Return the full details for a specified product, category, or CMS page. */
  route: Maybe<RoutableInterface>
  /** Return details about the store's configuration. */
  storeConfig: Maybe<StoreConfig>
  /**
   * Return the relative URL for a specified product, category or CMS page.
   * @deprecated Use the `route` query instead.
   */
  urlResolver: Maybe<EntityUrl>
  /**
   * Return the contents of a customer's wish list.
   * @deprecated Moved under `Customer.wishlist`.
   */
  wishlist: Maybe<WishlistOutput>
}

export type QueryAttributesFormArgs = {
  formCode: Scalars['String']['input']
}

export type QueryAttributesListArgs = {
  entityType: AttributeEntityTypeEnum
  filters: InputMaybe<AttributeFilterInput>
}

export type QueryAvailableStoresArgs = {
  useCurrentGroup: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryCartArgs = {
  cart_id: Scalars['String']['input']
}

export type QueryCategoriesArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  filters: InputMaybe<CategoryFilterInput>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

export type QueryCategoryArgs = {
  id: InputMaybe<Scalars['Int']['input']>
}

export type QueryCategoryListArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  filters: InputMaybe<CategoryFilterInput>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

export type QueryCmsBlocksArgs = {
  identifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCmsPageArgs = {
  id: InputMaybe<Scalars['Int']['input']>
  identifier: InputMaybe<Scalars['String']['input']>
}

export type QueryCompareListArgs = {
  uid: Scalars['ID']['input']
}

export type QueryCountryArgs = {
  id: InputMaybe<Scalars['String']['input']>
}

export type QueryCustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>
}

export type QueryCustomAttributeMetadataV2Args = {
  attributes: InputMaybe<Array<AttributeInput>>
}

export type QueryGetHostedProUrlArgs = {
  input: HostedProUrlInput
}

export type QueryGetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput
}

export type QueryGetPaymentConfigArgs = {
  location: PaymentLocation
}

export type QueryGetPaymentOrderArgs = {
  cartId: Scalars['String']['input']
  id: Scalars['String']['input']
}

export type QueryGetPaymentSdkArgs = {
  location: PaymentLocation
}

export type QueryGuestOrderArgs = {
  input: OrderInformationInput
}

export type QueryGuestOrderByTokenArgs = {
  input: OrderTokenInput
}

export type QueryIsEmailAvailableArgs = {
  email: Scalars['String']['input']
}

export type QueryLofGiftCardInfoArgs = {
  code: Scalars['String']['input']
}

export type QueryPickupLocationsArgs = {
  area: InputMaybe<AreaInput>
  currentPage?: InputMaybe<Scalars['Int']['input']>
  filters: InputMaybe<PickupLocationFilterInput>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  productsInfo: InputMaybe<Array<InputMaybe<ProductInfoInput>>>
  sort: InputMaybe<PickupLocationSortInput>
}

export type QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  filter: InputMaybe<ProductAttributeFilterInput>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  search: InputMaybe<Scalars['String']['input']>
  sort: InputMaybe<ProductAttributeSortInput>
}

export type QueryRecaptchaFormConfigArgs = {
  formType: ReCaptchaFormEnum
}

export type QueryRouteArgs = {
  url: Scalars['String']['input']
}

export type QueryUrlResolverArgs = {
  url: Scalars['String']['input']
}

/** Specifies the field to use for sorting quote items */
export type QuoteItemsSortInput = {
  /** Specifies the quote items field to sort by */
  field: SortQuoteItemsEnum
  /** Specifies the order of quote items' sorting */
  order: SortEnum
}

export type ReCaptchaConfigOutput = {
  __typename?: 'ReCaptchaConfigOutput'
  /** Configuration details for reCaptcha type */
  configurations: Maybe<ReCaptchaConfiguration>
  /** Indicates whether reCaptcha type is enabled */
  is_enabled: Scalars['Boolean']['output']
}

/** Contains reCAPTCHA form configuration details. */
export type ReCaptchaConfiguration = {
  __typename?: 'ReCaptchaConfiguration'
  /** The position of the invisible reCAPTCHA badge on each page. */
  badge_position: Maybe<Scalars['String']['output']>
  /** A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging. */
  language_code: Maybe<Scalars['String']['output']>
  /** The minimum score that identifies a user interaction as a potential risk. */
  minimum_score: Maybe<Scalars['Float']['output']>
  re_captcha_type: ReCaptchaTypeEmum
  /** The message that appears when reCaptcha fails. */
  technical_failure_message: Scalars['String']['output']
  /** Theme to be used to render reCaptcha. */
  theme: Scalars['String']['output']
  /** The message that appears to the user if validation fails. */
  validation_failure_message: Scalars['String']['output']
  /** The website key generated when the Google reCAPTCHA account was registered. */
  website_key: Scalars['String']['output']
}

/** Contains reCAPTCHA V3-Invisible configuration details. */
export type ReCaptchaConfigurationV3 = {
  __typename?: 'ReCaptchaConfigurationV3'
  /** The position of the invisible reCAPTCHA badge on each page. */
  badge_position: Scalars['String']['output']
  /** The message that appears to the user if validation fails. */
  failure_message: Scalars['String']['output']
  /** A list of forms on the storefront that have been configured to use reCAPTCHA V3. */
  forms: Array<Maybe<ReCaptchaFormEnum>>
  /** Return whether recaptcha is enabled or not */
  is_enabled: Scalars['Boolean']['output']
  /** A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging. */
  language_code: Maybe<Scalars['String']['output']>
  /** The minimum score that identifies a user interaction as a potential risk. */
  minimum_score: Scalars['Float']['output']
  /** Theme to be used to render reCaptcha. */
  theme: Scalars['String']['output']
  /** The website key generated when the Google reCAPTCHA account was registered. */
  website_key: Scalars['String']['output']
}

export type ReCaptchaFormEnum
  = | 'BRAINTREE'
    | 'CONTACT'
    | 'CUSTOMER_CREATE'
    | 'CUSTOMER_EDIT'
    | 'CUSTOMER_FORGOT_PASSWORD'
    | 'CUSTOMER_LOGIN'
    | 'NEWSLETTER'
    | 'PLACE_ORDER'
    | 'PRODUCT_REVIEW'
    | 'RESEND_CONFIRMATION_EMAIL'
    | 'SENDFRIEND'

export type ReCaptchaTypeEmum
  = | 'INVISIBLE'
    | 'RECAPTCHA'
    | 'RECAPTCHA_V3'

export type Region = {
  __typename?: 'Region'
  /** The two-letter code for the region, such as TX for Texas. */
  code: Maybe<Scalars['String']['output']>
  /** The unique ID for a `Region` object. */
  id: Maybe<Scalars['Int']['output']>
  /** The name of the region, such as Texas. */
  name: Maybe<Scalars['String']['output']>
}

/** Specifies the cart from which to remove a coupon. */
export type RemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
}

/** Contains details about the cart after removing a coupon. */
export type RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput'
  /** The cart after removing a coupon. */
  cart: Maybe<Cart>
}

/** Specifies which items to remove from the cart. */
export type RemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id: InputMaybe<Scalars['Int']['input']>
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid: InputMaybe<Scalars['ID']['input']>
}

/** Contains details about the cart after removing an item. */
export type RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput'
  /** The cart after removing an item. */
  cart: Cart
}

/** Defines which products to remove from a compare list. */
export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<InputMaybe<Scalars['ID']['input']>>
  /** The unique identifier of the compare list to modify. */
  uid: Scalars['ID']['input']
}

/** Contains the customer's wish list and any errors encountered. */
export type RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput'
  /** An array of errors encountered while deleting products from a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>
  /** Contains the wish list with after items were successfully deleted. */
  wishlist: Wishlist
}

/** Contains the cart and any errors after adding products. */
export type ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput'
  /** Detailed information about the customer's cart. */
  cart: Cart
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>
}

export type Res = {
  __typename?: 'Res'
  code: Maybe<Scalars['Int']['output']>
  message: Maybe<Scalars['String']['output']>
}

/** Contains the result of a request to revoke a customer token. */
export type RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput'
  /** The result of a request to revoke a customer token. */
  result: Scalars['Boolean']['output']
}

/** Routable entities serve as the model for a rendered page. */
export type RoutableInterface = {
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
}

/** Default implementation of RoutableInterface. This type is returned when the URL is not linked to an entity. */
export type RoutableUrl = RoutableInterface & {
  __typename?: 'RoutableUrl'
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
}

/** Defines the name and value of a SDK parameter */
export type SdkParams = {
  __typename?: 'SDKParams'
  /** The name of the SDK parameter */
  name: Maybe<Scalars['String']['output']>
  /** The value of the SDK parameter */
  value: Maybe<Scalars['String']['output']>
}

/** Contains details about a comment. */
export type SalesCommentItem = {
  __typename?: 'SalesCommentItem'
  /** The text of the message. */
  message: Scalars['String']['output']
  /** The timestamp of the comment. */
  timestamp: Scalars['String']['output']
}

export type SalesItemInterface = {
  __typename?: 'SalesItemInterface'
  /** The entered gift message for the order item */
  gift_message: Maybe<GiftMessage>
}

/** This enumeration defines the scope type for customer orders. */
export type ScopeTypeEnum
  = | 'GLOBAL'
    | 'STORE'
    | 'WEBSITE'

/** Provides navigation for the query response. */
export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo'
  /** The specific page to return. */
  current_page: Maybe<Scalars['Int']['output']>
  /** The maximum number of items to return per page of results. */
  page_size: Maybe<Scalars['Int']['output']>
  /** The total number of pages in the response. */
  total_pages: Maybe<Scalars['Int']['output']>
}

/** A string that contains search suggestion */
export type SearchSuggestion = {
  __typename?: 'SearchSuggestion'
  /** The search suggestion of existing product. */
  search: Scalars['String']['output']
}

/** Contains details about a selected bundle option. */
export type SelectedBundleOption = {
  __typename?: 'SelectedBundleOption'
  /** @deprecated Use `uid` instead */
  id: Scalars['Int']['output']
  /** The display name of the selected bundle product option. */
  label: Scalars['String']['output']
  /** The type of selected bundle product option. */
  type: Scalars['String']['output']
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID']['output']
  /** An array of selected bundle option values. */
  values: Array<Maybe<SelectedBundleOptionValue>>
}

/** Contains details about a value for a selected bundle option. */
export type SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue'
  /** Use `uid` instead */
  id: Scalars['Int']['output']
  /** The display name of the value for the selected bundle product option. */
  label: Scalars['String']['output']
  /** The original price of the value for the selected bundle product option. */
  original_price: Money
  /**
   * The price of the value for the selected bundle product option.
   * @deprecated Use priceV2 instead.
   */
  price: Scalars['Float']['output']
  /** The price of the value for the selected bundle product option. */
  priceV2: Money
  /** The quantity of the value for the selected bundle product option. */
  quantity: Scalars['Float']['output']
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID']['output']
}

/** Contains details about a selected configurable option. */
export type SelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption'
  /** The unique ID for a `ConfigurableProductOptions` object. */
  configurable_product_option_uid: Scalars['ID']['output']
  /** The unique ID for a `ConfigurableProductOptionsValues` object. */
  configurable_product_option_value_uid: Scalars['ID']['output']
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_uid` instead. */
  id: Scalars['Int']['output']
  /** The display text for the option. */
  option_label: Scalars['String']['output']
  /** @deprecated Use `SelectedConfigurableOption.configurable_product_option_value_uid` instead. */
  value_id: Scalars['Int']['output']
  /** The display name of the selected configurable option. */
  value_label: Scalars['String']['output']
}

/** Identifies a customized product that has been placed in a cart. */
export type SelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption'
  /** The unique ID for a specific `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  customizable_option_uid: Scalars['ID']['output']
  /** @deprecated Use `SelectedCustomizableOption.customizable_option_uid` instead. */
  id: Scalars['Int']['output']
  /** Indicates whether the customizable option is required. */
  is_required: Scalars['Boolean']['output']
  /** The display name of the selected customizable option. */
  label: Scalars['String']['output']
  /** A value indicating the order to display this option. */
  sort_order: Scalars['Int']['output']
  /** The type of `CustomizableOptionInterface` object. */
  type: Scalars['String']['output']
  /** An array of selectable values. */
  values: Array<Maybe<SelectedCustomizableOptionValue>>
}

/** Identifies the value of the selected customized option. */
export type SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue'
  /** The unique ID for a value object that corresponds to the object represented by the `customizable_option_uid` attribute. */
  customizable_option_value_uid: Scalars['ID']['output']
  /** @deprecated Use `SelectedCustomizableOptionValue.customizable_option_value_uid` instead. */
  id: Scalars['Int']['output']
  /** The display name of the selected value. */
  label: Scalars['String']['output']
  /** The price of the selected customizable value. */
  price: CartItemSelectedOptionValuePrice
  /** The text identifying the selected value. */
  value: Scalars['String']['output']
}

/** Describes the payment method the shopper selected. */
export type SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod'
  /** The payment method code. */
  code: Scalars['String']['output']
  /** The purchase order number. */
  purchase_order_number: Maybe<Scalars['String']['output']>
  /** The payment method title. */
  title: Scalars['String']['output']
}

/** Contains details about the selected shipping method and carrier. */
export type SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod'
  /** The cost of shipping using this shipping method. */
  amount: Money
  /** @deprecated The field should not be used on the storefront. */
  base_amount: Maybe<Money>
  /** A string that identifies a commercial carrier or an offline shipping method. */
  carrier_code: Scalars['String']['output']
  /** The label for the carrier code. */
  carrier_title: Scalars['String']['output']
  /** A shipping method code associated with a carrier. */
  method_code: Scalars['String']['output']
  /** The label for the method code. */
  method_title: Scalars['String']['output']
  /** The cost of shipping using this shipping method, excluding tax. */
  price_excl_tax: Money
  /** The cost of shipping using this shipping method, including tax. */
  price_incl_tax: Money
}

/** Defines the referenced product and the email sender and recipients. */
export type SendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars['Int']['input']
  /** An array containing information about each recipient. */
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>
  /** Information about the customer and the content of the message. */
  sender: SendEmailToFriendSenderInput
}

/** Contains information about the sender and recipients. */
export type SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput'
  /** An array containing information about each recipient. */
  recipients: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>
  /** Information about the customer and the content of the message. */
  sender: Maybe<SendEmailToFriendSender>
}

/** An output object that contains information about the recipient. */
export type SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient'
  /** The email address of the recipient. */
  email: Scalars['String']['output']
  /** The name of the recipient. */
  name: Scalars['String']['output']
}

/** Contains details about a recipient. */
export type SendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars['String']['input']
  /** The name of the recipient. */
  name: Scalars['String']['input']
}

/** An output object that contains information about the sender. */
export type SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender'
  /** The email address of the sender. */
  email: Scalars['String']['output']
  /** The text of the message to be sent. */
  message: Scalars['String']['output']
  /** The name of the sender. */
  name: Scalars['String']['output']
}

/** Contains details about the sender. */
export type SendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars['String']['input']
  /** The text of the message to be sent. */
  message: Scalars['String']['input']
  /** The name of the sender. */
  name: Scalars['String']['input']
}

/** Contains details about the configuration of the Email to a Friend feature. */
export type SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration'
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean']['output']
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean']['output']
}

/** Sets the billing address. */
export type SetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: BillingAddressInput
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
}

/** Contains details about the cart after setting the billing address. */
export type SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput'
  /** The cart after setting the billing address. */
  cart: Cart
}

/** Sets the cart as inactive */
export type SetCartAsInactiveOutput = {
  __typename?: 'SetCartAsInactiveOutput'
  /** The error message returned after failing to set the cart as inactive */
  error: Maybe<Scalars['String']['output']>
  /** Indicates whether the cart was set as inactive */
  success: Scalars['Boolean']['output']
}

/** Defines the guest email and cart. */
export type SetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** The email address of the guest. */
  email: Scalars['String']['input']
}

/** Contains details about the cart after setting the email of a guest. */
export type SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput'
  /** The cart after setting the guest email. */
  cart: Cart
}

/** Applies a payment method to the quote. */
export type SetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput
}

/** Applies a payment method to the cart. */
export type SetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput
}

/** Contains details about the cart after setting the payment method. */
export type SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput'
  /** The cart after setting the payment method. */
  cart: Cart
}

/** Specifies an array of addresses to use for shipping. */
export type SetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** An array of shipping addresses. */
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>
}

/** Contains details about the cart after setting the shipping addresses. */
export type SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput'
  /** The cart after setting the shipping addresses. */
  cart: Cart
}

/** Applies one or shipping methods to the cart. */
export type SetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** An array of shipping methods. */
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>
}

/** Contains details about the cart after setting the shipping methods. */
export type SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput'
  /** The cart after setting the shipping methods. */
  cart: Cart
}

/** Defines whether bundle items must be shipped together. */
export type ShipBundleItemsEnum
  = | 'SEPARATELY'
    | 'TOGETHER'

export type ShipmentItem = ShipmentItemInterface & {
  __typename?: 'ShipmentItem'
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output']
  /** The order item associated with the shipment item. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output']
}

/** Order shipment item details. */
export type ShipmentItemInterface = {
  /** The unique ID for a `ShipmentItemInterface` object. */
  id: Scalars['ID']['output']
  /** The order item associated with the shipment item. */
  order_item: Maybe<OrderItemInterface>
  /** The name of the base product. */
  product_name: Maybe<Scalars['String']['output']>
  /** The sale price for the base product. */
  product_sale_price: Money
  /** The SKU of the base product. */
  product_sku: Scalars['String']['output']
  /** The number of shipped items. */
  quantity_shipped: Scalars['Float']['output']
}

/** Contains order shipment tracking details. */
export type ShipmentTracking = {
  __typename?: 'ShipmentTracking'
  /** The shipping carrier for the order delivery. */
  carrier: Scalars['String']['output']
  /** The tracking number of the order shipment. */
  number: Maybe<Scalars['String']['output']>
  /** The shipment tracking title. */
  title: Scalars['String']['output']
}

/** Defines a single shipping address. */
export type ShippingAddressInput = {
  /** Defines a shipping address. */
  address: InputMaybe<CartAddressInput>
  /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
  customer_address_id: InputMaybe<Scalars['Int']['input']>
  /** Text provided by the shopper. */
  customer_notes: InputMaybe<Scalars['String']['input']>
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code: InputMaybe<Scalars['String']['input']>
}

/** Contains shipping addresses and methods. */
export type ShippingCartAddress = CartAddressInterface & {
  __typename?: 'ShippingCartAddress'
  /** An array that lists the shipping methods that can be applied to the cart. */
  available_shipping_methods: Maybe<Array<Maybe<AvailableShippingMethod>>>
  /** @deprecated Use `cart_items_v2` instead. */
  cart_items: Maybe<Array<Maybe<CartItemQuantity>>>
  /** An array that lists the items in the cart. */
  cart_items_v2: Maybe<Array<Maybe<CartItemInterface>>>
  /** The city specified for the billing or shipping address. */
  city: Scalars['String']['output']
  /** The company specified for the billing or shipping address. */
  company: Maybe<Scalars['String']['output']>
  /** An object containing the country label and code. */
  country: CartAddressCountry
  /** Text provided by the shopper. */
  customer_notes: Maybe<Scalars['String']['output']>
  /** The customer's fax number. */
  fax: Maybe<Scalars['String']['output']>
  /** The first name of the customer or guest. */
  firstname: Scalars['String']['output']
  /** Id of the customer address. */
  id: Maybe<Scalars['Int']['output']>
  /** @deprecated This information should not be exposed on the frontend. */
  items_weight: Maybe<Scalars['Float']['output']>
  /** The last name of the customer or guest. */
  lastname: Scalars['String']['output']
  /** The middle name of the person associated with the billing/shipping address. */
  middlename: Maybe<Scalars['String']['output']>
  pickup_location_code: Maybe<Scalars['String']['output']>
  /** The ZIP or postal code of the billing or shipping address. */
  postcode: Maybe<Scalars['String']['output']>
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix: Maybe<Scalars['String']['output']>
  /** An object containing the region label and code. */
  region: Maybe<CartAddressRegion>
  /** Indicates whether the shipping address is same as billing address. */
  same_as_billing: Scalars['Boolean']['output']
  /** An object that describes the selected shipping method. */
  selected_shipping_method: Maybe<SelectedShippingMethod>
  /** An array containing the street for the billing or shipping address. */
  street: Array<Maybe<Scalars['String']['output']>>
  /** A value such as Sr., Jr., or III. */
  suffix: Maybe<Scalars['String']['output']>
  /** The telephone number for the billing or shipping address. */
  telephone: Maybe<Scalars['String']['output']>
  /** The unique id of the customer address. */
  uid: Scalars['String']['output']
  /** The VAT company number for billing or shipping address. */
  vat_id: Maybe<Scalars['String']['output']>
}

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  __typename?: 'ShippingDiscount'
  /** The amount of the discount. */
  amount: Money
}

/** Contains details about shipping and handling costs. */
export type ShippingHandling = {
  __typename?: 'ShippingHandling'
  /** The shipping amount, excluding tax. */
  amount_excluding_tax: Maybe<Money>
  /** The shipping amount, including tax. */
  amount_including_tax: Maybe<Money>
  /** The applied discounts to the shipping. */
  discounts: Maybe<Array<Maybe<ShippingDiscount>>>
  /** Details about taxes applied for shipping. */
  taxes: Maybe<Array<Maybe<TaxItem>>>
  /** The total amount for shipping. */
  total_amount: Money
}

/** Defines the shipping carrier and method. */
export type ShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars['String']['input']
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars['String']['input']
}

/** An implementation for simple product cart items. */
export type SimpleCartItem = CartItemInterface & {
  __typename?: 'SimpleCartItem'
  /** An array containing the customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>
  /** The entered gift message for the cart item */
  gift_message: Maybe<GiftMessage>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output']
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output']
  /** Message to display when the product is not available with this selected option. */
  not_available_message: Maybe<Scalars['String']['output']>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>
  /** Details about an item in the cart. */
  product: ProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output']
}

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'SimpleProduct'
  /** @deprecated Use the `custom_attributes` field instead. */
  activity: Maybe<Scalars['String']['output']>
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  climate: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  collar: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** Product custom attributes. */
  custom_attributesV2: Maybe<ProductCustomAttributes>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  format: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  gender: Maybe<Scalars['String']['output']>
  /** Returns a value indicating gift message availability for the product. */
  gift_message_available: Scalars['Boolean']['output']
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>
  /** @deprecated Use the `custom_attributes` field instead. */
  is_seller_product: Maybe<Scalars['Int']['output']>
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  material: Maybe<Scalars['String']['output']>
  /** Maximum Qty Allowed in Shopping Cart */
  max_sale_qty: Maybe<Scalars['Float']['output']>
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>
  /** Minimum Qty Allowed in Shopping Cart */
  min_sale_qty: Maybe<Scalars['Float']['output']>
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  new: Maybe<Scalars['Int']['output']>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric: Maybe<Scalars['Int']['output']>
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>
  /** The range of prices for the product */
  price_range: PriceRange
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>
  /** Amount of available stock */
  quantity: Maybe<Scalars['Float']['output']>
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output']
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output']
  /** The list of products reviews. */
  reviews: ProductReviews
  /** @deprecated Use the `custom_attributes` field instead. */
  sale: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  seller_id: Maybe<Scalars['Int']['output']>
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  size: Maybe<Scalars['Int']['output']>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sm_featured: Maybe<Scalars['Int']['output']>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general: Maybe<Scalars['String']['output']>
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output']
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>
  /** The weight of the item, in units defined by the store. */
  weight: Maybe<Scalars['Float']['output']>
}

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductCustom_AttributesV2Args = {
  filters: InputMaybe<AttributeFilterInput>
}

/** Defines a simple product, which is tangible and is usually sold in single units or in fixed quantities. */
export type SimpleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** Defines a single product to add to the cart. */
export type SimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput
}

/** Contains a simple product wish list item. */
export type SimpleWishlistItem = WishlistItemInterface & {
  __typename?: 'SimpleWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output']
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output']
}

/** Smart button payment inputs */
export type SmartButtonMethodInput = {
  /** The payment source for the payment method */
  payment_source: InputMaybe<Scalars['String']['input']>
  /** The payment services order ID */
  payments_order_id: InputMaybe<Scalars['String']['input']>
  /** PayPal order ID */
  paypal_order_id: InputMaybe<Scalars['String']['input']>
}

export type SmartButtonsConfig = PaymentConfigItem & {
  __typename?: 'SmartButtonsConfig'
  /** The styles for the PayPal Smart Button configuration */
  button_styles: Maybe<ButtonStyles>
  /** The payment method code as defined in the payment gateway */
  code: Maybe<Scalars['String']['output']>
  /** Indicates whether to display the PayPal Pay Later message */
  display_message: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether to display Venmo */
  display_venmo: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the payment method is displayed */
  is_visible: Maybe<Scalars['Boolean']['output']>
  /** Contains details about the styles for the PayPal Pay Later message */
  message_styles: Maybe<MessageStyles>
  /** Defines the payment intent (Authorize or Capture */
  payment_intent: Maybe<Scalars['String']['output']>
  /** The PayPal parameters required to load the JS SDK */
  sdk_params: Maybe<Array<Maybe<SdkParams>>>
  /** The relative order the payment method is displayed on the checkout page */
  sort_order: Maybe<Scalars['String']['output']>
  /** The name displayed for the payment method */
  title: Maybe<Scalars['String']['output']>
}

/** Indicates whether to return results in ascending or descending order. */
export type SortEnum
  = | 'ASC'
    | 'DESC'

/** Defines a possible sort field. */
export type SortField = {
  __typename?: 'SortField'
  /** The label of the sort field. */
  label: Maybe<Scalars['String']['output']>
  /** The attribute code of the sort field. */
  value: Maybe<Scalars['String']['output']>
}

/** Contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  __typename?: 'SortFields'
  /** The default sort field value. */
  default: Maybe<Scalars['String']['output']>
  /** An array of possible sort fields. */
  options: Maybe<Array<Maybe<SortField>>>
}

/** Specifies the field to use for sorting quote items */
export type SortQuoteItemsEnum
  = | 'BASE_DISCOUNT_AMOUNT'
    | 'BASE_DISCOUNT_TAX_COMPENSATION_AMOUNT'
    | 'BASE_PRICE'
    | 'BASE_PRICE_INC_TAX'
    | 'BASE_ROW_TOTAL'
    | 'BASE_ROW_TOTAL_INC_TAX'
    | 'BASE_TAX_AMOUNT'
    | 'BASE_TAX_BEFORE_DISCOUNT'
    | 'CREATED_AT'
    | 'CUSTOM_PRICE'
    | 'DESCRIPTION'
    | 'DISCOUNT_AMOUNT'
    | 'DISCOUNT_PERCENT'
    | 'DISCOUNT_TAX_COMPENSATION_AMOUNT'
    | 'FREE_SHIPPING'
    | 'ITEM_ID'
    | 'NAME'
    | 'ORIGINAL_CUSTOM_PRICE'
    | 'PRICE'
    | 'PRICE_INC_TAX'
    | 'PRODUCT_ID'
    | 'PRODUCT_TYPE'
    | 'QTY'
    | 'ROW_TOTAL'
    | 'ROW_TOTAL_INC_TAX'
    | 'ROW_TOTAL_WITH_DISCOUNT'
    | 'ROW_WEIGHT'
    | 'SKU'
    | 'TAX_AMOUNT'
    | 'TAX_BEFORE_DISCOUNT'
    | 'TAX_PERCENT'
    | 'UPDATED_AT'
    | 'WEIGHT'

/** Contains information about a store's configuration. */
export type StoreConfig = {
  __typename?: 'StoreConfig'
  /** Contains scripts that must be included in the HTML before the closing `<body>` tag. */
  absolute_footer: Maybe<Scalars['String']['output']>
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No). */
  allow_guests_to_write_product_reviews: Maybe<Scalars['String']['output']>
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items: Maybe<Scalars['String']['output']>
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order: Maybe<Scalars['String']['output']>
  /** Indicates whether to enable autocomplete on login and forgot password forms. */
  autocomplete_on_storefront: Maybe<Scalars['Boolean']['output']>
  /** The base currency code. */
  base_currency_code: Maybe<Scalars['String']['output']>
  /** A fully-qualified URL that is used to create relative links to the `base_url`. */
  base_link_url: Maybe<Scalars['String']['output']>
  /** The fully-qualified URL that specifies the location of media files. */
  base_media_url: Maybe<Scalars['String']['output']>
  /** The fully-qualified URL that specifies the location of static view files. */
  base_static_url: Maybe<Scalars['String']['output']>
  /** The store’s fully-qualified base URL. */
  base_url: Maybe<Scalars['String']['output']>
  /** Braintree 3D Secure, should 3D Secure be used for specific countries. */
  braintree_3dsecure_allowspecific: Maybe<Scalars['Boolean']['output']>
  /** Braintree 3D Secure, always request 3D Secure flag. */
  braintree_3dsecure_always_request_3ds: Maybe<Scalars['Boolean']['output']>
  /** Braintree 3D Secure, the specific countries to use 3D Secure in, to be used if allow specific is status is enabled. */
  braintree_3dsecure_specificcountry: Maybe<Scalars['String']['output']>
  /** Braintree 3D Secure, threshold above which 3D Secure should be requested. */
  braintree_3dsecure_threshold_amount: Maybe<Scalars['String']['output']>
  /** Braintree 3D Secure enabled/active status. */
  braintree_3dsecure_verify_3dsecure: Maybe<Scalars['Boolean']['output']>
  /** Braintree ACH vault status. */
  braintree_ach_direct_debit_vault_active: Maybe<Scalars['Boolean']['output']>
  /** Braintree Apple Pay merchant name. */
  braintree_applepay_merchant_name: Maybe<Scalars['String']['output']>
  /** Braintree Apple Pay vault status. */
  braintree_applepay_vault_active: Maybe<Scalars['Boolean']['output']>
  /** Braintree cc vault status. */
  braintree_cc_vault_active: Maybe<Scalars['String']['output']>
  /** Braintree cc vault CVV re-verification enabled status. */
  braintree_cc_vault_cvv: Maybe<Scalars['Boolean']['output']>
  /** Braintree environment. */
  braintree_environment: Maybe<Scalars['String']['output']>
  /** Braintree Google Pay button color. */
  braintree_googlepay_btn_color: Maybe<Scalars['String']['output']>
  /** Braintree Google Pay Card types supported. */
  braintree_googlepay_cctypes: Maybe<Scalars['String']['output']>
  /** Braintree Google Pay merchant ID. */
  braintree_googlepay_merchant_id: Maybe<Scalars['String']['output']>
  /** Braintree Google Pay vault status. */
  braintree_googlepay_vault_active: Maybe<Scalars['Boolean']['output']>
  /** Braintree Local Payment Methods allowed payment methods. */
  braintree_local_payment_allowed_methods: Maybe<Scalars['String']['output']>
  /** Braintree Local Payment Methods fallback button text. */
  braintree_local_payment_fallback_button_text: Maybe<Scalars['String']['output']>
  /** Braintree Local Payment Methods redirect URL on failed payment. */
  braintree_local_payment_redirect_on_fail: Maybe<Scalars['String']['output']>
  /** Braintree Merchant Account ID. */
  braintree_merchant_account_id: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit mini-cart & cart button style color. */
  braintree_paypal_button_location_cart_type_credit_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit mini-cart & cart button style label. */
  braintree_paypal_button_location_cart_type_credit_label: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit mini-cart & cart button style shape. */
  braintree_paypal_button_location_cart_type_credit_shape: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit mini-cart & cart button show status. */
  braintree_paypal_button_location_cart_type_credit_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal Pay Later messaging mini-cart & cart style layout. */
  braintree_paypal_button_location_cart_type_messaging_layout: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later messaging mini-cart & cart style logo. */
  braintree_paypal_button_location_cart_type_messaging_logo: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later messaging mini-cart & cart style logo position. */
  braintree_paypal_button_location_cart_type_messaging_logo_position: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later messaging mini-cart & cart show status. */
  braintree_paypal_button_location_cart_type_messaging_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal Pay Later messaging checkout style text color. */
  braintree_paypal_button_location_cart_type_messaging_text_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later mini-cart & cart button style color. */
  braintree_paypal_button_location_cart_type_paylater_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later mini-cart & cart button style label. */
  braintree_paypal_button_location_cart_type_paylater_label: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later mini-cart & cart button style shape. */
  braintree_paypal_button_location_cart_type_paylater_shape: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later mini-cart & cart button show status. */
  braintree_paypal_button_location_cart_type_paylater_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal mini-cart & cart button style color. */
  braintree_paypal_button_location_cart_type_paypal_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal mini-cart & cart button style label. */
  braintree_paypal_button_location_cart_type_paypal_label: Maybe<Scalars['String']['output']>
  /** Braintree PayPal mini-cart & cart button style shape. */
  braintree_paypal_button_location_cart_type_paypal_shape: Maybe<Scalars['String']['output']>
  /** Braintree PayPal mini-cart & cart button show. */
  braintree_paypal_button_location_cart_type_paypal_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal Credit checkout button style color. */
  braintree_paypal_button_location_checkout_type_credit_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit checkout button style label. */
  braintree_paypal_button_location_checkout_type_credit_label: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit checkout button style shape. */
  braintree_paypal_button_location_checkout_type_credit_shape: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit checkout button show status. */
  braintree_paypal_button_location_checkout_type_credit_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal Pay Later messaging checkout style layout. */
  braintree_paypal_button_location_checkout_type_messaging_layout: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later messaging checkout style logo. */
  braintree_paypal_button_location_checkout_type_messaging_logo: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later messaging checkout style logo position. */
  braintree_paypal_button_location_checkout_type_messaging_logo_position: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later messaging checkout show status. */
  braintree_paypal_button_location_checkout_type_messaging_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal Pay Later messaging checkout style text color. */
  braintree_paypal_button_location_checkout_type_messaging_text_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later checkout button style color. */
  braintree_paypal_button_location_checkout_type_paylater_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later checkout button style label. */
  braintree_paypal_button_location_checkout_type_paylater_label: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later checkout button style shape. */
  braintree_paypal_button_location_checkout_type_paylater_shape: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later checkout button show status. */
  braintree_paypal_button_location_checkout_type_paylater_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal checkout button style color. */
  braintree_paypal_button_location_checkout_type_paypal_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal checkout button style label. */
  braintree_paypal_button_location_checkout_type_paypal_label: Maybe<Scalars['String']['output']>
  /** Braintree PayPal checkout button style shape. */
  braintree_paypal_button_location_checkout_type_paypal_shape: Maybe<Scalars['String']['output']>
  /** Braintree PayPal checkout button show. */
  braintree_paypal_button_location_checkout_type_paypal_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal Credit PDP button style color. */
  braintree_paypal_button_location_productpage_type_credit_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit PDP button style label. */
  braintree_paypal_button_location_productpage_type_credit_label: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit PDP button style shape. */
  braintree_paypal_button_location_productpage_type_credit_shape: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Credit PDP button show status. */
  braintree_paypal_button_location_productpage_type_credit_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal Pay Later messaging PDP style layout. */
  braintree_paypal_button_location_productpage_type_messaging_layout: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later messaging PDP style logo. */
  braintree_paypal_button_location_productpage_type_messaging_logo: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later messaging PDP style logo position. */
  braintree_paypal_button_location_productpage_type_messaging_logo_position: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later messaging PDP show status. */
  braintree_paypal_button_location_productpage_type_messaging_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal Pay Later messaging PDP style text color. */
  braintree_paypal_button_location_productpage_type_messaging_text_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later PDP button style color. */
  braintree_paypal_button_location_productpage_type_paylater_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later PDP button style label. */
  braintree_paypal_button_location_productpage_type_paylater_label: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later PDP button style shape. */
  braintree_paypal_button_location_productpage_type_paylater_shape: Maybe<Scalars['String']['output']>
  /** Braintree PayPal Pay Later PDP button show status. */
  braintree_paypal_button_location_productpage_type_paylater_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal PDP button style color. */
  braintree_paypal_button_location_productpage_type_paypal_color: Maybe<Scalars['String']['output']>
  /** Braintree PayPal PDP button style label. */
  braintree_paypal_button_location_productpage_type_paypal_label: Maybe<Scalars['String']['output']>
  /** Braintree PayPal PDP button style shape. */
  braintree_paypal_button_location_productpage_type_paypal_shape: Maybe<Scalars['String']['output']>
  /** Braintree PayPal PDP button show. */
  braintree_paypal_button_location_productpage_type_paypal_show: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal Credit Merchant Name on the FCA Register. */
  braintree_paypal_credit_uk_merchant_name: Maybe<Scalars['String']['output']>
  /** Should display Braintree PayPal in mini-cart & cart? */
  braintree_paypal_display_on_shopping_cart: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal merchant's country. */
  braintree_paypal_merchant_country: Maybe<Scalars['String']['output']>
  /** Braintree PayPal override for Merchant Name. */
  braintree_paypal_merchant_name_override: Maybe<Scalars['String']['output']>
  /** Does Braintree PayPal require the customer's billing address? */
  braintree_paypal_require_billing_address: Maybe<Scalars['Boolean']['output']>
  /** Does Braintree PayPal require the order line items? */
  braintree_paypal_send_cart_line_items: Maybe<Scalars['Boolean']['output']>
  /** Braintree PayPal vault status. */
  braintree_paypal_vault_active: Maybe<Scalars['Boolean']['output']>
  /** checkout/cart/delete_quote_after: quote lifetime in days. */
  cart_expires_in_days: Maybe<Scalars['Int']['output']>
  /** checkout/cart_link/use_qty: what to show in the display cart summary, number of items or item quantities. */
  cart_summary_display_quantity: Maybe<Scalars['Int']['output']>
  /** The default sort order of the search results list. */
  catalog_default_sort_by: Maybe<Scalars['String']['output']>
  /** Corresponds to the 'Display Prices In Product Lists' field in the Admin. It indicates how FPT information is displayed on category pages. */
  category_fixed_product_tax_display_setting: Maybe<FixedProductTaxDisplaySettings>
  /** The suffix applied to category pages, such as `.htm` or `.html`. */
  category_url_suffix: Maybe<Scalars['String']['output']>
  /** Indicates whether only specific countries can use this payment method. */
  check_money_order_enable_for_specific_countries: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the Check/Money Order payment method is enabled. */
  check_money_order_enabled: Maybe<Scalars['Boolean']['output']>
  /** The name of the party to whom the check must be payable. */
  check_money_order_make_check_payable_to: Maybe<Scalars['String']['output']>
  /** The maximum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_max_order_total: Maybe<Scalars['String']['output']>
  /** The minimum order amount required to qualify for the Check/Money Order payment method. */
  check_money_order_min_order_total: Maybe<Scalars['String']['output']>
  /** The status of new orders placed using the Check/Money Order payment method. */
  check_money_order_new_order_status: Maybe<Scalars['String']['output']>
  /** A comma-separated list of specific countries allowed to use the Check/Money Order payment method. */
  check_money_order_payment_from_specific_countries: Maybe<Scalars['String']['output']>
  /** The full street address or PO Box where the checks are mailed. */
  check_money_order_send_check_to: Maybe<Scalars['String']['output']>
  /** A number indicating the position of the Check/Money Order payment method in the list of available payment methods during checkout. */
  check_money_order_sort_order: Maybe<Scalars['Int']['output']>
  /** The title of the Check/Money Order payment method displayed on the storefront. */
  check_money_order_title: Maybe<Scalars['String']['output']>
  /** The name of the CMS page that identifies the home page for the store. */
  cms_home_page: Maybe<Scalars['String']['output']>
  /** A specific CMS page that displays when cookies are not enabled for the browser. */
  cms_no_cookies: Maybe<Scalars['String']['output']>
  /** A specific CMS page that displays when a 404 'Page Not Found' error occurs. */
  cms_no_route: Maybe<Scalars['String']['output']>
  /**
   * A code assigned to the store to identify it.
   * @deprecated Use `store_code` instead.
   */
  code: Maybe<Scalars['String']['output']>
  /** checkout/cart/configurable_product_image: which image to use for configurable products. */
  configurable_product_image: ProductImageThumbnail
  /** Indicates whether the `parent` or child (`itself`) thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source: Maybe<Scalars['String']['output']>
  /** Indicates whether the Contact Us form in enabled. */
  contact_enabled: Scalars['Boolean']['output']
  /** The copyright statement that appears at the bottom of each page. */
  copyright: Maybe<Scalars['String']['output']>
  /** Extended Config Data - general/region/state_required */
  countries_with_required_region: Maybe<Scalars['String']['output']>
  /** Indicates if the new accounts need confirmation. */
  create_account_confirmation: Maybe<Scalars['Boolean']['output']>
  /** Customer access token lifetime. */
  customer_access_token_lifetime: Maybe<Scalars['Float']['output']>
  /** Extended Config Data - general/country/default */
  default_country: Maybe<Scalars['String']['output']>
  /** The description that provides a summary of your site for search engine listings. It should not be more than 160 characters in length. */
  default_description: Maybe<Scalars['String']['output']>
  /** The default display currency code. */
  default_display_currency_code: Maybe<Scalars['String']['output']>
  /** A series of keywords that describe your store, each separated by a comma. */
  default_keywords: Maybe<Scalars['String']['output']>
  /** The title that appears at the title bar of each page when viewed in a browser. */
  default_title: Maybe<Scalars['String']['output']>
  /** Controls the display of the demo store notice at the top of the page. Options: 0 (No) or 1 (Yes). */
  demonotice: Maybe<Scalars['Int']['output']>
  /** Configuration data from tax/display/type */
  display_product_prices_in_catalog: Scalars['Int']['output']
  /** Configuration data from tax/display/shipping */
  display_shipping_prices: Scalars['Int']['output']
  /** Extended Config Data - general/region/display_all */
  display_state_if_optional: Maybe<Scalars['Boolean']['output']>
  /** Configuration data from tax/weee/apply_vat */
  fixed_product_taxes_apply_tax_to_fpt: Scalars['Boolean']['output']
  /** Configuration data from tax/weee/display_email */
  fixed_product_taxes_display_prices_in_emails: Scalars['Int']['output']
  /** Configuration data from tax/weee/display_list */
  fixed_product_taxes_display_prices_in_product_lists: Scalars['Int']['output']
  /** Configuration data from tax/weee/display_sales */
  fixed_product_taxes_display_prices_in_sales_modules: Scalars['Int']['output']
  /** Configuration data from tax/weee/display */
  fixed_product_taxes_display_prices_on_product_view_page: Scalars['Int']['output']
  /** Configuration data from tax/weee/enable */
  fixed_product_taxes_enable: Scalars['Boolean']['output']
  /** Configuration data from tax/weee/include_in_subtotal */
  fixed_product_taxes_include_fpt_in_subtotal: Scalars['Boolean']['output']
  /** The landing page that is associated with the base URL. */
  front: Maybe<Scalars['String']['output']>
  /** The default number of products per page in Grid View. */
  grid_per_page: Maybe<Scalars['Int']['output']>
  /** A list of numbers that define how many products can be displayed in Grid View. */
  grid_per_page_values: Maybe<Scalars['String']['output']>
  /** checkout/cart/grouped_product_image: which image to use for grouped products. */
  grouped_product_image: ProductImageThumbnail
  /** Scripts that must be included in the HTML before the closing `<head>` tag. */
  head_includes: Maybe<Scalars['String']['output']>
  /** The small graphic image (favicon) that appears in the address bar and tab of the browser. */
  head_shortcut_icon: Maybe<Scalars['String']['output']>
  /** The path to the logo that appears in the header. */
  header_logo_src: Maybe<Scalars['String']['output']>
  /**
   * The ID number assigned to the store.
   * @deprecated Use `store_code` instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** Configuration data from checkout/options/enable_agreements */
  is_checkout_agreements_enabled: Scalars['Boolean']['output']
  /** Indicates whether the store view has been designated as the default within the store group. */
  is_default_store: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the store group has been designated as the default within the website. */
  is_default_store_group: Maybe<Scalars['Boolean']['output']>
  /** checkout/options/guest_checkout: whether the guest checkout is enabled or not. */
  is_guest_checkout_enabled: Maybe<Scalars['Boolean']['output']>
  /** checkout/options/onepage_checkout_enabled: whether the one page checkout is enabled or not */
  is_one_page_checkout_enabled: Maybe<Scalars['Boolean']['output']>
  /** The format of the search results list. */
  list_mode: Maybe<Scalars['String']['output']>
  /** The default number of products per page in List View. */
  list_per_page: Maybe<Scalars['Int']['output']>
  /** A list of numbers that define how many products can be displayed in List View. */
  list_per_page_values: Maybe<Scalars['String']['output']>
  /** The store locale. */
  locale: Maybe<Scalars['String']['output']>
  /** The Alt text that is associated with the logo. */
  logo_alt: Maybe<Scalars['String']['output']>
  /** The height of the logo image, in pixels. */
  logo_height: Maybe<Scalars['Int']['output']>
  /** The width of the logo image, in pixels. */
  logo_width: Maybe<Scalars['Int']['output']>
  /** Indicates whether wishlists are enabled (1) or disabled (0). */
  magento_wishlist_general_is_enabled: Maybe<Scalars['String']['output']>
  /** checkout/options/max_items_display_count: maximum number of items to display in order summary. */
  max_items_in_order_summary: Maybe<Scalars['Int']['output']>
  /** checkout/sidebar/display: whether to display the minicart or not. */
  minicart_display: Maybe<Scalars['Boolean']['output']>
  /** checkout/sidebar/count: maximum number of items to show in minicart. */
  minicart_max_items: Maybe<Scalars['Int']['output']>
  /** The minimum number of characters required for a valid password. */
  minimum_password_length: Maybe<Scalars['String']['output']>
  /** Indicates whether newsletters are enabled. */
  newsletter_enabled: Scalars['Boolean']['output']
  /** The default page that displays when a 404 'Page not Found' error occurs. */
  no_route: Maybe<Scalars['String']['output']>
  /** Extended Config Data - general/country/optional_zip_countries */
  optional_zip_countries: Maybe<Scalars['String']['output']>
  /** Indicates whether orders can be cancelled by customers or not. */
  order_cancellation_enabled: Scalars['Boolean']['output']
  /** An array containing available cancellation reasons. */
  order_cancellation_reasons: Array<Maybe<CancellationReason>>
  /** Configuration data from tax/sales_display/full_summary */
  orders_invoices_credit_memos_display_full_summary: Scalars['Boolean']['output']
  /** Configuration data from tax/sales_display/grandtotal */
  orders_invoices_credit_memos_display_grandtotal: Scalars['Boolean']['output']
  /** Configuration data from tax/sales_display/price */
  orders_invoices_credit_memos_display_price: Scalars['Int']['output']
  /** Configuration data from tax/sales_display/shipping */
  orders_invoices_credit_memos_display_shipping_amount: Scalars['Int']['output']
  /** Configuration data from tax/sales_display/subtotal */
  orders_invoices_credit_memos_display_subtotal: Scalars['Int']['output']
  /** Configuration data from tax/sales_display/zero_tax */
  orders_invoices_credit_memos_display_zero_tax: Scalars['Boolean']['output']
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active: Maybe<Scalars['String']['output']>
  /** Corresponds to the 'Display Prices On Product View Page' field in the Admin. It indicates how FPT information is displayed on product pages. */
  product_fixed_product_tax_display_setting: Maybe<FixedProductTaxDisplaySettings>
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No). */
  product_reviews_enabled: Maybe<Scalars['String']['output']>
  /** The suffix applied to product pages, such as `.htm` or `.html`. */
  product_url_suffix: Maybe<Scalars['String']['output']>
  /** The number of different character classes (lowercase, uppercase, digits, special characters) required in a password. */
  required_character_classes_number: Maybe<Scalars['String']['output']>
  /**
   * The ID of the root category.
   * @deprecated Use `root_category_uid` instead.
   */
  root_category_id: Maybe<Scalars['Int']['output']>
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid: Maybe<Scalars['ID']['output']>
  /** Corresponds to the 'Display Prices In Sales Modules' field in the Admin. It indicates how FPT information is displayed on cart, checkout, and order pages. */
  sales_fixed_product_tax_display_setting: Maybe<FixedProductTaxDisplaySettings>
  /** A secure fully-qualified URL that is used to create relative links to the `base_url`. */
  secure_base_link_url: Maybe<Scalars['String']['output']>
  /** The secure fully-qualified URL that specifies the location of media files. */
  secure_base_media_url: Maybe<Scalars['String']['output']>
  /** The secure fully-qualified URL that specifies the location of static view files. */
  secure_base_static_url: Maybe<Scalars['String']['output']>
  /** The store’s fully-qualified secure base URL. */
  secure_base_url: Maybe<Scalars['String']['output']>
  /** Email to a Friend configuration. */
  send_friend: Maybe<SendFriendConfiguration>
  /** Extended Config Data - tax/cart_display/full_summary */
  shopping_cart_display_full_summary: Maybe<Scalars['Boolean']['output']>
  /** Extended Config Data - tax/cart_display/grandtotal */
  shopping_cart_display_grand_total: Maybe<Scalars['Boolean']['output']>
  /** Extended Config Data - tax/cart_display/price */
  shopping_cart_display_price: Maybe<Scalars['Int']['output']>
  /** Extended Config Data - tax/cart_display/shipping */
  shopping_cart_display_shipping: Maybe<Scalars['Int']['output']>
  /** Extended Config Data - tax/cart_display/subtotal */
  shopping_cart_display_subtotal: Maybe<Scalars['Int']['output']>
  /** Extended Config Data - tax/cart_display/gift_wrapping */
  shopping_cart_display_tax_gift_wrapping: Maybe<TaxWrappingEnum>
  /** Extended Config Data - tax/cart_display/zero_tax */
  shopping_cart_display_zero_tax: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether a breadcrumb trail appears on all CMS pages in the catalog. 0 (No) or 1 (Yes). */
  show_cms_breadcrumbs: Maybe<Scalars['Int']['output']>
  /** The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope. */
  store_code: Maybe<Scalars['ID']['output']>
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name. */
  store_group_code: Maybe<Scalars['ID']['output']>
  /** The label assigned to the store group. */
  store_group_name: Maybe<Scalars['String']['output']>
  /** The label assigned to the store view. */
  store_name: Maybe<Scalars['String']['output']>
  /** The store view sort order. */
  store_sort_order: Maybe<Scalars['Int']['output']>
  /** The time zone of the store. */
  timezone: Maybe<Scalars['String']['output']>
  /** A prefix that appears before the title to create a two- or three-part title. */
  title_prefix: Maybe<Scalars['String']['output']>
  /** The character that separates the category name and subcategory in the browser title bar. */
  title_separator: Maybe<Scalars['String']['output']>
  /** A suffix that appears after the title to create a two- or three-part title. */
  title_suffix: Maybe<Scalars['String']['output']>
  /** Indicates whether the store code should be used in the URL. */
  use_store_in_url: Maybe<Scalars['Boolean']['output']>
  /** The unique ID for the website. */
  website_code: Maybe<Scalars['ID']['output']>
  /**
   * The ID number assigned to the website store.
   * @deprecated The field should not be used on the storefront.
   */
  website_id: Maybe<Scalars['Int']['output']>
  /** The label assigned to the website. */
  website_name: Maybe<Scalars['String']['output']>
  /** The unit of weight. */
  weight_unit: Maybe<Scalars['String']['output']>
  /** Text that appears in the header of the page and includes the name of the logged in customer. */
  welcome: Maybe<Scalars['String']['output']>
  /** Indicates whether only specific countries can use this payment method. */
  zero_subtotal_enable_for_specific_countries: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the Zero Subtotal payment method is enabled. */
  zero_subtotal_enabled: Maybe<Scalars['Boolean']['output']>
  /** The status of new orders placed using the Zero Subtotal payment method. */
  zero_subtotal_new_order_status: Maybe<Scalars['String']['output']>
  /** When the new order status is 'Processing', this can be set to `authorize_capture` to automatically invoice all items that have a zero balance. */
  zero_subtotal_payment_action: Maybe<Scalars['String']['output']>
  /** A comma-separated list of specific countries allowed to use the Zero Subtotal payment method. */
  zero_subtotal_payment_from_specific_countries: Maybe<Scalars['String']['output']>
  /** A number indicating the position of the Zero Subtotal payment method in the list of available payment methods during checkout. */
  zero_subtotal_sort_order: Maybe<Scalars['Int']['output']>
  /** The title of the Zero Subtotal payment method displayed on the storefront. */
  zero_subtotal_title: Maybe<Scalars['String']['output']>
}

/** Indicates where an attribute can be displayed. */
export type StorefrontProperties = {
  __typename?: 'StorefrontProperties'
  /** The relative position of the attribute in the layered navigation block. */
  position: Maybe<Scalars['Int']['output']>
  /** Indicates whether the attribute is filterable with results, without results, or not at all. */
  use_in_layered_navigation: Maybe<UseInLayeredNavigationOptions>
  /** Indicates whether the attribute is displayed in product listings. */
  use_in_product_listing: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the attribute can be used in layered navigation on search results pages. */
  use_in_search_results_layered_navigation: Maybe<Scalars['Boolean']['output']>
  /** Indicates whether the attribute is displayed on product pages. */
  visible_on_catalog_pages: Maybe<Scalars['Boolean']['output']>
}

export type StripePaymentMethod = {
  __typename?: 'StripePaymentMethod'
  /** Card brand */
  brand: Maybe<Scalars['String']['output']>
  /** UNIX timestamp representing the date that the payment method was created. */
  created: Maybe<Scalars['Int']['output']>
  /** Indicates whether this saved payment method requires a CVC token to be submitted when placing an order. */
  cvc: Maybe<Scalars['Boolean']['output']>
  /** Card expiration month */
  exp_month: Maybe<Scalars['Int']['output']>
  /** Card expiration year */
  exp_year: Maybe<Scalars['Int']['output']>
  /** A unique identifier for the card number, tax id, bank account etc. */
  fingerprint: Maybe<Scalars['String']['output']>
  /** A payment method icon URL that can be used at the front-end. */
  icon: Maybe<Scalars['String']['output']>
  /** Payment method ID */
  id: Scalars['ID']['output']
  /** A formatted payment method label that you can display to the customer. */
  label: Maybe<Scalars['String']['output']>
  /** The type of the payment method, i.e. card, klarna, sepa_debit. */
  type: Maybe<Scalars['String']['output']>
}

export type StripePaymentMethodId = {
  /** When this is passed, the action will be performed on all duplicate payment methods which match the fingerprint. */
  fingerprint: InputMaybe<Scalars['String']['input']>
  /** The ID of a payment method object */
  payment_method: Scalars['String']['input']
}

export type StripePaymentsInput = {
  /** When CVC is enabled for saved cards, pass the CVC token here to perform the verification. */
  cvc_token: InputMaybe<Scalars['String']['input']>
  /** Pass the payment method token here (starts with pm_) */
  payment_method: InputMaybe<Scalars['String']['input']>
  /** Specify whether the payment method should be saved */
  save_payment_method: InputMaybe<Scalars['Boolean']['input']>
}

/** Contains the result of the `subscribeEmailToNewsletter` operation. */
export type SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput'
  /** The status of the subscription request. */
  status: Maybe<SubscriptionStatusesEnum>
}

/** Indicates the status of the request. */
export type SubscriptionStatusesEnum
  = | 'NOT_ACTIVE'
    | 'SUBSCRIBED'
    | 'UNCONFIRMED'
    | 'UNSUBSCRIBED'

/** Describes the swatch type and a value. */
export type SwatchData = {
  __typename?: 'SwatchData'
  /** The type of swatch filter item: 1 - text; 2 - image. */
  type: Maybe<Scalars['String']['output']>
  /** The value for the swatch item. It could be text or an image link. */
  value: Maybe<Scalars['String']['output']>
}

export type SwatchDataInterface = {
  /** The value can be represented as color (HEX code), image link, or text. */
  value: Maybe<Scalars['String']['output']>
}

/** Swatch attribute metadata input types. */
export type SwatchInputTypeEnum
  = | 'BOOLEAN'
    | 'DATE'
    | 'DATETIME'
    | 'DROPDOWN'
    | 'FILE'
    | 'GALLERY'
    | 'HIDDEN'
    | 'IMAGE'
    | 'MEDIA_IMAGE'
    | 'MULTILINE'
    | 'MULTISELECT'
    | 'PRICE'
    | 'SELECT'
    | 'TEXT'
    | 'TEXTAREA'
    | 'UNDEFINED'
    | 'VISUAL'
    | 'WEIGHT'

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  __typename?: 'SwatchLayerFilterItem'
  /**
   * The count of items per filter.
   * @deprecated Use `AggregationOption.count` instead.
   */
  items_count: Maybe<Scalars['Int']['output']>
  /**
   * The label for a filter.
   * @deprecated Use `AggregationOption.label` instead.
   */
  label: Maybe<Scalars['String']['output']>
  /** Data required to render a swatch filter item. */
  swatch_data: Maybe<SwatchData>
  /**
   * The value of a filter request variable to be used in query.
   * @deprecated Use `AggregationOption.value` instead.
   */
  value_string: Maybe<Scalars['String']['output']>
}

export type SwatchLayerFilterItemInterface = {
  /** Data required to render a swatch filter item. */
  swatch_data: Maybe<SwatchData>
}

/** Synchronizes the payment order details */
export type SyncPaymentOrderInput = {
  /** The customer cart ID */
  cartId: Scalars['String']['input']
  /** PayPal order ID */
  id: Scalars['String']['input']
}

/** Contains tax item details. */
export type TaxItem = {
  __typename?: 'TaxItem'
  /** The amount of tax applied to the item. */
  amount: Money
  /** The rate used to calculate the tax. */
  rate: Scalars['Float']['output']
  /** A title that describes the tax. */
  title: Scalars['String']['output']
}

export type TaxWrappingEnum
  = | 'DISPLAY_EXCLUDING_TAX'
    | 'DISPLAY_INCLUDING_TAX'
    | 'DISPLAY_TYPE_BOTH'

export type TextSwatchData = SwatchDataInterface & {
  __typename?: 'TextSwatchData'
  /** The value can be represented as color (HEX code), image link, or text. */
  value: Maybe<Scalars['String']['output']>
}

/** 3D Secure mode. */
export type ThreeDsMode
  = | 'OFF'
    | 'SCA_ALWAYS'
    | 'SCA_WHEN_REQUIRED'

/** Defines a price based on the quantity purchased. */
export type TierPrice = {
  __typename?: 'TierPrice'
  /** The price discount that this tier represents. */
  discount: Maybe<ProductDiscount>
  /** The price of the product at this tier. */
  final_price: Maybe<Money>
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity: Maybe<Scalars['Float']['output']>
}

/** Modifies the specified items in the cart. */
export type UpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars['String']['input']
  /** An array of items to be updated. */
  cart_items: Array<InputMaybe<CartItemUpdateInput>>
}

/** Contains details about the cart after updating items. */
export type UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput'
  /** The cart after updating products. */
  cart: Cart
  /** Contains errors encountered while updating an item to the cart. */
  errors: Array<Maybe<CartUserInputError>>
}

/** Contains the customer's wish list and any errors encountered. */
export type UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput'
  /** An array of errors encountered while updating products in a wish list. */
  user_errors: Array<Maybe<WishListUserInputError>>
  /** Contains the wish list with all items that were successfully updated. */
  wishlist: Wishlist
}

/** Contains URL rewrite details. */
export type UrlRewrite = {
  __typename?: 'UrlRewrite'
  /** An array of request parameters. */
  parameters: Maybe<Array<Maybe<HttpQueryParameter>>>
  /** The request URL. */
  url: Maybe<Scalars['String']['output']>
}

/** This enumeration defines the entity type. */
export type UrlRewriteEntityTypeEnum
  = | 'CATEGORY'
    | 'CMS_PAGE'
    | 'PRODUCT'

/** Defines whether the attribute is filterable in layered navigation. */
export type UseInLayeredNavigationOptions
  = | 'FILTERABLE_NO_RESULT'
    | 'FILTERABLE_WITH_RESULTS'
    | 'NO'

/** Defines a customer attribute validation rule. */
export type ValidationRule = {
  __typename?: 'ValidationRule'
  /** Validation rule name applied to a customer attribute. */
  name: Maybe<ValidationRuleEnum>
  /** Validation rule value. */
  value: Maybe<Scalars['String']['output']>
}

/** List of validation rule names applied to a customer attribute. */
export type ValidationRuleEnum
  = | 'DATE_RANGE_MAX'
    | 'DATE_RANGE_MIN'
    | 'FILE_EXTENSIONS'
    | 'INPUT_VALIDATION'
    | 'MAX_FILE_SIZE'
    | 'MAX_IMAGE_HEIGHT'
    | 'MAX_IMAGE_WIDTH'
    | 'MAX_TEXT_LENGTH'
    | 'MIN_TEXT_LENGTH'

/** Retrieves the vault configuration */
export type VaultConfigOutput = {
  __typename?: 'VaultConfigOutput'
  /** Credit card vault method configuration */
  credit_card: Maybe<VaultCreditCardConfig>
}

export type VaultCreditCardConfig = {
  __typename?: 'VaultCreditCardConfig'
  /** Is vault enabled */
  is_vault_enabled: Maybe<Scalars['Boolean']['output']>
  /** The parameters required to load the Paypal JS SDK */
  sdk_params: Maybe<Array<Maybe<SdkParams>>>
  /** 3DS mode */
  three_ds_mode: Maybe<ThreeDsMode>
}

/** Vault payment inputs */
export type VaultMethodInput = {
  /** The payment source for the payment method */
  payment_source: InputMaybe<Scalars['String']['input']>
  /** The payment services order ID */
  payments_order_id: InputMaybe<Scalars['String']['input']>
  /** PayPal order ID */
  paypal_order_id: InputMaybe<Scalars['String']['input']>
  /** The public hash of the token. */
  public_hash: InputMaybe<Scalars['String']['input']>
}

/** The payment source information */
export type VaultSetupTokenInput = {
  /** The payment source information */
  payment_source: PaymentSourceInput
}

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars['String']['input']
}

/** An implementation for virtual product cart items. */
export type VirtualCartItem = CartItemInterface & {
  __typename?: 'VirtualCartItem'
  /** An array containing customizable options the shopper selected. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** An array of errors encountered while loading the cart item */
  errors: Maybe<Array<Maybe<CartItemError>>>
  /** @deprecated Use `uid` instead. */
  id: Scalars['String']['output']
  /** True if requested quantity is less than available stock, false otherwise. */
  is_available: Scalars['Boolean']['output']
  /** Message to display when the product is not available with this selected option. */
  not_available_message: Maybe<Scalars['String']['output']>
  /** Contains details about the price of the item, including taxes and discounts. */
  prices: Maybe<CartItemPrices>
  /** Details about an item in the cart. */
  product: ProductInterface
  /** The quantity of this item in the cart. */
  quantity: Scalars['Float']['output']
  /** The unique ID for a `CartItemInterface` object. */
  uid: Scalars['ID']['output']
}

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProduct = CustomizableProductInterface & ProductInterface & RoutableInterface & {
  __typename?: 'VirtualProduct'
  /** @deprecated Use the `custom_attributes` field instead. */
  activity: Maybe<Scalars['String']['output']>
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id: Maybe<Scalars['Int']['output']>
  /** The relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled. */
  canonical_url: Maybe<Scalars['String']['output']>
  /** The categories assigned to a product. */
  categories: Maybe<Array<Maybe<CategoryInterface>>>
  /** @deprecated Use the `custom_attributes` field instead. */
  category_gear: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  climate: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  collar: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  color: Maybe<Scalars['Int']['output']>
  /** The product's country of origin. */
  country_of_manufacture: Maybe<Scalars['String']['output']>
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at: Maybe<Scalars['String']['output']>
  /** Crosssell Products */
  crosssell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** Product custom attributes. */
  custom_attributesV2: Maybe<ProductCustomAttributes>
  /** Detailed information about the product. The value can include simple HTML tags. */
  description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  eco_collection: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  erin_recommends: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  features_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  format: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  gender: Maybe<Scalars['String']['output']>
  /** Returns a value indicating gift message availability for the product. */
  gift_message_available: Scalars['Boolean']['output']
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id: Maybe<Scalars['Int']['output']>
  /** The relative path to the main image on the product page. */
  image: Maybe<ProductImage>
  /** @deprecated Use the `custom_attributes` field instead. */
  is_seller_product: Maybe<Scalars['Int']['output']>
  /**
   * A number representing the product's manufacturer.
   * @deprecated Use the `custom_attributes` field instead.
   */
  manufacturer: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  material: Maybe<Scalars['String']['output']>
  /** Maximum Qty Allowed in Shopping Cart */
  max_sale_qty: Maybe<Scalars['Float']['output']>
  /** An array of media gallery objects. */
  media_gallery: Maybe<Array<Maybe<MediaGalleryInterface>>>
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use `media_gallery` instead.
   */
  media_gallery_entries: Maybe<Array<Maybe<MediaGalleryEntry>>>
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description: Maybe<Scalars['String']['output']>
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword: Maybe<Scalars['String']['output']>
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title: Maybe<Scalars['String']['output']>
  /** Minimum Qty Allowed in Shopping Cart */
  min_sale_qty: Maybe<Scalars['Float']['output']>
  /** The product name. Customers use this name to identify the product. */
  name: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  new: Maybe<Scalars['Int']['output']>
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date: Maybe<Scalars['String']['output']>
  /** The end date for new product listings. */
  new_to_date: Maybe<Scalars['String']['output']>
  /** Product stock only x left count */
  only_x_left_in_stock: Maybe<Scalars['Float']['output']>
  /** An array of options for a customizable product. */
  options: Maybe<Array<Maybe<CustomizableOptionInterface>>>
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  pattern: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  performance_fabric: Maybe<Scalars['Int']['output']>
  /**
   * Indicates the price of an item.
   * @deprecated Use `price_range` for product price information.
   */
  price: Maybe<ProductPrices>
  /** The range of prices for the product */
  price_range: PriceRange
  /** An array of `TierPrice` objects. */
  price_tiers: Maybe<Array<Maybe<TierPrice>>>
  /** An array of `ProductLinks` objects. */
  product_links: Maybe<Array<Maybe<ProductLinksInterface>>>
  /** Amount of available stock */
  quantity: Maybe<Scalars['Float']['output']>
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float']['output']
  /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect. */
  redirect_code: Scalars['Int']['output']
  /** An array of products to be displayed in a Related Products block. */
  related_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original. */
  relative_url: Maybe<Scalars['String']['output']>
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int']['output']
  /** The list of products reviews. */
  reviews: ProductReviews
  /** @deprecated Use the `custom_attributes` field instead. */
  sale: Maybe<Scalars['Int']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  seller_id: Maybe<Scalars['Int']['output']>
  /** A short description of the product. Its use depends on the theme. */
  short_description: Maybe<ComplexTextValue>
  /** @deprecated Use the `custom_attributes` field instead. */
  size: Maybe<Scalars['Int']['output']>
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sleeve: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  sm_featured: Maybe<Scalars['Int']['output']>
  /** The relative path to the small image, which is used on catalog pages. */
  small_image: Maybe<ProductImage>
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date: Maybe<Scalars['String']['output']>
  /** The discounted price of the product. */
  special_price: Maybe<Scalars['Float']['output']>
  /** The end date for a product with a special price. */
  special_to_date: Maybe<Scalars['String']['output']>
  /** Stock status of the product */
  stock_status: Maybe<ProductStockStatus>
  /** @deprecated Use the `custom_attributes` field instead. */
  strap_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bags: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_bottom: Maybe<Scalars['String']['output']>
  /** @deprecated Use the `custom_attributes` field instead. */
  style_general: Maybe<Scalars['String']['output']>
  /** The file name of a swatch image. */
  swatch_image: Maybe<Scalars['String']['output']>
  /** The relative path to the product's thumbnail image. */
  thumbnail: Maybe<ProductImage>
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_price: Maybe<Scalars['Float']['output']>
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use `price_tiers` for product tier price information.
   */
  tier_prices: Maybe<Array<Maybe<ProductTierPrices>>>
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type: Maybe<UrlRewriteEntityTypeEnum>
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use `__typename` instead.
   */
  type_id: Maybe<Scalars['String']['output']>
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID']['output']
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at: Maybe<Scalars['String']['output']>
  /** Upsell Products */
  upsell_products: Maybe<Array<Maybe<ProductInterface>>>
  /** The part of the URL that identifies the product */
  url_key: Maybe<Scalars['String']['output']>
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path: Maybe<Scalars['String']['output']>
  /** URL rewrites list */
  url_rewrites: Maybe<Array<Maybe<UrlRewrite>>>
  /** The part of the product URL that is appended after the url key */
  url_suffix: Maybe<Scalars['String']['output']>
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites: Maybe<Array<Maybe<Website>>>
}

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductCustom_AttributesV2Args = {
  filters: InputMaybe<AttributeFilterInput>
}

/** Defines a virtual product, which is a non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** Defines a single product to add to the cart. */
export type VirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput
}

/** Contains a virtual product wish list item. */
export type VirtualWishlistItem = WishlistItemInterface & {
  __typename?: 'VirtualWishlistItem'
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output']
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output']
}

/** Deprecated. It should not be used on the storefront. Contains information about a website. */
export type Website = {
  __typename?: 'Website'
  /**
   * A code assigned to the website to identify it.
   * @deprecated The field should not be used on the storefront.
   */
  code: Maybe<Scalars['String']['output']>
  /**
   * The default group ID of the website.
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id: Maybe<Scalars['String']['output']>
  /**
   * The ID number assigned to the website.
   * @deprecated The field should not be used on the storefront.
   */
  id: Maybe<Scalars['Int']['output']>
  /**
   * Indicates whether this is the default website.
   * @deprecated The field should not be used on the storefront.
   */
  is_default: Maybe<Scalars['Boolean']['output']>
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name: Maybe<Scalars['String']['output']>
  /**
   * The attribute to use for sorting websites.
   * @deprecated The field should not be used on the storefront.
   */
  sort_order: Maybe<Scalars['Int']['output']>
}

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  __typename?: 'WishListUserInputError'
  /** A wish list-specific error code. */
  code: WishListUserInputErrorType
  /** A localized error message. */
  message: Scalars['String']['output']
}

/** A list of possible error types. */
export type WishListUserInputErrorType
  = | 'PRODUCT_NOT_FOUND'
    | 'UNDEFINED'

/** Contains a customer wish list. */
export type Wishlist = {
  __typename?: 'Wishlist'
  /** The unique ID for a `Wishlist` object. */
  id: Maybe<Scalars['ID']['output']>
  /** @deprecated Use the `items_v2` field instead. */
  items: Maybe<Array<Maybe<WishlistItem>>>
  /** The number of items in the wish list. */
  items_count: Maybe<Scalars['Int']['output']>
  /** An array of items in the customer's wish list. */
  items_v2: Maybe<WishlistItems>
  /** An encrypted code that Magento uses to link to the wish list. */
  sharing_code: Maybe<Scalars['String']['output']>
  /** The time of the last modification to the wish list. */
  updated_at: Maybe<Scalars['String']['output']>
}

/** Contains a customer wish list. */
export type WishlistItems_V2Args = {
  currentPage?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
}

/** Contains details about errors encountered when a customer added wish list items to the cart. */
export type WishlistCartUserInputError = {
  __typename?: 'WishlistCartUserInputError'
  /** An error code that describes the error encountered. */
  code: WishlistCartUserInputErrorType
  /** A localized error message. */
  message: Scalars['String']['output']
  /** The unique ID of the `Wishlist` object containing an error. */
  wishlistId: Scalars['ID']['output']
  /** The unique ID of the wish list item containing an error. */
  wishlistItemId: Scalars['ID']['output']
}

/** A list of possible error types. */
export type WishlistCartUserInputErrorType
  = | 'INSUFFICIENT_STOCK'
    | 'NOT_SALABLE'
    | 'PRODUCT_NOT_FOUND'
    | 'UNDEFINED'

/** Contains details about a wish list item. */
export type WishlistItem = {
  __typename?: 'WishlistItem'
  /** The time when the customer added the item to the wish list. */
  added_at: Maybe<Scalars['String']['output']>
  /** The customer's comment about this item. */
  description: Maybe<Scalars['String']['output']>
  /** The unique ID for a `WishlistItem` object. */
  id: Maybe<Scalars['Int']['output']>
  /** Details about the wish list item. */
  product: Maybe<ProductInterface>
  /** The quantity of this wish list item */
  qty: Maybe<Scalars['Float']['output']>
}

/** Defines the items to add to a wish list. */
export type WishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>
  /** For complex product types, the SKU of the parent product. */
  parent_sku: InputMaybe<Scalars['String']['input']>
  /** The amount or number of items to add. */
  quantity: Scalars['Float']['input']
  /** An array of strings corresponding to options the customer selected. */
  selected_options: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars['String']['input']
}

/** The interface for wish list items. */
export type WishlistItemInterface = {
  /** The date and time the item was added to the wish list. */
  added_at: Scalars['String']['output']
  /** Custom options selected for the wish list item. */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>
  /** The description of the item. */
  description: Maybe<Scalars['String']['output']>
  /** The unique ID for a `WishlistItemInterface` object. */
  id: Scalars['ID']['output']
  /** Product details of the wish list item. */
  product: Maybe<ProductInterface>
  /** The quantity of this wish list item. */
  quantity: Scalars['Float']['output']
}

/** Defines updates to items in a wish list. */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description: InputMaybe<Scalars['String']['input']>
  /** An array of options that the customer entered. */
  entered_options: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>
  /** The new amount or number of this item. */
  quantity: InputMaybe<Scalars['Float']['input']>
  /** An array of strings corresponding to options the customer selected. */
  selected_options: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars['ID']['input']
}

/** Contains an array of items in a wish list. */
export type WishlistItems = {
  __typename?: 'WishlistItems'
  /** A list of items in the wish list. */
  items: Array<Maybe<WishlistItemInterface>>
  /** Contains pagination metadata. */
  page_info: Maybe<SearchResultPageInfo>
}

/** Deprecated: Use the `Wishlist` type instead. */
export type WishlistOutput = {
  __typename?: 'WishlistOutput'
  /**
   * An array of items in the customer's wish list
   * @deprecated Use the `Wishlist.items` field instead.
   */
  items: Maybe<Array<Maybe<WishlistItem>>>
  /**
   * The number of items in the wish list.
   * @deprecated Use the `Wishlist.items_count` field instead.
   */
  items_count: Maybe<Scalars['Int']['output']>
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist.
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source.
   */
  name: Maybe<Scalars['String']['output']>
  /**
   * An encrypted code that links to the wish list.
   * @deprecated Use the `Wishlist.sharing_code` field instead.
   */
  sharing_code: Maybe<Scalars['String']['output']>
  /**
   * The time of the last modification to the wish list.
   * @deprecated Use the `Wishlist.updated_at` field instead.
   */
  updated_at: Maybe<Scalars['String']['output']>
}

/** Assigns a specific `cart_id` to the empty cart. */
export type CreateEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id: InputMaybe<Scalars['String']['input']>
}

export type AddBundleProductsToCartMutationVariables = Exact<{
  input: InputMaybe<AddBundleProductsToCartInput>
}>

export type AddBundleProductsToCartMutation = { __typename?: 'Mutation', addBundleProductsToCart: { __typename?: 'AddBundleProductsToCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type AddConfigurableProductsToCartMutationVariables = Exact<{
  input: InputMaybe<AddConfigurableProductsToCartInput>
}>

export type AddConfigurableProductsToCartMutation = { __typename?: 'Mutation', addConfigurableProductsToCart: { __typename?: 'AddConfigurableProductsToCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type AddDownloadableProductsToCartMutationVariables = Exact<{
  input: InputMaybe<AddDownloadableProductsToCartInput>
}>

export type AddDownloadableProductsToCartMutation = { __typename?: 'Mutation', addDownloadableProductsToCart: { __typename?: 'AddDownloadableProductsToCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type AddProductsToCartMutationVariables = Exact<{
  cartId: Scalars['String']['input']
  cartItems: Array<CartItemInput> | CartItemInput
}>

export type AddProductsToCartMutation = { __typename?: 'Mutation', addProductsToCart: { __typename?: 'AddProductsToCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number }, user_errors: Array<
  | { __typename?: 'CartUserInputError', code: CartUserInputErrorType, message: string }
  | { __typename?: 'InsufficientStockError', code: CartUserInputErrorType, message: string }
  | null> } | null }

export type AddProductsToCompareListMutationVariables = Exact<{
  input: InputMaybe<AddProductsToCompareListInput>
}>

export type AddProductsToCompareListMutation = { __typename?: 'Mutation', addProductsToCompareList: { __typename?: 'CompareList', item_count: number, uid: string, attributes: Array<{ __typename?: 'ComparableAttribute', code: string, label: string } | null> | null, items: Array<{ __typename?: 'ComparableItem', uid: string } | null> | null } | null }

export type AddProductsToNewCartMutationVariables = Exact<{
  cartItems: Array<CartItemInput> | CartItemInput
}>

export type AddProductsToNewCartMutation = { __typename?: 'Mutation', addProductsToNewCart: { __typename?: 'AddProductsToNewCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } | null, user_errors: Array<{ __typename?: 'CartUserInputError', code: CartUserInputErrorType, message: string } | null> | null } | null }

export type AddProductsToWishlistMutationVariables = Exact<{
  wishlistId: Scalars['ID']['input']
  wishlistItems: Array<WishlistItemInput> | WishlistItemInput
}>

export type AddProductsToWishlistMutation = { __typename?: 'Mutation', addProductsToWishlist: { __typename?: 'AddProductsToWishlistOutput', user_errors: Array<{ __typename?: 'WishListUserInputError', code: WishListUserInputErrorType, message: string } | null>, wishlist: { __typename?: 'Wishlist', id: string | null, items_count: number | null, sharing_code: string | null, updated_at: string | null } } | null }

export type AddSimpleProductsToCartMutationVariables = Exact<{
  input: InputMaybe<AddSimpleProductsToCartInput>
}>

export type AddSimpleProductsToCartMutation = { __typename?: 'Mutation', addSimpleProductsToCart: { __typename?: 'AddSimpleProductsToCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type AddStripePaymentMethodMutationVariables = Exact<{
  input: StripePaymentMethodId
}>

export type AddStripePaymentMethodMutation = { __typename?: 'Mutation', addStripePaymentMethod: { __typename?: 'StripePaymentMethod', brand: string | null, created: number | null, cvc: boolean | null, exp_month: number | null, exp_year: number | null, fingerprint: string | null, icon: string | null, id: string, label: string | null, type: string | null } | null }

export type AddVirtualProductsToCartMutationVariables = Exact<{
  input: InputMaybe<AddVirtualProductsToCartInput>
}>

export type AddVirtualProductsToCartMutation = { __typename?: 'Mutation', addVirtualProductsToCart: { __typename?: 'AddVirtualProductsToCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type AddWishlistItemsToCartMutationVariables = Exact<{
  wishlistId: Scalars['ID']['input']
  wishlistItemIds: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>
}>

export type AddWishlistItemsToCartMutation = { __typename?: 'Mutation', addWishlistItemsToCart: { __typename?: 'AddWishlistItemsToCartOutput', status: boolean, add_wishlist_items_to_cart_user_errors: Array<{ __typename?: 'WishlistCartUserInputError', code: WishlistCartUserInputErrorType, message: string, wishlistId: string, wishlistItemId: string } | null>, wishlist: { __typename?: 'Wishlist', id: string | null, items_count: number | null, sharing_code: string | null, updated_at: string | null } } | null }

export type ApplyCouponToCartMutationVariables = Exact<{
  input: InputMaybe<ApplyCouponToCartInput>
}>

export type ApplyCouponToCartMutation = { __typename?: 'Mutation', applyCouponToCart: { __typename?: 'ApplyCouponToCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type AssignCompareListToCustomerMutationVariables = Exact<{
  uid: Scalars['ID']['input']
}>

export type AssignCompareListToCustomerMutation = { __typename?: 'Mutation', assignCompareListToCustomer: { __typename?: 'AssignCompareListToCustomerOutput', result: boolean, compare_list: { __typename?: 'CompareList', item_count: number, uid: string } | null } | null }

export type AssignCustomerToGuestCartMutationVariables = Exact<{
  pageSize: InputMaybe<Scalars['Int']['input']>
  currentPage: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<QuoteItemsSortInput>
  cart_id: Scalars['String']['input']
}>

export type AssignCustomerToGuestCartMutation = { __typename?: 'Mutation', assignCustomerToGuestCart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number, applied_coupons: Array<{ __typename?: 'AppliedCoupon', code: string } | null> | null, available_payment_methods: Array<{ __typename?: 'AvailablePaymentMethod', code: string, is_deferred: boolean, title: string } | null> | null, billing_address: { __typename?: 'BillingCartAddress', city: string, company: string | null, fax: string | null, firstname: string, id: number | null, lastname: string, middlename: string | null, postcode: string | null, prefix: string | null, street: Array<string | null>, suffix: string | null, telephone: string | null, uid: string, vat_id: string | null } | null, gift_message: { __typename?: 'GiftMessage', from: string, message: string, to: string } | null, itemsV2: { __typename?: 'CartItems', total_count: number } | null, selected_payment_method: { __typename?: 'SelectedPaymentMethod', code: string, purchase_order_number: string | null, title: string } | null, shipping_addresses: Array<{ __typename?: 'ShippingCartAddress', city: string, company: string | null, customer_notes: string | null, fax: string | null, firstname: string, id: number | null, lastname: string, middlename: string | null, pickup_location_code: string | null, postcode: string | null, prefix: string | null, same_as_billing: boolean, street: Array<string | null>, suffix: string | null, telephone: string | null, uid: string, vat_id: string | null } | null> } }

export type CancelOrderMutationVariables = Exact<{
  input: CancelOrderInput
}>

export type CancelOrderMutation = { __typename?: 'Mutation', cancelOrder: { __typename?: 'CancelOrderOutput', error: string | null, errorV2: { __typename?: 'CancelOrderError', code: CancelOrderErrorCode, message: string } | null, order: { __typename?: 'CustomerOrder', available_actions: Array<OrderActionType | null>, carrier: string | null, email: string | null, id: string, is_virtual: boolean, number: string, order_date: string, order_status_change_date: string, shipping_method: string | null, status: string, token: string } | null } | null }

export type ChangeCustomerPasswordMutationVariables = Exact<{
  currentPage: InputMaybe<Scalars['Int']['input']>
  pageSize: InputMaybe<Scalars['Int']['input']>
  attributeCodes: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>
  filter: InputMaybe<CustomerOrdersFilterInput>
  currentPage1: InputMaybe<Scalars['Int']['input']>
  pageSize1: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<CustomerOrderSortInput>
  scope: InputMaybe<ScopeTypeEnum>
  id: Scalars['ID']['input']
  pageSize2: InputMaybe<Scalars['Int']['input']>
  currentPage2: InputMaybe<Scalars['Int']['input']>
  currentPassword: Scalars['String']['input']
  newPassword: Scalars['String']['input']
}>

export type ChangeCustomerPasswordMutation = { __typename?: 'Mutation', changeCustomerPassword: { __typename?: 'Customer', allow_remote_shopping_assistance: boolean, confirmation_status: ConfirmationStatusEnum, created_at: string | null, date_of_birth: string | null, default_billing: string | null, default_shipping: string | null, email: string | null, firstname: string | null, gender: number | null, is_subscribed: boolean | null, lastname: string | null, middlename: string | null, prefix: string | null, suffix: string | null, taxvat: string | null, addresses: Array<{ __typename?: 'CustomerAddress', city: string | null, company: string | null, country_code: CountryCodeEnum | null, default_billing: boolean | null, default_shipping: boolean | null, fax: string | null, firstname: string | null, id: number | null, lastname: string | null, middlename: string | null, postcode: string | null, prefix: string | null, region_id: number | null, street: Array<string | null> | null, suffix: string | null, telephone: string | null, vat_id: string | null } | null> | null, addressesV2: { __typename?: 'CustomerAddresses', total_count: number | null } | null, compare_list: { __typename?: 'CompareList', item_count: number, uid: string } | null, custom_attributes: Array<
  | { __typename?: 'AttributeSelectedOptions', code: string }
  | { __typename?: 'AttributeValue', code: string }
  | null> | null, orders: { __typename?: 'CustomerOrders', date_of_first_order: string | null, total_count: number | null } | null, wishlist_v2: { __typename?: 'Wishlist', id: string | null, items_count: number | null, sharing_code: string | null, updated_at: string | null } | null, wishlists: Array<{ __typename?: 'Wishlist', id: string | null, items_count: number | null, sharing_code: string | null, updated_at: string | null } | null> } | null }

export type CompleteOrderMutationVariables = Exact<{
  input: InputMaybe<CompleteOrderInput>
}>

export type CompleteOrderMutation = { __typename?: 'Mutation', completeOrder: { __typename?: 'PlaceOrderOutput', errors: Array<{ __typename?: 'PlaceOrderError', code: PlaceOrderErrorCodes, message: string } | null>, orderV2: { __typename?: 'CustomerOrder', available_actions: Array<OrderActionType | null>, carrier: string | null, email: string | null, id: string, is_virtual: boolean, number: string, order_date: string, order_status_change_date: string, shipping_method: string | null, status: string, token: string } | null } | null }

export type ConfirmCancelOrderMutationVariables = Exact<{
  input: ConfirmCancelOrderInput
}>

export type ConfirmCancelOrderMutation = { __typename?: 'Mutation', confirmCancelOrder: { __typename?: 'CancelOrderOutput', error: string | null, errorV2: { __typename?: 'CancelOrderError', code: CancelOrderErrorCode, message: string } | null, order: { __typename?: 'CustomerOrder', available_actions: Array<OrderActionType | null>, carrier: string | null, email: string | null, id: string, is_virtual: boolean, number: string, order_date: string, order_status_change_date: string, shipping_method: string | null, status: string, token: string } | null } | null }

export type ConfirmEmailMutationVariables = Exact<{
  input: ConfirmEmailInput
}>

export type ConfirmEmailMutation = { __typename?: 'Mutation', confirmEmail: { __typename?: 'CustomerOutput', customer: { __typename?: 'Customer', allow_remote_shopping_assistance: boolean, confirmation_status: ConfirmationStatusEnum, created_at: string | null, date_of_birth: string | null, default_billing: string | null, default_shipping: string | null, email: string | null, firstname: string | null, gender: number | null, is_subscribed: boolean | null, lastname: string | null, middlename: string | null, prefix: string | null, suffix: string | null, taxvat: string | null } } | null }

export type ContactUsMutationVariables = Exact<{
  input: ContactUsInput
}>

export type ContactUsMutation = { __typename?: 'Mutation', contactUs: { __typename?: 'ContactUsOutput', status: boolean } | null }

export type CreateBraintreeClientTokenMutationVariables = Exact<{ [key: string]: never }>

export type CreateBraintreeClientTokenMutation = { __typename?: 'Mutation', createBraintreeClientToken: string }

export type CreateBraintreePayPalClientTokenMutationVariables = Exact<{ [key: string]: never }>

export type CreateBraintreePayPalClientTokenMutation = { __typename?: 'Mutation', createBraintreePayPalClientToken: string }

export type CreateBraintreePayPalVaultClientTokenMutationVariables = Exact<{
  input: InputMaybe<BraintreeVaultInput>
}>

export type CreateBraintreePayPalVaultClientTokenMutation = { __typename?: 'Mutation', createBraintreePayPalVaultClientToken: string }

export type CreateCompareListMutationVariables = Exact<{
  input: InputMaybe<CreateCompareListInput>
}>

export type CreateCompareListMutation = { __typename?: 'Mutation', createCompareList: { __typename?: 'CompareList', item_count: number, uid: string, attributes: Array<{ __typename?: 'ComparableAttribute', code: string, label: string } | null> | null, items: Array<{ __typename?: 'ComparableItem', uid: string } | null> | null } | null }

export type CreateCustomerAddressMutationVariables = Exact<{
  attributeCodes: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>
  input: CustomerAddressInput
}>

export type CreateCustomerAddressMutation = { __typename?: 'Mutation', createCustomerAddress: { __typename?: 'CustomerAddress', city: string | null, company: string | null, country_code: CountryCodeEnum | null, default_billing: boolean | null, default_shipping: boolean | null, fax: string | null, firstname: string | null, id: number | null, lastname: string | null, middlename: string | null, postcode: string | null, prefix: string | null, region_id: number | null, street: Array<string | null> | null, suffix: string | null, telephone: string | null, vat_id: string | null, custom_attributesV2: Array<
  | { __typename?: 'AttributeSelectedOptions', code: string }
  | { __typename?: 'AttributeValue', code: string }
  | null>, extension_attributes: Array<{ __typename?: 'CustomerAddressAttribute', attribute_code: string | null, value: string | null } | null> | null, region: { __typename?: 'CustomerAddressRegion', region: string | null, region_code: string | null, region_id: number | null } | null } | null }

export type CreateCustomerV2MutationVariables = Exact<{
  input: CustomerCreateInput
}>

export type CreateCustomerV2Mutation = { __typename?: 'Mutation', createCustomerV2: { __typename?: 'CustomerOutput', customer: { __typename?: 'Customer', allow_remote_shopping_assistance: boolean, confirmation_status: ConfirmationStatusEnum, created_at: string | null, date_of_birth: string | null, default_billing: string | null, default_shipping: string | null, email: string | null, firstname: string | null, gender: number | null, is_subscribed: boolean | null, lastname: string | null, middlename: string | null, prefix: string | null, suffix: string | null, taxvat: string | null } } | null }

export type CreateGuestCartMutationVariables = Exact<{
  input: InputMaybe<CreateGuestCartInput>
}>

export type CreateGuestCartMutation = { __typename?: 'Mutation', createGuestCart: { __typename?: 'CreateGuestCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } | null } | null }

export type CreatePayflowProTokenMutationVariables = Exact<{
  input: PayflowProTokenInput
}>

export type CreatePayflowProTokenMutation = { __typename?: 'Mutation', createPayflowProToken: { __typename?: 'CreatePayflowProTokenOutput', response_message: string, result: number, result_code: number, secure_token: string, secure_token_id: string } | null }

export type CreatePaymentOrderMutationVariables = Exact<{
  input: CreatePaymentOrderInput
}>

export type CreatePaymentOrderMutation = { __typename?: 'Mutation', createPaymentOrder: { __typename?: 'CreatePaymentOrderOutput', amount: number | null, currency_code: string | null, id: string | null, mp_order_id: string | null, status: string | null } | null }

export type CreatePaypalExpressTokenMutationVariables = Exact<{
  input: PaypalExpressTokenInput
}>

export type CreatePaypalExpressTokenMutation = { __typename?: 'Mutation', createPaypalExpressToken: { __typename?: 'PaypalExpressTokenOutput', token: string | null, paypal_urls: { __typename?: 'PaypalExpressUrlList', edit: string | null, start: string | null } | null } | null }

export type CreateProductReviewMutationVariables = Exact<{
  input: CreateProductReviewInput
}>

export type CreateProductReviewMutation = { __typename?: 'Mutation', createProductReview: { __typename?: 'CreateProductReviewOutput', review: { __typename?: 'ProductReview', average_rating: number, created_at: string, nickname: string, summary: string, text: string } } }

export type CreateVaultCardPaymentTokenMutationVariables = Exact<{
  input: CreateVaultCardPaymentTokenInput
}>

export type CreateVaultCardPaymentTokenMutation = { __typename?: 'Mutation', createVaultCardPaymentToken: { __typename?: 'CreateVaultCardPaymentTokenOutput', vault_token_id: string } | null }

export type CreateVaultCardSetupTokenMutationVariables = Exact<{
  input: CreateVaultCardSetupTokenInput
}>

export type CreateVaultCardSetupTokenMutation = { __typename?: 'Mutation', createVaultCardSetupToken: { __typename?: 'CreateVaultCardSetupTokenOutput', setup_token: string } | null }

export type DeleteCompareListMutationVariables = Exact<{
  uid: Scalars['ID']['input']
}>

export type DeleteCompareListMutation = { __typename?: 'Mutation', deleteCompareList: { __typename?: 'DeleteCompareListOutput', result: boolean } | null }

export type DeleteCustomerMutationVariables = Exact<{ [key: string]: never }>

export type DeleteCustomerMutation = { __typename?: 'Mutation', deleteCustomer: boolean | null }

export type DeleteCustomerAddressMutationVariables = Exact<{
  id: Scalars['Int']['input']
}>

export type DeleteCustomerAddressMutation = { __typename?: 'Mutation', deleteCustomerAddress: boolean | null }

export type DeletePaymentTokenMutationVariables = Exact<{
  public_hash: Scalars['String']['input']
}>

export type DeletePaymentTokenMutation = { __typename?: 'Mutation', deletePaymentToken: { __typename?: 'DeletePaymentTokenOutput', result: boolean } | null }

export type DeleteStripePaymentMethodMutationVariables = Exact<{
  input: StripePaymentMethodId
}>

export type DeleteStripePaymentMethodMutation = { __typename?: 'Mutation', deleteStripePaymentMethod: string | null }

export type EstimateShippingMethodsMutationVariables = Exact<{
  input: EstimateTotalsInput
}>

export type EstimateShippingMethodsMutation = { __typename?: 'Mutation', estimateShippingMethods: Array<{ __typename?: 'AvailableShippingMethod', available: boolean, carrier_code: string, carrier_title: string, error_message: string | null, method_code: string | null, method_title: string | null, amount: { __typename?: 'Money', currency: CurrencyEnum | null, value: number | null }, price_excl_tax: { __typename?: 'Money', currency: CurrencyEnum | null, value: number | null }, price_incl_tax: { __typename?: 'Money', currency: CurrencyEnum | null, value: number | null } } | null> | null }

export type EstimateTotalsMutationVariables = Exact<{
  input: EstimateTotalsInput
}>

export type EstimateTotalsMutation = { __typename?: 'Mutation', estimateTotals: { __typename?: 'EstimateTotalsOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } | null } }

export type GenerateCustomerTokenMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type GenerateCustomerTokenMutation = { __typename?: 'Mutation', generateCustomerToken: { __typename?: 'CustomerToken', token: string | null } | null }

export type GenerateCustomerTokenAsAdminMutationVariables = Exact<{
  input: GenerateCustomerTokenAsAdminInput
}>

export type GenerateCustomerTokenAsAdminMutation = { __typename?: 'Mutation', generateCustomerTokenAsAdmin: { __typename?: 'GenerateCustomerTokenAsAdminOutput', customer_token: string } | null }

export type HandlePayflowProResponseMutationVariables = Exact<{
  input: PayflowProResponseInput
}>

export type HandlePayflowProResponseMutation = { __typename?: 'Mutation', handlePayflowProResponse: { __typename?: 'PayflowProResponseOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type ListStripePaymentMethodsMutationVariables = Exact<{ [key: string]: never }>

export type ListStripePaymentMethodsMutation = { __typename?: 'Mutation', listStripePaymentMethods: Array<{ __typename?: 'StripePaymentMethod', brand: string | null, created: number | null, cvc: boolean | null, exp_month: number | null, exp_year: number | null, fingerprint: string | null, icon: string | null, id: string, label: string | null, type: string | null } | null> | null }

export type LofAddGiftCardToQuoteMutationVariables = Exact<{
  cart_id: Scalars['String']['input']
  code: Scalars['String']['input']
}>

export type LofAddGiftCardToQuoteMutation = { __typename?: 'Mutation', lofAddGiftCardToQuote: { __typename?: 'Res', code: number | null, message: string | null } | null }

export type LofApplyCustomerBalanceToCartMutationVariables = Exact<{
  cart_id: Scalars['String']['input']
}>

export type LofApplyCustomerBalanceToCartMutation = { __typename?: 'Mutation', lofApplyCustomerBalanceToCart: { __typename?: 'Res', code: number | null, message: string | null } | null }

export type LofGiftCardRedeemMutationVariables = Exact<{
  code: Scalars['String']['input']
  customer_id: Scalars['String']['input']
}>

export type LofGiftCardRedeemMutation = { __typename?: 'Mutation', lofGiftCardRedeem: { __typename?: 'Res', code: number | null, message: string | null } | null }

export type MergeCartsMutationVariables = Exact<{
  pageSize: InputMaybe<Scalars['Int']['input']>
  currentPage: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<QuoteItemsSortInput>
  source_cart_id: Scalars['String']['input']
  destination_cart_id: InputMaybe<Scalars['String']['input']>
}>

export type MergeCartsMutation = { __typename?: 'Mutation', mergeCarts: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number, applied_coupons: Array<{ __typename?: 'AppliedCoupon', code: string } | null> | null, available_payment_methods: Array<{ __typename?: 'AvailablePaymentMethod', code: string, is_deferred: boolean, title: string } | null> | null, billing_address: { __typename?: 'BillingCartAddress', city: string, company: string | null, fax: string | null, firstname: string, id: number | null, lastname: string, middlename: string | null, postcode: string | null, prefix: string | null, street: Array<string | null>, suffix: string | null, telephone: string | null, uid: string, vat_id: string | null } | null, gift_message: { __typename?: 'GiftMessage', from: string, message: string, to: string } | null, itemsV2: { __typename?: 'CartItems', total_count: number } | null, selected_payment_method: { __typename?: 'SelectedPaymentMethod', code: string, purchase_order_number: string | null, title: string } | null, shipping_addresses: Array<{ __typename?: 'ShippingCartAddress', city: string, company: string | null, customer_notes: string | null, fax: string | null, firstname: string, id: number | null, lastname: string, middlename: string | null, pickup_location_code: string | null, postcode: string | null, prefix: string | null, same_as_billing: boolean, street: Array<string | null>, suffix: string | null, telephone: string | null, uid: string, vat_id: string | null } | null> } }

export type PlaceOrderMutationVariables = Exact<{
  input: InputMaybe<PlaceOrderInput>
}>

export type PlaceOrderMutation = { __typename?: 'Mutation', placeOrder: { __typename?: 'PlaceOrderOutput', errors: Array<{ __typename?: 'PlaceOrderError', code: PlaceOrderErrorCodes, message: string } | null>, orderV2: { __typename?: 'CustomerOrder', available_actions: Array<OrderActionType | null>, carrier: string | null, email: string | null, id: string, is_virtual: boolean, number: string, order_date: string, order_status_change_date: string, shipping_method: string | null, status: string, token: string } | null } | null }

export type RemoveCouponFromCartMutationVariables = Exact<{
  input: InputMaybe<RemoveCouponFromCartInput>
}>

export type RemoveCouponFromCartMutation = { __typename?: 'Mutation', removeCouponFromCart: { __typename?: 'RemoveCouponFromCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } | null } | null }

export type RemoveItemFromCartMutationVariables = Exact<{
  input: InputMaybe<RemoveItemFromCartInput>
}>

export type RemoveItemFromCartMutation = { __typename?: 'Mutation', removeItemFromCart: { __typename?: 'RemoveItemFromCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type RemoveProductsFromCompareListMutationVariables = Exact<{
  input: InputMaybe<RemoveProductsFromCompareListInput>
}>

export type RemoveProductsFromCompareListMutation = { __typename?: 'Mutation', removeProductsFromCompareList: { __typename?: 'CompareList', item_count: number, uid: string, attributes: Array<{ __typename?: 'ComparableAttribute', code: string, label: string } | null> | null, items: Array<{ __typename?: 'ComparableItem', uid: string } | null> | null } | null }

export type RemoveProductsFromWishlistMutationVariables = Exact<{
  wishlistId: Scalars['ID']['input']
  wishlistItemsIds: Array<Scalars['ID']['input']> | Scalars['ID']['input']
}>

export type RemoveProductsFromWishlistMutation = { __typename?: 'Mutation', removeProductsFromWishlist: { __typename?: 'RemoveProductsFromWishlistOutput', user_errors: Array<{ __typename?: 'WishListUserInputError', code: WishListUserInputErrorType, message: string } | null>, wishlist: { __typename?: 'Wishlist', id: string | null, items_count: number | null, sharing_code: string | null, updated_at: string | null } } | null }

export type ReorderItemsMutationVariables = Exact<{
  orderNumber: Scalars['String']['input']
}>

export type ReorderItemsMutation = { __typename?: 'Mutation', reorderItems: { __typename?: 'ReorderItemsOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number }, userInputErrors: Array<{ __typename?: 'CheckoutUserInputError', code: CheckoutUserInputErrorCodes, message: string, path: Array<string | null> } | null> } | null }

export type RequestGuestOrderCancelMutationVariables = Exact<{
  input: GuestOrderCancelInput
}>

export type RequestGuestOrderCancelMutation = { __typename?: 'Mutation', requestGuestOrderCancel: { __typename?: 'CancelOrderOutput', error: string | null, errorV2: { __typename?: 'CancelOrderError', code: CancelOrderErrorCode, message: string } | null, order: { __typename?: 'CustomerOrder', available_actions: Array<OrderActionType | null>, carrier: string | null, email: string | null, id: string, is_virtual: boolean, number: string, order_date: string, order_status_change_date: string, shipping_method: string | null, status: string, token: string } | null } | null }

export type RequestPasswordResetEmailMutationVariables = Exact<{
  email: Scalars['String']['input']
}>

export type RequestPasswordResetEmailMutation = { __typename?: 'Mutation', requestPasswordResetEmail: boolean | null }

export type ResendConfirmationEmailMutationVariables = Exact<{
  email: Scalars['String']['input']
}>

export type ResendConfirmationEmailMutation = { __typename?: 'Mutation', resendConfirmationEmail: boolean | null }

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String']['input']
  resetPasswordToken: Scalars['String']['input']
  newPassword: Scalars['String']['input']
}>

export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean | null }

export type RevokeCustomerTokenMutationVariables = Exact<{ [key: string]: never }>

export type RevokeCustomerTokenMutation = { __typename?: 'Mutation', revokeCustomerToken: { __typename?: 'RevokeCustomerTokenOutput', result: boolean } | null }

export type SendEmailToFriendMutationVariables = Exact<{
  input: InputMaybe<SendEmailToFriendInput>
}>

export type SendEmailToFriendMutation = { __typename?: 'Mutation', sendEmailToFriend: { __typename?: 'SendEmailToFriendOutput', recipients: Array<{ __typename?: 'SendEmailToFriendRecipient', email: string, name: string } | null> | null, sender: { __typename?: 'SendEmailToFriendSender', email: string, message: string, name: string } | null } | null }

export type SetBillingAddressOnCartMutationVariables = Exact<{
  input: InputMaybe<SetBillingAddressOnCartInput>
}>

export type SetBillingAddressOnCartMutation = { __typename?: 'Mutation', setBillingAddressOnCart: { __typename?: 'SetBillingAddressOnCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type SetCartAsInactiveMutationVariables = Exact<{
  cartId: Scalars['String']['input']
}>

export type SetCartAsInactiveMutation = { __typename?: 'Mutation', setCartAsInactive: { __typename?: 'SetCartAsInactiveOutput', error: string | null, success: boolean } | null }

export type SetGuestEmailOnCartMutationVariables = Exact<{
  input: InputMaybe<SetGuestEmailOnCartInput>
}>

export type SetGuestEmailOnCartMutation = { __typename?: 'Mutation', setGuestEmailOnCart: { __typename?: 'SetGuestEmailOnCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type SetPaymentMethodOnCartMutationVariables = Exact<{
  input: InputMaybe<SetPaymentMethodOnCartInput>
}>

export type SetPaymentMethodOnCartMutation = { __typename?: 'Mutation', setPaymentMethodOnCart: { __typename?: 'SetPaymentMethodOnCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type SetShippingAddressesOnCartMutationVariables = Exact<{
  input: InputMaybe<SetShippingAddressesOnCartInput>
}>

export type SetShippingAddressesOnCartMutation = { __typename?: 'Mutation', setShippingAddressesOnCart: { __typename?: 'SetShippingAddressesOnCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type SetShippingMethodsOnCartMutationVariables = Exact<{
  input: InputMaybe<SetShippingMethodsOnCartInput>
}>

export type SetShippingMethodsOnCartMutation = { __typename?: 'Mutation', setShippingMethodsOnCart: { __typename?: 'SetShippingMethodsOnCartOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number } } | null }

export type SubscribeEmailToNewsletterMutationVariables = Exact<{
  email: Scalars['String']['input']
}>

export type SubscribeEmailToNewsletterMutation = { __typename?: 'Mutation', subscribeEmailToNewsletter: { __typename?: 'SubscribeEmailToNewsletterOutput', status: SubscriptionStatusesEnum | null } | null }

export type SyncPaymentOrderMutationVariables = Exact<{
  input: InputMaybe<SyncPaymentOrderInput>
}>

export type SyncPaymentOrderMutation = { __typename?: 'Mutation', syncPaymentOrder: boolean | null }

export type UpdateCartItemsMutationVariables = Exact<{
  input: InputMaybe<UpdateCartItemsInput>
}>

export type UpdateCartItemsMutation = { __typename?: 'Mutation', updateCartItems: { __typename?: 'UpdateCartItemsOutput', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number }, errors: Array<{ __typename?: 'CartUserInputError', code: CartUserInputErrorType, message: string } | null> } | null }

export type UpdateCustomerAddressMutationVariables = Exact<{
  attributeCodes: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>
  id: Scalars['Int']['input']
  input: InputMaybe<CustomerAddressInput>
}>

export type UpdateCustomerAddressMutation = { __typename?: 'Mutation', updateCustomerAddress: { __typename?: 'CustomerAddress', city: string | null, company: string | null, country_code: CountryCodeEnum | null, default_billing: boolean | null, default_shipping: boolean | null, fax: string | null, firstname: string | null, id: number | null, lastname: string | null, middlename: string | null, postcode: string | null, prefix: string | null, region_id: number | null, street: Array<string | null> | null, suffix: string | null, telephone: string | null, vat_id: string | null, custom_attributesV2: Array<
  | { __typename?: 'AttributeSelectedOptions', code: string }
  | { __typename?: 'AttributeValue', code: string }
  | null>, extension_attributes: Array<{ __typename?: 'CustomerAddressAttribute', attribute_code: string | null, value: string | null } | null> | null, region: { __typename?: 'CustomerAddressRegion', region: string | null, region_code: string | null, region_id: number | null } | null } | null }

export type UpdateCustomerEmailMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type UpdateCustomerEmailMutation = { __typename?: 'Mutation', updateCustomerEmail: { __typename?: 'CustomerOutput', customer: { __typename?: 'Customer', allow_remote_shopping_assistance: boolean, confirmation_status: ConfirmationStatusEnum, created_at: string | null, date_of_birth: string | null, default_billing: string | null, default_shipping: string | null, email: string | null, firstname: string | null, gender: number | null, is_subscribed: boolean | null, lastname: string | null, middlename: string | null, prefix: string | null, suffix: string | null, taxvat: string | null } } | null }

export type UpdateCustomerV2MutationVariables = Exact<{
  input: CustomerUpdateInput
}>

export type UpdateCustomerV2Mutation = { __typename?: 'Mutation', updateCustomerV2: { __typename?: 'CustomerOutput', customer: { __typename?: 'Customer', allow_remote_shopping_assistance: boolean, confirmation_status: ConfirmationStatusEnum, created_at: string | null, date_of_birth: string | null, default_billing: string | null, default_shipping: string | null, email: string | null, firstname: string | null, gender: number | null, is_subscribed: boolean | null, lastname: string | null, middlename: string | null, prefix: string | null, suffix: string | null, taxvat: string | null } } | null }

export type UpdateProductsInWishlistMutationVariables = Exact<{
  wishlistId: Scalars['ID']['input']
  wishlistItems: Array<WishlistItemUpdateInput> | WishlistItemUpdateInput
}>

export type UpdateProductsInWishlistMutation = { __typename?: 'Mutation', updateProductsInWishlist: { __typename?: 'UpdateProductsInWishlistOutput', user_errors: Array<{ __typename?: 'WishListUserInputError', code: WishListUserInputErrorType, message: string } | null>, wishlist: { __typename?: 'Wishlist', id: string | null, items_count: number | null, sharing_code: string | null, updated_at: string | null } } | null }

export type AttributesFormQueryVariables = Exact<{
  formCode: Scalars['String']['input']
}>

export type AttributesFormQuery = { __typename?: 'Query', attributesForm: { __typename?: 'AttributesFormOutput', errors: Array<{ __typename?: 'AttributeMetadataError', message: string, type: AttributeMetadataErrorType } | null>, items: Array<
  | { __typename?: 'AttributeMetadata', code: string, default_value: string | null, entity_type: AttributeEntityTypeEnum, frontend_class: string | null, frontend_input: AttributeFrontendInputEnum | null, is_required: boolean, is_unique: boolean, label: string | null }
  | { __typename?: 'CatalogAttributeMetadata', code: string, default_value: string | null, entity_type: AttributeEntityTypeEnum, frontend_class: string | null, frontend_input: AttributeFrontendInputEnum | null, is_required: boolean, is_unique: boolean, label: string | null }
  | { __typename?: 'CustomerAttributeMetadata', code: string, default_value: string | null, entity_type: AttributeEntityTypeEnum, frontend_class: string | null, frontend_input: AttributeFrontendInputEnum | null, is_required: boolean, is_unique: boolean, label: string | null }
  | null> } }

export type AttributesListQueryVariables = Exact<{
  entityType: AttributeEntityTypeEnum
  filters: InputMaybe<AttributeFilterInput>
}>

export type AttributesListQuery = { __typename?: 'Query', attributesList: { __typename?: 'AttributesMetadataOutput', errors: Array<{ __typename?: 'AttributeMetadataError', message: string, type: AttributeMetadataErrorType } | null>, items: Array<
  | { __typename?: 'AttributeMetadata', code: string, default_value: string | null, entity_type: AttributeEntityTypeEnum, frontend_class: string | null, frontend_input: AttributeFrontendInputEnum | null, is_required: boolean, is_unique: boolean, label: string | null }
  | { __typename?: 'CatalogAttributeMetadata', code: string, default_value: string | null, entity_type: AttributeEntityTypeEnum, frontend_class: string | null, frontend_input: AttributeFrontendInputEnum | null, is_required: boolean, is_unique: boolean, label: string | null }
  | { __typename?: 'CustomerAttributeMetadata', code: string, default_value: string | null, entity_type: AttributeEntityTypeEnum, frontend_class: string | null, frontend_input: AttributeFrontendInputEnum | null, is_required: boolean, is_unique: boolean, label: string | null }
  | null> } | null }

export type AvailableStoresQueryVariables = Exact<{
  useCurrentGroup: InputMaybe<Scalars['Boolean']['input']>
}>

export type AvailableStoresQuery = { __typename?: 'Query', availableStores: Array<{ __typename?: 'StoreConfig', absolute_footer: string | null, allow_guests_to_write_product_reviews: string | null, allow_items: string | null, allow_order: string | null, autocomplete_on_storefront: boolean | null, base_currency_code: string | null, base_link_url: string | null, base_media_url: string | null, base_static_url: string | null, base_url: string | null, braintree_3dsecure_allowspecific: boolean | null, braintree_3dsecure_always_request_3ds: boolean | null, braintree_3dsecure_specificcountry: string | null, braintree_3dsecure_threshold_amount: string | null, braintree_3dsecure_verify_3dsecure: boolean | null, braintree_ach_direct_debit_vault_active: boolean | null, braintree_applepay_merchant_name: string | null, braintree_applepay_vault_active: boolean | null, braintree_cc_vault_active: string | null, braintree_cc_vault_cvv: boolean | null, braintree_environment: string | null, braintree_googlepay_btn_color: string | null, braintree_googlepay_cctypes: string | null, braintree_googlepay_merchant_id: string | null, braintree_googlepay_vault_active: boolean | null, braintree_local_payment_allowed_methods: string | null, braintree_local_payment_fallback_button_text: string | null, braintree_local_payment_redirect_on_fail: string | null, braintree_merchant_account_id: string | null, braintree_paypal_button_location_cart_type_credit_color: string | null, braintree_paypal_button_location_cart_type_credit_label: string | null, braintree_paypal_button_location_cart_type_credit_shape: string | null, braintree_paypal_button_location_cart_type_credit_show: boolean | null, braintree_paypal_button_location_cart_type_messaging_layout: string | null, braintree_paypal_button_location_cart_type_messaging_logo: string | null, braintree_paypal_button_location_cart_type_messaging_logo_position: string | null, braintree_paypal_button_location_cart_type_messaging_show: boolean | null, braintree_paypal_button_location_cart_type_messaging_text_color: string | null, braintree_paypal_button_location_cart_type_paylater_color: string | null, braintree_paypal_button_location_cart_type_paylater_label: string | null, braintree_paypal_button_location_cart_type_paylater_shape: string | null, braintree_paypal_button_location_cart_type_paylater_show: boolean | null, braintree_paypal_button_location_cart_type_paypal_color: string | null, braintree_paypal_button_location_cart_type_paypal_label: string | null, braintree_paypal_button_location_cart_type_paypal_shape: string | null, braintree_paypal_button_location_cart_type_paypal_show: boolean | null, braintree_paypal_button_location_checkout_type_credit_color: string | null, braintree_paypal_button_location_checkout_type_credit_label: string | null, braintree_paypal_button_location_checkout_type_credit_shape: string | null, braintree_paypal_button_location_checkout_type_credit_show: boolean | null, braintree_paypal_button_location_checkout_type_messaging_layout: string | null, braintree_paypal_button_location_checkout_type_messaging_logo: string | null, braintree_paypal_button_location_checkout_type_messaging_logo_position: string | null, braintree_paypal_button_location_checkout_type_messaging_show: boolean | null, braintree_paypal_button_location_checkout_type_messaging_text_color: string | null, braintree_paypal_button_location_checkout_type_paylater_color: string | null, braintree_paypal_button_location_checkout_type_paylater_label: string | null, braintree_paypal_button_location_checkout_type_paylater_shape: string | null, braintree_paypal_button_location_checkout_type_paylater_show: boolean | null, braintree_paypal_button_location_checkout_type_paypal_color: string | null, braintree_paypal_button_location_checkout_type_paypal_label: string | null, braintree_paypal_button_location_checkout_type_paypal_shape: string | null, braintree_paypal_button_location_checkout_type_paypal_show: boolean | null, braintree_paypal_button_location_productpage_type_credit_color: string | null, braintree_paypal_button_location_productpage_type_credit_label: string | null, braintree_paypal_button_location_productpage_type_credit_shape: string | null, braintree_paypal_button_location_productpage_type_credit_show: boolean | null, braintree_paypal_button_location_productpage_type_messaging_layout: string | null, braintree_paypal_button_location_productpage_type_messaging_logo: string | null, braintree_paypal_button_location_productpage_type_messaging_logo_position: string | null, braintree_paypal_button_location_productpage_type_messaging_show: boolean | null, braintree_paypal_button_location_productpage_type_messaging_text_color: string | null, braintree_paypal_button_location_productpage_type_paylater_color: string | null, braintree_paypal_button_location_productpage_type_paylater_label: string | null, braintree_paypal_button_location_productpage_type_paylater_shape: string | null, braintree_paypal_button_location_productpage_type_paylater_show: boolean | null, braintree_paypal_button_location_productpage_type_paypal_color: string | null, braintree_paypal_button_location_productpage_type_paypal_label: string | null, braintree_paypal_button_location_productpage_type_paypal_shape: string | null, braintree_paypal_button_location_productpage_type_paypal_show: boolean | null, braintree_paypal_credit_uk_merchant_name: string | null, braintree_paypal_display_on_shopping_cart: boolean | null, braintree_paypal_merchant_country: string | null, braintree_paypal_merchant_name_override: string | null, braintree_paypal_require_billing_address: boolean | null, braintree_paypal_send_cart_line_items: boolean | null, braintree_paypal_vault_active: boolean | null, cart_expires_in_days: number | null, cart_summary_display_quantity: number | null, catalog_default_sort_by: string | null, category_fixed_product_tax_display_setting: FixedProductTaxDisplaySettings | null, category_url_suffix: string | null, check_money_order_enable_for_specific_countries: boolean | null, check_money_order_enabled: boolean | null, check_money_order_make_check_payable_to: string | null, check_money_order_max_order_total: string | null, check_money_order_min_order_total: string | null, check_money_order_new_order_status: string | null, check_money_order_payment_from_specific_countries: string | null, check_money_order_send_check_to: string | null, check_money_order_sort_order: number | null, check_money_order_title: string | null, cms_home_page: string | null, cms_no_cookies: string | null, cms_no_route: string | null, configurable_product_image: ProductImageThumbnail, configurable_thumbnail_source: string | null, contact_enabled: boolean, copyright: string | null, countries_with_required_region: string | null, create_account_confirmation: boolean | null, customer_access_token_lifetime: number | null, default_country: string | null, default_description: string | null, default_display_currency_code: string | null, default_keywords: string | null, default_title: string | null, demonotice: number | null, display_product_prices_in_catalog: number, display_shipping_prices: number, display_state_if_optional: boolean | null, fixed_product_taxes_apply_tax_to_fpt: boolean, fixed_product_taxes_display_prices_in_emails: number, fixed_product_taxes_display_prices_in_product_lists: number, fixed_product_taxes_display_prices_in_sales_modules: number, fixed_product_taxes_display_prices_on_product_view_page: number, fixed_product_taxes_enable: boolean, fixed_product_taxes_include_fpt_in_subtotal: boolean, front: string | null, grid_per_page: number | null, grid_per_page_values: string | null, grouped_product_image: ProductImageThumbnail, head_includes: string | null, head_shortcut_icon: string | null, header_logo_src: string | null, is_checkout_agreements_enabled: boolean, is_default_store: boolean | null, is_default_store_group: boolean | null, is_guest_checkout_enabled: boolean | null, is_one_page_checkout_enabled: boolean | null, list_mode: string | null, list_per_page: number | null, list_per_page_values: string | null, locale: string | null, logo_alt: string | null, logo_height: number | null, logo_width: number | null, magento_wishlist_general_is_enabled: string | null, max_items_in_order_summary: number | null, minicart_display: boolean | null, minicart_max_items: number | null, minimum_password_length: string | null, newsletter_enabled: boolean, no_route: string | null, optional_zip_countries: string | null, order_cancellation_enabled: boolean, orders_invoices_credit_memos_display_full_summary: boolean, orders_invoices_credit_memos_display_grandtotal: boolean, orders_invoices_credit_memos_display_price: number, orders_invoices_credit_memos_display_shipping_amount: number, orders_invoices_credit_memos_display_subtotal: number, orders_invoices_credit_memos_display_zero_tax: boolean, payment_payflowpro_cc_vault_active: string | null, product_fixed_product_tax_display_setting: FixedProductTaxDisplaySettings | null, product_reviews_enabled: string | null, product_url_suffix: string | null, required_character_classes_number: string | null, root_category_uid: string | null, sales_fixed_product_tax_display_setting: FixedProductTaxDisplaySettings | null, secure_base_link_url: string | null, secure_base_media_url: string | null, secure_base_static_url: string | null, secure_base_url: string | null, shopping_cart_display_full_summary: boolean | null, shopping_cart_display_grand_total: boolean | null, shopping_cart_display_price: number | null, shopping_cart_display_shipping: number | null, shopping_cart_display_subtotal: number | null, shopping_cart_display_tax_gift_wrapping: TaxWrappingEnum | null, shopping_cart_display_zero_tax: boolean | null, show_cms_breadcrumbs: number | null, store_code: string | null, store_group_code: string | null, store_group_name: string | null, store_name: string | null, store_sort_order: number | null, timezone: string | null, title_prefix: string | null, title_separator: string | null, title_suffix: string | null, use_store_in_url: boolean | null, website_code: string | null, website_name: string | null, weight_unit: string | null, welcome: string | null, zero_subtotal_enable_for_specific_countries: boolean | null, zero_subtotal_enabled: boolean | null, zero_subtotal_new_order_status: string | null, zero_subtotal_payment_action: string | null, zero_subtotal_payment_from_specific_countries: string | null, zero_subtotal_sort_order: number | null, zero_subtotal_title: string | null, order_cancellation_reasons: Array<{ __typename?: 'CancellationReason', description: string } | null>, send_friend: { __typename?: 'SendFriendConfiguration', enabled_for_customers: boolean, enabled_for_guests: boolean } | null } | null> | null }

export type CartQueryVariables = Exact<{
  pageSize: InputMaybe<Scalars['Int']['input']>
  currentPage: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<QuoteItemsSortInput>
  cart_id: Scalars['String']['input']
}>

export type CartQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number, applied_coupons: Array<{ __typename?: 'AppliedCoupon', code: string } | null> | null, available_payment_methods: Array<{ __typename?: 'AvailablePaymentMethod', code: string, is_deferred: boolean, title: string } | null> | null, billing_address: { __typename?: 'BillingCartAddress', city: string, company: string | null, fax: string | null, firstname: string, id: number | null, lastname: string, middlename: string | null, postcode: string | null, prefix: string | null, street: Array<string | null>, suffix: string | null, telephone: string | null, uid: string, vat_id: string | null } | null, gift_message: { __typename?: 'GiftMessage', from: string, message: string, to: string } | null, itemsV2: { __typename?: 'CartItems', total_count: number } | null, selected_payment_method: { __typename?: 'SelectedPaymentMethod', code: string, purchase_order_number: string | null, title: string } | null, shipping_addresses: Array<{ __typename?: 'ShippingCartAddress', city: string, company: string | null, customer_notes: string | null, fax: string | null, firstname: string, id: number | null, lastname: string, middlename: string | null, pickup_location_code: string | null, postcode: string | null, prefix: string | null, same_as_billing: boolean, street: Array<string | null>, suffix: string | null, telephone: string | null, uid: string, vat_id: string | null } | null> } | null }

export type CategoriesQueryVariables = Exact<{
  filters: InputMaybe<CategoryFilterInput>
  pageSize: InputMaybe<Scalars['Int']['input']>
  currentPage: InputMaybe<Scalars['Int']['input']>
}>

export type CategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'CategoryResult', total_count: number | null, items: Array<{ __typename?: 'CategoryTree', amtoolkit_robots: string | null, available_sort_by: Array<string | null> | null, canonical_url: string | null, category_code: string | null, children_count: string | null, custom_layout_update_file: string | null, default_sort_by: string | null, description: string | null, display_mode: string | null, filter_price_range: number | null, image: string | null, include_in_menu: number | null, is_anchor: number | null, landing_page: number | null, level: number | null, meta_description: string | null, meta_keywords: string | null, meta_product_set_id: string | null, meta_title: string | null, name: string | null, path: string | null, path_in_store: string | null, position: number | null, product_count: number | null, redirect_code: number, relative_url: string | null, sync_to_facebook_catalog: number | null, thumbnail: string | null, type: UrlRewriteEntityTypeEnum | null, uid: string, url_key: string | null, url_path: string | null, url_suffix: string | null } | null> | null, page_info: { __typename?: 'SearchResultPageInfo', current_page: number | null, page_size: number | null, total_pages: number | null } | null } | null }

export type CheckoutAgreementsQueryVariables = Exact<{ [key: string]: never }>

export type CheckoutAgreementsQuery = { __typename?: 'Query', checkoutAgreements: Array<{ __typename?: 'CheckoutAgreement', agreement_id: number, checkbox_text: string, content: string, content_height: string | null, is_html: boolean, mode: CheckoutAgreementMode, name: string } | null> | null }

export type CmsBlocksQueryVariables = Exact<{
  identifiers: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>
}>

export type CmsBlocksQuery = { __typename?: 'Query', cmsBlocks: { __typename?: 'CmsBlocks', items: Array<{ __typename?: 'CmsBlock', content: string | null, identifier: string | null, title: string | null } | null> | null } | null }

export type CmsPageQueryVariables = Exact<{
  id: InputMaybe<Scalars['Int']['input']>
  identifier: InputMaybe<Scalars['String']['input']>
}>

export type CmsPageQuery = { __typename?: 'Query', cmsPage: { __typename?: 'CmsPage', content: string | null, content_heading: string | null, identifier: string | null, meta_description: string | null, meta_keywords: string | null, meta_title: string | null, page_layout: string | null, redirect_code: number, relative_url: string | null, title: string | null, type: UrlRewriteEntityTypeEnum | null, url_key: string | null } | null }

export type CompareListQueryVariables = Exact<{
  uid: Scalars['ID']['input']
}>

export type CompareListQuery = { __typename?: 'Query', compareList: { __typename?: 'CompareList', item_count: number, uid: string, attributes: Array<{ __typename?: 'ComparableAttribute', code: string, label: string } | null> | null, items: Array<{ __typename?: 'ComparableItem', uid: string } | null> | null } | null }

export type CountriesQueryVariables = Exact<{ [key: string]: never }>

export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', full_name_english: string | null, full_name_locale: string | null, id: string | null, three_letter_abbreviation: string | null, two_letter_abbreviation: string | null, available_regions: Array<{ __typename?: 'Region', code: string | null, id: number | null, name: string | null } | null> | null } | null> | null }

export type CountryQueryVariables = Exact<{
  id: InputMaybe<Scalars['String']['input']>
}>

export type CountryQuery = { __typename?: 'Query', country: { __typename?: 'Country', full_name_english: string | null, full_name_locale: string | null, id: string | null, three_letter_abbreviation: string | null, two_letter_abbreviation: string | null, available_regions: Array<{ __typename?: 'Region', code: string | null, id: number | null, name: string | null } | null> | null } | null }

export type CurrencyQueryVariables = Exact<{ [key: string]: never }>

export type CurrencyQuery = { __typename?: 'Query', currency: { __typename?: 'Currency', available_currency_codes: Array<string | null> | null, base_currency_code: string | null, base_currency_symbol: string | null, default_display_currency_code: string | null, default_display_currency_symbol: string | null, exchange_rates: Array<{ __typename?: 'ExchangeRate', currency_to: string | null, rate: number | null } | null> | null } | null }

export type CustomAttributeMetadataV2QueryVariables = Exact<{
  attributes: InputMaybe<Array<AttributeInput> | AttributeInput>
}>

export type CustomAttributeMetadataV2Query = { __typename?: 'Query', customAttributeMetadataV2: { __typename?: 'AttributesMetadataOutput', errors: Array<{ __typename?: 'AttributeMetadataError', message: string, type: AttributeMetadataErrorType } | null>, items: Array<
  | { __typename?: 'AttributeMetadata', code: string, default_value: string | null, entity_type: AttributeEntityTypeEnum, frontend_class: string | null, frontend_input: AttributeFrontendInputEnum | null, is_required: boolean, is_unique: boolean, label: string | null }
  | { __typename?: 'CatalogAttributeMetadata', code: string, default_value: string | null, entity_type: AttributeEntityTypeEnum, frontend_class: string | null, frontend_input: AttributeFrontendInputEnum | null, is_required: boolean, is_unique: boolean, label: string | null }
  | { __typename?: 'CustomerAttributeMetadata', code: string, default_value: string | null, entity_type: AttributeEntityTypeEnum, frontend_class: string | null, frontend_input: AttributeFrontendInputEnum | null, is_required: boolean, is_unique: boolean, label: string | null }
  | null> } }

export type CustomerQueryVariables = Exact<{
  currentPage: InputMaybe<Scalars['Int']['input']>
  pageSize: InputMaybe<Scalars['Int']['input']>
  attributeCodes: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>
  filter: InputMaybe<CustomerOrdersFilterInput>
  currentPage1: InputMaybe<Scalars['Int']['input']>
  pageSize1: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<CustomerOrderSortInput>
  scope: InputMaybe<ScopeTypeEnum>
  id: Scalars['ID']['input']
  pageSize2: InputMaybe<Scalars['Int']['input']>
  currentPage2: InputMaybe<Scalars['Int']['input']>
}>

export type CustomerQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', allow_remote_shopping_assistance: boolean, confirmation_status: ConfirmationStatusEnum, created_at: string | null, date_of_birth: string | null, default_billing: string | null, default_shipping: string | null, email: string | null, firstname: string | null, gender: number | null, is_subscribed: boolean | null, lastname: string | null, middlename: string | null, prefix: string | null, suffix: string | null, taxvat: string | null, addresses: Array<{ __typename?: 'CustomerAddress', city: string | null, company: string | null, country_code: CountryCodeEnum | null, default_billing: boolean | null, default_shipping: boolean | null, fax: string | null, firstname: string | null, id: number | null, lastname: string | null, middlename: string | null, postcode: string | null, prefix: string | null, region_id: number | null, street: Array<string | null> | null, suffix: string | null, telephone: string | null, vat_id: string | null } | null> | null, addressesV2: { __typename?: 'CustomerAddresses', total_count: number | null } | null, compare_list: { __typename?: 'CompareList', item_count: number, uid: string } | null, custom_attributes: Array<
  | { __typename?: 'AttributeSelectedOptions', code: string }
  | { __typename?: 'AttributeValue', code: string }
  | null> | null, orders: { __typename?: 'CustomerOrders', date_of_first_order: string | null, total_count: number | null } | null, wishlist_v2: { __typename?: 'Wishlist', id: string | null, items_count: number | null, sharing_code: string | null, updated_at: string | null } | null, wishlists: Array<{ __typename?: 'Wishlist', id: string | null, items_count: number | null, sharing_code: string | null, updated_at: string | null } | null> } | null }

export type CustomerCartQueryVariables = Exact<{
  pageSize: InputMaybe<Scalars['Int']['input']>
  currentPage: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<QuoteItemsSortInput>
}>

export type CustomerCartQuery = { __typename?: 'Query', customerCart: { __typename?: 'Cart', email: string | null, id: string, is_virtual: boolean, total_quantity: number, applied_coupons: Array<{ __typename?: 'AppliedCoupon', code: string } | null> | null, available_payment_methods: Array<{ __typename?: 'AvailablePaymentMethod', code: string, is_deferred: boolean, title: string } | null> | null, billing_address: { __typename?: 'BillingCartAddress', city: string, company: string | null, fax: string | null, firstname: string, id: number | null, lastname: string, middlename: string | null, postcode: string | null, prefix: string | null, street: Array<string | null>, suffix: string | null, telephone: string | null, uid: string, vat_id: string | null } | null, gift_message: { __typename?: 'GiftMessage', from: string, message: string, to: string } | null, itemsV2: { __typename?: 'CartItems', total_count: number } | null, selected_payment_method: { __typename?: 'SelectedPaymentMethod', code: string, purchase_order_number: string | null, title: string } | null, shipping_addresses: Array<{ __typename?: 'ShippingCartAddress', city: string, company: string | null, customer_notes: string | null, fax: string | null, firstname: string, id: number | null, lastname: string, middlename: string | null, pickup_location_code: string | null, postcode: string | null, prefix: string | null, same_as_billing: boolean, street: Array<string | null>, suffix: string | null, telephone: string | null, uid: string, vat_id: string | null } | null> } }

export type CustomerDownloadableProductsQueryVariables = Exact<{ [key: string]: never }>

export type CustomerDownloadableProductsQuery = { __typename?: 'Query', customerDownloadableProducts: { __typename?: 'CustomerDownloadableProducts', items: Array<{ __typename?: 'CustomerDownloadableProduct', date: string | null, download_url: string | null, order_increment_id: string | null, remaining_downloads: string | null, status: string | null } | null> | null } | null }

export type CustomerPaymentTokensQueryVariables = Exact<{ [key: string]: never }>

export type CustomerPaymentTokensQuery = { __typename?: 'Query', customerPaymentTokens: { __typename?: 'CustomerPaymentTokens', items: Array<{ __typename?: 'PaymentToken', details: string | null, payment_method_code: string, public_hash: string, type: PaymentTokenTypeEnum } | null> } | null }

export type GetHostedProUrlQueryVariables = Exact<{
  input: HostedProUrlInput
}>

export type GetHostedProUrlQuery = { __typename?: 'Query', getHostedProUrl: { __typename?: 'HostedProUrl', secure_form_url: string | null } | null }

export type GetPayflowLinkTokenQueryVariables = Exact<{
  input: PayflowLinkTokenInput
}>

export type GetPayflowLinkTokenQuery = { __typename?: 'Query', getPayflowLinkToken: { __typename?: 'PayflowLinkToken', mode: PayflowLinkMode | null, paypal_url: string | null, secure_token: string | null, secure_token_id: string | null } | null }

export type GetPaymentConfigQueryVariables = Exact<{
  location: PaymentLocation
}>

export type GetPaymentConfigQuery = { __typename?: 'Query', getPaymentConfig: { __typename?: 'PaymentConfigOutput', apple_pay: { __typename?: 'ApplePayConfig', code: string | null, is_visible: boolean | null, payment_intent: string | null, payment_source: string | null, sort_order: string | null, title: string | null } | null, fastlane: { __typename?: 'FastlaneConfig', code: string | null, is_visible: boolean | null, payment_intent: string | null, payment_source: string | null, sort_order: string | null, title: string | null } | null, google_pay: { __typename?: 'GooglePayConfig', code: string | null, is_visible: boolean | null, payment_intent: string | null, payment_source: string | null, sort_order: string | null, three_ds_mode: ThreeDsMode | null, title: string | null } | null, hosted_fields: { __typename?: 'HostedFieldsConfig', cc_vault_code: string | null, code: string | null, is_vault_enabled: boolean | null, is_visible: boolean | null, payment_intent: string | null, payment_source: string | null, requires_card_details: boolean | null, sort_order: string | null, three_ds_mode: ThreeDsMode | null, title: string | null } | null, smart_buttons: { __typename?: 'SmartButtonsConfig', code: string | null, display_message: boolean | null, display_venmo: boolean | null, is_visible: boolean | null, payment_intent: string | null, sort_order: string | null, title: string | null } | null } | null }

export type GetPaymentOrderQueryVariables = Exact<{
  cartId: Scalars['String']['input']
  id: Scalars['String']['input']
}>

export type GetPaymentOrderQuery = { __typename?: 'Query', getPaymentOrder: { __typename?: 'PaymentOrderOutput', id: string | null, mp_order_id: string | null, status: string | null } | null }

export type GetPaymentSdkQueryVariables = Exact<{
  location: PaymentLocation
}>

export type GetPaymentSdkQuery = { __typename?: 'Query', getPaymentSDK: { __typename?: 'GetPaymentSDKOutput', sdkParams: Array<{ __typename?: 'PaymentSDKParamsItem', code: string | null } | null> | null } | null }

export type GetStripeConfigurationQueryVariables = Exact<{ [key: string]: never }>

export type GetStripeConfigurationQuery = { __typename?: 'Query', getStripeConfiguration: { __typename?: 'ModuleConfiguration', apiKey: string | null, appInfo: Array<string | null> | null, elementsOptions: string | null, locale: string | null, options: { __typename?: 'ModuleOptions', apiVersion: string | null, betas: Array<string | null> | null } | null } | null }

export type GetVaultConfigQueryVariables = Exact<{ [key: string]: never }>

export type GetVaultConfigQuery = { __typename?: 'Query', getVaultConfig: { __typename?: 'VaultConfigOutput', credit_card: { __typename?: 'VaultCreditCardConfig', is_vault_enabled: boolean | null, three_ds_mode: ThreeDsMode | null } | null } | null }

export type GuestOrderQueryVariables = Exact<{
  input: OrderInformationInput
}>

export type GuestOrderQuery = { __typename?: 'Query', guestOrder: { __typename?: 'CustomerOrder', available_actions: Array<OrderActionType | null>, carrier: string | null, email: string | null, id: string, is_virtual: boolean, number: string, order_date: string, order_status_change_date: string, shipping_method: string | null, status: string, token: string, applied_coupons: Array<{ __typename?: 'AppliedCoupon', code: string } | null>, billing_address: { __typename?: 'OrderAddress', city: string, company: string | null, country_code: CountryCodeEnum | null, fax: string | null, firstname: string, lastname: string, middlename: string | null, postcode: string | null, prefix: string | null, region: string | null, region_id: string | null, street: Array<string | null>, suffix: string | null, telephone: string | null, vat_id: string | null } | null, comments: Array<{ __typename?: 'SalesCommentItem', message: string, timestamp: string } | null> | null, credit_memos: Array<{ __typename?: 'CreditMemo', id: string, number: string } | null> | null, customer_info: { __typename?: 'OrderCustomerInfo', firstname: string, lastname: string | null, middlename: string | null, prefix: string | null, suffix: string | null }, gift_message: { __typename?: 'GiftMessage', from: string, message: string, to: string } | null, invoices: Array<{ __typename?: 'Invoice', id: string, number: string } | null>, items: Array<
  | { __typename?: 'BundleOrderItem', id: string, product_name: string | null, product_sku: string, product_type: string | null, product_url_key: string | null, quantity_canceled: number | null, quantity_invoiced: number | null, quantity_ordered: number | null, quantity_refunded: number | null, quantity_returned: number | null, quantity_shipped: number | null, status: string | null }
  | { __typename?: 'ConfigurableOrderItem', id: string, product_name: string | null, product_sku: string, product_type: string | null, product_url_key: string | null, quantity_canceled: number | null, quantity_invoiced: number | null, quantity_ordered: number | null, quantity_refunded: number | null, quantity_returned: number | null, quantity_shipped: number | null, status: string | null }
  | { __typename?: 'DownloadableOrderItem', id: string, product_name: string | null, product_sku: string, product_type: string | null, product_url_key: string | null, quantity_canceled: number | null, quantity_invoiced: number | null, quantity_ordered: number | null, quantity_refunded: number | null, quantity_returned: number | null, quantity_shipped: number | null, status: string | null }
  | { __typename?: 'OrderItem', id: string, product_name: string | null, product_sku: string, product_type: string | null, product_url_key: string | null, quantity_canceled: number | null, quantity_invoiced: number | null, quantity_ordered: number | null, quantity_refunded: number | null, quantity_returned: number | null, quantity_shipped: number | null, status: string | null }
  | null> | null, payment_methods: Array<{ __typename?: 'OrderPaymentMethod', name: string, type: string } | null> | null, shipments: Array<{ __typename?: 'OrderShipment', id: string, number: string } | null> | null, shipping_address: { __typename?: 'OrderAddress', city: string, company: string | null, country_code: CountryCodeEnum | null, fax: string | null, firstname: string, lastname: string, middlename: string | null, postcode: string | null, prefix: string | null, region: string | null, region_id: string | null, street: Array<string | null>, suffix: string | null, telephone: string | null, vat_id: string | null } | null } }

export type GuestOrderByTokenQueryVariables = Exact<{
  input: OrderTokenInput
}>

export type GuestOrderByTokenQuery = { __typename?: 'Query', guestOrderByToken: { __typename?: 'CustomerOrder', available_actions: Array<OrderActionType | null>, carrier: string | null, email: string | null, id: string, is_virtual: boolean, number: string, order_date: string, order_status_change_date: string, shipping_method: string | null, status: string, token: string, applied_coupons: Array<{ __typename?: 'AppliedCoupon', code: string } | null>, billing_address: { __typename?: 'OrderAddress', city: string, company: string | null, country_code: CountryCodeEnum | null, fax: string | null, firstname: string, lastname: string, middlename: string | null, postcode: string | null, prefix: string | null, region: string | null, region_id: string | null, street: Array<string | null>, suffix: string | null, telephone: string | null, vat_id: string | null } | null, comments: Array<{ __typename?: 'SalesCommentItem', message: string, timestamp: string } | null> | null, credit_memos: Array<{ __typename?: 'CreditMemo', id: string, number: string } | null> | null, customer_info: { __typename?: 'OrderCustomerInfo', firstname: string, lastname: string | null, middlename: string | null, prefix: string | null, suffix: string | null }, gift_message: { __typename?: 'GiftMessage', from: string, message: string, to: string } | null, invoices: Array<{ __typename?: 'Invoice', id: string, number: string } | null>, items: Array<
  | { __typename?: 'BundleOrderItem', id: string, product_name: string | null, product_sku: string, product_type: string | null, product_url_key: string | null, quantity_canceled: number | null, quantity_invoiced: number | null, quantity_ordered: number | null, quantity_refunded: number | null, quantity_returned: number | null, quantity_shipped: number | null, status: string | null }
  | { __typename?: 'ConfigurableOrderItem', id: string, product_name: string | null, product_sku: string, product_type: string | null, product_url_key: string | null, quantity_canceled: number | null, quantity_invoiced: number | null, quantity_ordered: number | null, quantity_refunded: number | null, quantity_returned: number | null, quantity_shipped: number | null, status: string | null }
  | { __typename?: 'DownloadableOrderItem', id: string, product_name: string | null, product_sku: string, product_type: string | null, product_url_key: string | null, quantity_canceled: number | null, quantity_invoiced: number | null, quantity_ordered: number | null, quantity_refunded: number | null, quantity_returned: number | null, quantity_shipped: number | null, status: string | null }
  | { __typename?: 'OrderItem', id: string, product_name: string | null, product_sku: string, product_type: string | null, product_url_key: string | null, quantity_canceled: number | null, quantity_invoiced: number | null, quantity_ordered: number | null, quantity_refunded: number | null, quantity_returned: number | null, quantity_shipped: number | null, status: string | null }
  | null> | null, payment_methods: Array<{ __typename?: 'OrderPaymentMethod', name: string, type: string } | null> | null, shipments: Array<{ __typename?: 'OrderShipment', id: string, number: string } | null> | null, shipping_address: { __typename?: 'OrderAddress', city: string, company: string | null, country_code: CountryCodeEnum | null, fax: string | null, firstname: string, lastname: string, middlename: string | null, postcode: string | null, prefix: string | null, region: string | null, region_id: string | null, street: Array<string | null>, suffix: string | null, telephone: string | null, vat_id: string | null } | null } }

export type IsEmailAvailableQueryVariables = Exact<{
  email: Scalars['String']['input']
}>

export type IsEmailAvailableQuery = { __typename?: 'Query', isEmailAvailable: { __typename?: 'IsEmailAvailableOutput', is_email_available: boolean | null } | null }

export type LofGiftCardInfoQueryVariables = Exact<{
  code: Scalars['String']['input']
}>

export type LofGiftCardInfoQuery = { __typename?: 'Query', lofGiftCardInfo: { __typename?: 'GiftCardInfo', code: string | null, balance: { __typename?: 'Money', currency: CurrencyEnum | null, value: number | null } | null } | null }

export type PickupLocationsQueryVariables = Exact<{
  area: InputMaybe<AreaInput>
  filters: InputMaybe<PickupLocationFilterInput>
  sort: InputMaybe<PickupLocationSortInput>
  pageSize: InputMaybe<Scalars['Int']['input']>
  currentPage: InputMaybe<Scalars['Int']['input']>
  productsInfo: InputMaybe<Array<InputMaybe<ProductInfoInput>> | InputMaybe<ProductInfoInput>>
}>

export type PickupLocationsQuery = { __typename?: 'Query', pickupLocations: { __typename?: 'PickupLocations', total_count: number | null, items: Array<{ __typename?: 'PickupLocation', city: string | null, contact_name: string | null, country_id: string | null, description: string | null, email: string | null, fax: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string | null, pickup_location_code: string | null, postcode: string | null, region: string | null, region_id: number | null, street: string | null } | null> | null, page_info: { __typename?: 'SearchResultPageInfo', current_page: number | null, page_size: number | null, total_pages: number | null } | null } | null }

export type ProductReviewRatingsMetadataQueryVariables = Exact<{ [key: string]: never }>

export type ProductReviewRatingsMetadataQuery = { __typename?: 'Query', productReviewRatingsMetadata: { __typename?: 'ProductReviewRatingsMetadata', items: Array<{ __typename?: 'ProductReviewRatingMetadata', id: string, name: string } | null> } }

export type ProductsQueryVariables = Exact<{
  filter: InputMaybe<AggregationsFilterInput>
  search: InputMaybe<Scalars['String']['input']>
  filter1: InputMaybe<ProductAttributeFilterInput>
  pageSize: InputMaybe<Scalars['Int']['input']>
  currentPage: InputMaybe<Scalars['Int']['input']>
  sort: InputMaybe<ProductAttributeSortInput>
}>

export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'Products', total_count: number | null, aggregations: Array<{ __typename?: 'Aggregation', attribute_code: string, count: number | null, label: string | null, position: number | null } | null> | null, items: Array<
  | { __typename?: 'BundleProduct', canonical_url: string | null, country_of_manufacture: string | null, gift_message_available: boolean, max_sale_qty: number | null, meta_description: string | null, meta_keyword: string | null, meta_title: string | null, min_sale_qty: number | null, name: string | null, new_from_date: string | null, new_to_date: string | null, only_x_left_in_stock: number | null, options_container: string | null, quantity: number | null, rating_summary: number, review_count: number, sku: string | null, special_price: number | null, special_to_date: string | null, stock_status: ProductStockStatus | null, swatch_image: string | null, uid: string, url_key: string | null, url_suffix: string | null }
  | { __typename?: 'ConfigurableProduct', canonical_url: string | null, country_of_manufacture: string | null, gift_message_available: boolean, max_sale_qty: number | null, meta_description: string | null, meta_keyword: string | null, meta_title: string | null, min_sale_qty: number | null, name: string | null, new_from_date: string | null, new_to_date: string | null, only_x_left_in_stock: number | null, options_container: string | null, quantity: number | null, rating_summary: number, review_count: number, sku: string | null, special_price: number | null, special_to_date: string | null, stock_status: ProductStockStatus | null, swatch_image: string | null, uid: string, url_key: string | null, url_suffix: string | null }
  | { __typename?: 'DownloadableProduct', canonical_url: string | null, country_of_manufacture: string | null, gift_message_available: boolean, max_sale_qty: number | null, meta_description: string | null, meta_keyword: string | null, meta_title: string | null, min_sale_qty: number | null, name: string | null, new_from_date: string | null, new_to_date: string | null, only_x_left_in_stock: number | null, options_container: string | null, quantity: number | null, rating_summary: number, review_count: number, sku: string | null, special_price: number | null, special_to_date: string | null, stock_status: ProductStockStatus | null, swatch_image: string | null, uid: string, url_key: string | null, url_suffix: string | null }
  | { __typename?: 'GroupedProduct', canonical_url: string | null, country_of_manufacture: string | null, gift_message_available: boolean, max_sale_qty: number | null, meta_description: string | null, meta_keyword: string | null, meta_title: string | null, min_sale_qty: number | null, name: string | null, new_from_date: string | null, new_to_date: string | null, only_x_left_in_stock: number | null, options_container: string | null, quantity: number | null, rating_summary: number, review_count: number, sku: string | null, special_price: number | null, special_to_date: string | null, stock_status: ProductStockStatus | null, swatch_image: string | null, uid: string, url_key: string | null, url_suffix: string | null }
  | { __typename?: 'SimpleProduct', canonical_url: string | null, country_of_manufacture: string | null, gift_message_available: boolean, max_sale_qty: number | null, meta_description: string | null, meta_keyword: string | null, meta_title: string | null, min_sale_qty: number | null, name: string | null, new_from_date: string | null, new_to_date: string | null, only_x_left_in_stock: number | null, options_container: string | null, quantity: number | null, rating_summary: number, review_count: number, sku: string | null, special_price: number | null, special_to_date: string | null, stock_status: ProductStockStatus | null, swatch_image: string | null, uid: string, url_key: string | null, url_suffix: string | null }
  | { __typename?: 'VirtualProduct', canonical_url: string | null, country_of_manufacture: string | null, gift_message_available: boolean, max_sale_qty: number | null, meta_description: string | null, meta_keyword: string | null, meta_title: string | null, min_sale_qty: number | null, name: string | null, new_from_date: string | null, new_to_date: string | null, only_x_left_in_stock: number | null, options_container: string | null, quantity: number | null, rating_summary: number, review_count: number, sku: string | null, special_price: number | null, special_to_date: string | null, stock_status: ProductStockStatus | null, swatch_image: string | null, uid: string, url_key: string | null, url_suffix: string | null }
  | null> | null, page_info: { __typename?: 'SearchResultPageInfo', current_page: number | null, page_size: number | null, total_pages: number | null } | null, sort_fields: { __typename?: 'SortFields', default: string | null } | null, suggestions: Array<{ __typename?: 'SearchSuggestion', search: string } | null> | null } | null }

export type RecaptchaFormConfigQueryVariables = Exact<{
  formType: ReCaptchaFormEnum
}>

export type RecaptchaFormConfigQuery = { __typename?: 'Query', recaptchaFormConfig: { __typename?: 'ReCaptchaConfigOutput', is_enabled: boolean, configurations: { __typename?: 'ReCaptchaConfiguration', badge_position: string | null, language_code: string | null, minimum_score: number | null, re_captcha_type: ReCaptchaTypeEmum, technical_failure_message: string, theme: string, validation_failure_message: string, website_key: string } | null } | null }

export type RecaptchaV3ConfigQueryVariables = Exact<{ [key: string]: never }>

export type RecaptchaV3ConfigQuery = { __typename?: 'Query', recaptchaV3Config: { __typename?: 'ReCaptchaConfigurationV3', badge_position: string, failure_message: string, forms: Array<ReCaptchaFormEnum | null>, is_enabled: boolean, language_code: string | null, minimum_score: number, theme: string, website_key: string } | null }

export type RouteQueryVariables = Exact<{
  url: Scalars['String']['input']
}>

export type RouteQuery = { __typename?: 'Query', route:
  | { __typename?: 'BundleProduct', redirect_code: number, relative_url: string | null, type: UrlRewriteEntityTypeEnum | null }
  | { __typename?: 'CategoryTree', redirect_code: number, relative_url: string | null, type: UrlRewriteEntityTypeEnum | null }
  | { __typename?: 'CmsPage', redirect_code: number, relative_url: string | null, type: UrlRewriteEntityTypeEnum | null }
  | { __typename?: 'ConfigurableProduct', redirect_code: number, relative_url: string | null, type: UrlRewriteEntityTypeEnum | null }
  | { __typename?: 'DownloadableProduct', redirect_code: number, relative_url: string | null, type: UrlRewriteEntityTypeEnum | null }
  | { __typename?: 'GroupedProduct', redirect_code: number, relative_url: string | null, type: UrlRewriteEntityTypeEnum | null }
  | { __typename?: 'RoutableUrl', redirect_code: number, relative_url: string | null, type: UrlRewriteEntityTypeEnum | null }
  | { __typename?: 'SimpleProduct', redirect_code: number, relative_url: string | null, type: UrlRewriteEntityTypeEnum | null }
  | { __typename?: 'VirtualProduct', redirect_code: number, relative_url: string | null, type: UrlRewriteEntityTypeEnum | null }
  | null }

export type StoreConfigQueryVariables = Exact<{ [key: string]: never }>

export type StoreConfigQuery = { __typename?: 'Query', storeConfig: { __typename?: 'StoreConfig', absolute_footer: string | null, allow_guests_to_write_product_reviews: string | null, allow_items: string | null, allow_order: string | null, autocomplete_on_storefront: boolean | null, base_currency_code: string | null, base_link_url: string | null, base_media_url: string | null, base_static_url: string | null, base_url: string | null, braintree_3dsecure_allowspecific: boolean | null, braintree_3dsecure_always_request_3ds: boolean | null, braintree_3dsecure_specificcountry: string | null, braintree_3dsecure_threshold_amount: string | null, braintree_3dsecure_verify_3dsecure: boolean | null, braintree_ach_direct_debit_vault_active: boolean | null, braintree_applepay_merchant_name: string | null, braintree_applepay_vault_active: boolean | null, braintree_cc_vault_active: string | null, braintree_cc_vault_cvv: boolean | null, braintree_environment: string | null, braintree_googlepay_btn_color: string | null, braintree_googlepay_cctypes: string | null, braintree_googlepay_merchant_id: string | null, braintree_googlepay_vault_active: boolean | null, braintree_local_payment_allowed_methods: string | null, braintree_local_payment_fallback_button_text: string | null, braintree_local_payment_redirect_on_fail: string | null, braintree_merchant_account_id: string | null, braintree_paypal_button_location_cart_type_credit_color: string | null, braintree_paypal_button_location_cart_type_credit_label: string | null, braintree_paypal_button_location_cart_type_credit_shape: string | null, braintree_paypal_button_location_cart_type_credit_show: boolean | null, braintree_paypal_button_location_cart_type_messaging_layout: string | null, braintree_paypal_button_location_cart_type_messaging_logo: string | null, braintree_paypal_button_location_cart_type_messaging_logo_position: string | null, braintree_paypal_button_location_cart_type_messaging_show: boolean | null, braintree_paypal_button_location_cart_type_messaging_text_color: string | null, braintree_paypal_button_location_cart_type_paylater_color: string | null, braintree_paypal_button_location_cart_type_paylater_label: string | null, braintree_paypal_button_location_cart_type_paylater_shape: string | null, braintree_paypal_button_location_cart_type_paylater_show: boolean | null, braintree_paypal_button_location_cart_type_paypal_color: string | null, braintree_paypal_button_location_cart_type_paypal_label: string | null, braintree_paypal_button_location_cart_type_paypal_shape: string | null, braintree_paypal_button_location_cart_type_paypal_show: boolean | null, braintree_paypal_button_location_checkout_type_credit_color: string | null, braintree_paypal_button_location_checkout_type_credit_label: string | null, braintree_paypal_button_location_checkout_type_credit_shape: string | null, braintree_paypal_button_location_checkout_type_credit_show: boolean | null, braintree_paypal_button_location_checkout_type_messaging_layout: string | null, braintree_paypal_button_location_checkout_type_messaging_logo: string | null, braintree_paypal_button_location_checkout_type_messaging_logo_position: string | null, braintree_paypal_button_location_checkout_type_messaging_show: boolean | null, braintree_paypal_button_location_checkout_type_messaging_text_color: string | null, braintree_paypal_button_location_checkout_type_paylater_color: string | null, braintree_paypal_button_location_checkout_type_paylater_label: string | null, braintree_paypal_button_location_checkout_type_paylater_shape: string | null, braintree_paypal_button_location_checkout_type_paylater_show: boolean | null, braintree_paypal_button_location_checkout_type_paypal_color: string | null, braintree_paypal_button_location_checkout_type_paypal_label: string | null, braintree_paypal_button_location_checkout_type_paypal_shape: string | null, braintree_paypal_button_location_checkout_type_paypal_show: boolean | null, braintree_paypal_button_location_productpage_type_credit_color: string | null, braintree_paypal_button_location_productpage_type_credit_label: string | null, braintree_paypal_button_location_productpage_type_credit_shape: string | null, braintree_paypal_button_location_productpage_type_credit_show: boolean | null, braintree_paypal_button_location_productpage_type_messaging_layout: string | null, braintree_paypal_button_location_productpage_type_messaging_logo: string | null, braintree_paypal_button_location_productpage_type_messaging_logo_position: string | null, braintree_paypal_button_location_productpage_type_messaging_show: boolean | null, braintree_paypal_button_location_productpage_type_messaging_text_color: string | null, braintree_paypal_button_location_productpage_type_paylater_color: string | null, braintree_paypal_button_location_productpage_type_paylater_label: string | null, braintree_paypal_button_location_productpage_type_paylater_shape: string | null, braintree_paypal_button_location_productpage_type_paylater_show: boolean | null, braintree_paypal_button_location_productpage_type_paypal_color: string | null, braintree_paypal_button_location_productpage_type_paypal_label: string | null, braintree_paypal_button_location_productpage_type_paypal_shape: string | null, braintree_paypal_button_location_productpage_type_paypal_show: boolean | null, braintree_paypal_credit_uk_merchant_name: string | null, braintree_paypal_display_on_shopping_cart: boolean | null, braintree_paypal_merchant_country: string | null, braintree_paypal_merchant_name_override: string | null, braintree_paypal_require_billing_address: boolean | null, braintree_paypal_send_cart_line_items: boolean | null, braintree_paypal_vault_active: boolean | null, cart_expires_in_days: number | null, cart_summary_display_quantity: number | null, catalog_default_sort_by: string | null, category_fixed_product_tax_display_setting: FixedProductTaxDisplaySettings | null, category_url_suffix: string | null, check_money_order_enable_for_specific_countries: boolean | null, check_money_order_enabled: boolean | null, check_money_order_make_check_payable_to: string | null, check_money_order_max_order_total: string | null, check_money_order_min_order_total: string | null, check_money_order_new_order_status: string | null, check_money_order_payment_from_specific_countries: string | null, check_money_order_send_check_to: string | null, check_money_order_sort_order: number | null, check_money_order_title: string | null, cms_home_page: string | null, cms_no_cookies: string | null, cms_no_route: string | null, configurable_product_image: ProductImageThumbnail, configurable_thumbnail_source: string | null, contact_enabled: boolean, copyright: string | null, countries_with_required_region: string | null, create_account_confirmation: boolean | null, customer_access_token_lifetime: number | null, default_country: string | null, default_description: string | null, default_display_currency_code: string | null, default_keywords: string | null, default_title: string | null, demonotice: number | null, display_product_prices_in_catalog: number, display_shipping_prices: number, display_state_if_optional: boolean | null, fixed_product_taxes_apply_tax_to_fpt: boolean, fixed_product_taxes_display_prices_in_emails: number, fixed_product_taxes_display_prices_in_product_lists: number, fixed_product_taxes_display_prices_in_sales_modules: number, fixed_product_taxes_display_prices_on_product_view_page: number, fixed_product_taxes_enable: boolean, fixed_product_taxes_include_fpt_in_subtotal: boolean, front: string | null, grid_per_page: number | null, grid_per_page_values: string | null, grouped_product_image: ProductImageThumbnail, head_includes: string | null, head_shortcut_icon: string | null, header_logo_src: string | null, is_checkout_agreements_enabled: boolean, is_default_store: boolean | null, is_default_store_group: boolean | null, is_guest_checkout_enabled: boolean | null, is_one_page_checkout_enabled: boolean | null, list_mode: string | null, list_per_page: number | null, list_per_page_values: string | null, locale: string | null, logo_alt: string | null, logo_height: number | null, logo_width: number | null, magento_wishlist_general_is_enabled: string | null, max_items_in_order_summary: number | null, minicart_display: boolean | null, minicart_max_items: number | null, minimum_password_length: string | null, newsletter_enabled: boolean, no_route: string | null, optional_zip_countries: string | null, order_cancellation_enabled: boolean, orders_invoices_credit_memos_display_full_summary: boolean, orders_invoices_credit_memos_display_grandtotal: boolean, orders_invoices_credit_memos_display_price: number, orders_invoices_credit_memos_display_shipping_amount: number, orders_invoices_credit_memos_display_subtotal: number, orders_invoices_credit_memos_display_zero_tax: boolean, payment_payflowpro_cc_vault_active: string | null, product_fixed_product_tax_display_setting: FixedProductTaxDisplaySettings | null, product_reviews_enabled: string | null, product_url_suffix: string | null, required_character_classes_number: string | null, root_category_uid: string | null, sales_fixed_product_tax_display_setting: FixedProductTaxDisplaySettings | null, secure_base_link_url: string | null, secure_base_media_url: string | null, secure_base_static_url: string | null, secure_base_url: string | null, shopping_cart_display_full_summary: boolean | null, shopping_cart_display_grand_total: boolean | null, shopping_cart_display_price: number | null, shopping_cart_display_shipping: number | null, shopping_cart_display_subtotal: number | null, shopping_cart_display_tax_gift_wrapping: TaxWrappingEnum | null, shopping_cart_display_zero_tax: boolean | null, show_cms_breadcrumbs: number | null, store_code: string | null, store_group_code: string | null, store_group_name: string | null, store_name: string | null, store_sort_order: number | null, timezone: string | null, title_prefix: string | null, title_separator: string | null, title_suffix: string | null, use_store_in_url: boolean | null, website_code: string | null, website_name: string | null, weight_unit: string | null, welcome: string | null, zero_subtotal_enable_for_specific_countries: boolean | null, zero_subtotal_enabled: boolean | null, zero_subtotal_new_order_status: string | null, zero_subtotal_payment_action: string | null, zero_subtotal_payment_from_specific_countries: string | null, zero_subtotal_sort_order: number | null, zero_subtotal_title: string | null, order_cancellation_reasons: Array<{ __typename?: 'CancellationReason', description: string } | null>, send_friend: { __typename?: 'SendFriendConfiguration', enabled_for_customers: boolean, enabled_for_guests: boolean } | null } | null }

export const AddBundleProductsToCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addBundleProductsToCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddBundleProductsToCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addBundleProductsToCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<AddBundleProductsToCartMutation, AddBundleProductsToCartMutationVariables>
export const AddConfigurableProductsToCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addConfigurableProductsToCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddConfigurableProductsToCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addConfigurableProductsToCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<AddConfigurableProductsToCartMutation, AddConfigurableProductsToCartMutationVariables>
export const AddDownloadableProductsToCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addDownloadableProductsToCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddDownloadableProductsToCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addDownloadableProductsToCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<AddDownloadableProductsToCartMutation, AddDownloadableProductsToCartMutationVariables>
export const AddProductsToCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addProductsToCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'cartId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'cartItems' } }, type: { kind: 'NonNullType', type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CartItemInput' } } } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addProductsToCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'cartId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'cartId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'cartItems' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'cartItems' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'user_errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }] } }] } }] } as unknown as DocumentNode<AddProductsToCartMutation, AddProductsToCartMutationVariables>
export const AddProductsToCompareListDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addProductsToCompareList' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddProductsToCompareListInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addProductsToCompareList' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'attributes' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'item_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }] } }] } as unknown as DocumentNode<AddProductsToCompareListMutation, AddProductsToCompareListMutationVariables>
export const AddProductsToNewCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addProductsToNewCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'cartItems' } }, type: { kind: 'NonNullType', type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CartItemInput' } } } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addProductsToNewCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'cartItems' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'cartItems' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'user_errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }] } }] } }] } as unknown as DocumentNode<AddProductsToNewCartMutation, AddProductsToNewCartMutationVariables>
export const AddProductsToWishlistDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addProductsToWishlist' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistItems' } }, type: { kind: 'NonNullType', type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'WishlistItemInput' } } } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addProductsToWishlist' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'wishlistId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'wishlistItems' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistItems' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'user_errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlist' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'items_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'sharing_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } }] } }] } }] } }] } as unknown as DocumentNode<AddProductsToWishlistMutation, AddProductsToWishlistMutationVariables>
export const AddSimpleProductsToCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addSimpleProductsToCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddSimpleProductsToCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addSimpleProductsToCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<AddSimpleProductsToCartMutation, AddSimpleProductsToCartMutationVariables>
export const AddStripePaymentMethodDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addStripePaymentMethod' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'StripePaymentMethodId' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addStripePaymentMethod' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'brand' } }, { kind: 'Field', name: { kind: 'Name', value: 'created' } }, { kind: 'Field', name: { kind: 'Name', value: 'cvc' } }, { kind: 'Field', name: { kind: 'Name', value: 'exp_month' } }, { kind: 'Field', name: { kind: 'Name', value: 'exp_year' } }, { kind: 'Field', name: { kind: 'Name', value: 'fingerprint' } }, { kind: 'Field', name: { kind: 'Name', value: 'icon' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }] } }] } }] } as unknown as DocumentNode<AddStripePaymentMethodMutation, AddStripePaymentMethodMutationVariables>
export const AddVirtualProductsToCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addVirtualProductsToCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'AddVirtualProductsToCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addVirtualProductsToCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<AddVirtualProductsToCartMutation, AddVirtualProductsToCartMutationVariables>
export const AddWishlistItemsToCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'addWishlistItemsToCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistItemIds' } }, type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addWishlistItemsToCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'wishlistId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'wishlistItemIds' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistItemIds' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'add_wishlist_items_to_cart_user_errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlistId' } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlistItemId' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlist' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'items_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'sharing_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } }] } }] } }] } }] } as unknown as DocumentNode<AddWishlistItemsToCartMutation, AddWishlistItemsToCartMutationVariables>
export const ApplyCouponToCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'applyCouponToCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'ApplyCouponToCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'applyCouponToCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<ApplyCouponToCartMutation, ApplyCouponToCartMutationVariables>
export const AssignCompareListToCustomerDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'assignCompareListToCustomer' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'assignCompareListToCustomer' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'uid' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'compare_list' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'item_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'result' } }] } }] } }] } as unknown as DocumentNode<AssignCompareListToCustomerMutation, AssignCompareListToCustomerMutationVariables>
export const AssignCustomerToGuestCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'assignCustomerToGuestCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'QuoteItemsSortInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'cart_id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'assignCustomerToGuestCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'cart_id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'cart_id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'applied_coupons' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'available_payment_methods' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_deferred' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'billing_address' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'gift_message' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'from' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'to' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'itemsV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'sort' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'selected_payment_method' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'purchase_order_number' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_addresses' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'customer_notes' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'pickup_location_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'same_as_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } as unknown as DocumentNode<AssignCustomerToGuestCartMutation, AssignCustomerToGuestCartMutationVariables>
export const CancelOrderDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'cancelOrder' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CancelOrderInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cancelOrder' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'error' } }, { kind: 'Field', name: { kind: 'Name', value: 'errorV2' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'order' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'available_actions' } }, { kind: 'Field', name: { kind: 'Name', value: 'carrier' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_status_change_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_method' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }, { kind: 'Field', name: { kind: 'Name', value: 'token' } }] } }] } }] } }] } as unknown as DocumentNode<CancelOrderMutation, CancelOrderMutationVariables>
export const ChangeCustomerPasswordDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'changeCustomerPassword' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'attributeCodes' } }, type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerOrdersFilterInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage1' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize1' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerOrderSortInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'scope' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'ScopeTypeEnum' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize2' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage2' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPassword' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'newPassword' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'changeCustomerPassword' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'currentPassword' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPassword' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'newPassword' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'newPassword' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addresses' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'addressesV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'allow_remote_shopping_assistance' } }, { kind: 'Field', name: { kind: 'Name', value: 'compare_list' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'item_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'confirmation_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'created_at' } }, { kind: 'Field', name: { kind: 'Name', value: 'custom_attributes' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'attributeCodes' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'attributeCodes' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'date_of_birth' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'gender' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_subscribed' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'filter' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage1' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize1' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'sort' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'scope' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'scope' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'date_of_first_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'taxvat' } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlist_v2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'items_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'sharing_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlists' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize2' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage2' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'items_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'sharing_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } }] } }] } }] } }] } as unknown as DocumentNode<ChangeCustomerPasswordMutation, ChangeCustomerPasswordMutationVariables>
export const CompleteOrderDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'completeOrder' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'CompleteOrderInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'completeOrder' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'orderV2' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'available_actions' } }, { kind: 'Field', name: { kind: 'Name', value: 'carrier' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_status_change_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_method' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }, { kind: 'Field', name: { kind: 'Name', value: 'token' } }] } }] } }] } }] } as unknown as DocumentNode<CompleteOrderMutation, CompleteOrderMutationVariables>
export const ConfirmCancelOrderDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'confirmCancelOrder' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ConfirmCancelOrderInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'confirmCancelOrder' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'error' } }, { kind: 'Field', name: { kind: 'Name', value: 'errorV2' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'order' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'available_actions' } }, { kind: 'Field', name: { kind: 'Name', value: 'carrier' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_status_change_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_method' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }, { kind: 'Field', name: { kind: 'Name', value: 'token' } }] } }] } }] } }] } as unknown as DocumentNode<ConfirmCancelOrderMutation, ConfirmCancelOrderMutationVariables>
export const ConfirmEmailDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'confirmEmail' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ConfirmEmailInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'confirmEmail' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customer' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'allow_remote_shopping_assistance' } }, { kind: 'Field', name: { kind: 'Name', value: 'confirmation_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'created_at' } }, { kind: 'Field', name: { kind: 'Name', value: 'date_of_birth' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'gender' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_subscribed' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'taxvat' } }] } }] } }] } }] } as unknown as DocumentNode<ConfirmEmailMutation, ConfirmEmailMutationVariables>
export const ContactUsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'contactUs' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ContactUsInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'contactUs' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'status' } }] } }] } }] } as unknown as DocumentNode<ContactUsMutation, ContactUsMutationVariables>
export const CreateBraintreeClientTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createBraintreeClientToken' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createBraintreeClientToken' } }] } }] } as unknown as DocumentNode<CreateBraintreeClientTokenMutation, CreateBraintreeClientTokenMutationVariables>
export const CreateBraintreePayPalClientTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createBraintreePayPalClientToken' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createBraintreePayPalClientToken' } }] } }] } as unknown as DocumentNode<CreateBraintreePayPalClientTokenMutation, CreateBraintreePayPalClientTokenMutationVariables>
export const CreateBraintreePayPalVaultClientTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createBraintreePayPalVaultClientToken' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'BraintreeVaultInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createBraintreePayPalVaultClientToken' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }] }] } }] } as unknown as DocumentNode<CreateBraintreePayPalVaultClientTokenMutation, CreateBraintreePayPalVaultClientTokenMutationVariables>
export const CreateCompareListDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createCompareList' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateCompareListInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createCompareList' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'attributes' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'item_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }] } }] } as unknown as DocumentNode<CreateCompareListMutation, CreateCompareListMutationVariables>
export const CreateCustomerAddressDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createCustomerAddress' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'attributeCodes' } }, type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerAddressInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createCustomerAddress' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'custom_attributesV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'attributeCodes' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'attributeCodes' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'extension_attributes' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'attribute_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'value' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'region' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'region' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }] } }] } as unknown as DocumentNode<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>
export const CreateCustomerV2Document = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createCustomerV2' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerCreateInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createCustomerV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customer' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'allow_remote_shopping_assistance' } }, { kind: 'Field', name: { kind: 'Name', value: 'confirmation_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'created_at' } }, { kind: 'Field', name: { kind: 'Name', value: 'date_of_birth' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'gender' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_subscribed' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'taxvat' } }] } }] } }] } }] } as unknown as DocumentNode<CreateCustomerV2Mutation, CreateCustomerV2MutationVariables>
export const CreateGuestCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createGuestCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateGuestCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createGuestCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<CreateGuestCartMutation, CreateGuestCartMutationVariables>
export const CreatePayflowProTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createPayflowProToken' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PayflowProTokenInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createPayflowProToken' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'response_message' } }, { kind: 'Field', name: { kind: 'Name', value: 'result' } }, { kind: 'Field', name: { kind: 'Name', value: 'result_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_token' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_token_id' } }] } }] } }] } as unknown as DocumentNode<CreatePayflowProTokenMutation, CreatePayflowProTokenMutationVariables>
export const CreatePaymentOrderDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createPaymentOrder' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreatePaymentOrderInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createPaymentOrder' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'amount' } }, { kind: 'Field', name: { kind: 'Name', value: 'currency_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'mp_order_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }] } }] } }] } as unknown as DocumentNode<CreatePaymentOrderMutation, CreatePaymentOrderMutationVariables>
export const CreatePaypalExpressTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createPaypalExpressToken' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PaypalExpressTokenInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createPaypalExpressToken' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'paypal_urls' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'edit' } }, { kind: 'Field', name: { kind: 'Name', value: 'start' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'token' } }] } }] } }] } as unknown as DocumentNode<CreatePaypalExpressTokenMutation, CreatePaypalExpressTokenMutationVariables>
export const CreateProductReviewDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createProductReview' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateProductReviewInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createProductReview' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'review' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'average_rating' } }, { kind: 'Field', name: { kind: 'Name', value: 'created_at' } }, { kind: 'Field', name: { kind: 'Name', value: 'nickname' } }, { kind: 'Field', name: { kind: 'Name', value: 'summary' } }, { kind: 'Field', name: { kind: 'Name', value: 'text' } }] } }] } }] } }] } as unknown as DocumentNode<CreateProductReviewMutation, CreateProductReviewMutationVariables>
export const CreateVaultCardPaymentTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createVaultCardPaymentToken' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateVaultCardPaymentTokenInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createVaultCardPaymentToken' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'vault_token_id' } }] } }] } }] } as unknown as DocumentNode<CreateVaultCardPaymentTokenMutation, CreateVaultCardPaymentTokenMutationVariables>
export const CreateVaultCardSetupTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'createVaultCardSetupToken' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateVaultCardSetupTokenInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'createVaultCardSetupToken' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'setup_token' } }] } }] } }] } as unknown as DocumentNode<CreateVaultCardSetupTokenMutation, CreateVaultCardSetupTokenMutationVariables>
export const DeleteCompareListDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'deleteCompareList' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'deleteCompareList' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'uid' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'result' } }] } }] } }] } as unknown as DocumentNode<DeleteCompareListMutation, DeleteCompareListMutationVariables>
export const DeleteCustomerDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'deleteCustomer' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'deleteCustomer' } }] } }] } as unknown as DocumentNode<DeleteCustomerMutation, DeleteCustomerMutationVariables>
export const DeleteCustomerAddressDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'deleteCustomerAddress' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'deleteCustomerAddress' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } } }] }] } }] } as unknown as DocumentNode<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables>
export const DeletePaymentTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'deletePaymentToken' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'public_hash' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'deletePaymentToken' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'public_hash' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'public_hash' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'result' } }] } }] } }] } as unknown as DocumentNode<DeletePaymentTokenMutation, DeletePaymentTokenMutationVariables>
export const DeleteStripePaymentMethodDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'deleteStripePaymentMethod' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'StripePaymentMethodId' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'deleteStripePaymentMethod' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }] }] } }] } as unknown as DocumentNode<DeleteStripePaymentMethodMutation, DeleteStripePaymentMethodMutationVariables>
export const EstimateShippingMethodsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'estimateShippingMethods' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'EstimateTotalsInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'estimateShippingMethods' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'amount' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'currency' } }, { kind: 'Field', name: { kind: 'Name', value: 'value' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'available' } }, { kind: 'Field', name: { kind: 'Name', value: 'carrier_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'carrier_title' } }, { kind: 'Field', name: { kind: 'Name', value: 'error_message' } }, { kind: 'Field', name: { kind: 'Name', value: 'method_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'method_title' } }, { kind: 'Field', name: { kind: 'Name', value: 'price_excl_tax' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'currency' } }, { kind: 'Field', name: { kind: 'Name', value: 'value' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'price_incl_tax' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'currency' } }, { kind: 'Field', name: { kind: 'Name', value: 'value' } }] } }] } }] } }] } as unknown as DocumentNode<EstimateShippingMethodsMutation, EstimateShippingMethodsMutationVariables>
export const EstimateTotalsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'estimateTotals' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'EstimateTotalsInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'estimateTotals' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<EstimateTotalsMutation, EstimateTotalsMutationVariables>
export const GenerateCustomerTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'generateCustomerToken' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'generateCustomerToken' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'email' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'password' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'token' } }] } }] } }] } as unknown as DocumentNode<GenerateCustomerTokenMutation, GenerateCustomerTokenMutationVariables>
export const GenerateCustomerTokenAsAdminDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'generateCustomerTokenAsAdmin' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'GenerateCustomerTokenAsAdminInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'generateCustomerTokenAsAdmin' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customer_token' } }] } }] } }] } as unknown as DocumentNode<GenerateCustomerTokenAsAdminMutation, GenerateCustomerTokenAsAdminMutationVariables>
export const HandlePayflowProResponseDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'handlePayflowProResponse' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PayflowProResponseInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'handlePayflowProResponse' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<HandlePayflowProResponseMutation, HandlePayflowProResponseMutationVariables>
export const ListStripePaymentMethodsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'listStripePaymentMethods' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'listStripePaymentMethods' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'brand' } }, { kind: 'Field', name: { kind: 'Name', value: 'created' } }, { kind: 'Field', name: { kind: 'Name', value: 'cvc' } }, { kind: 'Field', name: { kind: 'Name', value: 'exp_month' } }, { kind: 'Field', name: { kind: 'Name', value: 'exp_year' } }, { kind: 'Field', name: { kind: 'Name', value: 'fingerprint' } }, { kind: 'Field', name: { kind: 'Name', value: 'icon' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }] } }] } }] } as unknown as DocumentNode<ListStripePaymentMethodsMutation, ListStripePaymentMethodsMutationVariables>
export const LofAddGiftCardToQuoteDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'lofAddGiftCardToQuote' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'cart_id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'lofAddGiftCardToQuote' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'cart_id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'cart_id' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'code' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'code' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }] } }] } as unknown as DocumentNode<LofAddGiftCardToQuoteMutation, LofAddGiftCardToQuoteMutationVariables>
export const LofApplyCustomerBalanceToCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'lofApplyCustomerBalanceToCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'cart_id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'lofApplyCustomerBalanceToCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'cart_id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'cart_id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }] } }] } as unknown as DocumentNode<LofApplyCustomerBalanceToCartMutation, LofApplyCustomerBalanceToCartMutationVariables>
export const LofGiftCardRedeemDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'lofGiftCardRedeem' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'customer_id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'lofGiftCardRedeem' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'code' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'code' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'customer_id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'customer_id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }] } }] } as unknown as DocumentNode<LofGiftCardRedeemMutation, LofGiftCardRedeemMutationVariables>
export const MergeCartsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'mergeCarts' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'QuoteItemsSortInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'source_cart_id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'destination_cart_id' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'mergeCarts' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'source_cart_id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'source_cart_id' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'destination_cart_id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'destination_cart_id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'applied_coupons' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'available_payment_methods' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_deferred' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'billing_address' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'gift_message' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'from' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'to' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'itemsV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'sort' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'selected_payment_method' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'purchase_order_number' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_addresses' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'customer_notes' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'pickup_location_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'same_as_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } as unknown as DocumentNode<MergeCartsMutation, MergeCartsMutationVariables>
export const PlaceOrderDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'placeOrder' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'PlaceOrderInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'placeOrder' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'orderV2' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'available_actions' } }, { kind: 'Field', name: { kind: 'Name', value: 'carrier' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_status_change_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_method' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }, { kind: 'Field', name: { kind: 'Name', value: 'token' } }] } }] } }] } }] } as unknown as DocumentNode<PlaceOrderMutation, PlaceOrderMutationVariables>
export const RemoveCouponFromCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'removeCouponFromCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'RemoveCouponFromCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'removeCouponFromCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<RemoveCouponFromCartMutation, RemoveCouponFromCartMutationVariables>
export const RemoveItemFromCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'removeItemFromCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'RemoveItemFromCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'removeItemFromCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>
export const RemoveProductsFromCompareListDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'removeProductsFromCompareList' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'RemoveProductsFromCompareListInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'removeProductsFromCompareList' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'attributes' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'item_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }] } }] } as unknown as DocumentNode<RemoveProductsFromCompareListMutation, RemoveProductsFromCompareListMutationVariables>
export const RemoveProductsFromWishlistDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'removeProductsFromWishlist' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistItemsIds' } }, type: { kind: 'NonNullType', type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'removeProductsFromWishlist' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'wishlistId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'wishlistItemsIds' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistItemsIds' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'user_errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlist' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'items_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'sharing_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } }] } }] } }] } }] } as unknown as DocumentNode<RemoveProductsFromWishlistMutation, RemoveProductsFromWishlistMutationVariables>
export const ReorderItemsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'reorderItems' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderNumber' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'reorderItems' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'orderNumber' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'orderNumber' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'userInputErrors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'path' } }] } }] } }] } }] } as unknown as DocumentNode<ReorderItemsMutation, ReorderItemsMutationVariables>
export const RequestGuestOrderCancelDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'requestGuestOrderCancel' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'GuestOrderCancelInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'requestGuestOrderCancel' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'error' } }, { kind: 'Field', name: { kind: 'Name', value: 'errorV2' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'order' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'available_actions' } }, { kind: 'Field', name: { kind: 'Name', value: 'carrier' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_status_change_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_method' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }, { kind: 'Field', name: { kind: 'Name', value: 'token' } }] } }] } }] } }] } as unknown as DocumentNode<RequestGuestOrderCancelMutation, RequestGuestOrderCancelMutationVariables>
export const RequestPasswordResetEmailDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'requestPasswordResetEmail' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'requestPasswordResetEmail' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'email' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } } }] }] } }] } as unknown as DocumentNode<RequestPasswordResetEmailMutation, RequestPasswordResetEmailMutationVariables>
export const ResendConfirmationEmailDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'resendConfirmationEmail' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'resendConfirmationEmail' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'email' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } } }] }] } }] } as unknown as DocumentNode<ResendConfirmationEmailMutation, ResendConfirmationEmailMutationVariables>
export const ResetPasswordDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'resetPassword' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'resetPasswordToken' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'newPassword' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'resetPassword' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'email' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'resetPasswordToken' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'resetPasswordToken' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'newPassword' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'newPassword' } } }] }] } }] } as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>
export const RevokeCustomerTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'revokeCustomerToken' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'revokeCustomerToken' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'result' } }] } }] } }] } as unknown as DocumentNode<RevokeCustomerTokenMutation, RevokeCustomerTokenMutationVariables>
export const SendEmailToFriendDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'sendEmailToFriend' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'SendEmailToFriendInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'sendEmailToFriend' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'recipients' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'sender' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }] } }] } }] } as unknown as DocumentNode<SendEmailToFriendMutation, SendEmailToFriendMutationVariables>
export const SetBillingAddressOnCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'setBillingAddressOnCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'SetBillingAddressOnCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'setBillingAddressOnCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<SetBillingAddressOnCartMutation, SetBillingAddressOnCartMutationVariables>
export const SetCartAsInactiveDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'setCartAsInactive' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'cartId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'setCartAsInactive' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'cartId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'cartId' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'error' } }, { kind: 'Field', name: { kind: 'Name', value: 'success' } }] } }] } }] } as unknown as DocumentNode<SetCartAsInactiveMutation, SetCartAsInactiveMutationVariables>
export const SetGuestEmailOnCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'setGuestEmailOnCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'SetGuestEmailOnCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'setGuestEmailOnCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<SetGuestEmailOnCartMutation, SetGuestEmailOnCartMutationVariables>
export const SetPaymentMethodOnCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'setPaymentMethodOnCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'SetPaymentMethodOnCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'setPaymentMethodOnCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<SetPaymentMethodOnCartMutation, SetPaymentMethodOnCartMutationVariables>
export const SetShippingAddressesOnCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'setShippingAddressesOnCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'SetShippingAddressesOnCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'setShippingAddressesOnCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<SetShippingAddressesOnCartMutation, SetShippingAddressesOnCartMutationVariables>
export const SetShippingMethodsOnCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'setShippingMethodsOnCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'SetShippingMethodsOnCartInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'setShippingMethodsOnCart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } }] } as unknown as DocumentNode<SetShippingMethodsOnCartMutation, SetShippingMethodsOnCartMutationVariables>
export const SubscribeEmailToNewsletterDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'subscribeEmailToNewsletter' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'subscribeEmailToNewsletter' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'email' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'status' } }] } }] } }] } as unknown as DocumentNode<SubscribeEmailToNewsletterMutation, SubscribeEmailToNewsletterMutationVariables>
export const SyncPaymentOrderDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'syncPaymentOrder' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'SyncPaymentOrderInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'syncPaymentOrder' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }] }] } }] } as unknown as DocumentNode<SyncPaymentOrderMutation, SyncPaymentOrderMutationVariables>
export const UpdateCartItemsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'updateCartItems' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateCartItemsInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'updateCartItems' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }] } }] } }] } as unknown as DocumentNode<UpdateCartItemsMutation, UpdateCartItemsMutationVariables>
export const UpdateCustomerAddressDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'updateCustomerAddress' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'attributeCodes' } }, type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerAddressInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'updateCustomerAddress' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'custom_attributesV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'attributeCodes' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'attributeCodes' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'extension_attributes' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'attribute_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'value' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'region' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'region' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }] } }] } as unknown as DocumentNode<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables>
export const UpdateCustomerEmailDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'updateCustomerEmail' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'updateCustomerEmail' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'email' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'password' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customer' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'allow_remote_shopping_assistance' } }, { kind: 'Field', name: { kind: 'Name', value: 'confirmation_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'created_at' } }, { kind: 'Field', name: { kind: 'Name', value: 'date_of_birth' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'gender' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_subscribed' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'taxvat' } }] } }] } }] } }] } as unknown as DocumentNode<UpdateCustomerEmailMutation, UpdateCustomerEmailMutationVariables>
export const UpdateCustomerV2Document = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'updateCustomerV2' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerUpdateInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'updateCustomerV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customer' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'allow_remote_shopping_assistance' } }, { kind: 'Field', name: { kind: 'Name', value: 'confirmation_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'created_at' } }, { kind: 'Field', name: { kind: 'Name', value: 'date_of_birth' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'gender' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_subscribed' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'taxvat' } }] } }] } }] } }] } as unknown as DocumentNode<UpdateCustomerV2Mutation, UpdateCustomerV2MutationVariables>
export const UpdateProductsInWishlistDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'updateProductsInWishlist' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistItems' } }, type: { kind: 'NonNullType', type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'WishlistItemUpdateInput' } } } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'updateProductsInWishlist' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'wishlistId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'wishlistItems' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'wishlistItems' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'user_errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlist' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'items_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'sharing_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } }] } }] } }] } }] } as unknown as DocumentNode<UpdateProductsInWishlistMutation, UpdateProductsInWishlistMutationVariables>
export const AttributesFormDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'attributesForm' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'formCode' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'attributesForm' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'formCode' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'formCode' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_value' } }, { kind: 'Field', name: { kind: 'Name', value: 'entity_type' } }, { kind: 'Field', name: { kind: 'Name', value: 'frontend_class' } }, { kind: 'Field', name: { kind: 'Name', value: 'frontend_input' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_required' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_unique' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }] } }] } }] } }] } as unknown as DocumentNode<AttributesFormQuery, AttributesFormQueryVariables>
export const AttributesListDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'attributesList' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'entityType' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'AttributeEntityTypeEnum' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'AttributeFilterInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'attributesList' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'entityType' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'entityType' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'filters' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_value' } }, { kind: 'Field', name: { kind: 'Name', value: 'entity_type' } }, { kind: 'Field', name: { kind: 'Name', value: 'frontend_class' } }, { kind: 'Field', name: { kind: 'Name', value: 'frontend_input' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_required' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_unique' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }] } }] } }] } }] } as unknown as DocumentNode<AttributesListQuery, AttributesListQueryVariables>
export const AvailableStoresDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'availableStores' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'useCurrentGroup' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'availableStores' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'useCurrentGroup' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'useCurrentGroup' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'absolute_footer' } }, { kind: 'Field', name: { kind: 'Name', value: 'allow_guests_to_write_product_reviews' } }, { kind: 'Field', name: { kind: 'Name', value: 'allow_items' } }, { kind: 'Field', name: { kind: 'Name', value: 'allow_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'autocomplete_on_storefront' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_currency_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_link_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_media_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_static_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_allowspecific' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_always_request_3ds' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_specificcountry' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_threshold_amount' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_verify_3dsecure' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_ach_direct_debit_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_applepay_merchant_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_applepay_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_cc_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_cc_vault_cvv' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_environment' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_googlepay_btn_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_googlepay_cctypes' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_googlepay_merchant_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_googlepay_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_local_payment_allowed_methods' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_local_payment_fallback_button_text' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_local_payment_redirect_on_fail' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_merchant_account_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_credit_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_credit_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_credit_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_credit_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_layout' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_logo' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_logo_position' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_text_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paylater_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paylater_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paylater_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paylater_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paypal_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paypal_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paypal_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paypal_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_credit_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_credit_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_credit_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_credit_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_layout' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_logo' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_logo_position' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_text_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paylater_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paylater_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paylater_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paylater_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paypal_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paypal_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paypal_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paypal_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_credit_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_credit_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_credit_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_credit_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_layout' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_logo' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_logo_position' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_text_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paylater_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paylater_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paylater_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paylater_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paypal_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paypal_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paypal_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paypal_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_credit_uk_merchant_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_display_on_shopping_cart' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_merchant_country' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_merchant_name_override' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_require_billing_address' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_send_cart_line_items' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'cart_expires_in_days' } }, { kind: 'Field', name: { kind: 'Name', value: 'cart_summary_display_quantity' } }, { kind: 'Field', name: { kind: 'Name', value: 'catalog_default_sort_by' } }, { kind: 'Field', name: { kind: 'Name', value: 'category_fixed_product_tax_display_setting' } }, { kind: 'Field', name: { kind: 'Name', value: 'category_url_suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_enable_for_specific_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_make_check_payable_to' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_max_order_total' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_min_order_total' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_new_order_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_payment_from_specific_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_send_check_to' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_title' } }, { kind: 'Field', name: { kind: 'Name', value: 'cms_home_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'cms_no_cookies' } }, { kind: 'Field', name: { kind: 'Name', value: 'cms_no_route' } }, { kind: 'Field', name: { kind: 'Name', value: 'configurable_product_image' } }, { kind: 'Field', name: { kind: 'Name', value: 'configurable_thumbnail_source' } }, { kind: 'Field', name: { kind: 'Name', value: 'contact_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'copyright' } }, { kind: 'Field', name: { kind: 'Name', value: 'countries_with_required_region' } }, { kind: 'Field', name: { kind: 'Name', value: 'create_account_confirmation' } }, { kind: 'Field', name: { kind: 'Name', value: 'customer_access_token_lifetime' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_country' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_description' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_display_currency_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_keywords' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_title' } }, { kind: 'Field', name: { kind: 'Name', value: 'demonotice' } }, { kind: 'Field', name: { kind: 'Name', value: 'display_product_prices_in_catalog' } }, { kind: 'Field', name: { kind: 'Name', value: 'display_shipping_prices' } }, { kind: 'Field', name: { kind: 'Name', value: 'display_state_if_optional' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_apply_tax_to_fpt' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_display_prices_in_emails' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_display_prices_in_product_lists' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_display_prices_in_sales_modules' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_display_prices_on_product_view_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_enable' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_include_fpt_in_subtotal' } }, { kind: 'Field', name: { kind: 'Name', value: 'front' } }, { kind: 'Field', name: { kind: 'Name', value: 'grid_per_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'grid_per_page_values' } }, { kind: 'Field', name: { kind: 'Name', value: 'grouped_product_image' } }, { kind: 'Field', name: { kind: 'Name', value: 'head_includes' } }, { kind: 'Field', name: { kind: 'Name', value: 'head_shortcut_icon' } }, { kind: 'Field', name: { kind: 'Name', value: 'header_logo_src' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_checkout_agreements_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_default_store' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_default_store_group' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_guest_checkout_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_one_page_checkout_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'list_mode' } }, { kind: 'Field', name: { kind: 'Name', value: 'list_per_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'list_per_page_values' } }, { kind: 'Field', name: { kind: 'Name', value: 'locale' } }, { kind: 'Field', name: { kind: 'Name', value: 'logo_alt' } }, { kind: 'Field', name: { kind: 'Name', value: 'logo_height' } }, { kind: 'Field', name: { kind: 'Name', value: 'logo_width' } }, { kind: 'Field', name: { kind: 'Name', value: 'magento_wishlist_general_is_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'max_items_in_order_summary' } }, { kind: 'Field', name: { kind: 'Name', value: 'minicart_display' } }, { kind: 'Field', name: { kind: 'Name', value: 'minicart_max_items' } }, { kind: 'Field', name: { kind: 'Name', value: 'minimum_password_length' } }, { kind: 'Field', name: { kind: 'Name', value: 'newsletter_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'no_route' } }, { kind: 'Field', name: { kind: 'Name', value: 'optional_zip_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_cancellation_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_cancellation_reasons' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'description' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_full_summary' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_grandtotal' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_price' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_shipping_amount' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_subtotal' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_zero_tax' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_payflowpro_cc_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_fixed_product_tax_display_setting' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_reviews_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_url_suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'required_character_classes_number' } }, { kind: 'Field', name: { kind: 'Name', value: 'root_category_uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'sales_fixed_product_tax_display_setting' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_base_link_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_base_media_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_base_static_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_base_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'send_friend' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'enabled_for_customers' } }, { kind: 'Field', name: { kind: 'Name', value: 'enabled_for_guests' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_full_summary' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_grand_total' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_price' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_subtotal' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_tax_gift_wrapping' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_zero_tax' } }, { kind: 'Field', name: { kind: 'Name', value: 'show_cms_breadcrumbs' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_group_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_group_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'timezone' } }, { kind: 'Field', name: { kind: 'Name', value: 'title_prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'title_separator' } }, { kind: 'Field', name: { kind: 'Name', value: 'title_suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'use_store_in_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'website_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'website_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'weight_unit' } }, { kind: 'Field', name: { kind: 'Name', value: 'welcome' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_enable_for_specific_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_new_order_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_payment_action' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_payment_from_specific_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_title' } }] } }] } }] } as unknown as DocumentNode<AvailableStoresQuery, AvailableStoresQueryVariables>
export const CartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'cart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'QuoteItemsSortInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'cart_id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cart' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'cart_id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'cart_id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'applied_coupons' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'available_payment_methods' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_deferred' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'billing_address' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'gift_message' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'from' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'to' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'itemsV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'sort' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'selected_payment_method' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'purchase_order_number' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_addresses' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'customer_notes' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'pickup_location_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'same_as_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } as unknown as DocumentNode<CartQuery, CartQueryVariables>
export const CategoriesDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'categories' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'CategoryFilterInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'categories' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'filters' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'amtoolkit_robots' } }, { kind: 'Field', name: { kind: 'Name', value: 'available_sort_by' } }, { kind: 'Field', name: { kind: 'Name', value: 'canonical_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'category_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'children_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'custom_layout_update_file' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_sort_by' } }, { kind: 'Field', name: { kind: 'Name', value: 'description' } }, { kind: 'Field', name: { kind: 'Name', value: 'display_mode' } }, { kind: 'Field', name: { kind: 'Name', value: 'filter_price_range' } }, { kind: 'Field', name: { kind: 'Name', value: 'image' } }, { kind: 'Field', name: { kind: 'Name', value: 'include_in_menu' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_anchor' } }, { kind: 'Field', name: { kind: 'Name', value: 'landing_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'level' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_description' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_keywords' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_product_set_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_title' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'path' } }, { kind: 'Field', name: { kind: 'Name', value: 'path_in_store' } }, { kind: 'Field', name: { kind: 'Name', value: 'position' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'redirect_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'relative_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'sync_to_facebook_catalog' } }, { kind: 'Field', name: { kind: 'Name', value: 'thumbnail' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'url_key' } }, { kind: 'Field', name: { kind: 'Name', value: 'url_path' } }, { kind: 'Field', name: { kind: 'Name', value: 'url_suffix' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'page_info' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'page_size' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_pages' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }] } }] } as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>
export const CheckoutAgreementsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'checkoutAgreements' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'checkoutAgreements' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'agreement_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'checkbox_text' } }, { kind: 'Field', name: { kind: 'Name', value: 'content' } }, { kind: 'Field', name: { kind: 'Name', value: 'content_height' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_html' } }, { kind: 'Field', name: { kind: 'Name', value: 'mode' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }] } }] } as unknown as DocumentNode<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables>
export const CmsBlocksDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'cmsBlocks' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'identifiers' } }, type: { kind: 'ListType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cmsBlocks' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'identifiers' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'identifiers' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'content' } }, { kind: 'Field', name: { kind: 'Name', value: 'identifier' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }] } }] } }] } as unknown as DocumentNode<CmsBlocksQuery, CmsBlocksQueryVariables>
export const CmsPageDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'cmsPage' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'identifier' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cmsPage' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'identifier' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'identifier' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'content' } }, { kind: 'Field', name: { kind: 'Name', value: 'content_heading' } }, { kind: 'Field', name: { kind: 'Name', value: 'identifier' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_description' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_keywords' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_title' } }, { kind: 'Field', name: { kind: 'Name', value: 'page_layout' } }, { kind: 'Field', name: { kind: 'Name', value: 'redirect_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'relative_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }, { kind: 'Field', name: { kind: 'Name', value: 'url_key' } }] } }] } }] } as unknown as DocumentNode<CmsPageQuery, CmsPageQueryVariables>
export const CompareListDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'compareList' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'compareList' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'uid' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'attributes' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'item_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }] } }] } as unknown as DocumentNode<CompareListQuery, CompareListQueryVariables>
export const CountriesDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'countries' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countries' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'available_regions' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'full_name_english' } }, { kind: 'Field', name: { kind: 'Name', value: 'full_name_locale' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'three_letter_abbreviation' } }, { kind: 'Field', name: { kind: 'Name', value: 'two_letter_abbreviation' } }] } }] } }] } as unknown as DocumentNode<CountriesQuery, CountriesQueryVariables>
export const CountryDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'country' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'country' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'available_regions' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'full_name_english' } }, { kind: 'Field', name: { kind: 'Name', value: 'full_name_locale' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'three_letter_abbreviation' } }, { kind: 'Field', name: { kind: 'Name', value: 'two_letter_abbreviation' } }] } }] } }] } as unknown as DocumentNode<CountryQuery, CountryQueryVariables>
export const CurrencyDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'currency' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'currency' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'available_currency_codes' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_currency_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_currency_symbol' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_display_currency_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_display_currency_symbol' } }, { kind: 'Field', name: { kind: 'Name', value: 'exchange_rates' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'currency_to' } }, { kind: 'Field', name: { kind: 'Name', value: 'rate' } }] } }] } }] } }] } as unknown as DocumentNode<CurrencyQuery, CurrencyQueryVariables>
export const CustomAttributeMetadataV2Document = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'customAttributeMetadataV2' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'attributes' } }, type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'AttributeInput' } } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customAttributeMetadataV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'attributes' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'attributes' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'errors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_value' } }, { kind: 'Field', name: { kind: 'Name', value: 'entity_type' } }, { kind: 'Field', name: { kind: 'Name', value: 'frontend_class' } }, { kind: 'Field', name: { kind: 'Name', value: 'frontend_input' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_required' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_unique' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }] } }] } }] } }] } as unknown as DocumentNode<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables>
export const CustomerDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'customer' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'attributeCodes' } }, type: { kind: 'ListType', type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerOrdersFilterInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage1' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize1' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerOrderSortInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'scope' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'ScopeTypeEnum' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize2' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage2' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customer' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'addresses' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'addressesV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'allow_remote_shopping_assistance' } }, { kind: 'Field', name: { kind: 'Name', value: 'compare_list' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'item_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'confirmation_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'created_at' } }, { kind: 'Field', name: { kind: 'Name', value: 'custom_attributes' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'attributeCodes' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'attributeCodes' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'date_of_birth' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'gender' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_subscribed' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'filter' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage1' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize1' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'sort' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'scope' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'scope' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'date_of_first_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'taxvat' } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlist_v2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'items_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'sharing_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'wishlists' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize2' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage2' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'items_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'sharing_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } }] } }] } }] } }] } as unknown as DocumentNode<CustomerQuery, CustomerQueryVariables>
export const CustomerCartDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'customerCart' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'QuoteItemsSortInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customerCart' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'applied_coupons' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'available_payment_methods' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_deferred' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'billing_address' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'gift_message' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'from' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'to' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'itemsV2' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'sort' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'selected_payment_method' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'purchase_order_number' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_addresses' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'customer_notes' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'pickup_location_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'same_as_billing' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } }] } }] } }] } as unknown as DocumentNode<CustomerCartQuery, CustomerCartQueryVariables>
export const CustomerDownloadableProductsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'customerDownloadableProducts' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customerDownloadableProducts' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'date' } }, { kind: 'Field', name: { kind: 'Name', value: 'download_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_increment_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'remaining_downloads' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }] } }] } }] } }] } as unknown as DocumentNode<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables>
export const CustomerPaymentTokensDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'customerPaymentTokens' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'customerPaymentTokens' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'details' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_method_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'public_hash' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }] } }] } }] } }] } as unknown as DocumentNode<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables>
export const GetHostedProUrlDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'getHostedProUrl' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'HostedProUrlInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'getHostedProUrl' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'secure_form_url' } }] } }] } }] } as unknown as DocumentNode<GetHostedProUrlQuery, GetHostedProUrlQueryVariables>
export const GetPayflowLinkTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'getPayflowLinkToken' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PayflowLinkTokenInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'getPayflowLinkToken' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'mode' } }, { kind: 'Field', name: { kind: 'Name', value: 'paypal_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_token' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_token_id' } }] } }] } }] } as unknown as DocumentNode<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables>
export const GetPaymentConfigDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'getPaymentConfig' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'location' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PaymentLocation' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'getPaymentConfig' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'location' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'location' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'apple_pay' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_visible' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_intent' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_source' } }, { kind: 'Field', name: { kind: 'Name', value: 'sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'fastlane' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_visible' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_intent' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_source' } }, { kind: 'Field', name: { kind: 'Name', value: 'sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'google_pay' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_visible' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_intent' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_source' } }, { kind: 'Field', name: { kind: 'Name', value: 'sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'three_ds_mode' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'hosted_fields' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'cc_vault_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_vault_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_visible' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_intent' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_source' } }, { kind: 'Field', name: { kind: 'Name', value: 'requires_card_details' } }, { kind: 'Field', name: { kind: 'Name', value: 'sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'three_ds_mode' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'smart_buttons' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'display_message' } }, { kind: 'Field', name: { kind: 'Name', value: 'display_venmo' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_visible' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_intent' } }, { kind: 'Field', name: { kind: 'Name', value: 'sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }] } }] } }] } }] } as unknown as DocumentNode<GetPaymentConfigQuery, GetPaymentConfigQueryVariables>
export const GetPaymentOrderDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'getPaymentOrder' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'cartId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'getPaymentOrder' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'cartId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'cartId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'mp_order_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }] } }] } }] } as unknown as DocumentNode<GetPaymentOrderQuery, GetPaymentOrderQueryVariables>
export const GetPaymentSdkDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'getPaymentSDK' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'location' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'PaymentLocation' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'getPaymentSDK' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'location' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'location' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'sdkParams' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }] } }] } }] } as unknown as DocumentNode<GetPaymentSdkQuery, GetPaymentSdkQueryVariables>
export const GetStripeConfigurationDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'getStripeConfiguration' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'getStripeConfiguration' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'apiKey' } }, { kind: 'Field', name: { kind: 'Name', value: 'appInfo' } }, { kind: 'Field', name: { kind: 'Name', value: 'elementsOptions' } }, { kind: 'Field', name: { kind: 'Name', value: 'locale' } }, { kind: 'Field', name: { kind: 'Name', value: 'options' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'apiVersion' } }, { kind: 'Field', name: { kind: 'Name', value: 'betas' } }] } }] } }] } }] } as unknown as DocumentNode<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables>
export const GetVaultConfigDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'getVaultConfig' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'getVaultConfig' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'credit_card' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'is_vault_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'three_ds_mode' } }] } }] } }] } }] } as unknown as DocumentNode<GetVaultConfigQuery, GetVaultConfigQueryVariables>
export const GuestOrderDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'guestOrder' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderInformationInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'guestOrder' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'applied_coupons' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'available_actions' } }, { kind: 'Field', name: { kind: 'Name', value: 'billing_address' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'region' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'carrier' } }, { kind: 'Field', name: { kind: 'Name', value: 'comments' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'credit_memos' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'customer_info' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'gift_message' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'from' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'to' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'invoices' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_sku' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_type' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_url_key' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_canceled' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_invoiced' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_ordered' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_refunded' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_returned' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_shipped' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_status_change_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_methods' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipments' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_address' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'region' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_method' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }, { kind: 'Field', name: { kind: 'Name', value: 'token' } }] } }] } }] } as unknown as DocumentNode<GuestOrderQuery, GuestOrderQueryVariables>
export const GuestOrderByTokenDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'guestOrderByToken' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'OrderTokenInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'guestOrderByToken' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'applied_coupons' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'available_actions' } }, { kind: 'Field', name: { kind: 'Name', value: 'billing_address' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'region' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'carrier' } }, { kind: 'Field', name: { kind: 'Name', value: 'comments' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'credit_memos' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'customer_info' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'gift_message' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'from' } }, { kind: 'Field', name: { kind: 'Name', value: 'message' } }, { kind: 'Field', name: { kind: 'Name', value: 'to' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'invoices' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_sku' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_type' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_url_key' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_canceled' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_invoiced' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_ordered' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_refunded' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_returned' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity_shipped' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_status_change_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_methods' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipments' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'number' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_address' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'company' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstname' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastname' } }, { kind: 'Field', name: { kind: 'Name', value: 'middlename' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'region' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }, { kind: 'Field', name: { kind: 'Name', value: 'suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'telephone' } }, { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shipping_method' } }, { kind: 'Field', name: { kind: 'Name', value: 'status' } }, { kind: 'Field', name: { kind: 'Name', value: 'token' } }] } }] } }] } as unknown as DocumentNode<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables>
export const IsEmailAvailableDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'isEmailAvailable' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'isEmailAvailable' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'email' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'is_email_available' } }] } }] } }] } as unknown as DocumentNode<IsEmailAvailableQuery, IsEmailAvailableQueryVariables>
export const LofGiftCardInfoDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'lofGiftCardInfo' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'code' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'lofGiftCardInfo' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'code' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'code' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'balance' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'currency' } }, { kind: 'Field', name: { kind: 'Name', value: 'value' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'code' } }] } }] } }] } as unknown as DocumentNode<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables>
export const PickupLocationsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'pickupLocations' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'area' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'AreaInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'PickupLocationFilterInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'PickupLocationSortInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'productsInfo' } }, type: { kind: 'ListType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductInfoInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'pickupLocations' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'area' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'area' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'filters' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'sort' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'productsInfo' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'productsInfo' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'city' } }, { kind: 'Field', name: { kind: 'Name', value: 'contact_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'description' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'fax' } }, { kind: 'Field', name: { kind: 'Name', value: 'latitude' } }, { kind: 'Field', name: { kind: 'Name', value: 'longitude' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'phone' } }, { kind: 'Field', name: { kind: 'Name', value: 'pickup_location_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'postcode' } }, { kind: 'Field', name: { kind: 'Name', value: 'region' } }, { kind: 'Field', name: { kind: 'Name', value: 'region_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'street' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'page_info' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'page_size' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_pages' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }] } }] } as unknown as DocumentNode<PickupLocationsQuery, PickupLocationsQueryVariables>
export const ProductReviewRatingsMetadataDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'productReviewRatingsMetadata' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'productReviewRatingsMetadata' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }] } }] } }] } as unknown as DocumentNode<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables>
export const ProductsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'products' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'AggregationsFilterInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'search' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter1' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductAttributeFilterInput' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } }, { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductAttributeSortInput' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'products' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'search' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'search' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'filter' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'filter1' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'pageSize' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'currentPage' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'sort' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'aggregations' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'filter' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'attribute_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'count' } }, { kind: 'Field', name: { kind: 'Name', value: 'label' } }, { kind: 'Field', name: { kind: 'Name', value: 'position' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'items' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'canonical_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'country_of_manufacture' } }, { kind: 'Field', name: { kind: 'Name', value: 'gift_message_available' } }, { kind: 'Field', name: { kind: 'Name', value: 'max_sale_qty' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_description' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_keyword' } }, { kind: 'Field', name: { kind: 'Name', value: 'meta_title' } }, { kind: 'Field', name: { kind: 'Name', value: 'min_sale_qty' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'new_from_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'new_to_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'only_x_left_in_stock' } }, { kind: 'Field', name: { kind: 'Name', value: 'options_container' } }, { kind: 'Field', name: { kind: 'Name', value: 'quantity' } }, { kind: 'Field', name: { kind: 'Name', value: 'rating_summary' } }, { kind: 'Field', name: { kind: 'Name', value: 'review_count' } }, { kind: 'Field', name: { kind: 'Name', value: 'sku' } }, { kind: 'Field', name: { kind: 'Name', value: 'special_price' } }, { kind: 'Field', name: { kind: 'Name', value: 'special_to_date' } }, { kind: 'Field', name: { kind: 'Name', value: 'stock_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'swatch_image' } }, { kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'url_key' } }, { kind: 'Field', name: { kind: 'Name', value: 'url_suffix' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'page_info' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'page_size' } }, { kind: 'Field', name: { kind: 'Name', value: 'total_pages' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'sort_fields' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'default' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'suggestions' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'search' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'total_count' } }] } }] } }] } as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>
export const RecaptchaFormConfigDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'recaptchaFormConfig' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'formType' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ReCaptchaFormEnum' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'recaptchaFormConfig' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'formType' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'formType' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'configurations' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'badge_position' } }, { kind: 'Field', name: { kind: 'Name', value: 'language_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'minimum_score' } }, { kind: 'Field', name: { kind: 'Name', value: 're_captcha_type' } }, { kind: 'Field', name: { kind: 'Name', value: 'technical_failure_message' } }, { kind: 'Field', name: { kind: 'Name', value: 'theme' } }, { kind: 'Field', name: { kind: 'Name', value: 'validation_failure_message' } }, { kind: 'Field', name: { kind: 'Name', value: 'website_key' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'is_enabled' } }] } }] } }] } as unknown as DocumentNode<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables>
export const RecaptchaV3ConfigDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'recaptchaV3Config' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'recaptchaV3Config' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'badge_position' } }, { kind: 'Field', name: { kind: 'Name', value: 'failure_message' } }, { kind: 'Field', name: { kind: 'Name', value: 'forms' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'language_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'minimum_score' } }, { kind: 'Field', name: { kind: 'Name', value: 'theme' } }, { kind: 'Field', name: { kind: 'Name', value: 'website_key' } }] } }] } }] } as unknown as DocumentNode<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables>
export const RouteDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'route' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'url' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'route' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'url' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'url' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'redirect_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'relative_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'type' } }] } }] } }] } as unknown as DocumentNode<RouteQuery, RouteQueryVariables>
export const StoreConfigDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'storeConfig' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'storeConfig' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'absolute_footer' } }, { kind: 'Field', name: { kind: 'Name', value: 'allow_guests_to_write_product_reviews' } }, { kind: 'Field', name: { kind: 'Name', value: 'allow_items' } }, { kind: 'Field', name: { kind: 'Name', value: 'allow_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'autocomplete_on_storefront' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_currency_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_link_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_media_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_static_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'base_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_allowspecific' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_always_request_3ds' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_specificcountry' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_threshold_amount' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_3dsecure_verify_3dsecure' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_ach_direct_debit_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_applepay_merchant_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_applepay_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_cc_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_cc_vault_cvv' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_environment' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_googlepay_btn_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_googlepay_cctypes' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_googlepay_merchant_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_googlepay_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_local_payment_allowed_methods' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_local_payment_fallback_button_text' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_local_payment_redirect_on_fail' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_merchant_account_id' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_credit_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_credit_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_credit_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_credit_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_layout' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_logo' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_logo_position' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_messaging_text_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paylater_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paylater_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paylater_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paylater_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paypal_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paypal_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paypal_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_cart_type_paypal_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_credit_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_credit_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_credit_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_credit_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_layout' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_logo' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_logo_position' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_messaging_text_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paylater_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paylater_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paylater_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paylater_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paypal_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paypal_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paypal_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_checkout_type_paypal_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_credit_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_credit_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_credit_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_credit_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_layout' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_logo' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_logo_position' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_messaging_text_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paylater_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paylater_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paylater_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paylater_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paypal_color' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paypal_label' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paypal_shape' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_button_location_productpage_type_paypal_show' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_credit_uk_merchant_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_display_on_shopping_cart' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_merchant_country' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_merchant_name_override' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_require_billing_address' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_send_cart_line_items' } }, { kind: 'Field', name: { kind: 'Name', value: 'braintree_paypal_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'cart_expires_in_days' } }, { kind: 'Field', name: { kind: 'Name', value: 'cart_summary_display_quantity' } }, { kind: 'Field', name: { kind: 'Name', value: 'catalog_default_sort_by' } }, { kind: 'Field', name: { kind: 'Name', value: 'category_fixed_product_tax_display_setting' } }, { kind: 'Field', name: { kind: 'Name', value: 'category_url_suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_enable_for_specific_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_make_check_payable_to' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_max_order_total' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_min_order_total' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_new_order_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_payment_from_specific_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_send_check_to' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'check_money_order_title' } }, { kind: 'Field', name: { kind: 'Name', value: 'cms_home_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'cms_no_cookies' } }, { kind: 'Field', name: { kind: 'Name', value: 'cms_no_route' } }, { kind: 'Field', name: { kind: 'Name', value: 'configurable_product_image' } }, { kind: 'Field', name: { kind: 'Name', value: 'configurable_thumbnail_source' } }, { kind: 'Field', name: { kind: 'Name', value: 'contact_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'copyright' } }, { kind: 'Field', name: { kind: 'Name', value: 'countries_with_required_region' } }, { kind: 'Field', name: { kind: 'Name', value: 'create_account_confirmation' } }, { kind: 'Field', name: { kind: 'Name', value: 'customer_access_token_lifetime' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_country' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_description' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_display_currency_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_keywords' } }, { kind: 'Field', name: { kind: 'Name', value: 'default_title' } }, { kind: 'Field', name: { kind: 'Name', value: 'demonotice' } }, { kind: 'Field', name: { kind: 'Name', value: 'display_product_prices_in_catalog' } }, { kind: 'Field', name: { kind: 'Name', value: 'display_shipping_prices' } }, { kind: 'Field', name: { kind: 'Name', value: 'display_state_if_optional' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_apply_tax_to_fpt' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_display_prices_in_emails' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_display_prices_in_product_lists' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_display_prices_in_sales_modules' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_display_prices_on_product_view_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_enable' } }, { kind: 'Field', name: { kind: 'Name', value: 'fixed_product_taxes_include_fpt_in_subtotal' } }, { kind: 'Field', name: { kind: 'Name', value: 'front' } }, { kind: 'Field', name: { kind: 'Name', value: 'grid_per_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'grid_per_page_values' } }, { kind: 'Field', name: { kind: 'Name', value: 'grouped_product_image' } }, { kind: 'Field', name: { kind: 'Name', value: 'head_includes' } }, { kind: 'Field', name: { kind: 'Name', value: 'head_shortcut_icon' } }, { kind: 'Field', name: { kind: 'Name', value: 'header_logo_src' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_checkout_agreements_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_default_store' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_default_store_group' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_guest_checkout_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'is_one_page_checkout_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'list_mode' } }, { kind: 'Field', name: { kind: 'Name', value: 'list_per_page' } }, { kind: 'Field', name: { kind: 'Name', value: 'list_per_page_values' } }, { kind: 'Field', name: { kind: 'Name', value: 'locale' } }, { kind: 'Field', name: { kind: 'Name', value: 'logo_alt' } }, { kind: 'Field', name: { kind: 'Name', value: 'logo_height' } }, { kind: 'Field', name: { kind: 'Name', value: 'logo_width' } }, { kind: 'Field', name: { kind: 'Name', value: 'magento_wishlist_general_is_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'max_items_in_order_summary' } }, { kind: 'Field', name: { kind: 'Name', value: 'minicart_display' } }, { kind: 'Field', name: { kind: 'Name', value: 'minicart_max_items' } }, { kind: 'Field', name: { kind: 'Name', value: 'minimum_password_length' } }, { kind: 'Field', name: { kind: 'Name', value: 'newsletter_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'no_route' } }, { kind: 'Field', name: { kind: 'Name', value: 'optional_zip_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_cancellation_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'order_cancellation_reasons' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'description' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_full_summary' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_grandtotal' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_price' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_shipping_amount' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_subtotal' } }, { kind: 'Field', name: { kind: 'Name', value: 'orders_invoices_credit_memos_display_zero_tax' } }, { kind: 'Field', name: { kind: 'Name', value: 'payment_payflowpro_cc_vault_active' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_fixed_product_tax_display_setting' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_reviews_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'product_url_suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'required_character_classes_number' } }, { kind: 'Field', name: { kind: 'Name', value: 'root_category_uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'sales_fixed_product_tax_display_setting' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_base_link_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_base_media_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_base_static_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'secure_base_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'send_friend' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'enabled_for_customers' } }, { kind: 'Field', name: { kind: 'Name', value: 'enabled_for_guests' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_full_summary' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_grand_total' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_price' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_shipping' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_subtotal' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_tax_gift_wrapping' } }, { kind: 'Field', name: { kind: 'Name', value: 'shopping_cart_display_zero_tax' } }, { kind: 'Field', name: { kind: 'Name', value: 'show_cms_breadcrumbs' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_group_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_group_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'store_sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'timezone' } }, { kind: 'Field', name: { kind: 'Name', value: 'title_prefix' } }, { kind: 'Field', name: { kind: 'Name', value: 'title_separator' } }, { kind: 'Field', name: { kind: 'Name', value: 'title_suffix' } }, { kind: 'Field', name: { kind: 'Name', value: 'use_store_in_url' } }, { kind: 'Field', name: { kind: 'Name', value: 'website_code' } }, { kind: 'Field', name: { kind: 'Name', value: 'website_name' } }, { kind: 'Field', name: { kind: 'Name', value: 'weight_unit' } }, { kind: 'Field', name: { kind: 'Name', value: 'welcome' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_enable_for_specific_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_enabled' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_new_order_status' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_payment_action' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_payment_from_specific_countries' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_sort_order' } }, { kind: 'Field', name: { kind: 'Name', value: 'zero_subtotal_title' } }] } }] } }] } as unknown as DocumentNode<StoreConfigQuery, StoreConfigQueryVariables>

export const AddBundleProductsToCartDocument = gql`
    mutation addBundleProductsToCart($input: AddBundleProductsToCartInput) {
  addBundleProductsToCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useAddBundleProductsToCartMutation__
 *
 * To run a mutation, you first call `useAddBundleProductsToCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddBundleProductsToCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddBundleProductsToCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useAddBundleProductsToCartMutation(options: VueApolloComposable.UseMutationOptions<AddBundleProductsToCartMutation, AddBundleProductsToCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddBundleProductsToCartMutation, AddBundleProductsToCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddBundleProductsToCartMutation, AddBundleProductsToCartMutationVariables>(AddBundleProductsToCartDocument, options)
}
export type AddBundleProductsToCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddBundleProductsToCartMutation, AddBundleProductsToCartMutationVariables>
export const AddConfigurableProductsToCartDocument = gql`
    mutation addConfigurableProductsToCart($input: AddConfigurableProductsToCartInput) {
  addConfigurableProductsToCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useAddConfigurableProductsToCartMutation__
 *
 * To run a mutation, you first call `useAddConfigurableProductsToCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddConfigurableProductsToCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddConfigurableProductsToCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useAddConfigurableProductsToCartMutation(options: VueApolloComposable.UseMutationOptions<AddConfigurableProductsToCartMutation, AddConfigurableProductsToCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddConfigurableProductsToCartMutation, AddConfigurableProductsToCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddConfigurableProductsToCartMutation, AddConfigurableProductsToCartMutationVariables>(AddConfigurableProductsToCartDocument, options)
}
export type AddConfigurableProductsToCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddConfigurableProductsToCartMutation, AddConfigurableProductsToCartMutationVariables>
export const AddDownloadableProductsToCartDocument = gql`
    mutation addDownloadableProductsToCart($input: AddDownloadableProductsToCartInput) {
  addDownloadableProductsToCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useAddDownloadableProductsToCartMutation__
 *
 * To run a mutation, you first call `useAddDownloadableProductsToCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddDownloadableProductsToCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddDownloadableProductsToCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useAddDownloadableProductsToCartMutation(options: VueApolloComposable.UseMutationOptions<AddDownloadableProductsToCartMutation, AddDownloadableProductsToCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddDownloadableProductsToCartMutation, AddDownloadableProductsToCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddDownloadableProductsToCartMutation, AddDownloadableProductsToCartMutationVariables>(AddDownloadableProductsToCartDocument, options)
}
export type AddDownloadableProductsToCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddDownloadableProductsToCartMutation, AddDownloadableProductsToCartMutationVariables>
export const AddProductsToCartDocument = gql`
    mutation addProductsToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
  addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
    user_errors {
      code
      message
    }
  }
}
    `

/**
 * __useAddProductsToCartMutation__
 *
 * To run a mutation, you first call `useAddProductsToCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddProductsToCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddProductsToCartMutation({
 *   variables: {
 *     cartId: // value for 'cartId'
 *     cartItems: // value for 'cartItems'
 *   },
 * });
 */
export function useAddProductsToCartMutation(options: VueApolloComposable.UseMutationOptions<AddProductsToCartMutation, AddProductsToCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddProductsToCartMutation, AddProductsToCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddProductsToCartMutation, AddProductsToCartMutationVariables>(AddProductsToCartDocument, options)
}
export type AddProductsToCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddProductsToCartMutation, AddProductsToCartMutationVariables>
export const AddProductsToCompareListDocument = gql`
    mutation addProductsToCompareList($input: AddProductsToCompareListInput) {
  addProductsToCompareList(input: $input) {
    attributes {
      code
      label
    }
    item_count
    items {
      uid
    }
    uid
  }
}
    `

/**
 * __useAddProductsToCompareListMutation__
 *
 * To run a mutation, you first call `useAddProductsToCompareListMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddProductsToCompareListMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddProductsToCompareListMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useAddProductsToCompareListMutation(options: VueApolloComposable.UseMutationOptions<AddProductsToCompareListMutation, AddProductsToCompareListMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddProductsToCompareListMutation, AddProductsToCompareListMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddProductsToCompareListMutation, AddProductsToCompareListMutationVariables>(AddProductsToCompareListDocument, options)
}
export type AddProductsToCompareListMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddProductsToCompareListMutation, AddProductsToCompareListMutationVariables>
export const AddProductsToNewCartDocument = gql`
    mutation addProductsToNewCart($cartItems: [CartItemInput!]!) {
  addProductsToNewCart(cartItems: $cartItems) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
    user_errors {
      code
      message
    }
  }
}
    `

/**
 * __useAddProductsToNewCartMutation__
 *
 * To run a mutation, you first call `useAddProductsToNewCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddProductsToNewCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddProductsToNewCartMutation({
 *   variables: {
 *     cartItems: // value for 'cartItems'
 *   },
 * });
 */
export function useAddProductsToNewCartMutation(options: VueApolloComposable.UseMutationOptions<AddProductsToNewCartMutation, AddProductsToNewCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddProductsToNewCartMutation, AddProductsToNewCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddProductsToNewCartMutation, AddProductsToNewCartMutationVariables>(AddProductsToNewCartDocument, options)
}
export type AddProductsToNewCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddProductsToNewCartMutation, AddProductsToNewCartMutationVariables>
export const AddProductsToWishlistDocument = gql`
    mutation addProductsToWishlist($wishlistId: ID!, $wishlistItems: [WishlistItemInput!]!) {
  addProductsToWishlist(wishlistId: $wishlistId, wishlistItems: $wishlistItems) {
    user_errors {
      code
      message
    }
    wishlist {
      id
      items_count
      sharing_code
      updated_at
    }
  }
}
    `

/**
 * __useAddProductsToWishlistMutation__
 *
 * To run a mutation, you first call `useAddProductsToWishlistMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddProductsToWishlistMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddProductsToWishlistMutation({
 *   variables: {
 *     wishlistId: // value for 'wishlistId'
 *     wishlistItems: // value for 'wishlistItems'
 *   },
 * });
 */
export function useAddProductsToWishlistMutation(options: VueApolloComposable.UseMutationOptions<AddProductsToWishlistMutation, AddProductsToWishlistMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddProductsToWishlistMutation, AddProductsToWishlistMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddProductsToWishlistMutation, AddProductsToWishlistMutationVariables>(AddProductsToWishlistDocument, options)
}
export type AddProductsToWishlistMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddProductsToWishlistMutation, AddProductsToWishlistMutationVariables>
export const AddSimpleProductsToCartDocument = gql`
    mutation addSimpleProductsToCart($input: AddSimpleProductsToCartInput) {
  addSimpleProductsToCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useAddSimpleProductsToCartMutation__
 *
 * To run a mutation, you first call `useAddSimpleProductsToCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddSimpleProductsToCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddSimpleProductsToCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useAddSimpleProductsToCartMutation(options: VueApolloComposable.UseMutationOptions<AddSimpleProductsToCartMutation, AddSimpleProductsToCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddSimpleProductsToCartMutation, AddSimpleProductsToCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddSimpleProductsToCartMutation, AddSimpleProductsToCartMutationVariables>(AddSimpleProductsToCartDocument, options)
}
export type AddSimpleProductsToCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddSimpleProductsToCartMutation, AddSimpleProductsToCartMutationVariables>
export const AddStripePaymentMethodDocument = gql`
    mutation addStripePaymentMethod($input: StripePaymentMethodId!) {
  addStripePaymentMethod(input: $input) {
    brand
    created
    cvc
    exp_month
    exp_year
    fingerprint
    icon
    id
    label
    type
  }
}
    `

/**
 * __useAddStripePaymentMethodMutation__
 *
 * To run a mutation, you first call `useAddStripePaymentMethodMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddStripePaymentMethodMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddStripePaymentMethodMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useAddStripePaymentMethodMutation(options: VueApolloComposable.UseMutationOptions<AddStripePaymentMethodMutation, AddStripePaymentMethodMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddStripePaymentMethodMutation, AddStripePaymentMethodMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddStripePaymentMethodMutation, AddStripePaymentMethodMutationVariables>(AddStripePaymentMethodDocument, options)
}
export type AddStripePaymentMethodMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddStripePaymentMethodMutation, AddStripePaymentMethodMutationVariables>
export const AddVirtualProductsToCartDocument = gql`
    mutation addVirtualProductsToCart($input: AddVirtualProductsToCartInput) {
  addVirtualProductsToCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useAddVirtualProductsToCartMutation__
 *
 * To run a mutation, you first call `useAddVirtualProductsToCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddVirtualProductsToCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddVirtualProductsToCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useAddVirtualProductsToCartMutation(options: VueApolloComposable.UseMutationOptions<AddVirtualProductsToCartMutation, AddVirtualProductsToCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddVirtualProductsToCartMutation, AddVirtualProductsToCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddVirtualProductsToCartMutation, AddVirtualProductsToCartMutationVariables>(AddVirtualProductsToCartDocument, options)
}
export type AddVirtualProductsToCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddVirtualProductsToCartMutation, AddVirtualProductsToCartMutationVariables>
export const AddWishlistItemsToCartDocument = gql`
    mutation addWishlistItemsToCart($wishlistId: ID!, $wishlistItemIds: [ID!]) {
  addWishlistItemsToCart(
    wishlistId: $wishlistId
    wishlistItemIds: $wishlistItemIds
  ) {
    add_wishlist_items_to_cart_user_errors {
      code
      message
      wishlistId
      wishlistItemId
    }
    status
    wishlist {
      id
      items_count
      sharing_code
      updated_at
    }
  }
}
    `

/**
 * __useAddWishlistItemsToCartMutation__
 *
 * To run a mutation, you first call `useAddWishlistItemsToCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddWishlistItemsToCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddWishlistItemsToCartMutation({
 *   variables: {
 *     wishlistId: // value for 'wishlistId'
 *     wishlistItemIds: // value for 'wishlistItemIds'
 *   },
 * });
 */
export function useAddWishlistItemsToCartMutation(options: VueApolloComposable.UseMutationOptions<AddWishlistItemsToCartMutation, AddWishlistItemsToCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddWishlistItemsToCartMutation, AddWishlistItemsToCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AddWishlistItemsToCartMutation, AddWishlistItemsToCartMutationVariables>(AddWishlistItemsToCartDocument, options)
}
export type AddWishlistItemsToCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddWishlistItemsToCartMutation, AddWishlistItemsToCartMutationVariables>
export const ApplyCouponToCartDocument = gql`
    mutation applyCouponToCart($input: ApplyCouponToCartInput) {
  applyCouponToCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useApplyCouponToCartMutation__
 *
 * To run a mutation, you first call `useApplyCouponToCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useApplyCouponToCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useApplyCouponToCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useApplyCouponToCartMutation(options: VueApolloComposable.UseMutationOptions<ApplyCouponToCartMutation, ApplyCouponToCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ApplyCouponToCartMutation, ApplyCouponToCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ApplyCouponToCartMutation, ApplyCouponToCartMutationVariables>(ApplyCouponToCartDocument, options)
}
export type ApplyCouponToCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ApplyCouponToCartMutation, ApplyCouponToCartMutationVariables>
export const AssignCompareListToCustomerDocument = gql`
    mutation assignCompareListToCustomer($uid: ID!) {
  assignCompareListToCustomer(uid: $uid) {
    compare_list {
      item_count
      uid
    }
    result
  }
}
    `

/**
 * __useAssignCompareListToCustomerMutation__
 *
 * To run a mutation, you first call `useAssignCompareListToCustomerMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAssignCompareListToCustomerMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAssignCompareListToCustomerMutation({
 *   variables: {
 *     uid: // value for 'uid'
 *   },
 * });
 */
export function useAssignCompareListToCustomerMutation(options: VueApolloComposable.UseMutationOptions<AssignCompareListToCustomerMutation, AssignCompareListToCustomerMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AssignCompareListToCustomerMutation, AssignCompareListToCustomerMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AssignCompareListToCustomerMutation, AssignCompareListToCustomerMutationVariables>(AssignCompareListToCustomerDocument, options)
}
export type AssignCompareListToCustomerMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AssignCompareListToCustomerMutation, AssignCompareListToCustomerMutationVariables>
export const AssignCustomerToGuestCartDocument = gql`
    mutation assignCustomerToGuestCart($pageSize: Int, $currentPage: Int, $sort: QuoteItemsSortInput, $cart_id: String!) {
  assignCustomerToGuestCart(cart_id: $cart_id) {
    applied_coupons {
      code
    }
    available_payment_methods {
      code
      is_deferred
      title
    }
    billing_address {
      city
      company
      fax
      firstname
      id
      lastname
      middlename
      postcode
      prefix
      street
      suffix
      telephone
      uid
      vat_id
    }
    email
    gift_message {
      from
      message
      to
    }
    id
    is_virtual
    itemsV2(pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
      total_count
    }
    selected_payment_method {
      code
      purchase_order_number
      title
    }
    shipping_addresses {
      city
      company
      customer_notes
      fax
      firstname
      id
      lastname
      middlename
      pickup_location_code
      postcode
      prefix
      same_as_billing
      street
      suffix
      telephone
      uid
      vat_id
    }
    total_quantity
  }
}
    `

/**
 * __useAssignCustomerToGuestCartMutation__
 *
 * To run a mutation, you first call `useAssignCustomerToGuestCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAssignCustomerToGuestCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAssignCustomerToGuestCartMutation({
 *   variables: {
 *     pageSize: // value for 'pageSize'
 *     currentPage: // value for 'currentPage'
 *     sort: // value for 'sort'
 *     cart_id: // value for 'cart_id'
 *   },
 * });
 */
export function useAssignCustomerToGuestCartMutation(options: VueApolloComposable.UseMutationOptions<AssignCustomerToGuestCartMutation, AssignCustomerToGuestCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AssignCustomerToGuestCartMutation, AssignCustomerToGuestCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<AssignCustomerToGuestCartMutation, AssignCustomerToGuestCartMutationVariables>(AssignCustomerToGuestCartDocument, options)
}
export type AssignCustomerToGuestCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AssignCustomerToGuestCartMutation, AssignCustomerToGuestCartMutationVariables>
export const CancelOrderDocument = gql`
    mutation cancelOrder($input: CancelOrderInput!) {
  cancelOrder(input: $input) {
    error
    errorV2 {
      code
      message
    }
    order {
      available_actions
      carrier
      email
      id
      is_virtual
      number
      order_date
      order_status_change_date
      shipping_method
      status
      token
    }
  }
}
    `

/**
 * __useCancelOrderMutation__
 *
 * To run a mutation, you first call `useCancelOrderMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCancelOrderMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCancelOrderMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCancelOrderMutation(options: VueApolloComposable.UseMutationOptions<CancelOrderMutation, CancelOrderMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CancelOrderMutation, CancelOrderMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CancelOrderMutation, CancelOrderMutationVariables>(CancelOrderDocument, options)
}
export type CancelOrderMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CancelOrderMutation, CancelOrderMutationVariables>
export const ChangeCustomerPasswordDocument = gql`
    mutation changeCustomerPassword($currentPage: Int, $pageSize: Int, $attributeCodes: [ID!], $filter: CustomerOrdersFilterInput, $currentPage1: Int, $pageSize1: Int, $sort: CustomerOrderSortInput, $scope: ScopeTypeEnum, $id: ID!, $pageSize2: Int, $currentPage2: Int, $currentPassword: String!, $newPassword: String!) {
  changeCustomerPassword(
    currentPassword: $currentPassword
    newPassword: $newPassword
  ) {
    addresses {
      city
      company
      country_code
      default_billing
      default_shipping
      fax
      firstname
      id
      lastname
      middlename
      postcode
      prefix
      region_id
      street
      suffix
      telephone
      vat_id
    }
    addressesV2(currentPage: $currentPage, pageSize: $pageSize) {
      total_count
    }
    allow_remote_shopping_assistance
    compare_list {
      item_count
      uid
    }
    confirmation_status
    created_at
    custom_attributes(attributeCodes: $attributeCodes) {
      code
    }
    date_of_birth
    default_billing
    default_shipping
    email
    firstname
    gender
    is_subscribed
    lastname
    middlename
    orders(
      filter: $filter
      currentPage: $currentPage1
      pageSize: $pageSize1
      sort: $sort
      scope: $scope
    ) {
      date_of_first_order
      total_count
    }
    prefix
    suffix
    taxvat
    wishlist_v2(id: $id) {
      id
      items_count
      sharing_code
      updated_at
    }
    wishlists(pageSize: $pageSize2, currentPage: $currentPage2) {
      id
      items_count
      sharing_code
      updated_at
    }
  }
}
    `

/**
 * __useChangeCustomerPasswordMutation__
 *
 * To run a mutation, you first call `useChangeCustomerPasswordMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useChangeCustomerPasswordMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useChangeCustomerPasswordMutation({
 *   variables: {
 *     currentPage: // value for 'currentPage'
 *     pageSize: // value for 'pageSize'
 *     attributeCodes: // value for 'attributeCodes'
 *     filter: // value for 'filter'
 *     currentPage1: // value for 'currentPage1'
 *     pageSize1: // value for 'pageSize1'
 *     sort: // value for 'sort'
 *     scope: // value for 'scope'
 *     id: // value for 'id'
 *     pageSize2: // value for 'pageSize2'
 *     currentPage2: // value for 'currentPage2'
 *     currentPassword: // value for 'currentPassword'
 *     newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangeCustomerPasswordMutation(options: VueApolloComposable.UseMutationOptions<ChangeCustomerPasswordMutation, ChangeCustomerPasswordMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ChangeCustomerPasswordMutation, ChangeCustomerPasswordMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ChangeCustomerPasswordMutation, ChangeCustomerPasswordMutationVariables>(ChangeCustomerPasswordDocument, options)
}
export type ChangeCustomerPasswordMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ChangeCustomerPasswordMutation, ChangeCustomerPasswordMutationVariables>
export const CompleteOrderDocument = gql`
    mutation completeOrder($input: CompleteOrderInput) {
  completeOrder(input: $input) {
    errors {
      code
      message
    }
    orderV2 {
      available_actions
      carrier
      email
      id
      is_virtual
      number
      order_date
      order_status_change_date
      shipping_method
      status
      token
    }
  }
}
    `

/**
 * __useCompleteOrderMutation__
 *
 * To run a mutation, you first call `useCompleteOrderMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCompleteOrderMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCompleteOrderMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCompleteOrderMutation(options: VueApolloComposable.UseMutationOptions<CompleteOrderMutation, CompleteOrderMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CompleteOrderMutation, CompleteOrderMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CompleteOrderMutation, CompleteOrderMutationVariables>(CompleteOrderDocument, options)
}
export type CompleteOrderMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CompleteOrderMutation, CompleteOrderMutationVariables>
export const ConfirmCancelOrderDocument = gql`
    mutation confirmCancelOrder($input: ConfirmCancelOrderInput!) {
  confirmCancelOrder(input: $input) {
    error
    errorV2 {
      code
      message
    }
    order {
      available_actions
      carrier
      email
      id
      is_virtual
      number
      order_date
      order_status_change_date
      shipping_method
      status
      token
    }
  }
}
    `

/**
 * __useConfirmCancelOrderMutation__
 *
 * To run a mutation, you first call `useConfirmCancelOrderMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useConfirmCancelOrderMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useConfirmCancelOrderMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useConfirmCancelOrderMutation(options: VueApolloComposable.UseMutationOptions<ConfirmCancelOrderMutation, ConfirmCancelOrderMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ConfirmCancelOrderMutation, ConfirmCancelOrderMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ConfirmCancelOrderMutation, ConfirmCancelOrderMutationVariables>(ConfirmCancelOrderDocument, options)
}
export type ConfirmCancelOrderMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ConfirmCancelOrderMutation, ConfirmCancelOrderMutationVariables>
export const ConfirmEmailDocument = gql`
    mutation confirmEmail($input: ConfirmEmailInput!) {
  confirmEmail(input: $input) {
    customer {
      allow_remote_shopping_assistance
      confirmation_status
      created_at
      date_of_birth
      default_billing
      default_shipping
      email
      firstname
      gender
      is_subscribed
      lastname
      middlename
      prefix
      suffix
      taxvat
    }
  }
}
    `

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useConfirmEmailMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useConfirmEmailMutation(options: VueApolloComposable.UseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument, options)
}
export type ConfirmEmailMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ConfirmEmailMutation, ConfirmEmailMutationVariables>
export const ContactUsDocument = gql`
    mutation contactUs($input: ContactUsInput!) {
  contactUs(input: $input) {
    status
  }
}
    `

/**
 * __useContactUsMutation__
 *
 * To run a mutation, you first call `useContactUsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useContactUsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useContactUsMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useContactUsMutation(options: VueApolloComposable.UseMutationOptions<ContactUsMutation, ContactUsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ContactUsMutation, ContactUsMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ContactUsMutation, ContactUsMutationVariables>(ContactUsDocument, options)
}
export type ContactUsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ContactUsMutation, ContactUsMutationVariables>
export const CreateBraintreeClientTokenDocument = gql`
    mutation createBraintreeClientToken {
  createBraintreeClientToken
}
    `

/**
 * __useCreateBraintreeClientTokenMutation__
 *
 * To run a mutation, you first call `useCreateBraintreeClientTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateBraintreeClientTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateBraintreeClientTokenMutation();
 */
export function useCreateBraintreeClientTokenMutation(options: VueApolloComposable.UseMutationOptions<CreateBraintreeClientTokenMutation, CreateBraintreeClientTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateBraintreeClientTokenMutation, CreateBraintreeClientTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateBraintreeClientTokenMutation, CreateBraintreeClientTokenMutationVariables>(CreateBraintreeClientTokenDocument, options)
}
export type CreateBraintreeClientTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateBraintreeClientTokenMutation, CreateBraintreeClientTokenMutationVariables>
export const CreateBraintreePayPalClientTokenDocument = gql`
    mutation createBraintreePayPalClientToken {
  createBraintreePayPalClientToken
}
    `

/**
 * __useCreateBraintreePayPalClientTokenMutation__
 *
 * To run a mutation, you first call `useCreateBraintreePayPalClientTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateBraintreePayPalClientTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateBraintreePayPalClientTokenMutation();
 */
export function useCreateBraintreePayPalClientTokenMutation(options: VueApolloComposable.UseMutationOptions<CreateBraintreePayPalClientTokenMutation, CreateBraintreePayPalClientTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateBraintreePayPalClientTokenMutation, CreateBraintreePayPalClientTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateBraintreePayPalClientTokenMutation, CreateBraintreePayPalClientTokenMutationVariables>(CreateBraintreePayPalClientTokenDocument, options)
}
export type CreateBraintreePayPalClientTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateBraintreePayPalClientTokenMutation, CreateBraintreePayPalClientTokenMutationVariables>
export const CreateBraintreePayPalVaultClientTokenDocument = gql`
    mutation createBraintreePayPalVaultClientToken($input: BraintreeVaultInput) {
  createBraintreePayPalVaultClientToken(input: $input)
}
    `

/**
 * __useCreateBraintreePayPalVaultClientTokenMutation__
 *
 * To run a mutation, you first call `useCreateBraintreePayPalVaultClientTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateBraintreePayPalVaultClientTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateBraintreePayPalVaultClientTokenMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateBraintreePayPalVaultClientTokenMutation(options: VueApolloComposable.UseMutationOptions<CreateBraintreePayPalVaultClientTokenMutation, CreateBraintreePayPalVaultClientTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateBraintreePayPalVaultClientTokenMutation, CreateBraintreePayPalVaultClientTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateBraintreePayPalVaultClientTokenMutation, CreateBraintreePayPalVaultClientTokenMutationVariables>(CreateBraintreePayPalVaultClientTokenDocument, options)
}
export type CreateBraintreePayPalVaultClientTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateBraintreePayPalVaultClientTokenMutation, CreateBraintreePayPalVaultClientTokenMutationVariables>
export const CreateCompareListDocument = gql`
    mutation createCompareList($input: CreateCompareListInput) {
  createCompareList(input: $input) {
    attributes {
      code
      label
    }
    item_count
    items {
      uid
    }
    uid
  }
}
    `

/**
 * __useCreateCompareListMutation__
 *
 * To run a mutation, you first call `useCreateCompareListMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompareListMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateCompareListMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompareListMutation(options: VueApolloComposable.UseMutationOptions<CreateCompareListMutation, CreateCompareListMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateCompareListMutation, CreateCompareListMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateCompareListMutation, CreateCompareListMutationVariables>(CreateCompareListDocument, options)
}
export type CreateCompareListMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateCompareListMutation, CreateCompareListMutationVariables>
export const CreateCustomerAddressDocument = gql`
    mutation createCustomerAddress($attributeCodes: [ID!], $input: CustomerAddressInput!) {
  createCustomerAddress(input: $input) {
    city
    company
    country_code
    custom_attributesV2(attributeCodes: $attributeCodes) {
      code
    }
    default_billing
    default_shipping
    extension_attributes {
      attribute_code
      value
    }
    fax
    firstname
    id
    lastname
    middlename
    postcode
    prefix
    region {
      region
      region_code
      region_id
    }
    region_id
    street
    suffix
    telephone
    vat_id
  }
}
    `

/**
 * __useCreateCustomerAddressMutation__
 *
 * To run a mutation, you first call `useCreateCustomerAddressMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerAddressMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateCustomerAddressMutation({
 *   variables: {
 *     attributeCodes: // value for 'attributeCodes'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerAddressMutation(options: VueApolloComposable.UseMutationOptions<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>(CreateCustomerAddressDocument, options)
}
export type CreateCustomerAddressMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>
export const CreateCustomerV2Document = gql`
    mutation createCustomerV2($input: CustomerCreateInput!) {
  createCustomerV2(input: $input) {
    customer {
      allow_remote_shopping_assistance
      confirmation_status
      created_at
      date_of_birth
      default_billing
      default_shipping
      email
      firstname
      gender
      is_subscribed
      lastname
      middlename
      prefix
      suffix
      taxvat
    }
  }
}
    `

/**
 * __useCreateCustomerV2Mutation__
 *
 * To run a mutation, you first call `useCreateCustomerV2Mutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerV2Mutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateCustomerV2Mutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerV2Mutation(options: VueApolloComposable.UseMutationOptions<CreateCustomerV2Mutation, CreateCustomerV2MutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateCustomerV2Mutation, CreateCustomerV2MutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateCustomerV2Mutation, CreateCustomerV2MutationVariables>(CreateCustomerV2Document, options)
}
export type CreateCustomerV2MutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateCustomerV2Mutation, CreateCustomerV2MutationVariables>
export const CreateGuestCartDocument = gql`
    mutation createGuestCart($input: CreateGuestCartInput) {
  createGuestCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useCreateGuestCartMutation__
 *
 * To run a mutation, you first call `useCreateGuestCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateGuestCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateGuestCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateGuestCartMutation(options: VueApolloComposable.UseMutationOptions<CreateGuestCartMutation, CreateGuestCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateGuestCartMutation, CreateGuestCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateGuestCartMutation, CreateGuestCartMutationVariables>(CreateGuestCartDocument, options)
}
export type CreateGuestCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateGuestCartMutation, CreateGuestCartMutationVariables>
export const CreatePayflowProTokenDocument = gql`
    mutation createPayflowProToken($input: PayflowProTokenInput!) {
  createPayflowProToken(input: $input) {
    response_message
    result
    result_code
    secure_token
    secure_token_id
  }
}
    `

/**
 * __useCreatePayflowProTokenMutation__
 *
 * To run a mutation, you first call `useCreatePayflowProTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreatePayflowProTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreatePayflowProTokenMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreatePayflowProTokenMutation(options: VueApolloComposable.UseMutationOptions<CreatePayflowProTokenMutation, CreatePayflowProTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreatePayflowProTokenMutation, CreatePayflowProTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreatePayflowProTokenMutation, CreatePayflowProTokenMutationVariables>(CreatePayflowProTokenDocument, options)
}
export type CreatePayflowProTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreatePayflowProTokenMutation, CreatePayflowProTokenMutationVariables>
export const CreatePaymentOrderDocument = gql`
    mutation createPaymentOrder($input: CreatePaymentOrderInput!) {
  createPaymentOrder(input: $input) {
    amount
    currency_code
    id
    mp_order_id
    status
  }
}
    `

/**
 * __useCreatePaymentOrderMutation__
 *
 * To run a mutation, you first call `useCreatePaymentOrderMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentOrderMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreatePaymentOrderMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreatePaymentOrderMutation(options: VueApolloComposable.UseMutationOptions<CreatePaymentOrderMutation, CreatePaymentOrderMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreatePaymentOrderMutation, CreatePaymentOrderMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreatePaymentOrderMutation, CreatePaymentOrderMutationVariables>(CreatePaymentOrderDocument, options)
}
export type CreatePaymentOrderMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreatePaymentOrderMutation, CreatePaymentOrderMutationVariables>
export const CreatePaypalExpressTokenDocument = gql`
    mutation createPaypalExpressToken($input: PaypalExpressTokenInput!) {
  createPaypalExpressToken(input: $input) {
    paypal_urls {
      edit
      start
    }
    token
  }
}
    `

/**
 * __useCreatePaypalExpressTokenMutation__
 *
 * To run a mutation, you first call `useCreatePaypalExpressTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaypalExpressTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreatePaypalExpressTokenMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreatePaypalExpressTokenMutation(options: VueApolloComposable.UseMutationOptions<CreatePaypalExpressTokenMutation, CreatePaypalExpressTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreatePaypalExpressTokenMutation, CreatePaypalExpressTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreatePaypalExpressTokenMutation, CreatePaypalExpressTokenMutationVariables>(CreatePaypalExpressTokenDocument, options)
}
export type CreatePaypalExpressTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreatePaypalExpressTokenMutation, CreatePaypalExpressTokenMutationVariables>
export const CreateProductReviewDocument = gql`
    mutation createProductReview($input: CreateProductReviewInput!) {
  createProductReview(input: $input) {
    review {
      average_rating
      created_at
      nickname
      summary
      text
    }
  }
}
    `

/**
 * __useCreateProductReviewMutation__
 *
 * To run a mutation, you first call `useCreateProductReviewMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductReviewMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateProductReviewMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductReviewMutation(options: VueApolloComposable.UseMutationOptions<CreateProductReviewMutation, CreateProductReviewMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateProductReviewMutation, CreateProductReviewMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateProductReviewMutation, CreateProductReviewMutationVariables>(CreateProductReviewDocument, options)
}
export type CreateProductReviewMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateProductReviewMutation, CreateProductReviewMutationVariables>
export const CreateVaultCardPaymentTokenDocument = gql`
    mutation createVaultCardPaymentToken($input: CreateVaultCardPaymentTokenInput!) {
  createVaultCardPaymentToken(input: $input) {
    vault_token_id
  }
}
    `

/**
 * __useCreateVaultCardPaymentTokenMutation__
 *
 * To run a mutation, you first call `useCreateVaultCardPaymentTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateVaultCardPaymentTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateVaultCardPaymentTokenMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateVaultCardPaymentTokenMutation(options: VueApolloComposable.UseMutationOptions<CreateVaultCardPaymentTokenMutation, CreateVaultCardPaymentTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateVaultCardPaymentTokenMutation, CreateVaultCardPaymentTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateVaultCardPaymentTokenMutation, CreateVaultCardPaymentTokenMutationVariables>(CreateVaultCardPaymentTokenDocument, options)
}
export type CreateVaultCardPaymentTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateVaultCardPaymentTokenMutation, CreateVaultCardPaymentTokenMutationVariables>
export const CreateVaultCardSetupTokenDocument = gql`
    mutation createVaultCardSetupToken($input: CreateVaultCardSetupTokenInput!) {
  createVaultCardSetupToken(input: $input) {
    setup_token
  }
}
    `

/**
 * __useCreateVaultCardSetupTokenMutation__
 *
 * To run a mutation, you first call `useCreateVaultCardSetupTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateVaultCardSetupTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateVaultCardSetupTokenMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateVaultCardSetupTokenMutation(options: VueApolloComposable.UseMutationOptions<CreateVaultCardSetupTokenMutation, CreateVaultCardSetupTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateVaultCardSetupTokenMutation, CreateVaultCardSetupTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateVaultCardSetupTokenMutation, CreateVaultCardSetupTokenMutationVariables>(CreateVaultCardSetupTokenDocument, options)
}
export type CreateVaultCardSetupTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateVaultCardSetupTokenMutation, CreateVaultCardSetupTokenMutationVariables>
export const DeleteCompareListDocument = gql`
    mutation deleteCompareList($uid: ID!) {
  deleteCompareList(uid: $uid) {
    result
  }
}
    `

/**
 * __useDeleteCompareListMutation__
 *
 * To run a mutation, you first call `useDeleteCompareListMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCompareListMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteCompareListMutation({
 *   variables: {
 *     uid: // value for 'uid'
 *   },
 * });
 */
export function useDeleteCompareListMutation(options: VueApolloComposable.UseMutationOptions<DeleteCompareListMutation, DeleteCompareListMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteCompareListMutation, DeleteCompareListMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteCompareListMutation, DeleteCompareListMutationVariables>(DeleteCompareListDocument, options)
}
export type DeleteCompareListMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteCompareListMutation, DeleteCompareListMutationVariables>
export const DeleteCustomerDocument = gql`
    mutation deleteCustomer {
  deleteCustomer
}
    `

/**
 * __useDeleteCustomerMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteCustomerMutation();
 */
export function useDeleteCustomerMutation(options: VueApolloComposable.UseMutationOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument, options)
}
export type DeleteCustomerMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteCustomerMutation, DeleteCustomerMutationVariables>
export const DeleteCustomerAddressDocument = gql`
    mutation deleteCustomerAddress($id: Int!) {
  deleteCustomerAddress(id: $id)
}
    `

/**
 * __useDeleteCustomerAddressMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerAddressMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerAddressMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteCustomerAddressMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerAddressMutation(options: VueApolloComposable.UseMutationOptions<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables>(DeleteCustomerAddressDocument, options)
}
export type DeleteCustomerAddressMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables>
export const DeletePaymentTokenDocument = gql`
    mutation deletePaymentToken($public_hash: String!) {
  deletePaymentToken(public_hash: $public_hash) {
    result
  }
}
    `

/**
 * __useDeletePaymentTokenMutation__
 *
 * To run a mutation, you first call `useDeletePaymentTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeletePaymentTokenMutation({
 *   variables: {
 *     public_hash: // value for 'public_hash'
 *   },
 * });
 */
export function useDeletePaymentTokenMutation(options: VueApolloComposable.UseMutationOptions<DeletePaymentTokenMutation, DeletePaymentTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeletePaymentTokenMutation, DeletePaymentTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeletePaymentTokenMutation, DeletePaymentTokenMutationVariables>(DeletePaymentTokenDocument, options)
}
export type DeletePaymentTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeletePaymentTokenMutation, DeletePaymentTokenMutationVariables>
export const DeleteStripePaymentMethodDocument = gql`
    mutation deleteStripePaymentMethod($input: StripePaymentMethodId!) {
  deleteStripePaymentMethod(input: $input)
}
    `

/**
 * __useDeleteStripePaymentMethodMutation__
 *
 * To run a mutation, you first call `useDeleteStripePaymentMethodMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStripePaymentMethodMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteStripePaymentMethodMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useDeleteStripePaymentMethodMutation(options: VueApolloComposable.UseMutationOptions<DeleteStripePaymentMethodMutation, DeleteStripePaymentMethodMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteStripePaymentMethodMutation, DeleteStripePaymentMethodMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteStripePaymentMethodMutation, DeleteStripePaymentMethodMutationVariables>(DeleteStripePaymentMethodDocument, options)
}
export type DeleteStripePaymentMethodMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteStripePaymentMethodMutation, DeleteStripePaymentMethodMutationVariables>
export const EstimateShippingMethodsDocument = gql`
    mutation estimateShippingMethods($input: EstimateTotalsInput!) {
  estimateShippingMethods(input: $input) {
    amount {
      currency
      value
    }
    available
    carrier_code
    carrier_title
    error_message
    method_code
    method_title
    price_excl_tax {
      currency
      value
    }
    price_incl_tax {
      currency
      value
    }
  }
}
    `

/**
 * __useEstimateShippingMethodsMutation__
 *
 * To run a mutation, you first call `useEstimateShippingMethodsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useEstimateShippingMethodsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useEstimateShippingMethodsMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useEstimateShippingMethodsMutation(options: VueApolloComposable.UseMutationOptions<EstimateShippingMethodsMutation, EstimateShippingMethodsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<EstimateShippingMethodsMutation, EstimateShippingMethodsMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<EstimateShippingMethodsMutation, EstimateShippingMethodsMutationVariables>(EstimateShippingMethodsDocument, options)
}
export type EstimateShippingMethodsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<EstimateShippingMethodsMutation, EstimateShippingMethodsMutationVariables>
export const EstimateTotalsDocument = gql`
    mutation estimateTotals($input: EstimateTotalsInput!) {
  estimateTotals(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useEstimateTotalsMutation__
 *
 * To run a mutation, you first call `useEstimateTotalsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useEstimateTotalsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useEstimateTotalsMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useEstimateTotalsMutation(options: VueApolloComposable.UseMutationOptions<EstimateTotalsMutation, EstimateTotalsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<EstimateTotalsMutation, EstimateTotalsMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<EstimateTotalsMutation, EstimateTotalsMutationVariables>(EstimateTotalsDocument, options)
}
export type EstimateTotalsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<EstimateTotalsMutation, EstimateTotalsMutationVariables>
export const GenerateCustomerTokenDocument = gql`
    mutation generateCustomerToken($email: String!, $password: String!) {
  generateCustomerToken(email: $email, password: $password) {
    token
  }
}
    `

/**
 * __useGenerateCustomerTokenMutation__
 *
 * To run a mutation, you first call `useGenerateCustomerTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGenerateCustomerTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGenerateCustomerTokenMutation({
 *   variables: {
 *     email: // value for 'email'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useGenerateCustomerTokenMutation(options: VueApolloComposable.UseMutationOptions<GenerateCustomerTokenMutation, GenerateCustomerTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<GenerateCustomerTokenMutation, GenerateCustomerTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<GenerateCustomerTokenMutation, GenerateCustomerTokenMutationVariables>(GenerateCustomerTokenDocument, options)
}
export type GenerateCustomerTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<GenerateCustomerTokenMutation, GenerateCustomerTokenMutationVariables>
export const GenerateCustomerTokenAsAdminDocument = gql`
    mutation generateCustomerTokenAsAdmin($input: GenerateCustomerTokenAsAdminInput!) {
  generateCustomerTokenAsAdmin(input: $input) {
    customer_token
  }
}
    `

/**
 * __useGenerateCustomerTokenAsAdminMutation__
 *
 * To run a mutation, you first call `useGenerateCustomerTokenAsAdminMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGenerateCustomerTokenAsAdminMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGenerateCustomerTokenAsAdminMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useGenerateCustomerTokenAsAdminMutation(options: VueApolloComposable.UseMutationOptions<GenerateCustomerTokenAsAdminMutation, GenerateCustomerTokenAsAdminMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<GenerateCustomerTokenAsAdminMutation, GenerateCustomerTokenAsAdminMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<GenerateCustomerTokenAsAdminMutation, GenerateCustomerTokenAsAdminMutationVariables>(GenerateCustomerTokenAsAdminDocument, options)
}
export type GenerateCustomerTokenAsAdminMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<GenerateCustomerTokenAsAdminMutation, GenerateCustomerTokenAsAdminMutationVariables>
export const HandlePayflowProResponseDocument = gql`
    mutation handlePayflowProResponse($input: PayflowProResponseInput!) {
  handlePayflowProResponse(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useHandlePayflowProResponseMutation__
 *
 * To run a mutation, you first call `useHandlePayflowProResponseMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useHandlePayflowProResponseMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useHandlePayflowProResponseMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useHandlePayflowProResponseMutation(options: VueApolloComposable.UseMutationOptions<HandlePayflowProResponseMutation, HandlePayflowProResponseMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<HandlePayflowProResponseMutation, HandlePayflowProResponseMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<HandlePayflowProResponseMutation, HandlePayflowProResponseMutationVariables>(HandlePayflowProResponseDocument, options)
}
export type HandlePayflowProResponseMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<HandlePayflowProResponseMutation, HandlePayflowProResponseMutationVariables>
export const ListStripePaymentMethodsDocument = gql`
    mutation listStripePaymentMethods {
  listStripePaymentMethods {
    brand
    created
    cvc
    exp_month
    exp_year
    fingerprint
    icon
    id
    label
    type
  }
}
    `

/**
 * __useListStripePaymentMethodsMutation__
 *
 * To run a mutation, you first call `useListStripePaymentMethodsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useListStripePaymentMethodsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useListStripePaymentMethodsMutation();
 */
export function useListStripePaymentMethodsMutation(options: VueApolloComposable.UseMutationOptions<ListStripePaymentMethodsMutation, ListStripePaymentMethodsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ListStripePaymentMethodsMutation, ListStripePaymentMethodsMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ListStripePaymentMethodsMutation, ListStripePaymentMethodsMutationVariables>(ListStripePaymentMethodsDocument, options)
}
export type ListStripePaymentMethodsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ListStripePaymentMethodsMutation, ListStripePaymentMethodsMutationVariables>
export const LofAddGiftCardToQuoteDocument = gql`
    mutation lofAddGiftCardToQuote($cart_id: String!, $code: String!) {
  lofAddGiftCardToQuote(cart_id: $cart_id, code: $code) {
    code
    message
  }
}
    `

/**
 * __useLofAddGiftCardToQuoteMutation__
 *
 * To run a mutation, you first call `useLofAddGiftCardToQuoteMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLofAddGiftCardToQuoteMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLofAddGiftCardToQuoteMutation({
 *   variables: {
 *     cart_id: // value for 'cart_id'
 *     code: // value for 'code'
 *   },
 * });
 */
export function useLofAddGiftCardToQuoteMutation(options: VueApolloComposable.UseMutationOptions<LofAddGiftCardToQuoteMutation, LofAddGiftCardToQuoteMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LofAddGiftCardToQuoteMutation, LofAddGiftCardToQuoteMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<LofAddGiftCardToQuoteMutation, LofAddGiftCardToQuoteMutationVariables>(LofAddGiftCardToQuoteDocument, options)
}
export type LofAddGiftCardToQuoteMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LofAddGiftCardToQuoteMutation, LofAddGiftCardToQuoteMutationVariables>
export const LofApplyCustomerBalanceToCartDocument = gql`
    mutation lofApplyCustomerBalanceToCart($cart_id: String!) {
  lofApplyCustomerBalanceToCart(cart_id: $cart_id) {
    code
    message
  }
}
    `

/**
 * __useLofApplyCustomerBalanceToCartMutation__
 *
 * To run a mutation, you first call `useLofApplyCustomerBalanceToCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLofApplyCustomerBalanceToCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLofApplyCustomerBalanceToCartMutation({
 *   variables: {
 *     cart_id: // value for 'cart_id'
 *   },
 * });
 */
export function useLofApplyCustomerBalanceToCartMutation(options: VueApolloComposable.UseMutationOptions<LofApplyCustomerBalanceToCartMutation, LofApplyCustomerBalanceToCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LofApplyCustomerBalanceToCartMutation, LofApplyCustomerBalanceToCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<LofApplyCustomerBalanceToCartMutation, LofApplyCustomerBalanceToCartMutationVariables>(LofApplyCustomerBalanceToCartDocument, options)
}
export type LofApplyCustomerBalanceToCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LofApplyCustomerBalanceToCartMutation, LofApplyCustomerBalanceToCartMutationVariables>
export const LofGiftCardRedeemDocument = gql`
    mutation lofGiftCardRedeem($code: String!, $customer_id: String!) {
  lofGiftCardRedeem(code: $code, customer_id: $customer_id) {
    code
    message
  }
}
    `

/**
 * __useLofGiftCardRedeemMutation__
 *
 * To run a mutation, you first call `useLofGiftCardRedeemMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLofGiftCardRedeemMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLofGiftCardRedeemMutation({
 *   variables: {
 *     code: // value for 'code'
 *     customer_id: // value for 'customer_id'
 *   },
 * });
 */
export function useLofGiftCardRedeemMutation(options: VueApolloComposable.UseMutationOptions<LofGiftCardRedeemMutation, LofGiftCardRedeemMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LofGiftCardRedeemMutation, LofGiftCardRedeemMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<LofGiftCardRedeemMutation, LofGiftCardRedeemMutationVariables>(LofGiftCardRedeemDocument, options)
}
export type LofGiftCardRedeemMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LofGiftCardRedeemMutation, LofGiftCardRedeemMutationVariables>
export const MergeCartsDocument = gql`
    mutation mergeCarts($pageSize: Int, $currentPage: Int, $sort: QuoteItemsSortInput, $source_cart_id: String!, $destination_cart_id: String) {
  mergeCarts(
    source_cart_id: $source_cart_id
    destination_cart_id: $destination_cart_id
  ) {
    applied_coupons {
      code
    }
    available_payment_methods {
      code
      is_deferred
      title
    }
    billing_address {
      city
      company
      fax
      firstname
      id
      lastname
      middlename
      postcode
      prefix
      street
      suffix
      telephone
      uid
      vat_id
    }
    email
    gift_message {
      from
      message
      to
    }
    id
    is_virtual
    itemsV2(pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
      total_count
    }
    selected_payment_method {
      code
      purchase_order_number
      title
    }
    shipping_addresses {
      city
      company
      customer_notes
      fax
      firstname
      id
      lastname
      middlename
      pickup_location_code
      postcode
      prefix
      same_as_billing
      street
      suffix
      telephone
      uid
      vat_id
    }
    total_quantity
  }
}
    `

/**
 * __useMergeCartsMutation__
 *
 * To run a mutation, you first call `useMergeCartsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useMergeCartsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useMergeCartsMutation({
 *   variables: {
 *     pageSize: // value for 'pageSize'
 *     currentPage: // value for 'currentPage'
 *     sort: // value for 'sort'
 *     source_cart_id: // value for 'source_cart_id'
 *     destination_cart_id: // value for 'destination_cart_id'
 *   },
 * });
 */
export function useMergeCartsMutation(options: VueApolloComposable.UseMutationOptions<MergeCartsMutation, MergeCartsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<MergeCartsMutation, MergeCartsMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<MergeCartsMutation, MergeCartsMutationVariables>(MergeCartsDocument, options)
}
export type MergeCartsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<MergeCartsMutation, MergeCartsMutationVariables>
export const PlaceOrderDocument = gql`
    mutation placeOrder($input: PlaceOrderInput) {
  placeOrder(input: $input) {
    errors {
      code
      message
    }
    orderV2 {
      available_actions
      carrier
      email
      id
      is_virtual
      number
      order_date
      order_status_change_date
      shipping_method
      status
      token
    }
  }
}
    `

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = usePlaceOrderMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function usePlaceOrderMutation(options: VueApolloComposable.UseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, options)
}
export type PlaceOrderMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<PlaceOrderMutation, PlaceOrderMutationVariables>
export const RemoveCouponFromCartDocument = gql`
    mutation removeCouponFromCart($input: RemoveCouponFromCartInput) {
  removeCouponFromCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useRemoveCouponFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveCouponFromCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCouponFromCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRemoveCouponFromCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useRemoveCouponFromCartMutation(options: VueApolloComposable.UseMutationOptions<RemoveCouponFromCartMutation, RemoveCouponFromCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RemoveCouponFromCartMutation, RemoveCouponFromCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RemoveCouponFromCartMutation, RemoveCouponFromCartMutationVariables>(RemoveCouponFromCartDocument, options)
}
export type RemoveCouponFromCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RemoveCouponFromCartMutation, RemoveCouponFromCartMutationVariables>
export const RemoveItemFromCartDocument = gql`
    mutation removeItemFromCart($input: RemoveItemFromCartInput) {
  removeItemFromCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useRemoveItemFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveItemFromCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemFromCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRemoveItemFromCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useRemoveItemFromCartMutation(options: VueApolloComposable.UseMutationOptions<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>(RemoveItemFromCartDocument, options)
}
export type RemoveItemFromCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RemoveItemFromCartMutation, RemoveItemFromCartMutationVariables>
export const RemoveProductsFromCompareListDocument = gql`
    mutation removeProductsFromCompareList($input: RemoveProductsFromCompareListInput) {
  removeProductsFromCompareList(input: $input) {
    attributes {
      code
      label
    }
    item_count
    items {
      uid
    }
    uid
  }
}
    `

/**
 * __useRemoveProductsFromCompareListMutation__
 *
 * To run a mutation, you first call `useRemoveProductsFromCompareListMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductsFromCompareListMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRemoveProductsFromCompareListMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useRemoveProductsFromCompareListMutation(options: VueApolloComposable.UseMutationOptions<RemoveProductsFromCompareListMutation, RemoveProductsFromCompareListMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RemoveProductsFromCompareListMutation, RemoveProductsFromCompareListMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RemoveProductsFromCompareListMutation, RemoveProductsFromCompareListMutationVariables>(RemoveProductsFromCompareListDocument, options)
}
export type RemoveProductsFromCompareListMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RemoveProductsFromCompareListMutation, RemoveProductsFromCompareListMutationVariables>
export const RemoveProductsFromWishlistDocument = gql`
    mutation removeProductsFromWishlist($wishlistId: ID!, $wishlistItemsIds: [ID!]!) {
  removeProductsFromWishlist(
    wishlistId: $wishlistId
    wishlistItemsIds: $wishlistItemsIds
  ) {
    user_errors {
      code
      message
    }
    wishlist {
      id
      items_count
      sharing_code
      updated_at
    }
  }
}
    `

/**
 * __useRemoveProductsFromWishlistMutation__
 *
 * To run a mutation, you first call `useRemoveProductsFromWishlistMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductsFromWishlistMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRemoveProductsFromWishlistMutation({
 *   variables: {
 *     wishlistId: // value for 'wishlistId'
 *     wishlistItemsIds: // value for 'wishlistItemsIds'
 *   },
 * });
 */
export function useRemoveProductsFromWishlistMutation(options: VueApolloComposable.UseMutationOptions<RemoveProductsFromWishlistMutation, RemoveProductsFromWishlistMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RemoveProductsFromWishlistMutation, RemoveProductsFromWishlistMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RemoveProductsFromWishlistMutation, RemoveProductsFromWishlistMutationVariables>(RemoveProductsFromWishlistDocument, options)
}
export type RemoveProductsFromWishlistMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RemoveProductsFromWishlistMutation, RemoveProductsFromWishlistMutationVariables>
export const ReorderItemsDocument = gql`
    mutation reorderItems($orderNumber: String!) {
  reorderItems(orderNumber: $orderNumber) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
    userInputErrors {
      code
      message
      path
    }
  }
}
    `

/**
 * __useReorderItemsMutation__
 *
 * To run a mutation, you first call `useReorderItemsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useReorderItemsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useReorderItemsMutation({
 *   variables: {
 *     orderNumber: // value for 'orderNumber'
 *   },
 * });
 */
export function useReorderItemsMutation(options: VueApolloComposable.UseMutationOptions<ReorderItemsMutation, ReorderItemsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ReorderItemsMutation, ReorderItemsMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ReorderItemsMutation, ReorderItemsMutationVariables>(ReorderItemsDocument, options)
}
export type ReorderItemsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ReorderItemsMutation, ReorderItemsMutationVariables>
export const RequestGuestOrderCancelDocument = gql`
    mutation requestGuestOrderCancel($input: GuestOrderCancelInput!) {
  requestGuestOrderCancel(input: $input) {
    error
    errorV2 {
      code
      message
    }
    order {
      available_actions
      carrier
      email
      id
      is_virtual
      number
      order_date
      order_status_change_date
      shipping_method
      status
      token
    }
  }
}
    `

/**
 * __useRequestGuestOrderCancelMutation__
 *
 * To run a mutation, you first call `useRequestGuestOrderCancelMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRequestGuestOrderCancelMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRequestGuestOrderCancelMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useRequestGuestOrderCancelMutation(options: VueApolloComposable.UseMutationOptions<RequestGuestOrderCancelMutation, RequestGuestOrderCancelMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RequestGuestOrderCancelMutation, RequestGuestOrderCancelMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RequestGuestOrderCancelMutation, RequestGuestOrderCancelMutationVariables>(RequestGuestOrderCancelDocument, options)
}
export type RequestGuestOrderCancelMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RequestGuestOrderCancelMutation, RequestGuestOrderCancelMutationVariables>
export const RequestPasswordResetEmailDocument = gql`
    mutation requestPasswordResetEmail($email: String!) {
  requestPasswordResetEmail(email: $email)
}
    `

/**
 * __useRequestPasswordResetEmailMutation__
 *
 * To run a mutation, you first call `useRequestPasswordResetEmailMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasswordResetEmailMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRequestPasswordResetEmailMutation({
 *   variables: {
 *     email: // value for 'email'
 *   },
 * });
 */
export function useRequestPasswordResetEmailMutation(options: VueApolloComposable.UseMutationOptions<RequestPasswordResetEmailMutation, RequestPasswordResetEmailMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RequestPasswordResetEmailMutation, RequestPasswordResetEmailMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RequestPasswordResetEmailMutation, RequestPasswordResetEmailMutationVariables>(RequestPasswordResetEmailDocument, options)
}
export type RequestPasswordResetEmailMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RequestPasswordResetEmailMutation, RequestPasswordResetEmailMutationVariables>
export const ResendConfirmationEmailDocument = gql`
    mutation resendConfirmationEmail($email: String!) {
  resendConfirmationEmail(email: $email)
}
    `

/**
 * __useResendConfirmationEmailMutation__
 *
 * To run a mutation, you first call `useResendConfirmationEmailMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useResendConfirmationEmailMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useResendConfirmationEmailMutation({
 *   variables: {
 *     email: // value for 'email'
 *   },
 * });
 */
export function useResendConfirmationEmailMutation(options: VueApolloComposable.UseMutationOptions<ResendConfirmationEmailMutation, ResendConfirmationEmailMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ResendConfirmationEmailMutation, ResendConfirmationEmailMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ResendConfirmationEmailMutation, ResendConfirmationEmailMutationVariables>(ResendConfirmationEmailDocument, options)
}
export type ResendConfirmationEmailMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ResendConfirmationEmailMutation, ResendConfirmationEmailMutationVariables>
export const ResetPasswordDocument = gql`
    mutation resetPassword($email: String!, $resetPasswordToken: String!, $newPassword: String!) {
  resetPassword(
    email: $email
    resetPasswordToken: $resetPasswordToken
    newPassword: $newPassword
  )
}
    `

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useResetPasswordMutation({
 *   variables: {
 *     email: // value for 'email'
 *     resetPasswordToken: // value for 'resetPasswordToken'
 *     newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useResetPasswordMutation(options: VueApolloComposable.UseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options)
}
export type ResetPasswordMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ResetPasswordMutation, ResetPasswordMutationVariables>
export const RevokeCustomerTokenDocument = gql`
    mutation revokeCustomerToken {
  revokeCustomerToken {
    result
  }
}
    `

/**
 * __useRevokeCustomerTokenMutation__
 *
 * To run a mutation, you first call `useRevokeCustomerTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRevokeCustomerTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRevokeCustomerTokenMutation();
 */
export function useRevokeCustomerTokenMutation(options: VueApolloComposable.UseMutationOptions<RevokeCustomerTokenMutation, RevokeCustomerTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RevokeCustomerTokenMutation, RevokeCustomerTokenMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RevokeCustomerTokenMutation, RevokeCustomerTokenMutationVariables>(RevokeCustomerTokenDocument, options)
}
export type RevokeCustomerTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RevokeCustomerTokenMutation, RevokeCustomerTokenMutationVariables>
export const SendEmailToFriendDocument = gql`
    mutation sendEmailToFriend($input: SendEmailToFriendInput) {
  sendEmailToFriend(input: $input) {
    recipients {
      email
      name
    }
    sender {
      email
      message
      name
    }
  }
}
    `

/**
 * __useSendEmailToFriendMutation__
 *
 * To run a mutation, you first call `useSendEmailToFriendMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailToFriendMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSendEmailToFriendMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSendEmailToFriendMutation(options: VueApolloComposable.UseMutationOptions<SendEmailToFriendMutation, SendEmailToFriendMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SendEmailToFriendMutation, SendEmailToFriendMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SendEmailToFriendMutation, SendEmailToFriendMutationVariables>(SendEmailToFriendDocument, options)
}
export type SendEmailToFriendMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SendEmailToFriendMutation, SendEmailToFriendMutationVariables>
export const SetBillingAddressOnCartDocument = gql`
    mutation setBillingAddressOnCart($input: SetBillingAddressOnCartInput) {
  setBillingAddressOnCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useSetBillingAddressOnCartMutation__
 *
 * To run a mutation, you first call `useSetBillingAddressOnCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSetBillingAddressOnCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSetBillingAddressOnCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSetBillingAddressOnCartMutation(options: VueApolloComposable.UseMutationOptions<SetBillingAddressOnCartMutation, SetBillingAddressOnCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SetBillingAddressOnCartMutation, SetBillingAddressOnCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SetBillingAddressOnCartMutation, SetBillingAddressOnCartMutationVariables>(SetBillingAddressOnCartDocument, options)
}
export type SetBillingAddressOnCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SetBillingAddressOnCartMutation, SetBillingAddressOnCartMutationVariables>
export const SetCartAsInactiveDocument = gql`
    mutation setCartAsInactive($cartId: String!) {
  setCartAsInactive(cartId: $cartId) {
    error
    success
  }
}
    `

/**
 * __useSetCartAsInactiveMutation__
 *
 * To run a mutation, you first call `useSetCartAsInactiveMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSetCartAsInactiveMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSetCartAsInactiveMutation({
 *   variables: {
 *     cartId: // value for 'cartId'
 *   },
 * });
 */
export function useSetCartAsInactiveMutation(options: VueApolloComposable.UseMutationOptions<SetCartAsInactiveMutation, SetCartAsInactiveMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SetCartAsInactiveMutation, SetCartAsInactiveMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SetCartAsInactiveMutation, SetCartAsInactiveMutationVariables>(SetCartAsInactiveDocument, options)
}
export type SetCartAsInactiveMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SetCartAsInactiveMutation, SetCartAsInactiveMutationVariables>
export const SetGuestEmailOnCartDocument = gql`
    mutation setGuestEmailOnCart($input: SetGuestEmailOnCartInput) {
  setGuestEmailOnCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useSetGuestEmailOnCartMutation__
 *
 * To run a mutation, you first call `useSetGuestEmailOnCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSetGuestEmailOnCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSetGuestEmailOnCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSetGuestEmailOnCartMutation(options: VueApolloComposable.UseMutationOptions<SetGuestEmailOnCartMutation, SetGuestEmailOnCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SetGuestEmailOnCartMutation, SetGuestEmailOnCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SetGuestEmailOnCartMutation, SetGuestEmailOnCartMutationVariables>(SetGuestEmailOnCartDocument, options)
}
export type SetGuestEmailOnCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SetGuestEmailOnCartMutation, SetGuestEmailOnCartMutationVariables>
export const SetPaymentMethodOnCartDocument = gql`
    mutation setPaymentMethodOnCart($input: SetPaymentMethodOnCartInput) {
  setPaymentMethodOnCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useSetPaymentMethodOnCartMutation__
 *
 * To run a mutation, you first call `useSetPaymentMethodOnCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSetPaymentMethodOnCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSetPaymentMethodOnCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSetPaymentMethodOnCartMutation(options: VueApolloComposable.UseMutationOptions<SetPaymentMethodOnCartMutation, SetPaymentMethodOnCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SetPaymentMethodOnCartMutation, SetPaymentMethodOnCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SetPaymentMethodOnCartMutation, SetPaymentMethodOnCartMutationVariables>(SetPaymentMethodOnCartDocument, options)
}
export type SetPaymentMethodOnCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SetPaymentMethodOnCartMutation, SetPaymentMethodOnCartMutationVariables>
export const SetShippingAddressesOnCartDocument = gql`
    mutation setShippingAddressesOnCart($input: SetShippingAddressesOnCartInput) {
  setShippingAddressesOnCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useSetShippingAddressesOnCartMutation__
 *
 * To run a mutation, you first call `useSetShippingAddressesOnCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSetShippingAddressesOnCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSetShippingAddressesOnCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSetShippingAddressesOnCartMutation(options: VueApolloComposable.UseMutationOptions<SetShippingAddressesOnCartMutation, SetShippingAddressesOnCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SetShippingAddressesOnCartMutation, SetShippingAddressesOnCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SetShippingAddressesOnCartMutation, SetShippingAddressesOnCartMutationVariables>(SetShippingAddressesOnCartDocument, options)
}
export type SetShippingAddressesOnCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SetShippingAddressesOnCartMutation, SetShippingAddressesOnCartMutationVariables>
export const SetShippingMethodsOnCartDocument = gql`
    mutation setShippingMethodsOnCart($input: SetShippingMethodsOnCartInput) {
  setShippingMethodsOnCart(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
  }
}
    `

/**
 * __useSetShippingMethodsOnCartMutation__
 *
 * To run a mutation, you first call `useSetShippingMethodsOnCartMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSetShippingMethodsOnCartMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSetShippingMethodsOnCartMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSetShippingMethodsOnCartMutation(options: VueApolloComposable.UseMutationOptions<SetShippingMethodsOnCartMutation, SetShippingMethodsOnCartMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SetShippingMethodsOnCartMutation, SetShippingMethodsOnCartMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SetShippingMethodsOnCartMutation, SetShippingMethodsOnCartMutationVariables>(SetShippingMethodsOnCartDocument, options)
}
export type SetShippingMethodsOnCartMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SetShippingMethodsOnCartMutation, SetShippingMethodsOnCartMutationVariables>
export const SubscribeEmailToNewsletterDocument = gql`
    mutation subscribeEmailToNewsletter($email: String!) {
  subscribeEmailToNewsletter(email: $email) {
    status
  }
}
    `

/**
 * __useSubscribeEmailToNewsletterMutation__
 *
 * To run a mutation, you first call `useSubscribeEmailToNewsletterMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeEmailToNewsletterMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSubscribeEmailToNewsletterMutation({
 *   variables: {
 *     email: // value for 'email'
 *   },
 * });
 */
export function useSubscribeEmailToNewsletterMutation(options: VueApolloComposable.UseMutationOptions<SubscribeEmailToNewsletterMutation, SubscribeEmailToNewsletterMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SubscribeEmailToNewsletterMutation, SubscribeEmailToNewsletterMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SubscribeEmailToNewsletterMutation, SubscribeEmailToNewsletterMutationVariables>(SubscribeEmailToNewsletterDocument, options)
}
export type SubscribeEmailToNewsletterMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SubscribeEmailToNewsletterMutation, SubscribeEmailToNewsletterMutationVariables>
export const SyncPaymentOrderDocument = gql`
    mutation syncPaymentOrder($input: SyncPaymentOrderInput) {
  syncPaymentOrder(input: $input)
}
    `

/**
 * __useSyncPaymentOrderMutation__
 *
 * To run a mutation, you first call `useSyncPaymentOrderMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSyncPaymentOrderMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSyncPaymentOrderMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSyncPaymentOrderMutation(options: VueApolloComposable.UseMutationOptions<SyncPaymentOrderMutation, SyncPaymentOrderMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SyncPaymentOrderMutation, SyncPaymentOrderMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SyncPaymentOrderMutation, SyncPaymentOrderMutationVariables>(SyncPaymentOrderDocument, options)
}
export type SyncPaymentOrderMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SyncPaymentOrderMutation, SyncPaymentOrderMutationVariables>
export const UpdateCartItemsDocument = gql`
    mutation updateCartItems($input: UpdateCartItemsInput) {
  updateCartItems(input: $input) {
    cart {
      email
      id
      is_virtual
      total_quantity
    }
    errors {
      code
      message
    }
  }
}
    `

/**
 * __useUpdateCartItemsMutation__
 *
 * To run a mutation, you first call `useUpdateCartItemsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartItemsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateCartItemsMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCartItemsMutation(options: VueApolloComposable.UseMutationOptions<UpdateCartItemsMutation, UpdateCartItemsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateCartItemsMutation, UpdateCartItemsMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateCartItemsMutation, UpdateCartItemsMutationVariables>(UpdateCartItemsDocument, options)
}
export type UpdateCartItemsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateCartItemsMutation, UpdateCartItemsMutationVariables>
export const UpdateCustomerAddressDocument = gql`
    mutation updateCustomerAddress($attributeCodes: [ID!], $id: Int!, $input: CustomerAddressInput) {
  updateCustomerAddress(id: $id, input: $input) {
    city
    company
    country_code
    custom_attributesV2(attributeCodes: $attributeCodes) {
      code
    }
    default_billing
    default_shipping
    extension_attributes {
      attribute_code
      value
    }
    fax
    firstname
    id
    lastname
    middlename
    postcode
    prefix
    region {
      region
      region_code
      region_id
    }
    region_id
    street
    suffix
    telephone
    vat_id
  }
}
    `

/**
 * __useUpdateCustomerAddressMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerAddressMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerAddressMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateCustomerAddressMutation({
 *   variables: {
 *     attributeCodes: // value for 'attributeCodes'
 *     id: // value for 'id'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerAddressMutation(options: VueApolloComposable.UseMutationOptions<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables>(UpdateCustomerAddressDocument, options)
}
export type UpdateCustomerAddressMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables>
export const UpdateCustomerEmailDocument = gql`
    mutation updateCustomerEmail($email: String!, $password: String!) {
  updateCustomerEmail(email: $email, password: $password) {
    customer {
      allow_remote_shopping_assistance
      confirmation_status
      created_at
      date_of_birth
      default_billing
      default_shipping
      email
      firstname
      gender
      is_subscribed
      lastname
      middlename
      prefix
      suffix
      taxvat
    }
  }
}
    `

/**
 * __useUpdateCustomerEmailMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerEmailMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerEmailMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateCustomerEmailMutation({
 *   variables: {
 *     email: // value for 'email'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useUpdateCustomerEmailMutation(options: VueApolloComposable.UseMutationOptions<UpdateCustomerEmailMutation, UpdateCustomerEmailMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateCustomerEmailMutation, UpdateCustomerEmailMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateCustomerEmailMutation, UpdateCustomerEmailMutationVariables>(UpdateCustomerEmailDocument, options)
}
export type UpdateCustomerEmailMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateCustomerEmailMutation, UpdateCustomerEmailMutationVariables>
export const UpdateCustomerV2Document = gql`
    mutation updateCustomerV2($input: CustomerUpdateInput!) {
  updateCustomerV2(input: $input) {
    customer {
      allow_remote_shopping_assistance
      confirmation_status
      created_at
      date_of_birth
      default_billing
      default_shipping
      email
      firstname
      gender
      is_subscribed
      lastname
      middlename
      prefix
      suffix
      taxvat
    }
  }
}
    `

/**
 * __useUpdateCustomerV2Mutation__
 *
 * To run a mutation, you first call `useUpdateCustomerV2Mutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerV2Mutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateCustomerV2Mutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerV2Mutation(options: VueApolloComposable.UseMutationOptions<UpdateCustomerV2Mutation, UpdateCustomerV2MutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateCustomerV2Mutation, UpdateCustomerV2MutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateCustomerV2Mutation, UpdateCustomerV2MutationVariables>(UpdateCustomerV2Document, options)
}
export type UpdateCustomerV2MutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateCustomerV2Mutation, UpdateCustomerV2MutationVariables>
export const UpdateProductsInWishlistDocument = gql`
    mutation updateProductsInWishlist($wishlistId: ID!, $wishlistItems: [WishlistItemUpdateInput!]!) {
  updateProductsInWishlist(wishlistId: $wishlistId, wishlistItems: $wishlistItems) {
    user_errors {
      code
      message
    }
    wishlist {
      id
      items_count
      sharing_code
      updated_at
    }
  }
}
    `

/**
 * __useUpdateProductsInWishlistMutation__
 *
 * To run a mutation, you first call `useUpdateProductsInWishlistMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductsInWishlistMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateProductsInWishlistMutation({
 *   variables: {
 *     wishlistId: // value for 'wishlistId'
 *     wishlistItems: // value for 'wishlistItems'
 *   },
 * });
 */
export function useUpdateProductsInWishlistMutation(options: VueApolloComposable.UseMutationOptions<UpdateProductsInWishlistMutation, UpdateProductsInWishlistMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateProductsInWishlistMutation, UpdateProductsInWishlistMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateProductsInWishlistMutation, UpdateProductsInWishlistMutationVariables>(UpdateProductsInWishlistDocument, options)
}
export type UpdateProductsInWishlistMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateProductsInWishlistMutation, UpdateProductsInWishlistMutationVariables>
export const AttributesFormDocument = gql`
    query attributesForm($formCode: String!) {
  attributesForm(formCode: $formCode) {
    errors {
      message
      type
    }
    items {
      code
      default_value
      entity_type
      frontend_class
      frontend_input
      is_required
      is_unique
      label
    }
  }
}
    `

/**
 * __useAttributesFormQuery__
 *
 * To run a query within a Vue component, call `useAttributesFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useAttributesFormQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAttributesFormQuery({
 *   formCode: // value for 'formCode'
 * });
 */
export function useAttributesFormQuery(variables: AttributesFormQueryVariables | VueCompositionApi.Ref<AttributesFormQueryVariables> | ReactiveFunction<AttributesFormQueryVariables>, options: VueApolloComposable.UseQueryOptions<AttributesFormQuery, AttributesFormQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AttributesFormQuery, AttributesFormQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AttributesFormQuery, AttributesFormQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AttributesFormQuery, AttributesFormQueryVariables>(AttributesFormDocument, variables, options)
}
export function useAttributesFormLazyQuery(variables?: AttributesFormQueryVariables | VueCompositionApi.Ref<AttributesFormQueryVariables> | ReactiveFunction<AttributesFormQueryVariables>, options: VueApolloComposable.UseQueryOptions<AttributesFormQuery, AttributesFormQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AttributesFormQuery, AttributesFormQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AttributesFormQuery, AttributesFormQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AttributesFormQuery, AttributesFormQueryVariables>(AttributesFormDocument, variables, options)
}
export type AttributesFormQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AttributesFormQuery, AttributesFormQueryVariables>
export const AttributesListDocument = gql`
    query attributesList($entityType: AttributeEntityTypeEnum!, $filters: AttributeFilterInput) {
  attributesList(entityType: $entityType, filters: $filters) {
    errors {
      message
      type
    }
    items {
      code
      default_value
      entity_type
      frontend_class
      frontend_input
      is_required
      is_unique
      label
    }
  }
}
    `

/**
 * __useAttributesListQuery__
 *
 * To run a query within a Vue component, call `useAttributesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAttributesListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAttributesListQuery({
 *   entityType: // value for 'entityType'
 *   filters: // value for 'filters'
 * });
 */
export function useAttributesListQuery(variables: AttributesListQueryVariables | VueCompositionApi.Ref<AttributesListQueryVariables> | ReactiveFunction<AttributesListQueryVariables>, options: VueApolloComposable.UseQueryOptions<AttributesListQuery, AttributesListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AttributesListQuery, AttributesListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AttributesListQuery, AttributesListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AttributesListQuery, AttributesListQueryVariables>(AttributesListDocument, variables, options)
}
export function useAttributesListLazyQuery(variables?: AttributesListQueryVariables | VueCompositionApi.Ref<AttributesListQueryVariables> | ReactiveFunction<AttributesListQueryVariables>, options: VueApolloComposable.UseQueryOptions<AttributesListQuery, AttributesListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AttributesListQuery, AttributesListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AttributesListQuery, AttributesListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AttributesListQuery, AttributesListQueryVariables>(AttributesListDocument, variables, options)
}
export type AttributesListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AttributesListQuery, AttributesListQueryVariables>
export const AvailableStoresDocument = gql`
    query availableStores($useCurrentGroup: Boolean) {
  availableStores(useCurrentGroup: $useCurrentGroup) {
    absolute_footer
    allow_guests_to_write_product_reviews
    allow_items
    allow_order
    autocomplete_on_storefront
    base_currency_code
    base_link_url
    base_media_url
    base_static_url
    base_url
    braintree_3dsecure_allowspecific
    braintree_3dsecure_always_request_3ds
    braintree_3dsecure_specificcountry
    braintree_3dsecure_threshold_amount
    braintree_3dsecure_verify_3dsecure
    braintree_ach_direct_debit_vault_active
    braintree_applepay_merchant_name
    braintree_applepay_vault_active
    braintree_cc_vault_active
    braintree_cc_vault_cvv
    braintree_environment
    braintree_googlepay_btn_color
    braintree_googlepay_cctypes
    braintree_googlepay_merchant_id
    braintree_googlepay_vault_active
    braintree_local_payment_allowed_methods
    braintree_local_payment_fallback_button_text
    braintree_local_payment_redirect_on_fail
    braintree_merchant_account_id
    braintree_paypal_button_location_cart_type_credit_color
    braintree_paypal_button_location_cart_type_credit_label
    braintree_paypal_button_location_cart_type_credit_shape
    braintree_paypal_button_location_cart_type_credit_show
    braintree_paypal_button_location_cart_type_messaging_layout
    braintree_paypal_button_location_cart_type_messaging_logo
    braintree_paypal_button_location_cart_type_messaging_logo_position
    braintree_paypal_button_location_cart_type_messaging_show
    braintree_paypal_button_location_cart_type_messaging_text_color
    braintree_paypal_button_location_cart_type_paylater_color
    braintree_paypal_button_location_cart_type_paylater_label
    braintree_paypal_button_location_cart_type_paylater_shape
    braintree_paypal_button_location_cart_type_paylater_show
    braintree_paypal_button_location_cart_type_paypal_color
    braintree_paypal_button_location_cart_type_paypal_label
    braintree_paypal_button_location_cart_type_paypal_shape
    braintree_paypal_button_location_cart_type_paypal_show
    braintree_paypal_button_location_checkout_type_credit_color
    braintree_paypal_button_location_checkout_type_credit_label
    braintree_paypal_button_location_checkout_type_credit_shape
    braintree_paypal_button_location_checkout_type_credit_show
    braintree_paypal_button_location_checkout_type_messaging_layout
    braintree_paypal_button_location_checkout_type_messaging_logo
    braintree_paypal_button_location_checkout_type_messaging_logo_position
    braintree_paypal_button_location_checkout_type_messaging_show
    braintree_paypal_button_location_checkout_type_messaging_text_color
    braintree_paypal_button_location_checkout_type_paylater_color
    braintree_paypal_button_location_checkout_type_paylater_label
    braintree_paypal_button_location_checkout_type_paylater_shape
    braintree_paypal_button_location_checkout_type_paylater_show
    braintree_paypal_button_location_checkout_type_paypal_color
    braintree_paypal_button_location_checkout_type_paypal_label
    braintree_paypal_button_location_checkout_type_paypal_shape
    braintree_paypal_button_location_checkout_type_paypal_show
    braintree_paypal_button_location_productpage_type_credit_color
    braintree_paypal_button_location_productpage_type_credit_label
    braintree_paypal_button_location_productpage_type_credit_shape
    braintree_paypal_button_location_productpage_type_credit_show
    braintree_paypal_button_location_productpage_type_messaging_layout
    braintree_paypal_button_location_productpage_type_messaging_logo
    braintree_paypal_button_location_productpage_type_messaging_logo_position
    braintree_paypal_button_location_productpage_type_messaging_show
    braintree_paypal_button_location_productpage_type_messaging_text_color
    braintree_paypal_button_location_productpage_type_paylater_color
    braintree_paypal_button_location_productpage_type_paylater_label
    braintree_paypal_button_location_productpage_type_paylater_shape
    braintree_paypal_button_location_productpage_type_paylater_show
    braintree_paypal_button_location_productpage_type_paypal_color
    braintree_paypal_button_location_productpage_type_paypal_label
    braintree_paypal_button_location_productpage_type_paypal_shape
    braintree_paypal_button_location_productpage_type_paypal_show
    braintree_paypal_credit_uk_merchant_name
    braintree_paypal_display_on_shopping_cart
    braintree_paypal_merchant_country
    braintree_paypal_merchant_name_override
    braintree_paypal_require_billing_address
    braintree_paypal_send_cart_line_items
    braintree_paypal_vault_active
    cart_expires_in_days
    cart_summary_display_quantity
    catalog_default_sort_by
    category_fixed_product_tax_display_setting
    category_url_suffix
    check_money_order_enable_for_specific_countries
    check_money_order_enabled
    check_money_order_make_check_payable_to
    check_money_order_max_order_total
    check_money_order_min_order_total
    check_money_order_new_order_status
    check_money_order_payment_from_specific_countries
    check_money_order_send_check_to
    check_money_order_sort_order
    check_money_order_title
    cms_home_page
    cms_no_cookies
    cms_no_route
    configurable_product_image
    configurable_thumbnail_source
    contact_enabled
    copyright
    countries_with_required_region
    create_account_confirmation
    customer_access_token_lifetime
    default_country
    default_description
    default_display_currency_code
    default_keywords
    default_title
    demonotice
    display_product_prices_in_catalog
    display_shipping_prices
    display_state_if_optional
    fixed_product_taxes_apply_tax_to_fpt
    fixed_product_taxes_display_prices_in_emails
    fixed_product_taxes_display_prices_in_product_lists
    fixed_product_taxes_display_prices_in_sales_modules
    fixed_product_taxes_display_prices_on_product_view_page
    fixed_product_taxes_enable
    fixed_product_taxes_include_fpt_in_subtotal
    front
    grid_per_page
    grid_per_page_values
    grouped_product_image
    head_includes
    head_shortcut_icon
    header_logo_src
    is_checkout_agreements_enabled
    is_default_store
    is_default_store_group
    is_guest_checkout_enabled
    is_one_page_checkout_enabled
    list_mode
    list_per_page
    list_per_page_values
    locale
    logo_alt
    logo_height
    logo_width
    magento_wishlist_general_is_enabled
    max_items_in_order_summary
    minicart_display
    minicart_max_items
    minimum_password_length
    newsletter_enabled
    no_route
    optional_zip_countries
    order_cancellation_enabled
    order_cancellation_reasons {
      description
    }
    orders_invoices_credit_memos_display_full_summary
    orders_invoices_credit_memos_display_grandtotal
    orders_invoices_credit_memos_display_price
    orders_invoices_credit_memos_display_shipping_amount
    orders_invoices_credit_memos_display_subtotal
    orders_invoices_credit_memos_display_zero_tax
    payment_payflowpro_cc_vault_active
    product_fixed_product_tax_display_setting
    product_reviews_enabled
    product_url_suffix
    required_character_classes_number
    root_category_uid
    sales_fixed_product_tax_display_setting
    secure_base_link_url
    secure_base_media_url
    secure_base_static_url
    secure_base_url
    send_friend {
      enabled_for_customers
      enabled_for_guests
    }
    shopping_cart_display_full_summary
    shopping_cart_display_grand_total
    shopping_cart_display_price
    shopping_cart_display_shipping
    shopping_cart_display_subtotal
    shopping_cart_display_tax_gift_wrapping
    shopping_cart_display_zero_tax
    show_cms_breadcrumbs
    store_code
    store_group_code
    store_group_name
    store_name
    store_sort_order
    timezone
    title_prefix
    title_separator
    title_suffix
    use_store_in_url
    website_code
    website_name
    weight_unit
    welcome
    zero_subtotal_enable_for_specific_countries
    zero_subtotal_enabled
    zero_subtotal_new_order_status
    zero_subtotal_payment_action
    zero_subtotal_payment_from_specific_countries
    zero_subtotal_sort_order
    zero_subtotal_title
  }
}
    `

/**
 * __useAvailableStoresQuery__
 *
 * To run a query within a Vue component, call `useAvailableStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableStoresQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAvailableStoresQuery({
 *   useCurrentGroup: // value for 'useCurrentGroup'
 * });
 */
export function useAvailableStoresQuery(variables: AvailableStoresQueryVariables | VueCompositionApi.Ref<AvailableStoresQueryVariables> | ReactiveFunction<AvailableStoresQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<AvailableStoresQuery, AvailableStoresQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AvailableStoresQuery, AvailableStoresQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AvailableStoresQuery, AvailableStoresQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AvailableStoresQuery, AvailableStoresQueryVariables>(AvailableStoresDocument, variables, options)
}
export function useAvailableStoresLazyQuery(variables: AvailableStoresQueryVariables | VueCompositionApi.Ref<AvailableStoresQueryVariables> | ReactiveFunction<AvailableStoresQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<AvailableStoresQuery, AvailableStoresQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AvailableStoresQuery, AvailableStoresQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AvailableStoresQuery, AvailableStoresQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AvailableStoresQuery, AvailableStoresQueryVariables>(AvailableStoresDocument, variables, options)
}
export type AvailableStoresQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AvailableStoresQuery, AvailableStoresQueryVariables>
export const CartDocument = gql`
    query cart($pageSize: Int, $currentPage: Int, $sort: QuoteItemsSortInput, $cart_id: String!) {
  cart(cart_id: $cart_id) {
    applied_coupons {
      code
    }
    available_payment_methods {
      code
      is_deferred
      title
    }
    billing_address {
      city
      company
      fax
      firstname
      id
      lastname
      middlename
      postcode
      prefix
      street
      suffix
      telephone
      uid
      vat_id
    }
    email
    gift_message {
      from
      message
      to
    }
    id
    is_virtual
    itemsV2(pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
      total_count
    }
    selected_payment_method {
      code
      purchase_order_number
      title
    }
    shipping_addresses {
      city
      company
      customer_notes
      fax
      firstname
      id
      lastname
      middlename
      pickup_location_code
      postcode
      prefix
      same_as_billing
      street
      suffix
      telephone
      uid
      vat_id
    }
    total_quantity
  }
}
    `

/**
 * __useCartQuery__
 *
 * To run a query within a Vue component, call `useCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCartQuery({
 *   pageSize: // value for 'pageSize'
 *   currentPage: // value for 'currentPage'
 *   sort: // value for 'sort'
 *   cart_id: // value for 'cart_id'
 * });
 */
export function useCartQuery(variables: CartQueryVariables | VueCompositionApi.Ref<CartQueryVariables> | ReactiveFunction<CartQueryVariables>, options: VueApolloComposable.UseQueryOptions<CartQuery, CartQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CartQuery, CartQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CartQuery, CartQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CartQuery, CartQueryVariables>(CartDocument, variables, options)
}
export function useCartLazyQuery(variables?: CartQueryVariables | VueCompositionApi.Ref<CartQueryVariables> | ReactiveFunction<CartQueryVariables>, options: VueApolloComposable.UseQueryOptions<CartQuery, CartQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CartQuery, CartQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CartQuery, CartQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CartQuery, CartQueryVariables>(CartDocument, variables, options)
}
export type CartQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CartQuery, CartQueryVariables>
export const CategoriesDocument = gql`
    query categories($filters: CategoryFilterInput, $pageSize: Int, $currentPage: Int) {
  categories(filters: $filters, pageSize: $pageSize, currentPage: $currentPage) {
    items {
      amtoolkit_robots
      available_sort_by
      canonical_url
      category_code
      children_count
      custom_layout_update_file
      default_sort_by
      description
      display_mode
      filter_price_range
      image
      include_in_menu
      is_anchor
      landing_page
      level
      meta_description
      meta_keywords
      meta_product_set_id
      meta_title
      name
      path
      path_in_store
      position
      product_count
      redirect_code
      relative_url
      sync_to_facebook_catalog
      thumbnail
      type
      uid
      url_key
      url_path
      url_suffix
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
    `

/**
 * __useCategoriesQuery__
 *
 * To run a query within a Vue component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCategoriesQuery({
 *   filters: // value for 'filters'
 *   pageSize: // value for 'pageSize'
 *   currentPage: // value for 'currentPage'
 * });
 */
export function useCategoriesQuery(variables: CategoriesQueryVariables | VueCompositionApi.Ref<CategoriesQueryVariables> | ReactiveFunction<CategoriesQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CategoriesQuery, CategoriesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CategoriesQuery, CategoriesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CategoriesQuery, CategoriesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, variables, options)
}
export function useCategoriesLazyQuery(variables: CategoriesQueryVariables | VueCompositionApi.Ref<CategoriesQueryVariables> | ReactiveFunction<CategoriesQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CategoriesQuery, CategoriesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CategoriesQuery, CategoriesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CategoriesQuery, CategoriesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, variables, options)
}
export type CategoriesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CategoriesQuery, CategoriesQueryVariables>
export const CheckoutAgreementsDocument = gql`
    query checkoutAgreements {
  checkoutAgreements {
    agreement_id
    checkbox_text
    content
    content_height
    is_html
    mode
    name
  }
}
    `

/**
 * __useCheckoutAgreementsQuery__
 *
 * To run a query within a Vue component, call `useCheckoutAgreementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutAgreementsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCheckoutAgreementsQuery();
 */
export function useCheckoutAgreementsQuery(options: VueApolloComposable.UseQueryOptions<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables>(CheckoutAgreementsDocument, {}, options)
}
export function useCheckoutAgreementsLazyQuery(options: VueApolloComposable.UseQueryOptions<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables>(CheckoutAgreementsDocument, {}, options)
}
export type CheckoutAgreementsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CheckoutAgreementsQuery, CheckoutAgreementsQueryVariables>
export const CmsBlocksDocument = gql`
    query cmsBlocks($identifiers: [String]) {
  cmsBlocks(identifiers: $identifiers) {
    items {
      content
      identifier
      title
    }
  }
}
    `

/**
 * __useCmsBlocksQuery__
 *
 * To run a query within a Vue component, call `useCmsBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useCmsBlocksQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCmsBlocksQuery({
 *   identifiers: // value for 'identifiers'
 * });
 */
export function useCmsBlocksQuery(variables: CmsBlocksQueryVariables | VueCompositionApi.Ref<CmsBlocksQueryVariables> | ReactiveFunction<CmsBlocksQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CmsBlocksQuery, CmsBlocksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CmsBlocksQuery, CmsBlocksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CmsBlocksQuery, CmsBlocksQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CmsBlocksQuery, CmsBlocksQueryVariables>(CmsBlocksDocument, variables, options)
}
export function useCmsBlocksLazyQuery(variables: CmsBlocksQueryVariables | VueCompositionApi.Ref<CmsBlocksQueryVariables> | ReactiveFunction<CmsBlocksQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CmsBlocksQuery, CmsBlocksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CmsBlocksQuery, CmsBlocksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CmsBlocksQuery, CmsBlocksQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CmsBlocksQuery, CmsBlocksQueryVariables>(CmsBlocksDocument, variables, options)
}
export type CmsBlocksQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CmsBlocksQuery, CmsBlocksQueryVariables>
export const CmsPageDocument = gql`
    query cmsPage($id: Int, $identifier: String) {
  cmsPage(id: $id, identifier: $identifier) {
    content
    content_heading
    identifier
    meta_description
    meta_keywords
    meta_title
    page_layout
    redirect_code
    relative_url
    title
    type
    url_key
  }
}
    `

/**
 * __useCmsPageQuery__
 *
 * To run a query within a Vue component, call `useCmsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCmsPageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCmsPageQuery({
 *   id: // value for 'id'
 *   identifier: // value for 'identifier'
 * });
 */
export function useCmsPageQuery(variables: CmsPageQueryVariables | VueCompositionApi.Ref<CmsPageQueryVariables> | ReactiveFunction<CmsPageQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CmsPageQuery, CmsPageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CmsPageQuery, CmsPageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CmsPageQuery, CmsPageQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CmsPageQuery, CmsPageQueryVariables>(CmsPageDocument, variables, options)
}
export function useCmsPageLazyQuery(variables: CmsPageQueryVariables | VueCompositionApi.Ref<CmsPageQueryVariables> | ReactiveFunction<CmsPageQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CmsPageQuery, CmsPageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CmsPageQuery, CmsPageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CmsPageQuery, CmsPageQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CmsPageQuery, CmsPageQueryVariables>(CmsPageDocument, variables, options)
}
export type CmsPageQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CmsPageQuery, CmsPageQueryVariables>
export const CompareListDocument = gql`
    query compareList($uid: ID!) {
  compareList(uid: $uid) {
    attributes {
      code
      label
    }
    item_count
    items {
      uid
    }
    uid
  }
}
    `

/**
 * __useCompareListQuery__
 *
 * To run a query within a Vue component, call `useCompareListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompareListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCompareListQuery({
 *   uid: // value for 'uid'
 * });
 */
export function useCompareListQuery(variables: CompareListQueryVariables | VueCompositionApi.Ref<CompareListQueryVariables> | ReactiveFunction<CompareListQueryVariables>, options: VueApolloComposable.UseQueryOptions<CompareListQuery, CompareListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CompareListQuery, CompareListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CompareListQuery, CompareListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CompareListQuery, CompareListQueryVariables>(CompareListDocument, variables, options)
}
export function useCompareListLazyQuery(variables?: CompareListQueryVariables | VueCompositionApi.Ref<CompareListQueryVariables> | ReactiveFunction<CompareListQueryVariables>, options: VueApolloComposable.UseQueryOptions<CompareListQuery, CompareListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CompareListQuery, CompareListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CompareListQuery, CompareListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CompareListQuery, CompareListQueryVariables>(CompareListDocument, variables, options)
}
export type CompareListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CompareListQuery, CompareListQueryVariables>
export const CountriesDocument = gql`
    query countries {
  countries {
    available_regions {
      code
      id
      name
    }
    full_name_english
    full_name_locale
    id
    three_letter_abbreviation
    two_letter_abbreviation
  }
}
    `

/**
 * __useCountriesQuery__
 *
 * To run a query within a Vue component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCountriesQuery();
 */
export function useCountriesQuery(options: VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, {}, options)
}
export function useCountriesLazyQuery(options: VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, {}, options)
}
export type CountriesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CountriesQuery, CountriesQueryVariables>
export const CountryDocument = gql`
    query country($id: String) {
  country(id: $id) {
    available_regions {
      code
      id
      name
    }
    full_name_english
    full_name_locale
    id
    three_letter_abbreviation
    two_letter_abbreviation
  }
}
    `

/**
 * __useCountryQuery__
 *
 * To run a query within a Vue component, call `useCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCountryQuery({
 *   id: // value for 'id'
 * });
 */
export function useCountryQuery(variables: CountryQueryVariables | VueCompositionApi.Ref<CountryQueryVariables> | ReactiveFunction<CountryQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CountryQuery, CountryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CountryQuery, CountryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CountryQuery, CountryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CountryQuery, CountryQueryVariables>(CountryDocument, variables, options)
}
export function useCountryLazyQuery(variables: CountryQueryVariables | VueCompositionApi.Ref<CountryQueryVariables> | ReactiveFunction<CountryQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CountryQuery, CountryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CountryQuery, CountryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CountryQuery, CountryQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CountryQuery, CountryQueryVariables>(CountryDocument, variables, options)
}
export type CountryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CountryQuery, CountryQueryVariables>
export const CurrencyDocument = gql`
    query currency {
  currency {
    available_currency_codes
    base_currency_code
    base_currency_symbol
    default_display_currency_code
    default_display_currency_symbol
    exchange_rates {
      currency_to
      rate
    }
  }
}
    `

/**
 * __useCurrencyQuery__
 *
 * To run a query within a Vue component, call `useCurrencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrencyQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCurrencyQuery();
 */
export function useCurrencyQuery(options: VueApolloComposable.UseQueryOptions<CurrencyQuery, CurrencyQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CurrencyQuery, CurrencyQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CurrencyQuery, CurrencyQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CurrencyQuery, CurrencyQueryVariables>(CurrencyDocument, {}, options)
}
export function useCurrencyLazyQuery(options: VueApolloComposable.UseQueryOptions<CurrencyQuery, CurrencyQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CurrencyQuery, CurrencyQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CurrencyQuery, CurrencyQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CurrencyQuery, CurrencyQueryVariables>(CurrencyDocument, {}, options)
}
export type CurrencyQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CurrencyQuery, CurrencyQueryVariables>
export const CustomAttributeMetadataV2Document = gql`
    query customAttributeMetadataV2($attributes: [AttributeInput!]) {
  customAttributeMetadataV2(attributes: $attributes) {
    errors {
      message
      type
    }
    items {
      code
      default_value
      entity_type
      frontend_class
      frontend_input
      is_required
      is_unique
      label
    }
  }
}
    `

/**
 * __useCustomAttributeMetadataV2Query__
 *
 * To run a query within a Vue component, call `useCustomAttributeMetadataV2Query` and pass it any options that fit your needs.
 * When your component renders, `useCustomAttributeMetadataV2Query` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCustomAttributeMetadataV2Query({
 *   attributes: // value for 'attributes'
 * });
 */
export function useCustomAttributeMetadataV2Query(variables: CustomAttributeMetadataV2QueryVariables | VueCompositionApi.Ref<CustomAttributeMetadataV2QueryVariables> | ReactiveFunction<CustomAttributeMetadataV2QueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables>(CustomAttributeMetadataV2Document, variables, options)
}
export function useCustomAttributeMetadataV2LazyQuery(variables: CustomAttributeMetadataV2QueryVariables | VueCompositionApi.Ref<CustomAttributeMetadataV2QueryVariables> | ReactiveFunction<CustomAttributeMetadataV2QueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables>(CustomAttributeMetadataV2Document, variables, options)
}
export type CustomAttributeMetadataV2QueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CustomAttributeMetadataV2Query, CustomAttributeMetadataV2QueryVariables>
export const CustomerDocument = gql`
    query customer($currentPage: Int, $pageSize: Int, $attributeCodes: [ID!], $filter: CustomerOrdersFilterInput, $currentPage1: Int, $pageSize1: Int, $sort: CustomerOrderSortInput, $scope: ScopeTypeEnum, $id: ID!, $pageSize2: Int, $currentPage2: Int) {
  customer {
    addresses {
      city
      company
      country_code
      default_billing
      default_shipping
      fax
      firstname
      id
      lastname
      middlename
      postcode
      prefix
      region_id
      street
      suffix
      telephone
      vat_id
    }
    addressesV2(currentPage: $currentPage, pageSize: $pageSize) {
      total_count
    }
    allow_remote_shopping_assistance
    compare_list {
      item_count
      uid
    }
    confirmation_status
    created_at
    custom_attributes(attributeCodes: $attributeCodes) {
      code
    }
    date_of_birth
    default_billing
    default_shipping
    email
    firstname
    gender
    is_subscribed
    lastname
    middlename
    orders(
      filter: $filter
      currentPage: $currentPage1
      pageSize: $pageSize1
      sort: $sort
      scope: $scope
    ) {
      date_of_first_order
      total_count
    }
    prefix
    suffix
    taxvat
    wishlist_v2(id: $id) {
      id
      items_count
      sharing_code
      updated_at
    }
    wishlists(pageSize: $pageSize2, currentPage: $currentPage2) {
      id
      items_count
      sharing_code
      updated_at
    }
  }
}
    `

/**
 * __useCustomerQuery__
 *
 * To run a query within a Vue component, call `useCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCustomerQuery({
 *   currentPage: // value for 'currentPage'
 *   pageSize: // value for 'pageSize'
 *   attributeCodes: // value for 'attributeCodes'
 *   filter: // value for 'filter'
 *   currentPage1: // value for 'currentPage1'
 *   pageSize1: // value for 'pageSize1'
 *   sort: // value for 'sort'
 *   scope: // value for 'scope'
 *   id: // value for 'id'
 *   pageSize2: // value for 'pageSize2'
 *   currentPage2: // value for 'currentPage2'
 * });
 */
export function useCustomerQuery(variables: CustomerQueryVariables | VueCompositionApi.Ref<CustomerQueryVariables> | ReactiveFunction<CustomerQueryVariables>, options: VueApolloComposable.UseQueryOptions<CustomerQuery, CustomerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomerQuery, CustomerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomerQuery, CustomerQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, variables, options)
}
export function useCustomerLazyQuery(variables?: CustomerQueryVariables | VueCompositionApi.Ref<CustomerQueryVariables> | ReactiveFunction<CustomerQueryVariables>, options: VueApolloComposable.UseQueryOptions<CustomerQuery, CustomerQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomerQuery, CustomerQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomerQuery, CustomerQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, variables, options)
}
export type CustomerQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CustomerQuery, CustomerQueryVariables>
export const CustomerCartDocument = gql`
    query customerCart($pageSize: Int, $currentPage: Int, $sort: QuoteItemsSortInput) {
  customerCart {
    applied_coupons {
      code
    }
    available_payment_methods {
      code
      is_deferred
      title
    }
    billing_address {
      city
      company
      fax
      firstname
      id
      lastname
      middlename
      postcode
      prefix
      street
      suffix
      telephone
      uid
      vat_id
    }
    email
    gift_message {
      from
      message
      to
    }
    id
    is_virtual
    itemsV2(pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
      total_count
    }
    selected_payment_method {
      code
      purchase_order_number
      title
    }
    shipping_addresses {
      city
      company
      customer_notes
      fax
      firstname
      id
      lastname
      middlename
      pickup_location_code
      postcode
      prefix
      same_as_billing
      street
      suffix
      telephone
      uid
      vat_id
    }
    total_quantity
  }
}
    `

/**
 * __useCustomerCartQuery__
 *
 * To run a query within a Vue component, call `useCustomerCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerCartQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCustomerCartQuery({
 *   pageSize: // value for 'pageSize'
 *   currentPage: // value for 'currentPage'
 *   sort: // value for 'sort'
 * });
 */
export function useCustomerCartQuery(variables: CustomerCartQueryVariables | VueCompositionApi.Ref<CustomerCartQueryVariables> | ReactiveFunction<CustomerCartQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CustomerCartQuery, CustomerCartQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomerCartQuery, CustomerCartQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomerCartQuery, CustomerCartQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CustomerCartQuery, CustomerCartQueryVariables>(CustomerCartDocument, variables, options)
}
export function useCustomerCartLazyQuery(variables: CustomerCartQueryVariables | VueCompositionApi.Ref<CustomerCartQueryVariables> | ReactiveFunction<CustomerCartQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<CustomerCartQuery, CustomerCartQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomerCartQuery, CustomerCartQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomerCartQuery, CustomerCartQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CustomerCartQuery, CustomerCartQueryVariables>(CustomerCartDocument, variables, options)
}
export type CustomerCartQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CustomerCartQuery, CustomerCartQueryVariables>
export const CustomerDownloadableProductsDocument = gql`
    query customerDownloadableProducts {
  customerDownloadableProducts {
    items {
      date
      download_url
      order_increment_id
      remaining_downloads
      status
    }
  }
}
    `

/**
 * __useCustomerDownloadableProductsQuery__
 *
 * To run a query within a Vue component, call `useCustomerDownloadableProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerDownloadableProductsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCustomerDownloadableProductsQuery();
 */
export function useCustomerDownloadableProductsQuery(options: VueApolloComposable.UseQueryOptions<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables>(CustomerDownloadableProductsDocument, {}, options)
}
export function useCustomerDownloadableProductsLazyQuery(options: VueApolloComposable.UseQueryOptions<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables>(CustomerDownloadableProductsDocument, {}, options)
}
export type CustomerDownloadableProductsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CustomerDownloadableProductsQuery, CustomerDownloadableProductsQueryVariables>
export const CustomerPaymentTokensDocument = gql`
    query customerPaymentTokens {
  customerPaymentTokens {
    items {
      details
      payment_method_code
      public_hash
      type
    }
  }
}
    `

/**
 * __useCustomerPaymentTokensQuery__
 *
 * To run a query within a Vue component, call `useCustomerPaymentTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerPaymentTokensQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCustomerPaymentTokensQuery();
 */
export function useCustomerPaymentTokensQuery(options: VueApolloComposable.UseQueryOptions<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables>(CustomerPaymentTokensDocument, {}, options)
}
export function useCustomerPaymentTokensLazyQuery(options: VueApolloComposable.UseQueryOptions<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables>(CustomerPaymentTokensDocument, {}, options)
}
export type CustomerPaymentTokensQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CustomerPaymentTokensQuery, CustomerPaymentTokensQueryVariables>
export const GetHostedProUrlDocument = gql`
    query getHostedProUrl($input: HostedProUrlInput!) {
  getHostedProUrl(input: $input) {
    secure_form_url
  }
}
    `

/**
 * __useGetHostedProUrlQuery__
 *
 * To run a query within a Vue component, call `useGetHostedProUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHostedProUrlQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetHostedProUrlQuery({
 *   input: // value for 'input'
 * });
 */
export function useGetHostedProUrlQuery(variables: GetHostedProUrlQueryVariables | VueCompositionApi.Ref<GetHostedProUrlQueryVariables> | ReactiveFunction<GetHostedProUrlQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetHostedProUrlQuery, GetHostedProUrlQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetHostedProUrlQuery, GetHostedProUrlQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetHostedProUrlQuery, GetHostedProUrlQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetHostedProUrlQuery, GetHostedProUrlQueryVariables>(GetHostedProUrlDocument, variables, options)
}
export function useGetHostedProUrlLazyQuery(variables?: GetHostedProUrlQueryVariables | VueCompositionApi.Ref<GetHostedProUrlQueryVariables> | ReactiveFunction<GetHostedProUrlQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetHostedProUrlQuery, GetHostedProUrlQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetHostedProUrlQuery, GetHostedProUrlQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetHostedProUrlQuery, GetHostedProUrlQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetHostedProUrlQuery, GetHostedProUrlQueryVariables>(GetHostedProUrlDocument, variables, options)
}
export type GetHostedProUrlQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetHostedProUrlQuery, GetHostedProUrlQueryVariables>
export const GetPayflowLinkTokenDocument = gql`
    query getPayflowLinkToken($input: PayflowLinkTokenInput!) {
  getPayflowLinkToken(input: $input) {
    mode
    paypal_url
    secure_token
    secure_token_id
  }
}
    `

/**
 * __useGetPayflowLinkTokenQuery__
 *
 * To run a query within a Vue component, call `useGetPayflowLinkTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPayflowLinkTokenQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPayflowLinkTokenQuery({
 *   input: // value for 'input'
 * });
 */
export function useGetPayflowLinkTokenQuery(variables: GetPayflowLinkTokenQueryVariables | VueCompositionApi.Ref<GetPayflowLinkTokenQueryVariables> | ReactiveFunction<GetPayflowLinkTokenQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables>(GetPayflowLinkTokenDocument, variables, options)
}
export function useGetPayflowLinkTokenLazyQuery(variables?: GetPayflowLinkTokenQueryVariables | VueCompositionApi.Ref<GetPayflowLinkTokenQueryVariables> | ReactiveFunction<GetPayflowLinkTokenQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables>(GetPayflowLinkTokenDocument, variables, options)
}
export type GetPayflowLinkTokenQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetPayflowLinkTokenQuery, GetPayflowLinkTokenQueryVariables>
export const GetPaymentConfigDocument = gql`
    query getPaymentConfig($location: PaymentLocation!) {
  getPaymentConfig(location: $location) {
    apple_pay {
      code
      is_visible
      payment_intent
      payment_source
      sort_order
      title
    }
    fastlane {
      code
      is_visible
      payment_intent
      payment_source
      sort_order
      title
    }
    google_pay {
      code
      is_visible
      payment_intent
      payment_source
      sort_order
      three_ds_mode
      title
    }
    hosted_fields {
      cc_vault_code
      code
      is_vault_enabled
      is_visible
      payment_intent
      payment_source
      requires_card_details
      sort_order
      three_ds_mode
      title
    }
    smart_buttons {
      code
      display_message
      display_venmo
      is_visible
      payment_intent
      sort_order
      title
    }
  }
}
    `

/**
 * __useGetPaymentConfigQuery__
 *
 * To run a query within a Vue component, call `useGetPaymentConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentConfigQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPaymentConfigQuery({
 *   location: // value for 'location'
 * });
 */
export function useGetPaymentConfigQuery(variables: GetPaymentConfigQueryVariables | VueCompositionApi.Ref<GetPaymentConfigQueryVariables> | ReactiveFunction<GetPaymentConfigQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPaymentConfigQuery, GetPaymentConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPaymentConfigQuery, GetPaymentConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPaymentConfigQuery, GetPaymentConfigQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetPaymentConfigQuery, GetPaymentConfigQueryVariables>(GetPaymentConfigDocument, variables, options)
}
export function useGetPaymentConfigLazyQuery(variables?: GetPaymentConfigQueryVariables | VueCompositionApi.Ref<GetPaymentConfigQueryVariables> | ReactiveFunction<GetPaymentConfigQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPaymentConfigQuery, GetPaymentConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPaymentConfigQuery, GetPaymentConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPaymentConfigQuery, GetPaymentConfigQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetPaymentConfigQuery, GetPaymentConfigQueryVariables>(GetPaymentConfigDocument, variables, options)
}
export type GetPaymentConfigQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetPaymentConfigQuery, GetPaymentConfigQueryVariables>
export const GetPaymentOrderDocument = gql`
    query getPaymentOrder($cartId: String!, $id: String!) {
  getPaymentOrder(cartId: $cartId, id: $id) {
    id
    mp_order_id
    status
  }
}
    `

/**
 * __useGetPaymentOrderQuery__
 *
 * To run a query within a Vue component, call `useGetPaymentOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentOrderQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPaymentOrderQuery({
 *   cartId: // value for 'cartId'
 *   id: // value for 'id'
 * });
 */
export function useGetPaymentOrderQuery(variables: GetPaymentOrderQueryVariables | VueCompositionApi.Ref<GetPaymentOrderQueryVariables> | ReactiveFunction<GetPaymentOrderQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPaymentOrderQuery, GetPaymentOrderQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPaymentOrderQuery, GetPaymentOrderQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPaymentOrderQuery, GetPaymentOrderQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetPaymentOrderQuery, GetPaymentOrderQueryVariables>(GetPaymentOrderDocument, variables, options)
}
export function useGetPaymentOrderLazyQuery(variables?: GetPaymentOrderQueryVariables | VueCompositionApi.Ref<GetPaymentOrderQueryVariables> | ReactiveFunction<GetPaymentOrderQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPaymentOrderQuery, GetPaymentOrderQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPaymentOrderQuery, GetPaymentOrderQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPaymentOrderQuery, GetPaymentOrderQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetPaymentOrderQuery, GetPaymentOrderQueryVariables>(GetPaymentOrderDocument, variables, options)
}
export type GetPaymentOrderQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetPaymentOrderQuery, GetPaymentOrderQueryVariables>
export const GetPaymentSdkDocument = gql`
    query getPaymentSDK($location: PaymentLocation!) {
  getPaymentSDK(location: $location) {
    sdkParams {
      code
    }
  }
}
    `

/**
 * __useGetPaymentSdkQuery__
 *
 * To run a query within a Vue component, call `useGetPaymentSdkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentSdkQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPaymentSdkQuery({
 *   location: // value for 'location'
 * });
 */
export function useGetPaymentSdkQuery(variables: GetPaymentSdkQueryVariables | VueCompositionApi.Ref<GetPaymentSdkQueryVariables> | ReactiveFunction<GetPaymentSdkQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPaymentSdkQuery, GetPaymentSdkQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPaymentSdkQuery, GetPaymentSdkQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPaymentSdkQuery, GetPaymentSdkQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetPaymentSdkQuery, GetPaymentSdkQueryVariables>(GetPaymentSdkDocument, variables, options)
}
export function useGetPaymentSdkLazyQuery(variables?: GetPaymentSdkQueryVariables | VueCompositionApi.Ref<GetPaymentSdkQueryVariables> | ReactiveFunction<GetPaymentSdkQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPaymentSdkQuery, GetPaymentSdkQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPaymentSdkQuery, GetPaymentSdkQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPaymentSdkQuery, GetPaymentSdkQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetPaymentSdkQuery, GetPaymentSdkQueryVariables>(GetPaymentSdkDocument, variables, options)
}
export type GetPaymentSdkQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetPaymentSdkQuery, GetPaymentSdkQueryVariables>
export const GetStripeConfigurationDocument = gql`
    query getStripeConfiguration {
  getStripeConfiguration {
    apiKey
    appInfo
    elementsOptions
    locale
    options {
      apiVersion
      betas
    }
  }
}
    `

/**
 * __useGetStripeConfigurationQuery__
 *
 * To run a query within a Vue component, call `useGetStripeConfigurationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStripeConfigurationQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetStripeConfigurationQuery();
 */
export function useGetStripeConfigurationQuery(options: VueApolloComposable.UseQueryOptions<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables>(GetStripeConfigurationDocument, {}, options)
}
export function useGetStripeConfigurationLazyQuery(options: VueApolloComposable.UseQueryOptions<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables>(GetStripeConfigurationDocument, {}, options)
}
export type GetStripeConfigurationQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetStripeConfigurationQuery, GetStripeConfigurationQueryVariables>
export const GetVaultConfigDocument = gql`
    query getVaultConfig {
  getVaultConfig {
    credit_card {
      is_vault_enabled
      three_ds_mode
    }
  }
}
    `

/**
 * __useGetVaultConfigQuery__
 *
 * To run a query within a Vue component, call `useGetVaultConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVaultConfigQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetVaultConfigQuery();
 */
export function useGetVaultConfigQuery(options: VueApolloComposable.UseQueryOptions<GetVaultConfigQuery, GetVaultConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetVaultConfigQuery, GetVaultConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetVaultConfigQuery, GetVaultConfigQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetVaultConfigQuery, GetVaultConfigQueryVariables>(GetVaultConfigDocument, {}, options)
}
export function useGetVaultConfigLazyQuery(options: VueApolloComposable.UseQueryOptions<GetVaultConfigQuery, GetVaultConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetVaultConfigQuery, GetVaultConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetVaultConfigQuery, GetVaultConfigQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetVaultConfigQuery, GetVaultConfigQueryVariables>(GetVaultConfigDocument, {}, options)
}
export type GetVaultConfigQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetVaultConfigQuery, GetVaultConfigQueryVariables>
export const GuestOrderDocument = gql`
    query guestOrder($input: OrderInformationInput!) {
  guestOrder(input: $input) {
    applied_coupons {
      code
    }
    available_actions
    billing_address {
      city
      company
      country_code
      fax
      firstname
      lastname
      middlename
      postcode
      prefix
      region
      region_id
      street
      suffix
      telephone
      vat_id
    }
    carrier
    comments {
      message
      timestamp
    }
    credit_memos {
      id
      number
    }
    customer_info {
      firstname
      lastname
      middlename
      prefix
      suffix
    }
    email
    gift_message {
      from
      message
      to
    }
    id
    invoices {
      id
      number
    }
    is_virtual
    items {
      id
      product_name
      product_sku
      product_type
      product_url_key
      quantity_canceled
      quantity_invoiced
      quantity_ordered
      quantity_refunded
      quantity_returned
      quantity_shipped
      status
    }
    number
    order_date
    order_status_change_date
    payment_methods {
      name
      type
    }
    shipments {
      id
      number
    }
    shipping_address {
      city
      company
      country_code
      fax
      firstname
      lastname
      middlename
      postcode
      prefix
      region
      region_id
      street
      suffix
      telephone
      vat_id
    }
    shipping_method
    status
    token
  }
}
    `

/**
 * __useGuestOrderQuery__
 *
 * To run a query within a Vue component, call `useGuestOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuestOrderQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGuestOrderQuery({
 *   input: // value for 'input'
 * });
 */
export function useGuestOrderQuery(variables: GuestOrderQueryVariables | VueCompositionApi.Ref<GuestOrderQueryVariables> | ReactiveFunction<GuestOrderQueryVariables>, options: VueApolloComposable.UseQueryOptions<GuestOrderQuery, GuestOrderQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GuestOrderQuery, GuestOrderQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GuestOrderQuery, GuestOrderQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GuestOrderQuery, GuestOrderQueryVariables>(GuestOrderDocument, variables, options)
}
export function useGuestOrderLazyQuery(variables?: GuestOrderQueryVariables | VueCompositionApi.Ref<GuestOrderQueryVariables> | ReactiveFunction<GuestOrderQueryVariables>, options: VueApolloComposable.UseQueryOptions<GuestOrderQuery, GuestOrderQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GuestOrderQuery, GuestOrderQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GuestOrderQuery, GuestOrderQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GuestOrderQuery, GuestOrderQueryVariables>(GuestOrderDocument, variables, options)
}
export type GuestOrderQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GuestOrderQuery, GuestOrderQueryVariables>
export const GuestOrderByTokenDocument = gql`
    query guestOrderByToken($input: OrderTokenInput!) {
  guestOrderByToken(input: $input) {
    applied_coupons {
      code
    }
    available_actions
    billing_address {
      city
      company
      country_code
      fax
      firstname
      lastname
      middlename
      postcode
      prefix
      region
      region_id
      street
      suffix
      telephone
      vat_id
    }
    carrier
    comments {
      message
      timestamp
    }
    credit_memos {
      id
      number
    }
    customer_info {
      firstname
      lastname
      middlename
      prefix
      suffix
    }
    email
    gift_message {
      from
      message
      to
    }
    id
    invoices {
      id
      number
    }
    is_virtual
    items {
      id
      product_name
      product_sku
      product_type
      product_url_key
      quantity_canceled
      quantity_invoiced
      quantity_ordered
      quantity_refunded
      quantity_returned
      quantity_shipped
      status
    }
    number
    order_date
    order_status_change_date
    payment_methods {
      name
      type
    }
    shipments {
      id
      number
    }
    shipping_address {
      city
      company
      country_code
      fax
      firstname
      lastname
      middlename
      postcode
      prefix
      region
      region_id
      street
      suffix
      telephone
      vat_id
    }
    shipping_method
    status
    token
  }
}
    `

/**
 * __useGuestOrderByTokenQuery__
 *
 * To run a query within a Vue component, call `useGuestOrderByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuestOrderByTokenQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGuestOrderByTokenQuery({
 *   input: // value for 'input'
 * });
 */
export function useGuestOrderByTokenQuery(variables: GuestOrderByTokenQueryVariables | VueCompositionApi.Ref<GuestOrderByTokenQueryVariables> | ReactiveFunction<GuestOrderByTokenQueryVariables>, options: VueApolloComposable.UseQueryOptions<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables>(GuestOrderByTokenDocument, variables, options)
}
export function useGuestOrderByTokenLazyQuery(variables?: GuestOrderByTokenQueryVariables | VueCompositionApi.Ref<GuestOrderByTokenQueryVariables> | ReactiveFunction<GuestOrderByTokenQueryVariables>, options: VueApolloComposable.UseQueryOptions<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables>(GuestOrderByTokenDocument, variables, options)
}
export type GuestOrderByTokenQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GuestOrderByTokenQuery, GuestOrderByTokenQueryVariables>
export const IsEmailAvailableDocument = gql`
    query isEmailAvailable($email: String!) {
  isEmailAvailable(email: $email) {
    is_email_available
  }
}
    `

/**
 * __useIsEmailAvailableQuery__
 *
 * To run a query within a Vue component, call `useIsEmailAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsEmailAvailableQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useIsEmailAvailableQuery({
 *   email: // value for 'email'
 * });
 */
export function useIsEmailAvailableQuery(variables: IsEmailAvailableQueryVariables | VueCompositionApi.Ref<IsEmailAvailableQueryVariables> | ReactiveFunction<IsEmailAvailableQueryVariables>, options: VueApolloComposable.UseQueryOptions<IsEmailAvailableQuery, IsEmailAvailableQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<IsEmailAvailableQuery, IsEmailAvailableQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<IsEmailAvailableQuery, IsEmailAvailableQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<IsEmailAvailableQuery, IsEmailAvailableQueryVariables>(IsEmailAvailableDocument, variables, options)
}
export function useIsEmailAvailableLazyQuery(variables?: IsEmailAvailableQueryVariables | VueCompositionApi.Ref<IsEmailAvailableQueryVariables> | ReactiveFunction<IsEmailAvailableQueryVariables>, options: VueApolloComposable.UseQueryOptions<IsEmailAvailableQuery, IsEmailAvailableQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<IsEmailAvailableQuery, IsEmailAvailableQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<IsEmailAvailableQuery, IsEmailAvailableQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<IsEmailAvailableQuery, IsEmailAvailableQueryVariables>(IsEmailAvailableDocument, variables, options)
}
export type IsEmailAvailableQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<IsEmailAvailableQuery, IsEmailAvailableQueryVariables>
export const LofGiftCardInfoDocument = gql`
    query lofGiftCardInfo($code: String!) {
  lofGiftCardInfo(code: $code) {
    balance {
      currency
      value
    }
    code
  }
}
    `

/**
 * __useLofGiftCardInfoQuery__
 *
 * To run a query within a Vue component, call `useLofGiftCardInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useLofGiftCardInfoQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLofGiftCardInfoQuery({
 *   code: // value for 'code'
 * });
 */
export function useLofGiftCardInfoQuery(variables: LofGiftCardInfoQueryVariables | VueCompositionApi.Ref<LofGiftCardInfoQueryVariables> | ReactiveFunction<LofGiftCardInfoQueryVariables>, options: VueApolloComposable.UseQueryOptions<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables>(LofGiftCardInfoDocument, variables, options)
}
export function useLofGiftCardInfoLazyQuery(variables?: LofGiftCardInfoQueryVariables | VueCompositionApi.Ref<LofGiftCardInfoQueryVariables> | ReactiveFunction<LofGiftCardInfoQueryVariables>, options: VueApolloComposable.UseQueryOptions<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables>(LofGiftCardInfoDocument, variables, options)
}
export type LofGiftCardInfoQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LofGiftCardInfoQuery, LofGiftCardInfoQueryVariables>
export const PickupLocationsDocument = gql`
    query pickupLocations($area: AreaInput, $filters: PickupLocationFilterInput, $sort: PickupLocationSortInput, $pageSize: Int, $currentPage: Int, $productsInfo: [ProductInfoInput]) {
  pickupLocations(
    area: $area
    filters: $filters
    sort: $sort
    pageSize: $pageSize
    currentPage: $currentPage
    productsInfo: $productsInfo
  ) {
    items {
      city
      contact_name
      country_id
      description
      email
      fax
      latitude
      longitude
      name
      phone
      pickup_location_code
      postcode
      region
      region_id
      street
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
    `

/**
 * __usePickupLocationsQuery__
 *
 * To run a query within a Vue component, call `usePickupLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePickupLocationsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePickupLocationsQuery({
 *   area: // value for 'area'
 *   filters: // value for 'filters'
 *   sort: // value for 'sort'
 *   pageSize: // value for 'pageSize'
 *   currentPage: // value for 'currentPage'
 *   productsInfo: // value for 'productsInfo'
 * });
 */
export function usePickupLocationsQuery(variables: PickupLocationsQueryVariables | VueCompositionApi.Ref<PickupLocationsQueryVariables> | ReactiveFunction<PickupLocationsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<PickupLocationsQuery, PickupLocationsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PickupLocationsQuery, PickupLocationsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PickupLocationsQuery, PickupLocationsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PickupLocationsQuery, PickupLocationsQueryVariables>(PickupLocationsDocument, variables, options)
}
export function usePickupLocationsLazyQuery(variables: PickupLocationsQueryVariables | VueCompositionApi.Ref<PickupLocationsQueryVariables> | ReactiveFunction<PickupLocationsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<PickupLocationsQuery, PickupLocationsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PickupLocationsQuery, PickupLocationsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PickupLocationsQuery, PickupLocationsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PickupLocationsQuery, PickupLocationsQueryVariables>(PickupLocationsDocument, variables, options)
}
export type PickupLocationsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PickupLocationsQuery, PickupLocationsQueryVariables>
export const ProductReviewRatingsMetadataDocument = gql`
    query productReviewRatingsMetadata {
  productReviewRatingsMetadata {
    items {
      id
      name
    }
  }
}
    `

/**
 * __useProductReviewRatingsMetadataQuery__
 *
 * To run a query within a Vue component, call `useProductReviewRatingsMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductReviewRatingsMetadataQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useProductReviewRatingsMetadataQuery();
 */
export function useProductReviewRatingsMetadataQuery(options: VueApolloComposable.UseQueryOptions<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables>(ProductReviewRatingsMetadataDocument, {}, options)
}
export function useProductReviewRatingsMetadataLazyQuery(options: VueApolloComposable.UseQueryOptions<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables>(ProductReviewRatingsMetadataDocument, {}, options)
}
export type ProductReviewRatingsMetadataQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ProductReviewRatingsMetadataQuery, ProductReviewRatingsMetadataQueryVariables>
export const ProductsDocument = gql`
    query products($filter: AggregationsFilterInput, $search: String, $filter1: ProductAttributeFilterInput, $pageSize: Int, $currentPage: Int, $sort: ProductAttributeSortInput) {
  products(
    search: $search
    filter: $filter1
    pageSize: $pageSize
    currentPage: $currentPage
    sort: $sort
  ) {
    aggregations(filter: $filter) {
      attribute_code
      count
      label
      position
    }
    items {
      canonical_url
      country_of_manufacture
      gift_message_available
      max_sale_qty
      meta_description
      meta_keyword
      meta_title
      min_sale_qty
      name
      new_from_date
      new_to_date
      only_x_left_in_stock
      options_container
      quantity
      rating_summary
      review_count
      sku
      special_price
      special_to_date
      stock_status
      swatch_image
      uid
      url_key
      url_suffix
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    sort_fields {
      default
    }
    suggestions {
      search
    }
    total_count
  }
}
    `

/**
 * __useProductsQuery__
 *
 * To run a query within a Vue component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useProductsQuery({
 *   filter: // value for 'filter'
 *   search: // value for 'search'
 *   filter1: // value for 'filter1'
 *   pageSize: // value for 'pageSize'
 *   currentPage: // value for 'currentPage'
 *   sort: // value for 'sort'
 * });
 */
export function useProductsQuery(variables: ProductsQueryVariables | VueCompositionApi.Ref<ProductsQueryVariables> | ReactiveFunction<ProductsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, variables, options)
}
export function useProductsLazyQuery(variables: ProductsQueryVariables | VueCompositionApi.Ref<ProductsQueryVariables> | ReactiveFunction<ProductsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, variables, options)
}
export type ProductsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ProductsQuery, ProductsQueryVariables>
export const RecaptchaFormConfigDocument = gql`
    query recaptchaFormConfig($formType: ReCaptchaFormEnum!) {
  recaptchaFormConfig(formType: $formType) {
    configurations {
      badge_position
      language_code
      minimum_score
      re_captcha_type
      technical_failure_message
      theme
      validation_failure_message
      website_key
    }
    is_enabled
  }
}
    `

/**
 * __useRecaptchaFormConfigQuery__
 *
 * To run a query within a Vue component, call `useRecaptchaFormConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecaptchaFormConfigQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRecaptchaFormConfigQuery({
 *   formType: // value for 'formType'
 * });
 */
export function useRecaptchaFormConfigQuery(variables: RecaptchaFormConfigQueryVariables | VueCompositionApi.Ref<RecaptchaFormConfigQueryVariables> | ReactiveFunction<RecaptchaFormConfigQueryVariables>, options: VueApolloComposable.UseQueryOptions<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables>(RecaptchaFormConfigDocument, variables, options)
}
export function useRecaptchaFormConfigLazyQuery(variables?: RecaptchaFormConfigQueryVariables | VueCompositionApi.Ref<RecaptchaFormConfigQueryVariables> | ReactiveFunction<RecaptchaFormConfigQueryVariables>, options: VueApolloComposable.UseQueryOptions<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables>(RecaptchaFormConfigDocument, variables, options)
}
export type RecaptchaFormConfigQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<RecaptchaFormConfigQuery, RecaptchaFormConfigQueryVariables>
export const RecaptchaV3ConfigDocument = gql`
    query recaptchaV3Config {
  recaptchaV3Config {
    badge_position
    failure_message
    forms
    is_enabled
    language_code
    minimum_score
    theme
    website_key
  }
}
    `

/**
 * __useRecaptchaV3ConfigQuery__
 *
 * To run a query within a Vue component, call `useRecaptchaV3ConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecaptchaV3ConfigQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRecaptchaV3ConfigQuery();
 */
export function useRecaptchaV3ConfigQuery(options: VueApolloComposable.UseQueryOptions<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables>(RecaptchaV3ConfigDocument, {}, options)
}
export function useRecaptchaV3ConfigLazyQuery(options: VueApolloComposable.UseQueryOptions<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables>(RecaptchaV3ConfigDocument, {}, options)
}
export type RecaptchaV3ConfigQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<RecaptchaV3ConfigQuery, RecaptchaV3ConfigQueryVariables>
export const RouteDocument = gql`
    query route($url: String!) {
  route(url: $url) {
    redirect_code
    relative_url
    type
  }
}
    `

/**
 * __useRouteQuery__
 *
 * To run a query within a Vue component, call `useRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useRouteQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRouteQuery({
 *   url: // value for 'url'
 * });
 */
export function useRouteQuery(variables: RouteQueryVariables | VueCompositionApi.Ref<RouteQueryVariables> | ReactiveFunction<RouteQueryVariables>, options: VueApolloComposable.UseQueryOptions<RouteQuery, RouteQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RouteQuery, RouteQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RouteQuery, RouteQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<RouteQuery, RouteQueryVariables>(RouteDocument, variables, options)
}
export function useRouteLazyQuery(variables?: RouteQueryVariables | VueCompositionApi.Ref<RouteQueryVariables> | ReactiveFunction<RouteQueryVariables>, options: VueApolloComposable.UseQueryOptions<RouteQuery, RouteQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<RouteQuery, RouteQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<RouteQuery, RouteQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<RouteQuery, RouteQueryVariables>(RouteDocument, variables, options)
}
export type RouteQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<RouteQuery, RouteQueryVariables>
export const StoreConfigDocument = gql`
    query storeConfig {
  storeConfig {
    absolute_footer
    allow_guests_to_write_product_reviews
    allow_items
    allow_order
    autocomplete_on_storefront
    base_currency_code
    base_link_url
    base_media_url
    base_static_url
    base_url
    braintree_3dsecure_allowspecific
    braintree_3dsecure_always_request_3ds
    braintree_3dsecure_specificcountry
    braintree_3dsecure_threshold_amount
    braintree_3dsecure_verify_3dsecure
    braintree_ach_direct_debit_vault_active
    braintree_applepay_merchant_name
    braintree_applepay_vault_active
    braintree_cc_vault_active
    braintree_cc_vault_cvv
    braintree_environment
    braintree_googlepay_btn_color
    braintree_googlepay_cctypes
    braintree_googlepay_merchant_id
    braintree_googlepay_vault_active
    braintree_local_payment_allowed_methods
    braintree_local_payment_fallback_button_text
    braintree_local_payment_redirect_on_fail
    braintree_merchant_account_id
    braintree_paypal_button_location_cart_type_credit_color
    braintree_paypal_button_location_cart_type_credit_label
    braintree_paypal_button_location_cart_type_credit_shape
    braintree_paypal_button_location_cart_type_credit_show
    braintree_paypal_button_location_cart_type_messaging_layout
    braintree_paypal_button_location_cart_type_messaging_logo
    braintree_paypal_button_location_cart_type_messaging_logo_position
    braintree_paypal_button_location_cart_type_messaging_show
    braintree_paypal_button_location_cart_type_messaging_text_color
    braintree_paypal_button_location_cart_type_paylater_color
    braintree_paypal_button_location_cart_type_paylater_label
    braintree_paypal_button_location_cart_type_paylater_shape
    braintree_paypal_button_location_cart_type_paylater_show
    braintree_paypal_button_location_cart_type_paypal_color
    braintree_paypal_button_location_cart_type_paypal_label
    braintree_paypal_button_location_cart_type_paypal_shape
    braintree_paypal_button_location_cart_type_paypal_show
    braintree_paypal_button_location_checkout_type_credit_color
    braintree_paypal_button_location_checkout_type_credit_label
    braintree_paypal_button_location_checkout_type_credit_shape
    braintree_paypal_button_location_checkout_type_credit_show
    braintree_paypal_button_location_checkout_type_messaging_layout
    braintree_paypal_button_location_checkout_type_messaging_logo
    braintree_paypal_button_location_checkout_type_messaging_logo_position
    braintree_paypal_button_location_checkout_type_messaging_show
    braintree_paypal_button_location_checkout_type_messaging_text_color
    braintree_paypal_button_location_checkout_type_paylater_color
    braintree_paypal_button_location_checkout_type_paylater_label
    braintree_paypal_button_location_checkout_type_paylater_shape
    braintree_paypal_button_location_checkout_type_paylater_show
    braintree_paypal_button_location_checkout_type_paypal_color
    braintree_paypal_button_location_checkout_type_paypal_label
    braintree_paypal_button_location_checkout_type_paypal_shape
    braintree_paypal_button_location_checkout_type_paypal_show
    braintree_paypal_button_location_productpage_type_credit_color
    braintree_paypal_button_location_productpage_type_credit_label
    braintree_paypal_button_location_productpage_type_credit_shape
    braintree_paypal_button_location_productpage_type_credit_show
    braintree_paypal_button_location_productpage_type_messaging_layout
    braintree_paypal_button_location_productpage_type_messaging_logo
    braintree_paypal_button_location_productpage_type_messaging_logo_position
    braintree_paypal_button_location_productpage_type_messaging_show
    braintree_paypal_button_location_productpage_type_messaging_text_color
    braintree_paypal_button_location_productpage_type_paylater_color
    braintree_paypal_button_location_productpage_type_paylater_label
    braintree_paypal_button_location_productpage_type_paylater_shape
    braintree_paypal_button_location_productpage_type_paylater_show
    braintree_paypal_button_location_productpage_type_paypal_color
    braintree_paypal_button_location_productpage_type_paypal_label
    braintree_paypal_button_location_productpage_type_paypal_shape
    braintree_paypal_button_location_productpage_type_paypal_show
    braintree_paypal_credit_uk_merchant_name
    braintree_paypal_display_on_shopping_cart
    braintree_paypal_merchant_country
    braintree_paypal_merchant_name_override
    braintree_paypal_require_billing_address
    braintree_paypal_send_cart_line_items
    braintree_paypal_vault_active
    cart_expires_in_days
    cart_summary_display_quantity
    catalog_default_sort_by
    category_fixed_product_tax_display_setting
    category_url_suffix
    check_money_order_enable_for_specific_countries
    check_money_order_enabled
    check_money_order_make_check_payable_to
    check_money_order_max_order_total
    check_money_order_min_order_total
    check_money_order_new_order_status
    check_money_order_payment_from_specific_countries
    check_money_order_send_check_to
    check_money_order_sort_order
    check_money_order_title
    cms_home_page
    cms_no_cookies
    cms_no_route
    configurable_product_image
    configurable_thumbnail_source
    contact_enabled
    copyright
    countries_with_required_region
    create_account_confirmation
    customer_access_token_lifetime
    default_country
    default_description
    default_display_currency_code
    default_keywords
    default_title
    demonotice
    display_product_prices_in_catalog
    display_shipping_prices
    display_state_if_optional
    fixed_product_taxes_apply_tax_to_fpt
    fixed_product_taxes_display_prices_in_emails
    fixed_product_taxes_display_prices_in_product_lists
    fixed_product_taxes_display_prices_in_sales_modules
    fixed_product_taxes_display_prices_on_product_view_page
    fixed_product_taxes_enable
    fixed_product_taxes_include_fpt_in_subtotal
    front
    grid_per_page
    grid_per_page_values
    grouped_product_image
    head_includes
    head_shortcut_icon
    header_logo_src
    is_checkout_agreements_enabled
    is_default_store
    is_default_store_group
    is_guest_checkout_enabled
    is_one_page_checkout_enabled
    list_mode
    list_per_page
    list_per_page_values
    locale
    logo_alt
    logo_height
    logo_width
    magento_wishlist_general_is_enabled
    max_items_in_order_summary
    minicart_display
    minicart_max_items
    minimum_password_length
    newsletter_enabled
    no_route
    optional_zip_countries
    order_cancellation_enabled
    order_cancellation_reasons {
      description
    }
    orders_invoices_credit_memos_display_full_summary
    orders_invoices_credit_memos_display_grandtotal
    orders_invoices_credit_memos_display_price
    orders_invoices_credit_memos_display_shipping_amount
    orders_invoices_credit_memos_display_subtotal
    orders_invoices_credit_memos_display_zero_tax
    payment_payflowpro_cc_vault_active
    product_fixed_product_tax_display_setting
    product_reviews_enabled
    product_url_suffix
    required_character_classes_number
    root_category_uid
    sales_fixed_product_tax_display_setting
    secure_base_link_url
    secure_base_media_url
    secure_base_static_url
    secure_base_url
    send_friend {
      enabled_for_customers
      enabled_for_guests
    }
    shopping_cart_display_full_summary
    shopping_cart_display_grand_total
    shopping_cart_display_price
    shopping_cart_display_shipping
    shopping_cart_display_subtotal
    shopping_cart_display_tax_gift_wrapping
    shopping_cart_display_zero_tax
    show_cms_breadcrumbs
    store_code
    store_group_code
    store_group_name
    store_name
    store_sort_order
    timezone
    title_prefix
    title_separator
    title_suffix
    use_store_in_url
    website_code
    website_name
    weight_unit
    welcome
    zero_subtotal_enable_for_specific_countries
    zero_subtotal_enabled
    zero_subtotal_new_order_status
    zero_subtotal_payment_action
    zero_subtotal_payment_from_specific_countries
    zero_subtotal_sort_order
    zero_subtotal_title
  }
}
    `

/**
 * __useStoreConfigQuery__
 *
 * To run a query within a Vue component, call `useStoreConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreConfigQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useStoreConfigQuery();
 */
export function useStoreConfigQuery(options: VueApolloComposable.UseQueryOptions<StoreConfigQuery, StoreConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<StoreConfigQuery, StoreConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<StoreConfigQuery, StoreConfigQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<StoreConfigQuery, StoreConfigQueryVariables>(StoreConfigDocument, {}, options)
}
export function useStoreConfigLazyQuery(options: VueApolloComposable.UseQueryOptions<StoreConfigQuery, StoreConfigQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<StoreConfigQuery, StoreConfigQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<StoreConfigQuery, StoreConfigQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<StoreConfigQuery, StoreConfigQueryVariables>(StoreConfigDocument, {}, options)
}
export type StoreConfigQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<StoreConfigQuery, StoreConfigQueryVariables>

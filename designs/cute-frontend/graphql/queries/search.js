import gql from 'graphql-tag';

export const search = gql`
query
{
  search(input: ) {
    totalItems
    items {
      sku
      slug
      productId
      productName
      productAsset {
        preview
      }
      productVariantId
      productVariantName
      productVariantAsset {
        preview
      }
      price {
        
        fragment ____ on SinglePrice {
            value
        }
        fragment ____ on PriceRange {
            min
            max
        }
      }
      priceWithTax
      currencyCode {
        USD
      }
      description
      facetIds
      facetValueIds
      collectionIds
      score
      inStock
    }
    totalItems
    facetValues {
      facetValue
      count
    }
    collections {
      collection
      count
    }
  }
}
`
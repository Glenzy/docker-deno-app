import { gql } from 'oak_graphql/mod.ts';

export const ProductTypes = gql`
  enum Brand {
    JORDAN,
    NIKE,
    ADIDAS
  }

  enum Category {
    BASKETBALL,
    RUNNING,
    SKATE_BOARDING,
    CASUAL
  }

  type Base_Product {
    _id: ID,
    brand: Brand!,
    price: Float!
    category: Category! 
  }

  type ItemsReturnValue {
    items: [String]
  }

  type Query {
    getAll: ItemsReturnValue
  }
  type Mutation {
    deleteOne: Boolean
  }

`
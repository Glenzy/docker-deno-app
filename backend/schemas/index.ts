import { gql } from "../config/deps.ts";
import { ProductTypes } from "./products.ts";

export const Schema = (gql as any)`
    extend type Query{
        _empty: String
    }
    extend type Mutation{
        _empty: String
    }
    ${ProductTypes}
`;
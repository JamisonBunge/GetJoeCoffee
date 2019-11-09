import { gql } from "apollo-boost";

const testQuery = gql` 
{
    getTest {
        test
    }
}
`

export {
    testQuery
};
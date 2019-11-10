import { gql } from "apollo-boost";

const getCoffeeLocationsQuery = gql` 
query($lat: String!, $lng: String!) {
    placesAt(lat: $lat, lng: $lng) {
        sitdown {
            name
            distance
            time
        }
        chain {
            name
            distance
            time
        }
        quick {
            name
            distance
            time
        }
    }
}
`

export {
    getCoffeeLocationsQuery
};
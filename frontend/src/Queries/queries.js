import { gql } from "apollo-boost";

const getCoffeeLocationsQuery = gql` 
query($lat: String!, $lng: String!) {
    placesAt(lat: $lat, lng: $lng) {
        sitdown {
            name
            distance
            time
            lat
            lng
        }
        chain {
            name
            distance
            time
            lat
            lng
        }
        quick {
            name
            distance
            time
            lat
            lng
        }
    }
}
`

export {
    getCoffeeLocationsQuery
};
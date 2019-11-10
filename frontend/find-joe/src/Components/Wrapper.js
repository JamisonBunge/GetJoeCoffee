import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import LocationDetails from './LocationDetails';
import MapComponent from './MapComponent';
import { getCoffeeLocationsQuery } from '../Queries/queries';



class Wrapper extends Component {
    
    constructor(props) {
        super(props);

    }


    render() {
        
        let data = this.props.data;
       
        //  console.log(data.variables.lat);

        if (data.loading === true || data.placesAt === undefined) {
            return(
                <div><p>Loading...</p></div>
            );
        } else {

            let placesAt = data.placesAt;
            return(
                
            <div>
                <div id="map"><MapComponent curLat={data.variables.lat} curLng={data.variables.lng} chain={placesAt.chain} sitdown={placesAt.sitdown} quick={placesAt.quick}/></div>
                <div id="title">
                    <h2>Get Joe Coffee :)</h2>
                    <LocationDetails chain={placesAt.chain} sitdown={placesAt.sitdown} quick={placesAt.quick} />
                </div>

            </div>

            );
        }
    }

}

export default graphql(getCoffeeLocationsQuery, {
  options: (props) => {
    return {
      variables: {
        lat: props.selectedLocation.lat,
        lng: props.selectedLocation.lng
      }
    }
  }
})(Wrapper);

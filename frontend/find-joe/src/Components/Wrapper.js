import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import LocationDetails from './LocationDetails';
import MapComponent from './MapComponent';
import { getCoffeeLocationsQuery } from '../Queries/queries';



class Wrapper extends Component {
    
    constructor(props) {
        super(props);
            this.state  = {
                currLoc: {'lat': '40.807537','lng':'-73.962570'}
            };
    }


    render() {
        
        let data = this.props.data;
       
        // console.log(data)

        if (data.loading === true || data.placesAt === undefined) {
            return(
                <div><p>Loading...</p></div>
            );
        } else {

            let placesAt = data.placesAt;
            return(
                
            <div>
                <div id="map"><MapComponent /></div>
                <div id="title">
                    <h2>Get Joe Coffee :)</h2>
                    <LocationDetails chain={placesAt.chain} sitdown={placesAt.sitdown} quick={placesAt.quick} />
                </div>
                
                <div id="options">
                <form>
                    <button type="button" className="button">Locate</button>
                </form>
                </div>

                
                
            </div>

            );
        }
    }

}

export default graphql(getCoffeeLocationsQuery, {
  options: (props) => {
    console.log("this is the props: ");
    console.log(props.selectedLocation.lat)
    return {
      variables: {
        lat: props.selectedLocation.lat,
        lng: props.selectedLocation.lng
      }
    }
  }
})(Wrapper);

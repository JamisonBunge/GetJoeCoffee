import React, {Component} from 'react';
// import { graphql } from 'react-apollo';
// import { testQuery } from '../Queries/queries';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class LocationDetails extends Component {
    
    // constructor(props) {
    //     super(props);
    // }


    render() {
        let data = this.props.data;
        console.log(data);

        return(
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                />
            </div>
            
        );
        
    }

}

//export default graphql(testQuery)(Map);
//export default LocationDetails;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCn_2DiLqysX40xZh5KKeVadEJEpmkN76A'
  })(Map);
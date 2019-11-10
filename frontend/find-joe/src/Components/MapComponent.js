import React, { Component } from 'react';
// import { graphql } from 'react-apollo';
// import { testQuery } from '../Queries/queries';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

// const searchArea = {
//     UL: { lat: 40.810563, lng: -73.96211 },
//     UR: { lat: 40.806997, lng: -73.953520 },
//     BL: { lat: 40.785251, lng: -73.979185 },
//     BR: { lat: 40.782083, lng: -73.971761 },
// }

// let calculatePlacement = () => {

//     let widthRange = searchArea.UL.lat - searchArea.UR.lat;
//     let lengthRange = searchArea.UL.long - searchArea.BR.long;

// };



class MapComponent extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        //let data = this.props.data;
        //console.log(data);

        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{ lat: 40.807694, lng: -73.962256 }}
                >

                </Map>
            </div>

        );

    }

}

//export default graphql(testQuery)(MapComponent);
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCn_2DiLqysX40xZh5KKeVadEJEpmkN76A'
})(MapComponent);
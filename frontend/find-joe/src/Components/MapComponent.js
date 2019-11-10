import React, { Component } from 'react';
// import { graphql } from 'react-apollo';
// import { testQuery } from '../Queries/queries';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};


class MapComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props;
        console.log(data);

        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{ lat: data.curLat, lng: data.curLng }}
                    center = {{ lat: data.curLat, lng: data.curLng }}
                >

                <Marker position={{ lat: data.curLat, lng: data.curLng}} />
                <Marker 
                    position={{ lat: data.chain.lat, lng: data.chain.lng}} />

                <Marker 
                    position={{ lat: data.sitdown.lat, lng: data.sitdown.lng}} />

                <Marker 
                    position={{ lat: data.quick.lat, lng: data.quick.lng}} />


                </Map>
            </div>

        );

    }

}

//export default graphql(testQuery)(MapComponent);
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCn_2DiLqysX40xZh5KKeVadEJEpmkN76A'
})(MapComponent);
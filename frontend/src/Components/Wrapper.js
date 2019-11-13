import React, { Component } from 'react';
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
    console.log(this.props)
    let lat = this.props.lat;
    let lng = this.props.lng

    if (data.loading === true || data.placesAt === undefined) {
      return (
        <div><p>Loading...</p></div>
      );
    } else {

      let placesAt = data.placesAt;
      return (

        <div>
          <div id="title">
            <h1>GetJoeCoffee :)</h1>
            <LocationDetails chain={placesAt.chain} sitdown={placesAt.sitdown} quick={placesAt.quick} />
          </div>
          <div id="map">
            <MapComponent curLat={lat} curLng={lng} chain={placesAt.chain} sitdown={placesAt.sitdown} quick={placesAt.quick} /></div>
        </div>

      );
    }
  }

}

export default graphql(getCoffeeLocationsQuery, {
  options: (props) => {
    console.log(props);
    console.log(props.lat)
    console.log(props.lng)
    return {
      variables: {
        lat: (props.lat).toString(),
        lng: (props.lng).toString()
      }
    }
  }
})(Wrapper);

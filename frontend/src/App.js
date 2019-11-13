import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Wrapper from './Components/Wrapper';
import { geolocated } from 'react-geolocated'


const client = new ApolloClient({
  uri: '/graphql', // Endpoint that we are making request queries to.
});


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currLoc: { 'lat': '40.807537', 'lng': '-73.962570' }
    };
  }

  // Used as a placeholder for now to demonstrate different locations.
  chooseRandomLocation = () => {
    let locations = [
      { 'lat': '40.807537', 'lng': '-73.962570' }, //Columbia
      { 'lat': '40.350121', 'lng': '-74.652781' }, //Princeton
      { 'lat': '40.757972', 'lng': '-73.985556' }]; // Times Square

    let rand = Math.floor(Math.random() * 3);
    let selectedLocation = locations[rand];
    console.log(selectedLocation);
    this.setState({ currLoc: selectedLocation })
    //return selectedLocation;
  };



  render() {

    console.log(this.props)
    if (!this.props.isGeolocationEnabled || !this.props.isGeolocationAvailable) {
      return (<div>Either location is not avaible or turned off</div>)
    } else if (!this.props.coords) {
      return (
        <div><p>Loading...</p></div>
      );
    }
    else {

      console.log(this.props.coords)
      return (
        <ApolloProvider client={client}>
          <div className="App">
            <Wrapper selectedLocation={this.state.currLoc} lat={this.props.coords.latitude} lng={this.props.coords.longitude} />
            {/* <div id="options">
              <form>
                <button type="button" className="button" onClick={this.chooseRandomLocation}>Locate</button>
              </form>
            </div> */}
          </div>

        </ApolloProvider>
      );
    }
  }


}

// export default graphql(getCoffeeLocationsQuery, {
//   options: (props) => {
//     return {
//       variables: {
//         lat: '40.807537',
//         lng: '-73.962570'
//       }
//     }
//   }
// })(App);
//export default App;

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);

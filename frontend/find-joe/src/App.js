import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Wrapper from './Components/Wrapper';


const client = new ApolloClient({
  uri: 'http://localhost:4000/', // Endpoint that we are making request queries to.
});


class App extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      currLoc: {'lat': '40.807537','lng':'-73.962570'}
  };
  }

  // Used as a placeholder for now to demonstrate different locations.
  chooseRandomLocation = () => {
    let locations = [
        {'lat': '40.807537','lng':'-73.962570'}, //Columbia
        {'lat': '40.350121','lng':'-74.652781'}, //Princeton
        {'lat': '40.757972','lng':'-73.985556'}]; // Times Square

    let rand = Math.floor(Math.random()*3);
    let selectedLocation = locations[rand];
    console.log(selectedLocation);
    this.setState({currLoc: selectedLocation})
    //return selectedLocation;
};



  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Wrapper selectedLocation={this.state.currLoc} />
          <div id="options">
              <form>
                  <button type="button" className="button" onClick={this.chooseRandomLocation}>Locate</button>
              </form>
          </div>
        </div>
        
      </ApolloProvider>
    );
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
export default App;

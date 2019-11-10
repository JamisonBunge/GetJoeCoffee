import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import LocationDetails from './Components/LocationDetails';
import MapComponent from './Components/MapComponent';


const client = new ApolloClient({
  uri: 'http://localhost:4000/', // Endpoint that we are making request queries to.
});


class App extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          {/* <LocationDetails /> */}

          <div id="options">
            <form>
              <button type="button" className="button">Locate</button>
            </form>
          </div>
          <div id="title">
            <h1>Find Joe :)</h1>
          </div>
          <div id="map"><MapComponent /></div>
        </div>
      </ApolloProvider>
    );
  }


}


export default App;

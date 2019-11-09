import React, {Component} from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import LocationDetails from './Components/LocationDetails';
import Map from './Components/Map';


const client = new ApolloClient({
  uri: 'http://localhost:4000/', // Endpoint that we are making request queries to.
});


class App extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ApolloProvider client = {client}>
        <div className="App">
          <p>Hello</p>
          <LocationDetails />
          {/* <Map /> */}
        </div>
      </ApolloProvider> 
    );
  }


}


export default App;

import React, {Component} from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import LocationDetails from './Components/LocationDetails';


const client = new ApolloClient({
  uri: 'https://localhost:4000', // Endpoint that we are making request queries to.
});


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApolloProvider client = {client}>
        <div className="App">
          <p>Hello</p>
          <LocationDetails />
        </div>
      </ApolloProvider> 
    );
  }


}


export default App;

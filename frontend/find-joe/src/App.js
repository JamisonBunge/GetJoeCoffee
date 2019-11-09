import React, {Component} from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';


const client = new ApolloClient({
  uri: 'https://localhost:3000',
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
        </div>
      </ApolloProvider> 
    );
  }


}


export default App;

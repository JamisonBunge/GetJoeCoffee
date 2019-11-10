import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Wrapper from './Components/Wrapper';


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
          <Wrapper />
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

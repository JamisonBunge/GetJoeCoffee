import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { testQuery } from '../Queries/queries';



class LocationDetails extends Component {
    
    constructor(props) {
        super(props);

    }


    render() {
      //  console.log(this.props);
        return(
            <div>
                <p></p>
            </div>
        );
    }

}

export default graphql(testQuery)(LocationDetails);
//export default LocationDetails;
import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { testQuery } from '../Queries/queries';



class LocationDetails extends Component {
    
    constructor(props) {
        super(props);

    }


    render() {
        let data = this.props.data;
        console.log(data);

        if (data.loading === true || data.test === undefined) {
            return(
                <div><p>Loading...</p></div>
            );
        } else {
            return(
                <div>
                    <p>{data.test}</p>
                </div>

            );
        }
        //return(<div></div>);
        
    }

}

export default graphql(testQuery)(LocationDetails);
//export default LocationDetails;
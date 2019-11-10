import React, {Component} from 'react';



class LocationDetails extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {

        let data = this.props
        console.log(data);

        return(
            <div id="spots">
                <div id="chain">
                    <h2>Chain</h2>
                </div>
                <div id="quick">
                    <h2>Quick</h2>
                </div>
                <div id="sitdown">
                    <h2>Sitdown</h2>
                </div>
            </div>

        );

        
    }

}

//export default graphql(testQuery)(LocationDetails);
export default LocationDetails;

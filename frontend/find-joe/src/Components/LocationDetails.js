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
                    <h5>Chain: {data.chain.name} .... {data.chain.distance}/{data.chain.time} Away</h5>
                </div>
                <div id="quick">
                    <h5>Quick: {data.quick.name} .... {data.quick.distance}/{data.quick.time} Away</h5>
                </div>
                <div id="sitdown">
                    <h5>Sitdown: {data.sitdown.name} .... {data.sitdown.distance}/{data.sitdown.time} Away</h5>
                </div>
            </div>

        );

        
    }

}

//export default graphql(testQuery)(LocationDetails);
export default LocationDetails;

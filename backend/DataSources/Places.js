const { RESTDataSource } = require("apollo-datasource-rest");

class Places extends RESTDataSource {
    constructor() {
        super();
        this.ClientID = "AIzaSyCn_2DiLqysX40xZh5KKeVadEJEpmkN76A";
        //this.baseURL = "";
    }
    willSendRequest(request) {
        request.headers.set('Client-ID', this.ClientID);
    }
    async testAPI() {
        var result = await this.get(" https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters")
        console.log(result)
        return result.data
    }
    getPlaces() {
        this.testAPI();
        return { "quick": "starbucks", "hipster": "joes", "sitdown": "new york basics" }
    }

}
module.exports = Places

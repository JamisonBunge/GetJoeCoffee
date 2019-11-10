const { RESTDataSource } = require("apollo-datasource-rest");

class Places extends RESTDataSource {
    constructor() {
        super();
        this.ClientID = "AIzaSyCn_2DiLqysX40xZh5KKeVadEJEpmkN76A";
        this.otherkey = "AIzaSyCn_2DiLqysX40xZh5KKeVadEJEpmkN76A"
        //this.baseURL = "";
    }
    willSendRequest(request) {
        //request.headers.set('key', this.apiKey);
    }

    async useDistanceAPI(dstLat, dstLng, curLat, curLng) {

        //ADD DISTANCE PROPERTY
        //ADD TIME PROPERTY
        let result = await this.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${curLat},${curLng}&destinations=${dstLat},${dstLng}&key=AIzaSyCn_2DiLqysX40xZh5KKeVadEJEpmkN76A&mode=walking&units=imperial`);
        let info = result.rows[0].elements[0];
        //console.log(result.rows[0].elements[0].distance.text)
        // let info = result.rows[0]
        // console.log(info + "\n")

        return { "distance": info.distance.text, "time": info.duration.text }

    }


    async usePlacesAPI() {

        //COMES FROM FRONT END
        let curLat = 40.807537;
        let curLng = -73.962570;

        //princeton
        curLat = 40.350121
        curLng = -74.652781


        //fredonia
        curLat = 42.434960
        curLng = -79.335386


        var result = await this.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${curLat},${curLng}&radius=3500&type=cafe&&key=` + this.ClientID)
        //console.log("https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street.i&location=42.3675294,-71.186966&radius=1000&key" + this.ClientID)
        //console.log("THIS:");
        //  console.log(result)
        let nearbyPlaces = result.results;



        // Using results of the Places API nearby results, create our own objects to use
        // containing only the relevant data provided that we need, such as place name,
        // latitude, longitude, type(s).
        // All of this will go into the array called places, representing the simpler
        // objects representing nearby places.
        let places = [];
        for (let entry of nearbyPlaces) {
            let place = new Object();
            place.name = entry.name;
            place.lat = entry.geometry.location.lat;
            place.lng = entry.geometry.location.lng;
            place.types = entry.types;
            places.push(place);
            // console.log(place + "\n")
        }

        for (let place of places) {
            let distanceInfo = await this.useDistanceAPI(place.lat, place.lng, curLat, curLng);
            place.distance = distanceInfo.distance;
            place.time = distanceInfo.time;
        }

        // Now we need to categorize the nearby places into one of the three categories (quick, sitdown, or chain).
        // A chain is either Starbucks, McDonalds, or Dunkins, regardless of the types. We make this judgement based on name.
        // A sitdown place is a place that is both a cafe and a restaurant type.
        // A quick place is a place that is only type cafe, not type restaraunt.
        let bigChains = ["McDonald's", "Starbucks", "Dunkin'"];
        let chains = [];
        let sitdowns = [];
        let quicks = [];

        // Loop through places and categorize as we go!
        // If its a big chain, immediately add it to chains.
        // Next, check if it includes restaurant in its type list. If so, add it to sitdowns.
        // Else, (if it is just a cafe type), add it to quicks.
        for (let place of places) {
            if (bigChains.includes(place.name)) {
                chains.push(place);
            } else if (place.types.includes('restaurant')) {
                sitdowns.push(place);
            } else {
                quicks.push(place);
            }
        }
        // for (let x of chains) { process.stdout.write(x.name + ", ") }
        return { "chainList": chains, "sitdownList": sitdowns, "quickList": quicks }
    }
    async getPlaces() {
        let collections = await this.usePlacesAPI();

        collections.quickList.sort((a, b) => (a.distance.split(" ")[0] - b.distance.split(" ")[0]));
        collections.chainList.sort((a, b) => (a.distance.split(" ")[0] - b.distance.split(" ")[0]));
        collections.sitdownList.sort((a, b) => (a.distance.split(" ")[0] - b.distance.split(" ")[0]));

        let backup = {
            name: "",
            lat: "",
            lng: "",
            distance: "",
            time: ""
        }

        let quickChoice = collections.quickList.length == 0 ? backup : collections.quickList[0];
        let sitdownChoice = collections.sitdownList.length == 0 ? backup : collections.sitdownList[0];
        let chainChoice = collections.chainList.length == 0 ? backup : collections.chainList[0];

        //collections = await this.useDistanceAPI(collections);


        console.log(collections);

        return { "quick": quickChoice, "chain": chainChoice, "sitdown": sitdownChoice }
    }

}
module.exports = Places

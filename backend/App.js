const { ApolloServer, gql } = require('apollo-server');
const Places = require('./DataSources/Places')

const schema = gql`
type Query {
	test: String,
	placesAt(lat: String!,lng: String!): Places
},
type Places {
	quick: Spot,
	chain: Spot,
	sitdown: Spot
}
type Spot {
	name: String,
	lat: String,
	lng: String,
	distance: String,
	time: String
}
`;

const resolvers = {
	Query: {
		test: () => { return "temp" },
		// places: async (parent, { lat, lng }, { dataSources }) => dataSources.Places.getPlaces(lat,lng),
		placesAt: async (parent, { lat, lng }, { dataSources }) => dataSources.Places.getPlaces(lat, lng),
	},
	// ,
};



const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	dataSources: () => ({
		Places: new Places,
	})
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});

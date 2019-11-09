const { ApolloServer, gql } = require('apollo-server');
const Places = require('./DataSources/Places')

const schema = gql`
type Query {
	test: String,
	places: Places
},
type Places {
	quick: String,
	hipster: String,
	sitdown: String
}
`;

const resolvers = {
	Query: {
		test: () => { return "temp" },
		places: async (parent, { location }, { dataSources }) => dataSources.Places.getPlaces(),
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

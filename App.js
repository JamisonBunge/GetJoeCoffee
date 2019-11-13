const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const Places = require('./DataSources/Places')
const path = require('path')
const app = express();
const cors = require('cors');

app.use(cors());


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

// server.listen().then(({ url }) => {
// 	console.log(`Server ready at ${url}`);
// });

// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
// 	console.log(`🚀 Server ready at ${url}`);
// });


//
app.use(express.static('public'))

//redirect everything that isnt to /graphql to the index.thml of the react app build


// Add the Apollo Server’s middleware
server.applyMiddleware({ app })

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
app.listen({ port: process.env.PORT || 5000 }, () => console.log(`Apollo Server is listening on ${server.graphqlPath}`))

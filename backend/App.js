const { ApolloServer, gql } = require('apollo-server');

const schema =  gql`
type Query {
	test: String
}
`;

const resolvers = {
	Query: {
		test: () => {return "temp"},
	},
};

const server = new ApolloServer( { 
	typeDefs: schema, 
	resolvers, 
} );

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});

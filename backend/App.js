const { ApolloServer, gql } = require('apollo-server');

const schema =  gql`
type Query {
	test: String
}
`;

const resolvers = {
	Query: {
		test: () => printalso(),
	},
};

let printalso = () => {
	console.log("hey")
	return "temp"
}

const server = new ApolloServer( { 
	typeDefs: schema, 
	resolvers, 
} );

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});

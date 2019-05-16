const { ApolloServer } = require("apollo-server/dist/index");
const typeDefs = require("./schema/typedefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}graphql`);
});

// source: https://github.com/hemanth/graphql-demo
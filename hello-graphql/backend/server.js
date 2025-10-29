const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();
const PORT = 5000;
app.use(cors()); 

const typeDefs = gql`
type Query {
message: String!
}
`;

const resolvers = {
    Query: {
        message: () => 'Hello from GraphQL Server!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(PORT, () => {
        console.log(`🚀 Server ready at
http://localhost:${PORT}${server.graphqlPath}`);
    });
}
startServer();
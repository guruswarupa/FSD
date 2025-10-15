import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginLandingPageLocalDefault } from
    "@apollo/server/plugin/landingPage/default";
import cors from "cors";
import bodyParser from "body-parser";
import { gql } from "graphql-tag";
import products from "./products.js";

const typeDefs = gql`
type Product { id: ID!, name: String!, price: Float! }
type Query { hello: String, products: [Product], product(id: ID!): Product }
type Mutation {
addProduct(name: String!, price: Float!): Product
updateProduct(id: ID!, name: String, price: Float): Product
deleteProduct(id: ID!): String
}`;

const resolvers = {
    Query: {
        hello: () => "Hello, GraphQL!",
        products: () => products,
        product: (_, { id }) => products.find(p => p.id == id),
    },
    Mutation: {
        addProduct: (_, { name, price }) => {
            const p = { id: Date.now(), name, price };
            products.push(p);
            return p;
        },
        updateProduct: (_, { id, name, price }) => {
            const p = products.find(p => p.id == id);
            if (!p) throw new Error("Product not found");
            if (name) p.name = name;
            if (price) p.price = price;
            return p;
        },
        deleteProduct: (_, { id }) => {
            const i = products.findIndex(p => p.id == id);
            if (i === -1) throw new Error("Product not found");
            products.splice(i, 1);
            return `Product ${id} deleted`;
        },
    },
};

const app = express();
app.use(cors(), bodyParser.json());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

await server.start();

app.use("/graphql", expressMiddleware(server));
app.listen(5000, () => {
    console.log(" GraphQL server ready at http://localhost:5000/graphql");
});
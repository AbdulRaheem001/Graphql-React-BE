import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import connectDB from "./Db/db.js";

const app = express();
connectDB();
const port = 3000;

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await server.start(); // Wait for the server to start
  server.applyMiddleware({ app });
  
  app.listen({ port }, () => {
    console.log(`Server is running on http://localhost:${port}/graphql`);
  });
})();

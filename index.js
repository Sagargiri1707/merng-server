const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");

const { MONGODB } = require("./config");
const typeDefs = require("./graphQl/typeDefs");
const resolvers = require("./graphQl/resolvers");

const pubsub = new PubSub();
const server = new ApolloServer({
  cors: {
    origin: "*",
    credentials: true,
  },
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req,
    pubsub,
  }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return server.listen({ port: process.env.PORT || 5000 });
  })
  .then((res) => {
    console.log(`server started at port ${res.url}`);
  })
  .catch((err) => {
    console.log(err);
  });

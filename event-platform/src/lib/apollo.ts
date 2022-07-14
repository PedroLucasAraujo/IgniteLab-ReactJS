import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl4o8ddzj17y201xxggp8gobf/master",
  cache: new InMemoryCache(),
});

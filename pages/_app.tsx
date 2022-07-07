import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

// Data from GrapqCMS
const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl591wrec5kb801um1xjoe5g8/master",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

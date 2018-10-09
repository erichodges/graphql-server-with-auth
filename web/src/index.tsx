import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Routes } from "./Routes"


// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'http//localhost:4000/graphql' });


ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

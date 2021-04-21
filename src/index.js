import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App/App';
import { ApolloProvider } from '@apollo/client/react';

import './index.css';

const client = new ApolloClient({
  uri: 'https://garden-party-veg.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

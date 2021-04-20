import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import App from './App/App';

import './index.css';

const client = new ApolloClient({
  uri: 'https://garden-party-veg.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query {
        getAllPosts {
          id
          userId
          title
          description
          createdAt
          tags
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

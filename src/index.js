import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App/App';

import './index.css';

const client = new ApolloClient({
  uri: 'https://garden-party-veg.herokuapp.com/api/v1/users',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

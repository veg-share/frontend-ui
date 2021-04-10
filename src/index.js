import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './workerRegistration';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './state/store'
import { Auth0Provider } from './contexts/Auth0Context';

// import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(
  <Auth0Provider>
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
  , document.getElementById('root')
);

// serviceWorker.unregister();


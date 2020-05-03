import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './state/store'

// import Table from './components/Table/Table';
// import * as serviceWorker from './serviceWorker.js';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<Table />, document.getElementById('root'));

// serviceWorker.unregister();
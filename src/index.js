import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/animate.css/animate.min.css";

import store from './App/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
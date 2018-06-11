import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import storeFactory from './Components/storeFactory';

export const store = storeFactory();
const baseURL = 'https://data.colorado.gov/resource/udxx-a7kq';
const axiosInstance = axios.create({
  baseURL: baseURL
});
global.axiosInstance = axiosInstance;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

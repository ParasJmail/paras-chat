import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './store';
import {Provider as AlerProvider, positions, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlerProvider template={AlertTemplate} {...options}>
      <App />
      </AlerProvider>
    </Provider>
  </React.StrictMode>,
    document.getElementById('root')
);

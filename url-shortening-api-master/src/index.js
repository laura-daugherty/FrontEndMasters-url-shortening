import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
console.log("root", rootElement)
ReactDOM.render(
  <App />,
  rootElement
);
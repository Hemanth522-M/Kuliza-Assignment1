import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Screen1 from './components/screen1';
import Screen2 from './components/screen2';
import { BrowserRouter, Route } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route path="/" exact component={Screen1} />
      <Route path="/screen2" component={Screen2} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

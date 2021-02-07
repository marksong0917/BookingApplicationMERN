import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // npm install --save mdbreact
import 'bootstrap-css-only/css/bootstrap.min.css'; // need (npm install --save mdbreact)
import 'mdbreact/dist/css/mdb.css'; // need (npm install --save mdbreact)
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);

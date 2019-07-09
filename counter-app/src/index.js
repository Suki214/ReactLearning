import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import Counters from './components/counters';

ReactDOM.render(
  <Counters />,
  document.getElementById('root')
);
  
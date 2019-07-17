import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <div><h1>Hello World!</h1><p>This is a Paragraph</p></div>,
  document.getElementById('root')
);


var myNewP = document.createElement("p");
myNewP.innerHTML="this is a paragraph";
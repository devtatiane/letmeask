import React from 'react';
import ReactDOM from 'react-dom'; //DOM = Document Object Model, representação do HTML em um objeto JS
import App from './App';

import './services/Firebase';

import './styles/global.scss';

ReactDOM.render(   //método render: exibe algo dentro do elemento HTML
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


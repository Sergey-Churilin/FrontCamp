import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import css from './styles/style.css';

ReactDOM.hydrate(
    <App/>
    ,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import css from './styles/style.css';
ReactDOM.hydrate(
    <Routes/>,
    document.getElementById('app')
);

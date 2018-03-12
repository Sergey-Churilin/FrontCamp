import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import css from './styles/style.css';
// if change render to hydrate, an warning occured - Warning: Expected server HTML to contain a matching <div> in <div>.
//https://github.com/nozzle/react-static/issues/144
//https://github.com/nozzle/react-static/pull/214
ReactDOM.render(
    <Routes/>,
    document.getElementById('app')
);

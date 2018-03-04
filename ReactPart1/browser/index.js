import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import AddPost from './components/AddPost.js';
import Menu from './components/Menu.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import css from './styles/style.css';

ReactDOM.render(
    <BrowserRouter >
    <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/posts" component={App}/>
        <Route path="/addpost" component={AddPost}/>
    </Switch>
    </BrowserRouter>
    ,
    document.getElementById('app')
);

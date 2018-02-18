import React from "react";
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './components/App';
import AddPost from './components/AddPost';
import Main from './components/Main';
import Menu from './components/Menu';

ReactDOM.render(
/*    <BrowserRouter>
        <div>
            <Menu/>
            <Route path={'/'} component={Main}/>
            <Route path={'/posts'} component={App}/>
            <Route path={'/addpost'} component={AddPost}/>
        </div>
    </BrowserRouter>*/
    <App/>
    ,
    document.getElementById('app')
);
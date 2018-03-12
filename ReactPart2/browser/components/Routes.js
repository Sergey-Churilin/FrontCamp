import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import AddPost from "./AddPost";
import Login from "./Login";
import store from "./store";
import PostsContainer from "./PostsContainer";

const Routes = props => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/main" component={PostsContainer}/>
                    <Route path="/addPost" component={AddPost}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default Routes
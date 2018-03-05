import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from "./Menu";
import AddPost from "./AddPost";
import store from "./store";
import App from "./App";

const Routes = props => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Menu}/>
                    <Route path="/main" component={App}/>
                    <Route path="/addPost" component={AddPost}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default Routes
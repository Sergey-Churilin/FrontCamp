import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import postsReducer from '../reducers/PostReducer';
import userReducer from '../reducers/UserReducer';

const appReducer = combineReducers({
    appPosts: postsReducer,
    authorization:userReducer
});

const store = createStore(appReducer,
    applyMiddleware(
        thunkMiddleware
    ));

export default store;
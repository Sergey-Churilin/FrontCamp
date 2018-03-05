import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import postsReducer from '../reducers/PostReducer';

const appReducer = combineReducers({
    appPosts: postsReducer
});

const store = createStore(appReducer,
    applyMiddleware(
        thunkMiddleware
    ));

export default store;
const uuidV4 = require('uuid/v4');
import axios from 'axios';

function mapStateToProps(state) {
    return state;
}

function mapActionsToProps(dispatch) {
    return {
        deletePost(todoId, token) {
            const that = this;
            axios.delete('http://localhost:3000/posts/' + todoId, {
                headers: {Authorization: token}
            })
                .then(function (response) {
                    that.getPosts();
                })
                .catch(function (error) {
                    console.log(error);
                });


        },
        addPost(payload, token) {
            const that = this;
            const newPost = {
                id: uuidV4(),
                author: payload.author,
                post: payload.post
            };
            axios.post('http://localhost:3000/posts', newPost, {
                headers: {Authorization: token}
            })
                .then(function (response) {
                    that.getPosts();
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
        filterPosts(payload) {
            dispatch({
                type: 'FILTER_POSTS',
                payload: payload
            });
        },
        getPosts() {
            axios.get('http://localhost:3000/posts')
                .then(function (response) {
                    dispatch({
                        type: 'GET_POSTS',
                        payload: response.data
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        login(userData) {
            axios.post('http://localhost:3000/login', userData)
                .then(function (response) {
                    dispatch({
                        type: 'LOGIN_LOGOUT',
                        payload: {token: response.data.token, isLoggedIn: true}
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        logout() {
            dispatch({
                type: 'LOGIN_LOGOUT',
                payload: {token: "", isLoggedIn: false}
            });
        }
    };
}

export {mapStateToProps, mapActionsToProps};
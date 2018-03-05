const uuidV4 = require('uuid/v4');
import axios from 'axios';

const initialState = {
    "posts": [
        {
            id: 1,
            "author": "John Doe",
            "post": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "visible": true
        },
        {
            id: 2,
            "author": "Spartanec",
            "post": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "visible": true
        },
        {
            id: 3,
            "author": "NLO",
            "post": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "visible": true
        }
    ],
    "filter": ""
};

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'DELETE_POST': {
            let posts = state.posts;
            state.posts = posts.filter((post) => action.payload !== post.id);
            return Object.assign({},state);
        }
        case 'FILTER_POSTS': {
            let posts = state.posts;
            posts.forEach((post) => post.visible = post.author.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0 || post.author === "");
            return Object.assign({},state);
        }
        case 'ADD_POST': {
            let filter = state.filter;
            const newPost = {
                id: uuidV4(),
                author: action.payload.author,
                post: action.payload.post,
                visible: action.payload.author === filter || filter === ""
            };

            let posts = state.posts;
            posts.push(newPost);
            return Object.assign({},state);
        }
        case 'GET_POSTS':{
            axios.get('http://localhost:8080/posts')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        default:
            return state;
    }
}

module.exports = postsReducer;
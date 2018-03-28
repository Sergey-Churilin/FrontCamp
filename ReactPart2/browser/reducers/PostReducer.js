function postsReducer(state = {}, action) {
    switch (action.type) {
        case 'FILTER_POSTS': {
            let posts = state.posts;
            posts.forEach((post) => post.visible = post.author.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0 || post.author === "");
            return Object.assign({}, state);
        }
        case 'GET_POSTS': {
            state.posts = action.payload;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
}

module.exports = postsReducer;
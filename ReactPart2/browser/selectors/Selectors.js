function mapStateToProps(state) {
    return state;
}

function mapActionsToProps(dispatch) {
    return {
        deletePost(todoId) {
            dispatch({
                type: 'DELETE_POST',
                payload: todoId
            });
        },
        addPost(payload) {
            dispatch({
                type: 'ADD_POST',
                payload: payload
            });
        },
        filterPosts(payload) {
            dispatch({
                type: 'FILTER_POSTS',
                payload: payload
            });
        },
        getPosts(){
            dispatch({
                type: 'GET_POSTS',
                payload: {}
            });
        }
    };
}

export {mapStateToProps, mapActionsToProps};
function userReducer(state = {}, action) {
    switch (action.type) {
        case 'LOGIN_LOGOUT': {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
}

module.exports = userReducer;
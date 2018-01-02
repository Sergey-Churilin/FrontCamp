import ErrorHandler from '../ErrorHandler';

// initial state
const state = {
    articles: [],
    dataRecieved: false,
    dataRecieving: false,
    error: false
};

/**
 * Class representing Reducers
 */
export default class Reducers {
    /**
     * Data reducer
     * @param {object} state - Current state
     * @param {object} action - Action for reducer
     */
    dataReducer(state = state, action) {
        switch (action.type) {
            case "DATA_CALL" :
                return Object.assign({}, state, {dataRecieving: true});

            case "DATA_RECEIVED" :
                return Object.assign({}, state, {
                    dataRecieving: false,
                    dataRecieved: true,
                    articles: action.articles
                });

            case "DATA_ERROR" :
                const errorHandler = new ErrorHandler();
                errorHandler.handleError(response);

                return Object.assign({}, state, {
                    dataRecieving: false,
                    dataRecieved: true,
                    articles: [],
                    error: true
                });
            default:
                return state;
        }
    }
}
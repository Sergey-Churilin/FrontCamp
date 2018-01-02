/**
 * Class representing simple Redux approach
 */
export default class Redux {

    /**
     * Creates store for application
     *
     * @param {function} reducer - Function that will be called in dispatch method
     */
    createStore(reducer) {
        let state;
        let listeners = [];

        const getState = () => state;

        const dispatch = (action) => {
            state = reducer(state, action);
            listeners.forEach(listener => listener())
        };

        const subscribe = (listener) => {
            listeners.push(listener);
            return () => {
                listeners = listeners.filter(l => l !== listener);
            }
        };

        dispatch({});

        return {getState, dispatch, subscribe};
    }

    /**
     * Combines reducers that will be called for every dispatch
     *
     * @param {array} reducers - Array of reducers
     */
    combineReducers(reducers) {
        return (state = {}, action) => {
            return Object.keys(reducers).reduce(
                (nextState, key) => {
                    nextState[key] = reducers[key](
                        state[key],
                        action
                    );
                    return nextState;
                },
                {}
            )
        }
    };
}
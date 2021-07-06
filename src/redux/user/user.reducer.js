// function that gets a previous state and an action. That action is an object that has a type and a payload.
// At the beginning, the first time, there won't be any state when the action fires, so we need to make an initial state
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;
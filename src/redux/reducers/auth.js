import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
 } from '../actions/types';

const initialState = {
    isAuthenticated: null,
    loading: true, // Loading is normally applicable to display a spinner during an async process. 
    user: null
}

// A reducer normally serves the purpose of handling a data section of the store, and starts with the initial state,
//     so that if nothing changes, the initial state would be returned by the reducer.
export default function auth (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case REGISTER_SUCCESS:
           return {
               ...state, // We have to spread the current state first, to prevent mutation of the state.
               user: payload, // The user data that was dispatched as the payload, would be received here and saved in the store.
               isAuthenticated: true, // Since the user is registered, let's just set the user as authenticated.
               loading: false // We set the loading to false to stop the spinner from showing, I will get to that.
           }

        case REGISTER_FAIL: // In cage the registration fails, this action gets dispatched, and we update the state as follows:
            return {
                ...state, // // We have to spread the current state first, to prevent mutation of the state.
                isAuthenticated: false, // We set isAuthenticated to false
                loading: false // Even when the registration fails, we still have to stop the spinner, so we set loading to false.
            }
        case USER_LOADED:
        case AUTH_ERROR:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        
        default: return state
    }
}
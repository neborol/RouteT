import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    STATUS_LOGGEDIN,
    STATUS_NOTLOGGEDIN
 } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    loading: true, // Loading is normally applicable to display a spinner during an async process. 
    user: null
}

// A reducer normally serves the purpose of handling a data section of the store, and starts with the initial state,
//     so that if nothing changes, the initial state would be returned by the reducer.
export default function auth (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
           localStorage.setItem('currentUser', JSON.stringify(payload)); 
           return {
               ...state, // We have to spread the current state first, to prevent mutation of the state.
               user: payload, // The user data that was dispatched as the payload, would be received here and saved in the store.
               isAuthenticated: true, // Since the user is registered, let's just set the user as authenticated.
               loading: false // We set the loading to false to stop the spinner from showing, I will get to that.
           }

        case STATUS_LOGGEDIN:
            return {
                ...state,
                isAuthenticated: true
            }

        case STATUS_NOTLOGGEDIN:
            return {
                ...state,
                isAuthenticated: false
            }

        case REGISTER_FAIL: // In cage the registration fails, this action gets dispatched, and we update the state as follows:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            const userNotLoggedIn = {...state.auth.user, loggedIn: false};
            localStorage.setItem('currentUser', JSON.stringify(userNotLoggedIn));
            return {
                    ...state, // // We have to spread the current state first, to prevent mutation of the state.
                    isAuthenticated: false, // We set isAuthenticated to false
                    loading: false, // Even when the registration fails, we still have to stop the spinner, so we set loading to false.
                    user: userNotLoggedIn
                }

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        
        default: return state
    }
}
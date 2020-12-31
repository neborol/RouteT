// User registration and User management is necesary for tracking the varios developers' profiles
// In the developer profiles, management of their individual ideas would be handled, hence login
// authentication is necessary.
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from './types';

// Load User
export const loadUser = (data) => async dispatch => {

   // Fragile code that can break because of side effects.
    try {
        // This will be replaced by an async request

        dispatch({
            type: USER_LOADED, // Dispatch an action to let app know that User has been loaded and send the User as payload.
            payload: data
        });

    } catch (err) {
        // In the case where user loading failed, we register and auth error
        dispatch({
            type: AUTH_ERROR
        });
    }
}

// Register User
export const register = ({ name, email, password }) => async dispatch => {

    // const body = JSON.stringify({name, email, password});
    const body = { name, email, password };

    try {
        // Async request to store the registered user data
        const toBeRegisteredUser = body;

        // If the execution gets to this point, then the above async request to store the user 
        //     was successful, so dispatch a register success action to the store.
        dispatch({
            type: REGISTER_SUCCESS,
            payload: toBeRegisteredUser
        });

        // Since the user has been registered, we can now display the user data by loading it.
        dispatch(loadUser({...toBeRegisteredUser })); 

    } catch (err) {
        // For a normal async request, errors would be handled here. If something goes wrong, the REGISTER_FAIL action will be dispatched.
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(err => console.log(err.msg));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
}


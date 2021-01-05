// User registration and User management is necesary for tracking the varios developers' profiles
// In the developer profiles, management of their individual ideas would be handled, hence login
// authentication is necessary.
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
} from './types';

import toastify from '../../components/utilities/Toastify';
import { v4 as uuidv4 } from 'uuid';

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


// Set login status
export const setLoginStatus = (status) => async dispatch => {
    
    if (status) {
        dispatch({
            type: STATUS_LOGGEDIN
        });
    } else {
        dispatch({
            type: STATUS_NOTLOGGEDIN
        });            
    }
}

// Register User
export const register = ({ name, email, password }) => async dispatch => {

    // const body = JSON.stringify({name, email, password});
    const body = { id: uuidv4(), name, email, password, isAuthenticated: true };

    try {
        // Async request to store the registered user data

        // If the execution gets to this point, then the above async request to store the user 
        //     was successful, so dispatch a register success action to the store.

        dispatch({
            type: REGISTER_SUCCESS,
            payload: body
        });

        // Since the user has been registered, we can now display the user data by loading it.
        dispatch(loadUser({...body })); 

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

// Logout / Clear the profile
export const logout = () => dispatch => {

    dispatch({
        type: LOGOUT
    });
}


// Login User
export const login = (email, password) => dispatch => {

    try {
        // Perform and async task to send login credentials to the backend for validation, 
        // and if validation is successful, and if the execution crosses this point, dispatch login success.
        // <ASYNC PROCESS GOES HERE>

        // For simplicity sake, I would do a siple login validation here, and if successful, I woul broadcast login success.
        // Get registered user from the session storage.
        const currentDev = JSON.parse(localStorage.getItem('currentUser'));

        if (email === currentDev.email && password === currentDev.password) {
            toastify.success('Login is Successful!');

            const testUser = { email, password };

            // Normally, I would not pass the password to the local storage. 
            //      I am just doing it here because for simplicity sake, that is where I am storing the password for now.
            dispatch({
                type: LOGIN_SUCCESS,
                payload: testUser
            });

            dispatch(loadUser(testUser));       
        } else {
            toastify.error('Login Failed!');
            dispatch({
                type: LOGIN_FAIL,
                payload: null
            });
        }

    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });
    }
}
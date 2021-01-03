// Actions have to be setup this way, so that if some changes are required in the future, all changes would be done
//       only here, instead of making changes in all the thousands of places that these actions were used.
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'; 
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED'; 
export const AUTH_ERROR = 'AUTH_ERROR'; 
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'; 
export const LOGIN_FAIL = 'LOGIN_FAIL'; 
export const STATUS_LOGGEDIN = 'STATUS_LOGGEDIN'; 
export const STATUS_NOTLOGGEDIN = 'STATUS_NOTLOGGEDIN'; 

export const GET_PROFILE = 'GET_PROFILE';  
export const CLEAR_PROFILE = 'CLEAR_PROFILE'; 
export const PROFILE_ERROR = 'PROFILE_ERROR'; 
export const UPDATE_PROFILE = 'UPDATE_PROFILE'; 
export const PROFILE_DELETED = 'PROFILE_DELETED'; 
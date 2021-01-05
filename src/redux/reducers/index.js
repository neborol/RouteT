import { combineReducers } from 'redux'; // The combineReducer puts together all the individual reducers
import authSlice from './auth';
import profileSlice from './profile';

export default combineReducers({
    authSlice, // This represents just a specific section of the state that would be referenced within the app.
    profileSlice
});
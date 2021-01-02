import { combineReducers } from 'redux'; // The combineReducer puts together all the individual reducers
import auth from './auth';

export default combineReducers({
    auth // This represents just a specific section of the state that would be referenced within the app.
});
import { combineReducers } from 'redux'; // The combineReducer puts together all the individual reducers
import auth from './auth';

export default combineReducers({
    auth // At this point, we are managing only the auth section of the app.
});
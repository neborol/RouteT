import axios from 'axios';

import { 
    GET_PROFILE, PROFILE_ERROR
} from './types';

import toastify from '../../components/utilities/Toastify';
import configData from '../../config.json';
import getUserIdentity from '../../components/utilities/getUserIdentity';


// Create or update a profile
// We would need to make use of the history object here, whose .push method would help us redirect after a form submission. And history is used here because the <Redirect /> does not work in action creators.
export const createProfile = (formData, history, edit = false) => async dispatch => { // Dispatch here gets bound by react-redux if the curresponding mapDispatchToProps 
    getUserIdentity() // Set user as a global property to axios                                                                                  //        is an object, must be containing only action creators
                                                    
    try {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const resp = await axios.post(`${configData.base_url}/api/profile`, formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: resp.data
        });

        toastify.success(edit ? 'Profile Updated' : 'Profile Created');

        if (!edit) {
            history.push('/dashboard');
        }

    } catch (err) {
        const msg = 'Something went wrong while creating a profile.';
        console.log(err); // In production, I would not log the original errors to the console.
        toastify.error(msg);
       
        dispatch({
           type: PROFILE_ERROR,
           payload: { msg } 
        });
    }
}



// Get current users profile
export const getCurrentProfile = () => async dispatch => { // Dispatch here gets bound by react-redux if the curresponding mapDispatchToProps 
                                                           //    is an object, must be containing only action creators

   getUserIdentity() // Set user as a global property to axios 

    try {

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const res = await axios.get(`${configData.base_url}/api/profile/myprofile`, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: 'something happened while getting the profile'} 
        });
    }
}



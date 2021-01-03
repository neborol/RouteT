// import axios from 'axios';

import { 
    GET_PROFILE, PROFILE_ERROR
} from './types';

import toastify from '../../components/utilities/Toastify';



// Create or update a profile
export const createProfile = (formData, edit = false) => async dispatch => { // Dispatch here gets bound by react-redux if the curresponding mapDispatchToProps 
                                                           //    is an object, must be containing only action creators
    try {
        dispatch({
            type: GET_PROFILE,
            payload: formData
        });

        toastify.success(edit ? 'Profile Updated' : 'Profile Created');

        // if (!edit) {
        //     history.push('/dashboard');
        // }

    } catch (err) {
        const msg = 'Something went wrong while creating a profile.';
        console.log(err);
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
    try {
    // const res = await axios.get('/api/profile/me');
    dispatch({
            type: GET_PROFILE,
            // payload: res.data
            payload: {data: 'dummy data'}
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: 'something happened', status: 'something happened'} 
        });
    }
}



import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_PROFILES, PROFILE_CREATED } from "../actions/types";

const initialstoreSlice = {
    profile:   {
        "profileId": "xxxxxxxxxx",
        "profileOwner": "",
        "profileFields": {
          "role": "",
          "title": "",
          "problem": "",
          "solution": "",
          "duration": "",
          "breakdown": "",
          "tools": "",
          "helpers": "",
          "status": ""
        }
    },
    profileCreated: false,
    loading: true,
    errors: {}
};

export default function profile (storeSlice = initialstoreSlice, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...storeSlice,
                profile: payload,
                loading: false
            }

        case PROFILE_CREATED:
            return {
                ...storeSlice,
                profile: payload,
                loading: false,
                profileCreated: true
            }
        
        case PROFILE_ERROR:
            return {
                ...storeSlice, 
                error: payload,
                loading: false
            }
        
        case CLEAR_PROFILE:
            return {
                ...storeSlice, 
                profile: null,
                loading: false
            }
        

        default: return storeSlice;
    }
}
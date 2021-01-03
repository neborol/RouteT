import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_PROFILES } from "../actions/types";

const initialState = {
    profile: { 
        role: 'initiator', 
        title: 'The erazer program', 
        problem: 'Erazes pending cases that had already been cancelled',
        solution: 'Would make pending cases more efficient',
        duration: '2 Weeks',
        tools: 'Node Electron',
        helpers: '2'
    },
    loading: true,
    errors: {}
};

export default function profile (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        
        case GET_PROFILES:
            return {
                ...state, 
                Profiles: payload,
                loading: false
            }
        
        case PROFILE_ERROR:
            return {
                ...state, 
                error: payload,
                loading: false,
                profile: null
            }
        
        case CLEAR_PROFILE:
            return {
                ...state, 
                profile: null,
                repos: [],
                loading: false
            }
        

        default: return state;
    }
}
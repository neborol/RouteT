import axios from 'axios';

// We are now going to add a global header to axios, so that each time we have an authenticated user, we just sent it with every request
const setUser = currentUser => {
    // Check first if a current user exists in the localstorage
    if (currentUser) {
        // Since there is a token, now add it to the global storage
        axios.defaults.headers.common['x-auth-user'] = currentUser;
    } else {
        // If what's passed in, is not a token, delete it from localstorage
        delete axios.defaults.headers.common['x-auth-user'];
    }
}

export default setUser;
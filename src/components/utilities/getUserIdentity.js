import setUser from './setUser';


const getUserIdentity = () => {
        // This would pass the user as a global header property to axios each time a request is being sent to the back-end
        if (localStorage.currentUser) {
            const userObj = JSON.parse(localStorage.currentUser);
            if (userObj.isAuthenticated) {
                const securedUser = { ...userObj, password: '********' };  // Don't show the password.
                setUser(JSON.stringify(securedUser)); // convert the secured user to json before sending.
            }
        }
}

export default getUserIdentity;
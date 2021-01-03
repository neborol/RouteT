import React, { useEffect } from 'react';
import { setLoginStatus } from '../../redux/actions/auth';
import { connect } from 'react-redux';


const ProjectDashboard = ({ setLoginStatus }) => {
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.loggedIn ? setLoginStatus(true) : setLoginStatus(false);
    }, []);

    return (
        <div>
            <h1>This is the Project's Dashboard page</h1>
        </div>
    )
}

export default connect(null, { setLoginStatus })(ProjectDashboard)

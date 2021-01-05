import React, { useEffect } from 'react';
import { setLoginStatus } from '../../redux/actions/auth';
import { connect } from 'react-redux';


const Approved = ({ setLoginStatus }) => {

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.isAuthenticated ? setLoginStatus(true) : setLoginStatus(false);
    }, [setLoginStatus]);

    return (
        <div>
            <h1>All the initiatives that have been approved, will be listed here.</h1>
        </div>
    )
}

export default connect(null, { setLoginStatus })(Approved)

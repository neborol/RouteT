import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../utilities/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { Link } from 'react-router-dom';
import { FaChartPie } from "react-icons/fa";

import { setLoginStatus } from '../../redux/actions/auth';
import { getCurrentProfile } from '../../redux/actions/profile';




const MyProfile = ({ authSlice, profileSlice: { profile }, setLoginStatus, getCurrentProfile }) => {
    
    console.log('TestFinal', profile);
    
    
    useEffect(() => {
        // Get the currentUser in order to set it's isAuthenticated status
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.isAuthenticated ? setLoginStatus(true) : setLoginStatus(false);

        // Get the currently logged in User's profile and display it
        getCurrentProfile();
    }, []);

    const breakdown = () => {

    }

    // console.log('TestProfile', profile);

    return (
        <Fragment>
            <Link to="/dashboard" className="btn btn-light"> Back To Dashboard </Link>
            { authSlice.isAuthenticated && (<Link to="/edit-profile" className="btn btn-dark">Edit Profile</Link>)}
        
            <div className="profile-grid my-1">
                <ProfileTop 
                    name={ profile.profileOwner } 
                    title={ profile.profileFields.title } role 
                    role={ profile.profileFields.role }
                    />
                <ProfileAbout 
                    problem={ profile.profileFields.problem }
                    solution={ profile.profileFields.solution }
                    duration={ profile.profileFields.duration }
                />
            </div>

            <div className="bg-light p-2">
                <div className="section-details">
                    <h1 className="text-primary">Tools and Help required:</h1> 
                    <hr/>
                    <div className="item-section">
                        <h3>Tools and technologies required :</h3>
                        <p>{ profile.profileFields.tools }</p> 
                    </div>
                    <div className="item-section">
                        <h3>Number of other developers to help:</h3>
                        <p>{ profile.profileFields.helpers }</p> 
                    </div>
                    <div className="item-section flx">
                        <div>
                            <h3>Summary of breakdown:</h3>
                            <p>{ profile.profileFields.breakdown }</p>                            
                        </div>
                        <div>
                            <Link to="/breakdown" className="btn btn-primary"> 
                                <FaChartPie color={"#fdf090"}/> {' + '} Add a Breakdown Structure 
                            </Link>
                        </div>

                    </div>
                    <div className="item-section">
                        <h3>Current Status:</h3>
                        <p>{ profile.profileFields.status }</p>
                    </div>
                </div>
            </div>

        </Fragment> 
    )
}

// Validate the data-type of the props passed to the component
MyProfile.propTypes = {
    authSlice: PropTypes.object.isRequired,
    profileSlice: PropTypes.object.isRequired,
    setLoginStatus: PropTypes.func.isRequired
}

// Get the required slices of the store and pass them to the component as props
const mapStateToProps = store => ({
    authSlice: store.authSlice,  // Get the auth slice from the store
    profileSlice: store.profileSlice // Get the profile slice from the store
});

// Connect the redux world to the MyProfile component's world, while exporting the MyProfile component
export default connect(mapStateToProps, { setLoginStatus, getCurrentProfile })(MyProfile); // setLoginStatus and getCurrentProfile here, are action creation functions, required within the MyProfile component

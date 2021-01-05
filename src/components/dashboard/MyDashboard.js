import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../redux/actions/profile';
import Spinner from '../utilities/Spinner';
import { setLoginStatus } from '../../redux/actions/auth';
import { Link } from 'react-router-dom'



const MyDashboard = ({ authSlice: { user }, profileSlice: { profile, loading, profileCreated }, getCurrentProfile, setLoginStatus }) => {
    profile = null;
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.isAuthenticated ? setLoginStatus(true) : setLoginStatus(false);
        getCurrentProfile();
    }, [getCurrentProfile]);


    return loading && profile === null ? (<Spinner loading={loading}/>) :  (
        <>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className="lead">
                <span style={{fontSize: '26px'}}>Welcome { user && user.name }</span> {/*The user would see his name even if he has no profile setup. */}
            </p>

            { 
                profileCreated ? <>
                    <h3>Thank you for creating your profile</h3>
                    <p>Here is how much progress you have made so far, according to the breakdown of your project.</p>
                     <div>-----  <strong> Graphical Representation of breakdown comes here. </strong>   -----</div>   
                </> :
                <> 
                    <p>You have not yet set up a profile, please do so and start tracking your progress.</p>
                    <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
                </>
            } 
        </>
    )
}

// Validate the data-type of the props passed to the component
  MyDashboard.propTypes = {
    authSlice: PropTypes.object.isRequired,
    profileSlice: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    setLoginStatus: PropTypes.func.isRequired,
  }
    
  // Get the required slices of the store and pass them to the component as props
  const mapStateToProps = store => ({
     authSlice: store.authSlice,   // Get the auth slice of the store
     profileSlice: store.profileSlice // Get the profile slice of the store
  })
  
  // Connect the redux world with the MyDashboard component world, while exporting the MyDashboard component
export default connect(mapStateToProps, { getCurrentProfile, setLoginStatus })(MyDashboard); 
import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../utilities/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { Link } from 'react-router-dom';



const MyProfile = ({ auth }) => {

    // useEffect(() => {
    //     getProfileById(match.params.id);
    //  }, [getProfileById, match.params.id])

    return (
        <Fragment>
            <Link to="/dashboard" className="btn btn-light"> Back To Dashboard </Link>
            { auth.isAuthenticated && (<Link to="/edit-profile" className="btn btn-dark">Edit Profile</Link>)}
        
            <div class="profile-grid my-1">
                <ProfileTop />
                <ProfileAbout />
            </div>
        </Fragment> 
    )
}

MyProfile.propTypes = {
    // getProfileById: PropTypes.func.isRequired,
    // profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    // profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps)(MyProfile)

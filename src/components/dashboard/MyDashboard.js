import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../redux/actions/profile';
import Spinner from '../utilities/Spinner';
import { setLoginStatus } from '../../redux/actions/auth';



const MyDashboard = ({ getCurrentProfile, setLoginStatus, auth: { user, loading }}) => {
    const loadingValue = true;
    const profile = { title: 'Innovation title'};

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.loggedIn ? setLoginStatus(true) : setLoginStatus(false);
        getCurrentProfile();
    }, []);



    return loading && profile === null ? (<Spinner loading={loadingValue}/>) :  (
        <>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className="lead">
                <span>Welcome { user && user.name }</span>
            </p>
        </>
    )
}
// const MyDashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
// console.log('TestProf', profile);
//     useEffect(() => {
//         getCurrentProfile();
//     }, []);



//     return loading && profile === null ? (<Spinner loading={loading}/>) :  (
//         <>
//             <h1 classname='large text-primary'>Dashboard</h1>
//             <p className="lead">
//                 <h1>Welcome { user && user.name }</h1>
//             </p>

//             { profile !== null ? <> </> : <> </> } {/* I would have to get the profile from the back-end first */}
//         </>
//     )
// }


  MyDashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    setLoginStatus: PropTypes.func.isRequired,
  }
    
  const mapStateToProps = state => ({
     auth: state.auth
  })
    
export default connect(mapStateToProps, { getCurrentProfile, setLoginStatus })(MyDashboard); 
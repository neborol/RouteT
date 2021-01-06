import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Landing = ({authSlice: { user } }) => {

    const userStatus = JSON.parse(localStorage.getItem('currentUser'));
    if (userStatus.isAuthenticated) {
        return <Redirect to='/dashboard' />
    } 


    return (
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Ability to think</h1>
            <h1 className="x-large"> out of the box</h1>
            
             <h3>The Creative Center</h3>
            <p className="lead">
               Developers' Creativity Center, with the goal of coming up with new ideas
            </p>
            <p className="lead">
               for the improvement of Company's Business Model.
            </p>
            <div className="buttons">
                { (!user || !user.isAuthenticated) && (
                    <>
                        <NavLink to="/register" className="btn btn-primary">Sign Up</NavLink>
                        <NavLink to="/login" className="btn btn-light">Login</NavLink>  
                    </>                  
                ) }

            </div>
          </div>
        </div>
      </section>
    )
}

// Validate the data-type of the props passed to the component
Landing.propTypes = {
  authSlice: PropTypes.object.isRequired
}
  
// Get the required slices of the store and pass them to the component as props
const mapStateToProps = store => ({
   authSlice: store.authSlice // Get the auth slice from the store
})
  
// Connect the redux world to the Landing component world, while exporting the Landing component
export default connect(mapStateToProps)(Landing); 

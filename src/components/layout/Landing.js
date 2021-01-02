import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Landing = ({auth: { user } }) => {
    // So we needed to pass the isAuthenticated property, as a prop, so as to be 
    //     able to check if the user is authenticated, then redirect him to the dashboard



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
                { (!user || !user.loggedIn) && (
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


Landing.propTypes = {
  auth: PropTypes.object.isRequired
}
  
const mapStateToProps = state => ({
   auth: state.auth
})
  
export default connect(mapStateToProps)(Landing); 

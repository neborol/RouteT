import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const userStatus = JSON.parse(localStorage.getItem('currentUser'));

const Navbar = ({ authSlice: { isAuthenticated }, profileSlice: { profileCreated }, logout }) => {
  const publicLinks = (
    <ul>
      <li>
          <NavLink to="/ideas-pool">
              All Ideas
          </NavLink>
      </li>
      <li><NavLink to="/register">Register</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
    </ul>
  );


  const privateLinks = (
    <ul>
      <li>
          <NavLink to="/project-dashboard">
              <span className='hide-sm'>Team Dashboard</span>
          </NavLink>
      </li>
      <li>
          <NavLink to="/approved">
              Approved
          </NavLink>
      </li>
      { profileCreated && <>
          <li>
            <NavLink to="/profile">
              My Profile
            </NavLink>
        </li>
      </>}

      <li>
          <NavLink to="/dashboard">
              My Dashboard
          </NavLink>
      </li>
      <li>
        <Link to="#!" onClick={logout}>
          Logout
        </Link>
      </li>
    </ul>
  );

   

    return (
      <nav className="navbar bg-dark">
        <Link to="/">
          <div className="horiz-items-container">
            <span>
              <img className="app-logo" src="assets/images/logo.png" alt="App logo" />
            </span>
            <h1 className="app-name"> Devability</h1>           
          </div>
        </Link>

       { isAuthenticated ? privateLinks : publicLinks }
       
      </nav>
    )
}

// Validate the data-type of the props passed to the component
Navbar.propTypes = {
  authSlice: PropTypes.object.isRequired,
  profileSlice: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Get the required slices of the store and pass them to the component as props
const mapStateToProps = store => ({
  authSlice: store.authSlice,
  profileSlice: store.profileSlice,
})

// Connect the redux world to the Navbar component world
export default connect(mapStateToProps, { logout })(Navbar);  // logout here is an action creation function that Navbar requires

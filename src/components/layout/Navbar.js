import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



const Navbar = ({auth: { isAuthenticated }, logout }) => {
  const publicLinks = (
    <ul>
      <li>
          <Link to="/ideas-pool">
              All Ideas
          </Link>
      </li>
      <li>
          <Link to="/project-dashboard">
              <span className='hide-sm'>Project Dashboard</span>
          </Link>
      </li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );


  const privateLinks = (
    <ul>
      <li>
          <Link to="/approved">
              Approved
          </Link>
      </li>
      <li>
          <Link to="/profile">
              My Profile
          </Link>
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
        <span>
          <img className="app-logo" src="assets/images/logo.png" alt="App logo" />
          <h1><Link to="/"> Devability</Link></h1> 
        </span>
        { isAuthenticated ? privateLinks : publicLinks }
      </nav>
    )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar); 

import React, { useState } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { register } from '../../redux/actions/auth';
import toastify from '../utilities/Toastify';


const Register = ({ isAuthenticated, register }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    // Destructure the login properties from formData in order to avoid prefixing formData to the properties
    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            toastify.error('Passwords do not match!');
        } else {
            // Normally, at this stage, the user data should be sent to the backend for database persistence.
            // Broadcast Register success and send the registered data that comes back from the backend to the store.
            toastify.success('Registration Successful!');
            // Send to store
            register({
                name,
                email,
                password
            });
        }
    }


    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return <>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={name} 
                    onChange={ e => onChange(e) }
                />
                </div>
                <div className="form-group">
                <input 
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={ e => onChange(e) }
                />
                <small className="form-text">
                </small>
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={ e => onChange(e) }
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={e => onChange(e)}
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </>
}

// Validate the data-type of the props passed to the component
Register.propTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired
};

// Get the required slices of the store and pass them to the component as props
const mapStateToProps = store => ({
    isAuthenticated: store.authSlice.isAuthenticated // Get the isAuthenticated state from the authSlice of the store
});

// Connect the redux world with the Register component world, while exporting the Register component
export default connect(mapStateToProps, { register })(Register);  // register here, must be an action creation function requied within the Register component

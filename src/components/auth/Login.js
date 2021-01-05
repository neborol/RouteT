import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';




const Login = ({ isAuthenticated, login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Destructure the login properties from formData in order to avoid prefixing formData to the properties
    const {  email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    }

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }


    return <>
            <h1 className="large text-primary">Sign In</h1>
            {/* <Spinner loading={false} /> */}
            <p className="lead"> Sign Into Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>

                <div className="form-group">
                <input 
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={ e => onChange(e) }
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={password}
                    onChange={ e => onChange(e) }
                    required
                />
                </div>

                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </>
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    login: PropTypes.func.isRequired
}

// Get the required slices of the store and pass them to the component as props
const mapStateToProps = store => ({
    isAuthenticated: store.authSlice.isAuthenticated // Get the isAuthenticated state from the auth slice of the store
});

// Connect the redux world with the component world, while exporting the Login component.
export default connect(mapStateToProps, { login })(Login);  // login here must be an action creator function required within the component


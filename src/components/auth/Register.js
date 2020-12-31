import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { register } from '../../redux/actions/auth';


const Register = ({ dev, isAuthenticated, register }) => {

    useEffect(() => {
        // Hard-coding the supposed login values for now.
       const oDev = {
            name: 'Roland Oben',
            email: 'myname@example.com',
            password: 'abc1234'
        };

        register(oDev); // Use the REGISTER_SUCCES action creator to dispatch Register success.       
    }, []);

    return (
        // Get the state slice "auth.user" passed by the mapStateToProps method as props.dev, and read the values.
        dev && (
            isAuthenticated && (
            <div>
                <h1>Is the current User authenticated? { isAuthenticated ? ': True' : ': False.' }</h1>
                <ul>
                    <li>Name: { dev.name }</li>
                    <li>Name: { dev.email }</li>
                </ul>
            </div>
            )            
        )
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    dev: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    dev: state.auth.user
});

// Map state to the props of this Register component while destructuring at the same time, and these props could be retrieved by passing destructured props in the component parameters input.
export default connect(mapStateToProps, { register })(Register);

import React, { useState } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { register } from '../../redux/actions/auth';
import toastify from '../utilities/Toastify';


const Register = ({ register, isAuthenticated}) => {
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
                password,
                loggedIn: false
            });
        }
    }


    if (isAuthenticated) {
        return <Redirect to='/project-dashboard' />
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

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

// Map state to the props of this Register component while destructuring at the same time, and these props could be retrieved by passing destructured props in the component parameters input.
export default connect(mapStateToProps, { register})(Register);




// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import { register } from '../../redux/actions/auth';


// const Register = ({ dev, isAuthenticated, register }) => {

//     useEffect(() => {
//         // Hard-coding the supposed login values for now.
//        const oDev = {
//             name: 'Roland Oben',
//             email: 'myname@example.com',
//             password: 'abc1234'
//         };

//         register(oDev); // Use the REGISTER_SUCCES action creator to dispatch Register success.       
//     }, []);

//     return (
//         // Get the state slice "auth.user" passed by the mapStateToProps method as props.dev, and read the values.
//         dev && (
//             isAuthenticated && (
//             <div>
//                 <h1>Is the current User authenticated? { isAuthenticated ? ': True' : ': False.' }</h1>
//                 <ul>
//                     <li>Name: { dev.name }</li>
//                     <li>Name: { dev.email }</li>
//                 </ul>
//             </div>
//             )            
//         )
//     )
// }

// Register.propTypes = {
//     register: PropTypes.func.isRequired,
//     dev: PropTypes.object.isRequired,
//     isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated,
//     dev: state.auth.user
// });

// // Map state to the props of this Register component while destructuring at the same time, and these props could be retrieved by passing destructured props in the component parameters input.
// export default connect(mapStateToProps, { register })(Register);

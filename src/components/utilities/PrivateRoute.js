import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// This component is used to protect routes from being accessed when the user is not logged in.

// The 'component' destructured here, corresponds to the component key in the Route setup, that
//       points to which component would be loaded for the specified route.

// The '...rest' operator, will represent any other parameters that would be passed to the route in question.
const PrivateRoute = ({ component: Component, 
    auth: { isAuthenticated, loading }, 
    ...rest
}) => (
    <Route 
        {...rest} 
        render={
            props => !isAuthenticated && !loading ? (<Redirect to='/login' />) : (<Component {...props} />)
        } 
    />
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute); 
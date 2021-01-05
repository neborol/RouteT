import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// This component is used to protect routes from being accessed when the user is not logged in.

// The 'component' destructured here, corresponds to the component key in the Route setup, that
//       points to which component would be loaded for the specified route.

// The '...rest' operator, will represent any other parameters that would be passed to the route in question.
const PrivateRoute = ({ component: Component, authSlice: { isAuthenticated, loading }, ...rest }) => (
    <Route 
        {...rest} 
        render={
            props => !isAuthenticated && !loading ? (<Redirect to='/login' />) : (<Component {...props} />)
        } 
    />
)

// Validate the data-type of the props passed to the component
PrivateRoute.propTypes = {
    authSlice: PropTypes.object.isRequired,
}

// Get the required slices of the store and pass them to the component as props
const mapStateToProps = store => ({
    authSlice: store.authSlice // Get the auth slice from the store
})

// Connect the redux world with the PrivateRoute component's world, while exporting the PrivateRoute component
export default connect(mapStateToProps)(PrivateRoute); 
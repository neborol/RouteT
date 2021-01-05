
// This is a custom middleware to get the current user from the request header
module.exports = function(req, res, next) {
    const currentUser = req.header('x-auth-user'); // To test with postman, 'x-auth-user' would be the header key, and then the value would be the current user object

    // Check if there is no user, then return a 401 status for not authorized
    if (!currentUser) {
        return res.status(401).json({ msg: 'No User being sent, authorization denied'});
    }

    // If there is a User, then we want to send it
    try {
        req.user = currentUser;
        next(); // Then pass the batton over to the next middleware in the pipeline.
    } catch (err) {
        res.status(401).json({ msg: 'Problem with the passed User.'})
    }


}
const express = require('express');
const router = express.Router();
const config = require('config'); 

router.use(express.json());

// Before we proceed, we should bring in our model
const User = {name: 'Roland Oben'};

// @route  POST api/users
// @desc   Test route
// @access Public
// If we wanted to create a route for "api/users/assets" the below route would work  
/* router.get('/assets', (req, res) => res.send('User route'));  */
router.post('/',  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // In order to avoid doing request.body all the time, we shall destructure the properties from request.body
    const { name, email, password } = req.body;

    // Let's den make a query with our mongoose so that we can get hold of our data
    try {
        // See if user exists
        let user = await User.findOne({ email });  // .findOne takes a field as parameter in an object
        
        if (user) {
            // If it would not be the last res.send or res.status, return it to avoid the headers already sent error.
            return res.status(400).json({ errors: [{ msg: 'User already exists'}]}); 
        }

    } 
    catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});

module.exports = router;
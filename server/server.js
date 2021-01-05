const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// Init Middleware, replacement for importing of bodyParser
app.use(express.json({ extended: false })); // Now, bodyParser comes shipped with express

// Add the essential headers so as to prevent CORS blockage
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Pass to next layer of middleware
    next();
});


// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));



const port = process.env.PORT || 5001;

app.listen(port, () => console.log("server started at http://localhost: on port: " + port));
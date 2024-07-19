const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Root route
app.get('/', function(req, res) {
    console.log('In main function');
    res.send('Welcome To My Hotel');
});

// Mounting routers
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes); // Corrected path

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes); // Corrected path

// Start server
app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});

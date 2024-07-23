const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();

const passport=require('./auth');

const PORT=process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Root route
app.get('/', function(req, res) {
    res.send('Welcome To My Hotel');
});


app.use(passport.initialize());
const localAuthMiddelware=passport.authenticate('local',{session:false});

// Mounting routers
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes); 

// Start server

app.listen(PORT, () => {
    console.log(`Listening on port 3000`);
});

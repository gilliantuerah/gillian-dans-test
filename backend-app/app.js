// import package
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Execute
const app = express();

// Import Routes
const loginRoute = require('./routes/login');
const positionRoute = require('./routes/position');

// Middlewares 
app.use(cors());
app.use(bodyParser.json());
app.use('/login', loginRoute);
app.use('/position', positionRoute);

// Listen to the server
app.listen(5000);

// Import libraries
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { join } = require('path');
const { config } = require('./config/config');
const optionsWL = require('./src/Middleware/cors');
require('./src/db/database');

const morgan = require('morgan'); //Pependencia Desarollo
const { query } = require('express');
const { urlToHttpOptions } = require('url');
const { Query } = require('mongoose');

// Middleware
app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(function (request, response, next){
  response.header('Access-Control-Allow-Origin','*');
  response.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
  response.header('Access-Control-Allow-Headers', 'Origin,Accept, Authorization, Content-Type, X-Requested-With, Range,Content-Range,Accept-Ranges,Content-Length');
  next();
  });


app.set('Access-Control-Allow-Origin', '*')
// Static files
app.use(express.static(join(__dirname, 'public')));

// Routes
app.use('/api', require('./src/routes/usersRoutes'));
app.use('/api', require('./src/routes/productsRoutes'));
app.use('/api', require('./src/routes/clientsRoutes'));
app.use('/api', require('./src/routes/ordersRoutes'));
app.use('/api', require('./src/routes/brandRoutes'));

// 404 not found
app.use((req, res, next) => {
  res.status(404).redirect('/404.html');
});
  
// Start server
let port = config.port;
let server = app.listen(port, () => {
  console.log(`🌐 Servidor escuchando en http://localhost:` + port);
});

module.exports = { app, server };


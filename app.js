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
app.use(cors(optionsWL));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.set('Access-Control-Allow-Origin', '*')
// Static files
app.use(express.static(join(__dirname, 'public')));

// Routes
app.use('/api', require('./src/routes/usersRouter'));
app.use('/api', require('./src/routes/productsRouter'));
app.use('/api', require('./src/routes/clientsRoutes'));
app.use('/api', require('./src/routes/ordersRoutes'));

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

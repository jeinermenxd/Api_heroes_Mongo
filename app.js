// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importar las rutas
const heroRoutes = require('./routes/heroeRoutes.js');

// Usar las rutas
app.use('/api/heroes', heroRoutes);

module.exports = app;

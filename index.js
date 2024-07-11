// index.js
const mongoose = require('mongoose');
const app = require('./app');
const port = 3000; // Puedes cambiar el puerto si lo necesitas

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/superheroe')
    .then(() => {
        console.log('Conexión exitosa a la base de datos superheroe!!');
        app.listen(port, () => {
            console.log('Servidor corriendo en el puerto:' + port);
        });
    })
    .catch(error => console.log('Error: ' + error));

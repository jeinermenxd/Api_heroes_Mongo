// models/Hero.js
const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    bio: { type: String, required: true },
    img: { type: String, required: true },
    aparicion: { type: String, required: true },
    casa: { type: String, required: true }
});

module.exports = mongoose.model('heroes', heroSchema);

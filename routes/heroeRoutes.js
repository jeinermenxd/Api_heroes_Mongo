// routes/heroRoutes.js
const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

// Rutas para Héroes
router.get('/', heroController.getAllHeroes); // Obtener todos los héroes
router.post('/', heroController.createHero); // Crear un nuevo héroe
router.get('/:nombre', heroController.findHeroByName); // Buscar héroes por nombre
router.get('/buscar/:id', heroController.getHeroById); // Obtener un héroe por ID
router.put('/:id', heroController.updateHero); // Actualizar un héroe
router.delete('/eliminar/:id', heroController.deleteHero); // Eliminar un héroe
module.exports = router;

// controllers/heroController.js
const Hero = require('../models/Heroe');

// Obtener todos los héroes
exports.getAllHeroes = async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.json(heroes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Crear un nuevo héroe
exports.createHero = async (req, res) => {
    const hero = new Hero({
        nombre: req.body.nombre,
        bio: req.body.bio,
        img: req.body.img,
        aparicion: req.body.aparicion,
        casa: req.body.casa
    });

    try {
        const newHero = await hero.save();
        res.status(201).json(newHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener un héroe por ID
exports.getHeroById = async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id);
        if (hero == null) {
            return res.status(404).json({ message: 'Héroe no encontrado' });
        }
        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un héroe
exports.updateHero = async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id);
        if (hero == null) {
            return res.status(404).json({ message: 'Héroe no encontrado' });
        }

        if (req.body.nombre != null) {
            hero.nombre = req.body.nombre;
        }
        if (req.body.bio != null) {
            hero.bio = req.body.bio;
        }
        if (req.body.img != null) {
            hero.img = req.body.img;
        }
        if (req.body.aparicion != null) {
            hero.aparicion = req.body.aparicion;
        }
        if (req.body.casa != null) {
            hero.casa = req.body.casa;
        }

        const updatedHero = await hero.save();
        res.json(updatedHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un héroe
exports.deleteHero = async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id);
        if (hero == null) {
            return res.status(404).json({ message: 'Héroe no encontrado' });
        }

        await Hero.deleteOne({ _id: req.params.id });
        res.json({ message: 'Héroe eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Buscar héroe por nombre
exports.findHeroByName = async (req, res) => {
    try {
        const heroes = await Hero.find({ nombre: { $regex: req.params.nombre, $options: 'i' } });
        res.json(heroes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//Requerir express y el metodo Router
const express = require('express');
const router = express.Router();
const moto = require('../controllers/moto.controllers');

//Rutas
router.get('/', moto.getMotos);
router.post('/', moto.createMoto);
router.get('/:id', moto.getMoto);
router.put('/:id', moto.putMoto);
router.delete('/:id', moto.deleteMoto);


module.exports = router;
//Requerir express y el metodo Router
const express = require('express');
const router = express.Router();
const falla = require('../controllers/falla.controllers');

//Rutas
router.get('/', falla.getFallas);
router.post('/', falla.createFalla);
router.get('/:id', falla.getFalla);
router.put('/:id', falla.putFalla);
router.delete('/:id', falla.deleteFalla);


module.exports = router;
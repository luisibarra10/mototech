//Requerir express y el metodo Router
const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario.controllers');

//Rutas
router.get('/', usuario.getUsuarios);
router.post('/', usuario.createUsuario);
router.get('/:id', usuario.getUsuario);
router.put('/:id', usuario.putUsuario);
router.delete('/:id', usuario.deleteUsuario);


module.exports = router;
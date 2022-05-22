//Requerir express y el metodo Router
const express = require('express');
const router = express.Router();
const comentario = require('../controllers/comentario.controllers');

//Rutas
router.get('/', comentario.getComentarios);
router.post('/', comentario.createComentario);
router.get('/:id', comentario.getComentario);
router.put('/:id', comentario.putComentario);
router.delete('/:id', comentario.deleteComentario);


module.exports = router;
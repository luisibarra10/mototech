//Requerir express y el metodo Router
const express = require('express');
const router = express.Router();
const diagnostico = require('../controllers/diagnostico.controllers');

//Rutas
router.get('/', diagnostico.getDiagnosticos);
router.post('/', diagnostico.createDiagnostico);
router.get('/:id', diagnostico.getDiagnostico);
router.put('/:id', diagnostico.putDiagnostico);
router.delete('/:id', diagnostico.deleteDiagnostico);


module.exports = router;
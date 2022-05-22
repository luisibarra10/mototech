//Definir metodos para reutilizarlos en las rutas
//Requerir modelo de datos y guardarlo en una const
const Diagnostico = require('../models/diagnostico.models');
const diagnosticoController = {};

//Definir consultas a la BD
//Consultar todos los registros
diagnosticoController.getDiagnosticos = async(req, res) => {
    const diagnosticos = await Diagnostico.find();
    res.json(diagnosticos);
}

//Crear registro
diagnosticoController.createDiagnostico = async(req, res) => {
    const diagnostico = new Diagnostico(req.body);
    await diagnostico.save();
    console.log(diagnostico);
    res.json({
        'status': 'Diagnostico Guardado'
    });
}

diagnosticoController.getDiagnostico = async(req, res) => {

    const employee = await Diagnostico.findById(req.params.id);
    res.json(employee);
}

diagnosticoController.putDiagnostico = async(req, res) => {
    //Otra forma de obtener el id 
    const { id } = req.params;
    const diagnostico = {
        descripcion: req.body.descripcion,
        observacion: req.body.observacion
    };
    await Diagnostico.findByIdAndUpdate(id, { $set: diagnostico }, { new: true });
    res.json({
        'status': 'Diagnostico Actualizado'
    })
}

diagnosticoController.deleteDiagnostico = async(req, res) => {
    await Diagnostico.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Diagnostico Eliminado'
    });
}

module.exports = diagnosticoController;
//Definir metodos para reutilizarlos en las rutas
//Requerir modelo de datos y guardarlo en una const
const Falla = require('../models/falla.models');
const fallaController = {};

//Definir consultas a la BD
//Consultar todos los registros
fallaController.getFallas = async(req, res) => {
    const fallas = await Falla.find();
    res.json(fallas);
}

//Crear registro
fallaController.createFalla = async(req, res) => {
    const falla = new Falla(req.body);
    await falla.save();
    console.log(falla);
    res.json({
        'status': 'Falla Guardada'
    });
}

fallaController.getFalla = async(req, res) => {

    const falla = await Falla.findById(req.params.id);
    res.json(falla);
}

fallaController.putFalla = async(req, res) => {
    //Otra forma de obtener el id 
    const { id } = req.params;
    const falla = {
        descripcion: req.body.descripcion,
        observacion: req.body.observacion
    };
    await Falla.findByIdAndUpdate(id, { $set: falla }, { new: true });
    res.json({
        'status': 'Falla Actualizada'
    })
}

fallaController.deleteFalla = async(req, res) => {
    await Falla.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Falla Eliminada'
    });
}

module.exports = fallaController;
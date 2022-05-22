//Definir metodos para reutilizarlos en las rutas
//Requerir modelo de datos y guardarlo en una const
const Moto = require('../models/moto.models');
const motoController = {};

//Definir consultas a la BD
//Consultar todos los registros
motoController.getMotos = async(req, res) => {
    const motos = await Moto.find();
    res.json(motos);
}

//Crear registro
motoController.createMoto = async(req, res) => {
    const moto = new Moto(req.body);
    await moto.save();
    console.log(moto);
    res.json({
        'status': 'Moto Guardada'
    });
}

motoController.getMoto = async(req, res) => {

    const moto = await Moto.findById(req.params.id);
    res.json(moto);
}

motoController.putMoto = async(req, res) => {
    //Otra forma de obtener el id 
    const { id } = req.params;
    const moto = {
        marca: req.body.marca,
        referencia: req.body.referencia,
        tipo: req.body.referencia,
        modelo: req.body.referencia
    };
    await Moto.findByIdAndUpdate(id, { $set: moto }, { new: true });
    res.json({
        'status': 'Moto Actualizada'
    })
}

motoController.deleteMoto = async(req, res) => {
    await Moto.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Moto Eliminada'
    });
}

module.exports = motoController;
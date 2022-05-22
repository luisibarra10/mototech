const Usuario = require('../models/usuario.models');
const usuarioController = {};

usuarioController.getUsuarios = async(req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}


usuarioController.getUsuario = async(req, res) => {

    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

usuarioController.createUsuario = async(req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    console.log(usuario);
    res.json({
        'status': 'Usuario  Creado'
    });
}

usuarioController.putUsuario = async(req, res) => {
    //Otra forma de obtener el id 
    const { id } = req.params;
    const usuario = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        contraseña: req.body.contraseña
    };
    await Usuario.findByIdAndUpdate(id, { $set: usuario }, { new: true });
    res.json({
        'status': 'Usuario Actualizado'
    })
}

usuarioController.deleteUsuario = async(req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Usuario Eliminado'
    });
}

module.exports = usuarioController;
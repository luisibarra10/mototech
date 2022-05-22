//Definir metodos para reutilizarlos en las rutas
//Requerir modelo de datos y guardarlo en una const
const Comentario = require('../models/comentario.models');
const comentarioController = {};

//Definir consultas a la BD
//Consultar todos los registros
comentarioController.getComentarios = async(req, res) => {
    const comentarios = await Comentario.find();
    res.json(comentarios);
}

//Crear registro
comentarioController.createComentario = async(req, res) => {
    const comentario = new Comentario(req.body);
    await comentario.save();
    console.log(comentario);
    res.json({
        'status': 'Comentario Guardado'
    });
}

comentarioController.getComentario = async(req, res) => {

    const comentario = await Comentario.findById(req.params.id);
    res.json(comentario);
}

comentarioController.putComentario = async(req, res) => {
    //Otra forma de obtener el id 
    const { id } = req.params;
    const Comentario = {
        descripcion: req.body.descripcion
    };
    await Comentario.findByIdAndUpdate(id, { $set: comentario }, { new: true });
    res.json({
        'status': 'Comentario Actualizado'
    })
}

comentarioController.deleteComentario = async(req, res) => {
    await Comentario.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Comentario Eliminado'
    });
}

module.exports = comentarioController;
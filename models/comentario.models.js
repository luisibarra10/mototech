const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComentarioSchema = new Schema({
    descripcion: { type: String }
});

module.exports = mongoose.model('Comentario', ComentarioSchema);
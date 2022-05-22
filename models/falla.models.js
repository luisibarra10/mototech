const mongoose = require('mongoose');
const { Schema } = mongoose;

const FallaSchema = new Schema({
    descripcion: { type: String, required: true },
    observacion: { type: String, required: true }
});

module.exports = mongoose.model('Falla', FallaSchema);
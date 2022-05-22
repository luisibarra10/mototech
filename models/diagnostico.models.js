const mongoose = require('mongoose');
const { Schema } = mongoose;

const DiagnosticoSchema = new Schema({
    descripcion: { type: String, required: true },
    observacion: { type: String, required: true }
});

module.exports = mongoose.model('Diagnostico', DiagnosticoSchema);
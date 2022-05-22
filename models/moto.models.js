const mongoose = require('mongoose');
const { Schema } = mongoose;

const MotoSchema = new Schema({
    marca: { type: String, required: true },
    referencia: { type: String, required: true },
    tipo: { type: String, required: true },
    modelo: { type: Number, required: true }
});

module.exports = mongoose.model('Moto', MotoSchema);
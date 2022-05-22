import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const UsuarioSchema = new Schema({
    nombres: {
        type: String,

    },
    apellidos: {
        type: String,
    },
    correo: {
        type: String,
        unique: true,
    },
    contraseña: {
        type: String,
        required: true,
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "Role",
    }, ],
}, {
    timestamps: true,
    versionKey: false,
});

/*
FallaSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

FallaSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

DiagnosticoSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

DiagnosticoSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


*/
export default model("Usuario", UsuarioSchema);
import {Schema, model} from 'mongoose';

const platosSchema = new Schema({
    color: { type: String },
    precio: { type: String },
    campos: { type: String },
    nombre: { type: String },
    fecha: { type: String },
    inicio_actividad: { type: Number }
})

const depositoModel = model('platos', platosSchema);

export default depositoModel;
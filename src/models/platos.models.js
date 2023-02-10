"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const platosSchema = new mongoose_1.Schema({
    color: { type: String },
    precio: { type: String },
    campos: { type: String },
    nombre: { type: String },
    fecha: { type: String },
    inicio_actividad: { type: Number }
});
const depositoModel = (0, mongoose_1.model)('platos', platosSchema);
exports.default = depositoModel;

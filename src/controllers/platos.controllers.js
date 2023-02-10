"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPlato = exports.actualizarPlato = exports.llamarPlatos = exports.crearPlato = void 0;
const platos_models_1 = __importDefault(require("../models/platos.models"));
const crearPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPlato = new platos_models_1.default(req.body);
    yield newPlato.save((err, save) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                code: 100
            });
        }
        return res.json({
            ok: true,
            mensage: 'Plato Guardado',
            resultado: save
        });
    });
});
exports.crearPlato = crearPlato;
const llamarPlatos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield platos_models_1.default.find().exec((err, listado) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                code: 100
            });
        }
        return res.json({
            ok: true,
            mensage: `Lista de platos`,
            resultado: listado
        });
    });
});
exports.llamarPlatos = llamarPlatos;
const actualizarPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let body = req.body;
    yield platos_models_1.default.findByIdAndUpdate(id, { $set: body }).exec((err, resp) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DsB',
                err
            });
        }
        return res.json({
            ok: true,
            mensage: 'Plato actualizado',
            datosPardita: resp
        });
    });
});
exports.actualizarPlato = actualizarPlato;
const eliminarPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    yield platos_models_1.default.findByIdAndDelete(id).exec((err, resp) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DsB',
                err
            });
        }
        return res.json({
            ok: true,
            mensage: 'Plato eliminado',
            datosPardita: resp
        });
    });
});
exports.eliminarPlato = eliminarPlato;

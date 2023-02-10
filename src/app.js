"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conexion_1 = __importDefault(require("./conexion"));
const app = require('express')();
const platos_routes_1 = __importDefault(require("./routes/platos.routes"));
class Servidor {
    constructor() {
        this.puerto = Number(process.env.PORT) || 4000;
        this.config();
        this.conexionDB();
        this.routes();
    }
    //Configuraciones
    config() {
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
    }
    // Conexion a la base de datos
    conexionDB() {
        (0, conexion_1.default)();
    }
    //Rutas
    routes() {
        app.use('/api/platos', platos_routes_1.default);
    }
    //Inicia El server
    start() {
        // this.app.listen(this.puerto, () => console.log('Server en el puerto', this.puerto));
        try {
            app.listen(this.puerto, () => console.log('Server en el puerto', this.puerto));
        }
        catch (_a) {
            console.log(Error, 'directori', __dirname);
        }
    }
}
exports.default = Servidor;

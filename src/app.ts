import express from 'express';
import conexion from './conexion';
const app = require('express')();

import platosRoutes from './routes/platos.routes'







export default class Servidor{

    
    private puerto: number;
    

    constructor(){
        this.puerto = Number(process.env.PORT) || 4000;
        this.config()
        this.conexionDB();
        this.routes();
    }


    //Configuraciones
    private config(){
        app.use((req: any, res: any, next: any) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
    }

    // Conexion a la base de datos
    private conexionDB() {
        conexion()
    }

   //Rutas
   private routes(){
    app.use('/api/platos', platosRoutes);

    
}
    

    //Inicia El server
    public start(){
        
        // this.app.listen(this.puerto, () => console.log('Server en el puerto', this.puerto));
        try{
            app.listen(this.puerto, () => console.log('Server en el puerto', this.puerto));
        }catch{
            console.log(Error, 'directori', __dirname)
        }
        
    }

}
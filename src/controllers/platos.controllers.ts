import {Request, Response} from 'express';
import platosModel from '../models/platos.models';

export const crearPlato = async (req: Request, res: Response) => {

    const newPlato = new platosModel(req.body);
    
    await newPlato.save( (err, save) => {
     if(err){
         return res.status(500).json({
             ok: false,
             mensage: 'Error en DB',
             code: 100
         })
     }
     return res.json({
        ok: true,
        mensage: 'Plato Guardado',
        resultado: save
    })
 
      
    })
    
 }

export const llamarPlatos = async (req: Request, res: Response) => {

    await platosModel.find().exec((err, listado) => {
        if(err){
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DB',
                code: 100
            })
        } 

        return res.json({
           ok: true,
           mensage: `Lista de platos`,
           resultado: listado
       })
    })
  
    


    
}

export const actualizarPlato = async (req: Request, res: Response) => {

    
    let id = req.params.id
    let body = req.body

    await platosModel.findByIdAndUpdate(id, {$set: body}).exec((err, resp) => {

        
        if(err){
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DsB',
                err
            })
        }
        return res.json({
            ok: true,
            mensage: 'Plato actualizado',
            datosPardita: resp
        })
    })

    
}


export const eliminarPlato = async (req: Request, res: Response) => {

    
    let id = req.params.id

    await platosModel.findByIdAndDelete(id).exec((err, resp) => {

        
        if(err){
            return res.status(500).json({
                ok: false,
                mensage: 'Error en DsB',
                err
            })
        }
        return res.json({
            ok: true,
            mensage: 'Plato eliminado',
            datosPardita: resp
        })
    })

    
}



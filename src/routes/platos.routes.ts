import {Router} from 'express';
import { actualizarPlato, crearPlato, llamarPlatos, eliminarPlato } from '../controllers/platos.controllers';

const app = Router();

app.post('/', crearPlato);
app.get('/', llamarPlatos);
app.delete('/:id', eliminarPlato);
app.put('/:id', actualizarPlato);



export default app;
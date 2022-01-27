import { Router } from "express";
import {getClientesOredad, deleteClientes, getCliente, getClienteCount, getClientes, saveClientes, updateClientes, getClientesOrname} from "../controllers/clientes"


const router = Router();

router.get('/clientes', getClientes)

router.get('/clientes/count',getClienteCount)

router.get('/clientes/:id',getCliente)

router.post('/clientes',saveClientes)

router.get('/clienteso', getClientesOrname)

router.get('/clientese', getClientesOredad)

router.delete('/clientes/:id',deleteClientes)

router.put('/clientes/:id', updateClientes)

export default router;

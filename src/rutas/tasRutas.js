import {Router} from 'express'
import { getTarea, getTareas, createTarea, deleteTarea, updateTarea} from '../controlador/tasControlador.js'

const router = Router()

router.get('/tareas', getTareas)
router.get('/tareas/:id', getTarea)
router.post('/tareas', createTarea)
router.delete('/tareas/:id', deleteTarea)
router.put('/tareas/:id', updateTarea)

export default router
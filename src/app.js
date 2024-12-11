import express from 'express'
import morgan from 'morgan'
import Rutas from './rutas/tasRutas.js'

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use('/api',Rutas)

export default app
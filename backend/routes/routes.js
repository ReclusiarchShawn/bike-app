import express from 'express'
import { hello } from '../controller/helloController.js'
import { adminLogin } from '../controller/helloController.js'
import { addBike, deleteBike, getBikesID } from '../controller/bikesController.js'

const router = express.Router()
router.get('/bike/:id', getBikesID)
router.delete('/del-bike/:id', deleteBike)
router.post('/add-bike', addBike)
router.get('/', hello)

export default router
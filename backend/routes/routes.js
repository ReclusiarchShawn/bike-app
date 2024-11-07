import express from 'express'
import { hello, insertadmin } from '../controller/adminController.js'
import { adminLogin } from '../controller/adminController.js'
import { addBike, deleteBike, getbikes, getBikesID } from '../controller/bikesController.js'
import { getbrands } from '../controller/brandController.js'
import { getbooking } from '../controller/bookController.js'
import { getusers } from '../controller/userController.js'
import { gettransaction } from '../controller/paymentController.js'

const router = express.Router()
router.get('/bikes/:id', getBikesID)
router.delete('/del-bike/:id', deleteBike)
router.post('/add-bike', addBike)
router.get('/bikes', getbikes)
router.get('/brands', getbrands)
router.get('/book', getbooking)
router.post('/admin', insertadmin)
router.get('/customers', getusers)
router.get('/payment', gettransaction)
export default router
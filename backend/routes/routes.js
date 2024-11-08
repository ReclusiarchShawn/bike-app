import express from 'express'
import { hello, insertadmin } from '../controller/adminController.js'
import { adminLogin } from '../controller/adminController.js'
import { addBike, deleteBike, getbikes, getBikesID } from '../controller/bikesController.js'
import { getbrands } from '../controller/brandController.js'
import { getbooking } from '../controller/bookController.js'
import { getusers } from '../controller/userController.js'
import { gettransaction, insertPayInfo } from '../controller/paymentController.js'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import { insertUsersInfo } from '../controller/customers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const uploads = multer({
    storage: storage
})

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
router.post('/add-brands', uploads.fields([
    { name: 'brandimgs', maxcount: 1 },

]))
router.post('/add-bikes', uploads.fields([
    { name: 'bikesimgs', maxcount: 1 },

]))
router.post('/userinfo', insertUsersInfo)
router.post('/payinfo', insertPayInfo)
router.post('/login', insertadmin)
export default router
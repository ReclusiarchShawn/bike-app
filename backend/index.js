import express, { query } from 'express'
import cors from 'cors'
import router from './routes/routes.js'
import pool from './config/db.js'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(express.json())
app.use(cors())
app.use(router)

app.use(express.urlencoded({ extended: true }))


app.listen(3000, () => {
    console.log("Listening at port 3000")
})

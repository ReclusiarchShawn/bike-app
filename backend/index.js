import express, { query } from 'express'
import cors from 'cors'
import router from './routes/routes.js'
import pool from './config/db.js'


const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use(express.urlencoded({ extended: true }))


app.listen(3000, () => {
    console.log("Listening at port 3000")
})

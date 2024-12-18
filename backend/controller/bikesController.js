import pool from "../config/db.js";
import axios from 'axios'





export const getBikesID = async (req, res) => {
    console.log("from bike id", req.params.id)
    try {
        const getBikeID = await pool.query(
            "SELECT * FROM bikes, brands WHERE bike_id=$1 AND bikes.brand_id = brands.brand_id", [req.params.id])
        if (!getBikeID) {
            return res.json({ message: 'cannot get bikeID' })
        }
        console.log(getBikeID.rows)
        res.json(getBikeID.rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }

}


export const getbikes = async (req, res) => {
    console.log("hey its working")
    try {
        const getBike = await pool.query(
            "SELECT * FROM bikes")
        if (!getBike) {
            return res.json({ message: 'cannot get bike' })
        }

        res.json(getBike.rows)
    } catch (err) {
        res.status(500).json({ err })
    }

}
export const getbikesbyBrand = async (req, res) => {
    const {brandId}=req.params
    console.log("hey its working")
    try {
        const getBike = await pool.query(
            "SELECT * FROM bikes WHERE brand_id =$1",[brandId])
        if (!getBike) {
            return res.json({ message: 'cannot get bike' })
        }

        res.json(getBike.rows)
    } catch (err) {
        res.status(500).json({ err })
    }

}


export async function deleteBike(req, res) {

    const data = req.params
    try {
        const delAdmin = await pool.query(
            "DELETE FROM bikes WHERE bike_id=$1", [data.id])
        if (!delAdminAdmin) {
            return res.json({ message: 'cannot delete' })
        }
        res.json(delAdmin.rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }
}
export async function addBike(req, res) {
    const data = req.body
    try {


        const newAdmin = await pool.query(
            "INSERT INTO bikes(name, modelname ) VALUES ($1, $2)", [data.name, data.model])

        if (!newAdmin) {
            return res.json({ message: 'cannot insert' })
        }

        res.json(newAdmin)

    } catch (err) {
        res.status(500).json({ err })

    }

}
export const insertBikes = async (req, res) => {
    try {
        console.log("run")
        const bikesdata = await json.parse(req.body.bikesdata)
        console.log(bikesdata)
        const bikesimgs = req.files.bikesimgs ? req.files.bikesimgs[0] : null
        const bikesimgpath = bikesimgs ? `/uploads/${bikesimgs.filename}` : null
        const insertBikes = await pool.query(
            "INSERT INTO bikes(model_name,brand,price,horsepower,torque,seatheight,imp_path) values($1,$2,$3,$4,$5,$6,$7) ", [bikesdata.bikesimgs, bikesimgpath]
        )
        res.json({ message: 'yesssss' })

    }
    catch (err) { }
}
export const mount=async(req,res)=>{
    const bikes=ref([])
const selectbikevalue=ref(null)
    try{
        res=await axios.get()
        bike.value=res.data
        selectbikevalue=bikes.value[0]
    }catch(err){
        console.log('errer')
    }
}
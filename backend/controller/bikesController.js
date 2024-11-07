import pool from "../config/db.js";

export const getBikesID = async (req, res) => {
    console.log("from bike id", req.params.id)
    try {
        const getBikeID = await pool.query(
            "SELECT * FROM bikes WHERE bike_id=$1", [req.params.id])
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

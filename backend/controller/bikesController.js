import pool from "../config/db.js";

export const getBikesID = async (req, res) => {
    try {
        const getBikeID = await pool.query(
            "SELECT FROM Bike WHERE id=$1", [req.params.id])
        if (!getBikeID) {
            return res.json({ message: 'cannot get bikeID' })
        }
    } catch (err) {
        res.status(500).json({ err })
    }

}


export const getbikes = async (req, res) => {
    try {
        const getBike = await pool.query(
            "SELECT * FROM Bike")
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
            "DELETE FROM Bike WHERE id=$1", [data.id])
        if (!delAdminAdmin) {
            return res.json({ message: 'cannot delete' })
        }
    } catch (err) {
        res.status(500).json({ err })
    }
}
export async function addBike(req, res) {
    const data = req.body
    try {


        const newAdmin = await pool.query(
            "INSERT INTO Bike(name, modelname ) VALUES ($1, $2)", [data.name, data.model])

        if (!newAdmin) {
            return res.json({ message: 'cannot insert' })
        }

        res.json(newAdmin)

    } catch (err) {
        res.status(500).json({ err })

    }

}

import pool from "../config/db.js";
export const getbrands = async (req, res) => {
    console.log("hey its working")
    try {
        const getbrand = await pool.query(
            "SELECT * FROM brands")
        if (!getbrand) {
            return res.json({ message: 'cannot get bike' })
        }

        res.json(getbrand.rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }

}
import pool from "../config/db.js";
export const getbooking = async (req, res) => {
    console.log("hey its working")
    try {
        const getbook = await pool.query(
            "SELECT * FROM booking")
        if (!getbook) {
            return res.json({ message: 'cannot get bike' })
        }

        res.json(getbook.rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }

}
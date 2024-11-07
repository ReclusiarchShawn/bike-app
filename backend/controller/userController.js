import pool from "../config/db.js";
export const getusers = async (req, res) => {
    console.log("hey its working")
    try {
        const getuser = await pool.query(
            "SELECT * FROM customer")
        if (!getuser) {
            return res.json({ message: 'cannot get bike' })
        }

        res.json(getuser.rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }

}
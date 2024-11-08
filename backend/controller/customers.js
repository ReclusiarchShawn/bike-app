import pool from "../config/db.js";
export const insertUsersInfo = async (req, res) => {
    try {
        const userinfo = await pool.query(
            "INSERT INTO customers (name, phoneno, address) VALUES ($1, $2, $3)",

        );
        res.json(userinfo)
    } catch (err) { }
}
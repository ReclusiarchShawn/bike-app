import pool from "../config/db.js";
export const gettransaction = async (req, res) => {
    console.log("hey its working")
    try {
        const getpay = await pool.query(
            "SELECT * FROM transactions")
        if (!getpay) {
            return res.json({ message: 'cannot get bike' })
        }

        res.json(getpay.rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }

}
export const insertPayInfo = async (req, res) => {
    try {
        const payinfo = await pool.query(
            "INSERT INTO transactions (cname, address, phoneno,amount) VALUES ($1, $2, $3,$4)",

        );
        res.json(payinfo)
    } catch (err) { }
}
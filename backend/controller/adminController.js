import pool from "../config/db.js";
import bcrypt from 'bcrypt'




export const hello = async (req, res) => {


    try {
        console.log("heheheh")
        const result = await pool.query("SELECT * FROM test");
        console.log(result[0])
        res.json(result.rows);
    } catch (err) {
        console.log("errorororo")
        console.error(err);
        res.status(500).json({ error: "An error occurred while fetching the user." });
    }
};

export const adminLogin = async (req, res) => {

    res.json({ message: "Admin login logic goes here." });

};

export async function insertadmin(req, res) {
    try {
        const { username, email, password, conPassword } = req.body;

        if (password !== conPassword) {
            return res.json({ message: 'password not matchin' })
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const newAdmin = await pool.query(
            "INSERT INTO admins (username, passwords, email) VALUES ($1, $2, $3)",
            [username, hashedPassword, email]
        );
        res.json(newAdmin.rows)
    } catch (err) {
        console.log(err)
    }



}



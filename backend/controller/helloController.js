import pool from "../config/db.js";
import bcrypt from 'bcrypt'
const password = '12345'
const hashedPassword = await bcrypt.hash(password, 10);

console.log(hashedPassword)

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

async function insertadmin() {
    try {
        const newAdmin = await pool.query(
            "INSERT INTO admins (username, password, email) VALUES ($1, $2, $3)",
            ['shawn', hashedPassword, 'shawn@gmail.com']
        );
        console.log("successssfulllll")
    } catch (err) {
        console.log(err)
    }



}



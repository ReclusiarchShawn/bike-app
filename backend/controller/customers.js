import pool from "../config/db.js";
export const insertUsersInfo = async (req, res) => {
    try {
        const userinfo = await pool.query(
            "INSERT INTO customers (name, phoneno, address) VALUES ($1, $2, $3)",

        );
        res.json(userinfo)
    } catch (err) { }
}

export const insertCustomer = async (req, res)=>{
    try {
        const {form} = req.body
        const {bikeId}=req.body
        console.log("received: ", form)
        
        const insert = await pool.query("insert into cust_booking(cname,address,phoneno,email,book_dt,status,bike_id) values($1,$2,$3,$4,$5,$6,$7)", [form.customerName,form.address,form.phoneNumber,form.email,form.bookingDate,'inactive',bikeId])       
        res.json(insert) 
    } catch (err) {
        console.log("errorrrrr", err)
    }
}
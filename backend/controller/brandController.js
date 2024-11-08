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
export const insertBrand = async (req, res) => {
    try {
        console.log("run")
        const branddata = await json.parse(req.body.branddata)
        console.log(branddata)
        const brandimgs = req.files.brandimgs ? req.files.brandimgs[0] : null
        const brandimgpath = brandimgs ? `/uploads/${brandimgs.filename}` : null
        const insertBrand = await pool.query(
            "INSERT INTO brands(brand_name,img_path) values($1,$2) ", [branddata.brandimgs, brandimgpath]
        )
        res.json({ message: 'yesssss' })

    }
    catch (err) { }
}






import pool from "../config/db.js";
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });


  export const createOrder = async (req, res) => {
    const { amount, currency, receipt } = req.body;
    try {
      const options = {
        amount: amount * 100, // amount in the smallest currency unit (paisa for INR)
        currency: currency,
        receipt: receipt,
      };
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  export const verifyPayment = (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
    console.log('Order ID:', razorpay_order_id);
    console.log('Payment ID:', razorpay_payment_id);
    const hmac = crypto.createHmac('sha256', razorpay.key_secret);
    hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
    const generated_signature = hmac.digest('hex');
  
    if (generated_signature === razorpay_signature) {
      res.send('Payment verification successful');
    } else {
      res.status(400).send('Payment verification failed');
    }
  };
  
  export const paymentDetails = async (req, res) => {
    const paymentId = req.params.id;
    console.log(paymentId);
    try {
      const paymentDetails = await razorpay.payments.fetch(paymentId);
      res.json(paymentDetails);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching payment details' });
    }
  };
  


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
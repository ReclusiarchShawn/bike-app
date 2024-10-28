// Import the default export from the pg package
import pg from 'pg';

// Destructure the Pool class from the imported module
const { Pool } = pg;

// Create a new pool instance
const pool = new Pool({
    user: 'postgres',         // Your database username
    host: 'localhost',              // Your database host
    database: 'bike-booking',      // Your database name
    password: '12345',      // Your database password
    port: 5432,                     // Default PostgreSQL port
});

// Function to query the database
const connectDB = async () => {
    const client = await pool.connect();
    if (!client) {
        console.log("db connection failed")
    } else {
        console.log("db connected successfully...")
    }
};

connectDB()

export default pool
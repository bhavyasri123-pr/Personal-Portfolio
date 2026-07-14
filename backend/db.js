const mysql = require("mysql2");
require("dotenv").config();

// Helpful debug logs to see what variables Railway is giving us (hide passwords!)
console.log("--- DB Connection Info ---");
console.log("Using MYSQL_URL?", !!process.env.MYSQL_URL);
console.log("Using DATABASE_URL?", !!process.env.DATABASE_URL);
console.log("Host provided?", process.env.MYSQLHOST || process.env.DB_HOST || "No");

let pool;

// 1. Try connecting with a full URL if Railway provides it (very common and reliable)
if (process.env.MYSQL_URL || process.env.DATABASE_URL) {
  pool = mysql.createPool(process.env.MYSQL_URL || process.env.DATABASE_URL);
} else {
  // 2. Otherwise use the individual variables
  pool = mysql.createPool({
    host: process.env.MYSQLHOST || process.env.DB_HOST,
    user: process.env.MYSQLUSER || process.env.DB_USER,
    password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD,
    database: process.env.MYSQLDATABASE || process.env.DB_NAME,
    port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000
  });
}

// Test the connection pool on startup
pool.getConnection((err, connection) => {
  if (err) {
    console.log("Database Connection Pool Error:", err);
  } else {
    console.log("MySQL Connection Pool Initialized Successfully");
    connection.release();
  }
});

module.exports = pool;
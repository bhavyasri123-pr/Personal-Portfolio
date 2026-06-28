const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");

router.post("/login", (req, res) => {

    console.log("Request Body:", req.body);   // 👈 ADD HERE

    const { username, password } = req.body;

    db.query(
        "SELECT * FROM admin WHERE username = ?",
        [username],
        async (err, result) => {

            console.log("Database Result:", result);   // 👈 ADD HERE

            if (err) {
                console.log(err);                      // 👈 ADD HERE
                return res.status(500).json({ message: "Database Error" });
            }

            if (result.length === 0) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid Username"
                });
            }

            const admin = result[0];

            console.log("Stored Password:", admin.password);   // 👈 ADD HERE

            // const isMatch = await bcrypt.compare(password, admin.password);
console.log("Entered Password:", password);
console.log("Stored Hash:", admin.password);

const isMatch = await bcrypt.compare(password, admin.password);

console.log("Password Match:", isMatch);
            console.log("Password Match:", isMatch);   // 👈 ADD HERE

            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid Password"
                });
            }

            res.json({
                success: true,
                message: "Login Successful"
            });

        });

});
// --- TEMPORARY SETUP ROUTE ---
router.get("/setup", async (req, res) => {
    try {
        const username = "bhavya";
        const newPassword = "Password123!";
        const hash = await bcrypt.hash(newPassword, 10);
        
        // 1. Create Tables if they don't exist
        const createAdminTable = "CREATE TABLE IF NOT EXISTS admin (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))";
        const createProjectsTable = "CREATE TABLE IF NOT EXISTS projects (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description TEXT, technologies VARCHAR(255), github_link VARCHAR(255))";
        const createCertificatesTable = "CREATE TABLE IF NOT EXISTS certifications (id INT AUTO_INCREMENT PRIMARY KEY, icon_name VARCHAR(255), title VARCHAR(255), provider VARCHAR(255), description TEXT, year VARCHAR(255), color VARCHAR(255), link VARCHAR(255))";
        const createContactsTable = "CREATE TABLE IF NOT EXISTS contacts (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), message TEXT)";

        // Run table creations sequentially using Promises for simplicity in this script
        await new Promise((resolve) => db.query(createAdminTable, resolve));
        await new Promise((resolve) => db.query(createProjectsTable, resolve));
        await new Promise((resolve) => db.query(createCertificatesTable, resolve));
        await new Promise((resolve) => db.query(createContactsTable, resolve));
        
        // 2. Check if admin user exists
        db.query("SELECT * FROM admin WHERE username = ?", [username], (err, result) => {
            if (err) return res.send("Error checking database: " + err.message);
            
            if (result.length > 0) {
                // Update
                db.query("UPDATE admin SET password = ? WHERE username = ?", [hash, username], (err) => {
                    if (err) return res.send("Error updating password: " + err.message);
                    res.send("<h1>✅ Success! Tables Created & Password UPDATED on Live Database.</h1><p>You can now go back and log in with username: <b>bhavya</b> and password: <b>Password123!</b></p>");
                });
            } else {
                // Insert
                db.query("INSERT INTO admin (username, password) VALUES (?, ?)", [username, hash], (err) => {
                    if (err) return res.send("Error inserting user: " + err.message);
                    res.send("<h1>✅ Success! Tables Created & User CREATED on Live Database.</h1><p>You can now go back and log in with username: <b>bhavya</b> and password: <b>Password123!</b></p>");
                });
            }
        });
    } catch (e) {
        res.send("Error during setup: " + e.message);
    }
});
// -----------------------------

module.exports = router;
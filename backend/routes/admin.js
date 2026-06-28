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
        
        // First check if user exists
        db.query("SELECT * FROM admin WHERE username = ?", [username], (err, result) => {
            if (err) return res.send("Error checking database.");
            
            if (result.length > 0) {
                // Update
                db.query("UPDATE admin SET password = ? WHERE username = ?", [hash, username], (err) => {
                    if (err) return res.send("Error updating password.");
                    res.send("<h1>✅ Success! Password UPDATED on Live Database.</h1><p>You can now go back and log in with username: <b>bhavya</b> and password: <b>Password123!</b></p>");
                });
            } else {
                // Insert
                db.query("INSERT INTO admin (username, password) VALUES (?, ?)", [username, hash], (err) => {
                    if (err) return res.send("Error inserting user.");
                    res.send("<h1>✅ Success! User CREATED on Live Database.</h1><p>You can now go back and log in with username: <b>bhavya</b> and password: <b>Password123!</b></p>");
                });
            }
        });
    } catch (e) {
        res.send("Error hashing password.");
    }
});
// -----------------------------

module.exports = router;
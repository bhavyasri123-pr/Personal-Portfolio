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

module.exports = router;
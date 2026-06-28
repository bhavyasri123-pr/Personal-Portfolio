const db = require("./db");
const bcrypt = require("bcryptjs");

async function fixPassword() {
    const username = "bhavya"; // actual username in database
    const newPassword = "Password123!"; // The new password you will use to log in
    
    console.log(`Hashing new password: ${newPassword}...`);
    const hash = await bcrypt.hash(newPassword, 10);
    
    console.log("Updating database...");
    db.query(
        "UPDATE admin SET password = ? WHERE username = ?",
        [hash, username],
        (err, result) => {
            if (err) {
                console.log("Error updating password:", err);
            } else {
                console.log("✅ Success! Password updated.");
                console.log("You can now log in with:");
                console.log(`Username: ${username}`);
                console.log(`Password: ${newPassword}`);
            }
            process.exit();
        }
    );
}

fixPassword();

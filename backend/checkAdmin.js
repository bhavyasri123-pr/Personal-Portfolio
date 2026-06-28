const db = require("./db");

db.query("SELECT * FROM admin", (err, result) => {
    if (err) {
        console.log("Error querying admin table:", err);
    } else {
        console.log("Admin table contents:");
        console.log(result);
    }
    process.exit();
});

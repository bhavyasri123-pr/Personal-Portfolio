const bcrypt = require("bcryptjs");

bcrypt.hash("Bhavya@2026", 10).then(hash => {
    console.log(hash);
});
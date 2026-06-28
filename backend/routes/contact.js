const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {

  const { name, email, message } = req.body;

  db.query(
    "INSERT INTO contacts(name,email,message) VALUES(?,?,?)",
    [name, email, message],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Message Saved Successfully"
      });

    }
  );

});
router.get("/", (req, res) => {

    db.query(
        "SELECT * FROM contacts",
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

});
router.delete("/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM contacts WHERE id = ?",
        [id],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Message Deleted Successfully"
            });

        }
    );

});
module.exports = router;
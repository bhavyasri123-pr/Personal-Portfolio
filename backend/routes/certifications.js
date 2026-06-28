const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM certifications",
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json(result);
    }
  );
});
router.get("/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "SELECT * FROM certifications WHERE id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Certificate not found"
                });
            }

            res.json(result[0]);

        }

    );

});
router.post("/", (req, res) => {

    const {
        icon_name,
        title,
        provider,
        description,
        year,
        color,
        link
    } = req.body;

    db.query(
        `INSERT INTO certifications
        (icon_name, title, provider, description, year, color, link)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
            icon_name,
            title,
            provider,
            description,
            year,
            color,
            link
        ],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Certificate Added Successfully"
            });

        }
    );

});
router.delete("/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM certifications WHERE id = ?",
        [id],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Certificate Deleted Successfully"
            });

        }
    );

});
router.put("/:id", (req, res) => {

    const id = req.params.id;

    const {
        icon_name,
        title,
        provider,
        description,
        year,
        color,
        link
    } = req.body;

    db.query(

        `UPDATE certifications
        SET
        icon_name=?,
        title=?,
        provider=?,
        description=?,
        year=?,
        color=?,
        link=?
        WHERE id=?`,

        [
            icon_name,
            title,
            provider,
            description,
            year,
            color,
            link,
            id
        ],

        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Certificate Updated Successfully"
            });

        }

    );

});
module.exports = router;

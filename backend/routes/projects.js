const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM projects",
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
});
router.post("/", (req, res) => {

    const { title, description, technologies, github_link } = req.body;

    db.query(
        "INSERT INTO projects (title, description, technologies, github_link) VALUES (?, ?, ?, ?)",
        [title, description, technologies, github_link],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Project Added Successfully"
            });

        }
    );

});
router.delete("/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM projects WHERE id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Project Deleted Successfully"
            });

        }
    );

});
router.get("/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "SELECT * FROM projects WHERE id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.length === 0) {
                return res.status(404).json({
                    message: "Project not found"
                });
            }

            res.json(result[0]);

        }
    );

});
router.put("/:id", (req, res) => {

    const id = req.params.id;

    const { title, description, technologies, github_link } = req.body;

    db.query(
        "UPDATE projects SET title=?, description=?, technologies=?, github_link=? WHERE id=?",
        [title, description, technologies, github_link, id],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                success: true,
                message: "Project Updated Successfully"
            });

        }
    );

});
module.exports = router;
require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");

const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");
const certificationRoutes = require("./routes/certifications");

const app = express();
const adminRoutes = require("./routes/admin");
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
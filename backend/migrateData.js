const mysql = require("mysql2");
const axios = require("axios");
require("dotenv").config({ path: "./.env" });

// Local DB connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Bhavya@98",
  database: process.env.DB_NAME || "portfolio"
});

const LIVE_API_URL = "https://personal-portfolio-production-da8a.up.railway.app/api";

async function migrate() {
    console.log("Triggering Live Database Setup...");
    try {
        const setupRes = await axios.get(`${LIVE_API_URL}/admin/setup`);
        console.log("Setup response:", setupRes.data.substring(0, 50) + "...");
    } catch (e) {
        console.log("Setup request failed, it might not be deployed yet:", e.message);
    }

    console.log("Connecting to local database...");
    connection.connect();

    try {
        // Migrate Projects
        console.log("Fetching local projects...");
        const [projects] = await connection.promise().query("SELECT * FROM projects");
        for (let p of projects) {
            console.log(`Sending project: ${p.title}`);
            try {
                await axios.post(`${LIVE_API_URL}/projects`, {
                    title: p.title,
                    description: p.description,
                    technologies: p.technologies,
                    github_link: p.github_link
                });
            } catch (e) {
                console.error("Failed to push project:", e.message);
            }
        }

        // Migrate Certifications
        console.log("Fetching local certifications...");
        const [certs] = await connection.promise().query("SELECT * FROM certifications");
        for (let c of certs) {
            console.log(`Sending certificate: ${c.title}`);
            try {
                await axios.post(`${LIVE_API_URL}/certifications`, {
                    icon_name: c.icon_name,
                    title: c.title,
                    provider: c.provider,
                    description: c.description,
                    year: c.year,
                    color: c.color,
                    link: c.link
                });
            } catch (e) {
                console.error("Failed to push certification:", e.message);
            }
        }

        console.log("✅ Migration complete!");

    } catch (error) {
        console.error("Migration failed:", error);
    } finally {
        connection.end();
    }
}

migrate();

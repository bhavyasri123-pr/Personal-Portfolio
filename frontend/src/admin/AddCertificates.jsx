import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddCertificates() {

    const navigate = useNavigate();

    const [iconName, setIconName] = useState("");
    const [title, setTitle] = useState("");
    const [provider, setProvider] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");
    const [link, setLink] = useState("");

    const addCertificate = async () => {

        try {

            await axios.post(
                (window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-crga.onrender.com/api") + "/certifications",
                {
                    icon_name: iconName,
                    title,
                    provider,
                    description,
                    year,
                    color,
                    link
                }
            );

            alert("Certificate Added Successfully!");

            navigate("/admin/certificates");

        } catch (err) {

            alert("Error Adding Certificate");

        }

    };

    return (

        <div
            className="container-fluid py-5"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #dcfce7, #eefbf3)"
            }}
        >

            <div className="container">

                <div
                    className="card shadow-lg border-0 rounded-4 mx-auto"
                    style={{ maxWidth: "700px" }}
                >

                    <div className="card-body p-5">

                        <h2 className="text-center text-success fw-bold mb-4">
                            🏆 Add Certificate
                        </h2>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Icon Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="FaReact, FaJava..."
                                value={iconName}
                                onChange={(e) => setIconName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Certificate Title
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Certificate Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Provider
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Coursera, Udemy..."
                                value={provider}
                                onChange={(e) => setProvider(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Description
                            </label>

                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="Certificate Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Year
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="2025"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Color
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="#61DAFB"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold">
                                Certificate Link
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="https://..."
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </div>

                        <div className="d-flex justify-content-between">

                            <button
                                className="btn btn-secondary rounded-pill px-4"
                                onClick={() => navigate("/admin/certificates")}
                            >
                                ← Back
                            </button>

                            <button
                                className="btn btn-success rounded-pill px-4"
                                onClick={addCertificate}
                            >
                                ➕ Add Certificate
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AddCertificates;
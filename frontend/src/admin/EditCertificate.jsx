import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditCertificate() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [iconName, setIconName] = useState("");
    const [title, setTitle] = useState("");
    const [provider, setProvider] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {

        const admin = localStorage.getItem("admin");

        if (!admin) {
            navigate("/admin/login");
        }

        fetchCertificate();

    }, []);

    const fetchCertificate = async () => {

        try {

            const res = await axios.get(
                `${window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-crga.onrender.com/api"}/certifications/${id}`
            );

            setIconName(res.data.icon_name);
            setTitle(res.data.title);
            setProvider(res.data.provider);
            setDescription(res.data.description);
            setYear(res.data.year);
            setColor(res.data.color);
            setLink(res.data.link);

        } catch (err) {

            console.log(err);

        }

    };

    const updateCertificate = async () => {

        try {

            await axios.put(
                `${window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-crga.onrender.com/api"}/certifications/${id}`,
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

            alert("Certificate Updated Successfully!");

            navigate("/admin/certificates");

        } catch (err) {

            alert("Error Updating Certificate");

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
                            ✏️ Edit Certificate
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
                                onClick={updateCertificate}
                            >
                                💾 Update Certificate
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EditCertificate;
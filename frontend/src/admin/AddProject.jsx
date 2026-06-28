import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProject() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [githubLink, setGithubLink] = useState("");

    const addProject = async () => {

        try {

            await axios.post("https://personal-portfolio-production-da8a.up.railway.app/api/projects", {
                title,
                description,
                technologies,
                github_link: githubLink
            });

            alert("Project Added Successfully!");

            setTitle("");
            setDescription("");
            setTechnologies("");
            setGithubLink("");

            navigate("/admin/projects");

        } catch (err) {

            alert("Error Adding Project");

        }

    };

    return (

        <div
            className="container-fluid py-5"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #dbeafe, #eef4ff)"
            }}
        >

            <div className="container">

                <div
                    className="card shadow-lg border-0 rounded-4 mx-auto"
                    style={{ maxWidth: "700px" }}
                >

                    <div className="card-body p-5">

                        <h2 className="text-center text-primary fw-bold mb-4">
                            📁 Add New Project
                        </h2>

                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Project Title
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Project Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Description
                            </label>

                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="Enter Project Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Technologies
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="React, Node.js, MySQL..."
                                value={technologies}
                                onChange={(e) => setTechnologies(e.target.value)}
                            />

                        </div>

                        <div className="mb-4">

                            <label className="form-label fw-semibold">
                                GitHub Link
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="https://github.com/username/project"
                                value={githubLink}
                                onChange={(e) => setGithubLink(e.target.value)}
                            />

                        </div>

                        <div className="d-flex justify-content-between">

                            <button
                                className="btn btn-secondary rounded-pill px-4"
                                onClick={() => navigate("/admin/projects")}
                            >
                                ← Back
                            </button>

                            <button
                                className="btn btn-primary rounded-pill px-4"
                                onClick={addProject}
                            >
                                Add Project
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AddProject;
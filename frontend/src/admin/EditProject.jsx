import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProject() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [githubLink, setGithubLink] = useState("");

    useEffect(() => {

        const admin = localStorage.getItem("admin");

        if (!admin) {
            navigate("/admin/login");
        }

        fetchProject();

    }, []);

    const fetchProject = async () => {

        try {

            const res = await axios.get(
                `https://personal-portfolio-production-da8a.up.railway.app/api/projects/${id}`
            );

            setTitle(res.data.title);
            setDescription(res.data.description);
            setTechnologies(res.data.technologies);
            setGithubLink(res.data.github_link);

        } catch (err) {

            console.log(err);

        }

    };

    const updateProject = async () => {

        try {

            await axios.put(
                `https://personal-portfolio-production-da8a.up.railway.app/api/projects/${id}`,
                {
                    title,
                    description,
                    technologies,
                    github_link: githubLink
                }
            );

            alert("Project Updated Successfully!");

            navigate("/admin/projects");

        } catch (err) {

            alert("Error Updating Project");

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
                            ✏️ Edit Project
                        </h2>

                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Project Title
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Project Title"
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Description
                            </label>

                            <textarea
                                className="form-control"
                                rows="4"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Technologies
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={technologies}
                                onChange={(e) => setTechnologies(e.target.value)}
                                placeholder="React, Node.js, MySQL..."
                            />

                        </div>

                        <div className="mb-4">

                            <label className="form-label fw-semibold">
                                GitHub Link
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={githubLink}
                                onChange={(e) => setGithubLink(e.target.value)}
                                placeholder="https://github.com/username/project"
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
                                onClick={updateProject}
                            >
                                💾 Update Project
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EditProject;
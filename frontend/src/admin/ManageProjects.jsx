import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManageProjects() {

    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const admin = localStorage.getItem("admin");

        if (!admin) {
            navigate("/admin/login");
        }

        fetchProjects();

    }, []);

    const fetchProjects = async () => {

        try {

            const res = await axios.get(
                (window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-production-da8a.up.railway.app/api") + "/projects"
            );

            setProjects(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const deleteProject = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this project?"
        );

        if (!confirmDelete) return;

        try {

            await axios.delete(
                `${window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-production-da8a.up.railway.app/api"}/projects/${id}`
            );

            alert("Project Deleted Successfully");

            fetchProjects();

        } catch (err) {

            alert("Error deleting project");

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

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2 className="fw-bold text-primary">
                        📁 Manage Projects
                    </h2>

                    <button
                        className="btn btn-primary rounded-pill px-4"
                        onClick={() => navigate("/admin/projects/add")}
                    >
                        + Add Project
                    </button>

                </div>

                <div className="card shadow-lg border-0 rounded-4">

                    <div className="card-body">

                        <table className="table table-hover align-middle">

                            <thead className="table-primary">

                                <tr>

                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Technologies</th>
                                    <th className="text-center">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {projects.length > 0 ? (

                                    projects.map((project) => (

                                        <tr key={project.id}>

                                            <td>{project.id}</td>

                                            <td>{project.title}</td>

                                            <td>{project.technologies}</td>

                                            <td className="text-center">

                                                <button
                                                    className="btn btn-warning btn-sm rounded-pill me-2"
                                                    onClick={() =>
                                                        navigate(`/admin/projects/edit/${project.id}`)
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-danger btn-sm rounded-pill"
                                                    onClick={() =>
                                                        deleteProject(project.id)
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="text-center text-muted py-4"
                                        >
                                            No projects found.
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                <div className="mt-4">

                    <button
                        className="btn btn-secondary rounded-pill px-4"
                        onClick={() => navigate("/admin/dashboard")}
                    >
                        ← Back to Dashboard
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ManageProjects;
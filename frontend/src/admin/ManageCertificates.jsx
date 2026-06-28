import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManageCertificates() {

    const [certificates, setCertificates] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const admin = localStorage.getItem("admin");

        if (!admin) {
            navigate("/admin/login");
        }

        fetchCertificates();

    }, []);

    const fetchCertificates = async () => {

        try {

            const res = await axios.get(
                (window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-production-da8a.up.railway.app/api") + "/certifications"
            );

            setCertificates(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const deleteCertificate = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this certificate?"
        );

        if (!confirmDelete) return;

        try {

            await axios.delete(
                `${window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-production-da8a.up.railway.app/api"}/certifications/${id}`
            );

            alert("Certificate Deleted Successfully");

            fetchCertificates();

        } catch (err) {

            alert("Error deleting certificate");

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

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-4">

                    <h2 className="fw-bold text-success text-center text-md-start">
                        🏆 Manage Certificates
                    </h2>

                    <button
                        className="btn btn-success rounded-pill px-4"
                        onClick={() => navigate("/admin/certificates/add")}
                    >
                        + Add Certificate
                    </button>

                </div>

                <div className="card shadow-lg border-0 rounded-4">

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead className="table-success">

                                    <tr>

                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Provider</th>
                                        <th>Year</th>
                                        <th className="text-center">Actions</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {certificates.length > 0 ? (

                                        certificates.map((certificate) => (

                                            <tr key={certificate.id}>

                                                <td>{certificate.id}</td>

                                                <td>{certificate.title}</td>

                                                <td>{certificate.provider}</td>

                                                <td>{certificate.year}</td>

                                                <td className="text-center">

                                                    <button
                                                        className="btn btn-warning btn-sm rounded-pill me-2 mb-2 mb-md-0"
                                                        onClick={() =>
                                                            navigate(`/admin/certificates/edit/${certificate.id}`)
                                                        }
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        className="btn btn-danger btn-sm rounded-pill"
                                                        onClick={() =>
                                                            deleteCertificate(certificate.id)
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
                                                colSpan="5"
                                                className="text-center text-muted py-4"
                                            >
                                                No certificates found.
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

                <div className="mt-4 text-center text-md-start">

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

export default ManageCertificates;
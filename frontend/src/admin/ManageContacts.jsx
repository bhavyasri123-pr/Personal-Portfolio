import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManageContacts() {

    const [contacts, setContacts] =useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const admin = localStorage.getItem("admin");

        if (!admin) {
            navigate("/admin/login");
        }

        fetchContacts();

    }, []);

    const fetchContacts = async () => {

        try {

            const res = await axios.get(
                (window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-crga.onrender.com/api") + "/contact"
            );

            setContacts(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const deleteMessage = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this message?"
        );

        if (!confirmDelete) return;

        try {

            await axios.delete(
                `${window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-crga.onrender.com/api"}/contact/${id}`
            );

            alert("Message Deleted Successfully");

            fetchContacts();

        } catch (err) {

            alert("Error deleting message");

        }

    };

    return (

        <div
            className="container-fluid py-5"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #fff7d6, #fffbe6)"
            }}
        >

            <div className="container">

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-4">

                    <h2 className="fw-bold text-warning text-center text-md-start">
                        📩 Contact Messages
                    </h2>

                </div>

                <div className="card shadow-lg border-0 rounded-4">

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead className="table-warning">

                                    <tr>

                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Message</th>
                                        <th className="text-center">Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {contacts.length > 0 ? (

                                        contacts.map((contact) => (

                                            <tr key={contact.id}>

                                                <td>{contact.id}</td>

                                                <td>{contact.name}</td>

                                                <td
                                                    style={{
                                                        maxWidth: "180px",
                                                        wordBreak: "break-word"
                                                    }}
                                                >
                                                    {contact.email}
                                                </td>

                                                <td
                                                    style={{
                                                        maxWidth: "220px",
                                                        wordBreak: "break-word"
                                                    }}
                                                >
                                                    {contact.message}
                                                </td>

                                                <td className="text-center">

                                                    <button
                                                        className="btn btn-danger btn-sm rounded-pill"
                                                        onClick={() => deleteMessage(contact.id)}
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
                                                No messages found.
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

export default ManageContacts;
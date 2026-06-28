import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }

        try {

            const res = await axios.post(
                (window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-production-da8a.up.railway.app/api") + "/admin/login",
                {
                    username,
                    password
                }
            );

            if (res.data.success) {

                localStorage.setItem("admin", "true");

                navigate("/admin/dashboard");

            }

        } catch (err) {

            alert("Invalid Username or Password");

        }

    };

    return (

        <div
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #ede9fe, #f5f3ff)"
            }}
        >

            <div
                className="card shadow-lg border-0 rounded-4"
                style={{
                    width: "420px"
                }}
            >

                <div className="card-body p-5">

                    <div className="text-center mb-4">

                        <div style={{ fontSize: "60px" }}>
                            🔐
                        </div>

                        <h2 className="fw-bold mt-2">
                            Admin Login
                        </h2>

                        <p className="text-muted">
                            Login to access your Portfolio Dashboard
                        </p>

                    </div>

                    <div className="mb-3">

                        <label className="form-label fw-semibold">
                            Username
                        </label>

                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>

                    <button
                        className="btn btn-primary w-100 rounded-pill py-2 fw-bold"
                        onClick={login}
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Login;
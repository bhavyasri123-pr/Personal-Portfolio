import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import AdminNavbar from "./AdminNavbar";
function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    
    <div
    
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dbeafe, #f8fafc)",
      }}
    >
        
      <div className="container">
         
        <h1 className="text-center fw-bold mb-2">
          Portfolio Admin Panel
        </h1>

        <p className="text-center text-secondary fs-5 mb-5">
          Welcome, <strong>Bhavya</strong> 👋
        </p>
         
        <div className="row g-4">

          {/* Projects */}
          <div className="col-md-4">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body text-center p-4">

                <div style={{ fontSize: "55px" }}>📁</div>

                <h3 className="fw-bold mt-2">
                  Projects
                </h3>

                <p className="text-muted">
                  Add, edit and delete your portfolio projects.
                </p>

                <button
                  className="btn btn-primary rounded-pill px-4"
                  onClick={() => navigate("/admin/projects")}
                >
                  Manage Projects
                </button>

              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="col-md-4">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body text-center p-4">

                <div style={{ fontSize: "55px" }}>🏆</div>

                <h3 className="fw-bold mt-2">
                  Certificates
                </h3>

                <p className="text-muted">
                  Add, edit and manage all your certificates.
                </p>

                <button
                  className="btn btn-success rounded-pill px-4"
                  onClick={() => navigate("/admin/certificates")}
                >
                  Manage Certificates
                </button>

              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="col-md-4">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body text-center p-4">

                <div style={{ fontSize: "55px" }}>📩</div>

                <h3 className="fw-bold mt-2">
                  Messages
                </h3>

                <p className="text-muted">
                  Read and manage messages received from visitors.
                </p>

                <button
                  className="btn btn-warning rounded-pill px-4"
                  onClick={() => navigate("/admin/contacts")}
                >
                  View Messages
                </button>

              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-5">

          <button
            className="btn btn-danger rounded-pill px-5 py-2"
            onClick={logout}
          >
            Logout
          </button>

        </div>
       
      </div>
    </div>
  );
}

export default Dashboard;
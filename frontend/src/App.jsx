import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Portfolio
import Portfolio from "./pages/Portfolio";

// Admin
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

import ManageProjects from "./admin/ManageProjects";
import AddProject from "./admin/AddProject";
import EditProject from "./admin/EditProject";

import ManageCertificates from "./admin/ManageCertificates";
import AddCertificate from "./admin/AddCertificates";
import EditCertificate from "./admin/EditCertificate";
import ManageContacts from "./admin/ManageContacts";
function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>

      <Routes>

        {/* Portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* Projects */}
        <Route path="/admin/projects" element={<ManageProjects />} />
        <Route path="/admin/projects/add" element={<AddProject />} />
        <Route path="/admin/projects/edit/:id" element={<EditProject />} />

        {/* Certificates */}
        <Route path="/admin/certificates" element={<ManageCertificates />} />
        <Route path="/admin/certificates/add" element={<AddCertificate />} />

        <Route path="/admin/certificates/edit/:id" element={<EditCertificate />} />
        <Route path="/admin/contacts" element={<ManageContacts />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
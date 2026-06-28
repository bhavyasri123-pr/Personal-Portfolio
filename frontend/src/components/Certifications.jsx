import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Certifications.css";

import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaDatabase,
  FaCertificate,
  FaAws,
  FaJava
} from "react-icons/fa";

import { MdWork } from "react-icons/md";

const iconMap = {
  MdWork: <MdWork />,
  FaJava: <FaJava />,
  FaCertificate: <FaCertificate />,
  FaAws: <FaAws />,
  FaDatabase: <FaDatabase />
};

function Certifications() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    axios.get("https://personal-portfolio-production-da8a.up.railway.app/api/certifications")
      .then((response) => {
        setCertificates(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section id="certifications">
      <h2>
        CERTIFICATIONS & <span>TRAINING</span>
      </h2>

      <p className="cert-subtitle">
        A collection of certifications and training programs
        that reflect my continuous learning journey.
      </p>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className={`cert-card ${cert.color}`}
            key={cert.id}
          >
            <div className="cert-top">
              <div className="cert-logo">
                {iconMap[cert.icon_name]}
              </div>
              <FaExternalLinkAlt />
            </div>

            <h3>{cert.title}</h3>
            <h4>{cert.provider}</h4>
            <p>{cert.description}</p>

            <div className="cert-footer">
              <FaCalendarAlt />
              <span>{cert.year}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
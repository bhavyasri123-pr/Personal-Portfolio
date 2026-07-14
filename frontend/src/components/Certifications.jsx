import { useState } from "react";
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
  const [certificates] = useState([
    {
      id: 1,
      icon_name: "MdWork",
      title: "Infosys Springboard Internship 6.0",
      provider: "Infosys Springboard",
      description: "AI-Driven Expense Tracker & Budget Advisor",
      year: "2025–2026",
      color: "purple",
      link: "/certificates/infosys.pdf"
    },
    {
      id: 2,
      icon_name: "FaJava",
      title: "NPTEL – Programming in Java",
      provider: "NPTEL",
      description: "Elite Certificate • Score: 76%",
      year: "2025",
      color: "blue",
      link: "/certificates/nptel.pdf"
    },
    {
      id: 3,
      icon_name: "FaCertificate",
      title: "TCS iON Career Edge",
      provider: "TCS iON",
      description: "Young Professional",
      year: "June 2025",
      color: "green",
      link: "/certificates/tcs.pdf"
    },
    {
      id: 4,
      icon_name: "FaAws",
      title: "AWS Cloud Computing Program",
      provider: "APSSDC",
      description: "Certificate of Participation",
      year: "October 2024",
      color: "orange",
      link: "/certificates/aws.pdf"
    },
    {
      id: 5,
      icon_name: "FaDatabase",
      title: "SQL for Data Management",
      provider: "360DigiTMG",
      description: "In association with APSSDC",
      year: "June 2025",
      color: "cyan",
      link: "/certificates/sql.pdf"
    },
    {
      id: 6,
      icon_name: "FaCertificate",
      title: "Java Full Stack Development",
      provider: "XYZ Academy",
      description: "Completed Java Full Stack Development Course",
      year: "2026",
      color: "#f39c12",
      link: "/certificates/java.pdf"
    }
  ]);

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
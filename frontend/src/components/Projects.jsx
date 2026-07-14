import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    axios
      .get((window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://personal-portfolio-crga.onrender.com/api") + "/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <section
    id="projects"
    data-aos="fade-up"
>
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong>{" "}
              {project.technologies}
            </p>
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
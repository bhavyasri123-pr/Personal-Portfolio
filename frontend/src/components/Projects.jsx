import { useState } from "react";

function Projects() {

  const [projects] = useState([
    {
      id: 1,
      title: "🎓 Student Placement Prediction",
      description: "Machine learning web application that predicts whether a student will be placed based on academic performance, test scores, skills, and other factors using classification algorithms.",
      technologies: "Python, Pandas, NumPy, Scikit-learn, Streamlit, Matplotlib",
      github_link: "https://github.com/bhavyasri123-pr/Student-Placement-Prediction"
    },
    {
      id: 2,
      title: "📊  BudgetWise Finance Tracker",
      description: "AI-powered full-stack financial management application for expense tracking and budget planning. Features secure JWT authentication, BCrypt password encryption, interactive dashboards, and real-time financial analytics.",
      technologies: "Java 17, Spring Boot, React.js, MySQL, JWT, BCrypt, REST APIs, Git, GitHub",
      github_link: "https://github.com/budgetwise-finance-tracker/budgetwise-finance-tracker"
    }
  ]);

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
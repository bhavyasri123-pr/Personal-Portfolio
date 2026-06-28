import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import developer from "../assets/developer.png.jpeg";
// import Certifications from "./Certifications";

function Home() {
  return (
    <section id="home">
      <div className="home-left">
        <p className="intro">Hello, I'm</p>

        <h1> Donthu Bhavya Sri</h1>

        <h2> Aspiring Java Full Stack Developer</h2>

        <p className="home-description">
          Passionate about building scalable web applications,
          and AI-powered solutions using Java, Spring Boot,
          React.js, Node.js and MySQL.
        </p>

        <div className="home-buttons">
          <a href="/resume.pdf" target="_blank"
  rel="noreferrer" className="resume-btn">
            <FaDownload /> Download Resume
          </a>

          <a
            href="https://github.com/bhavyasri123-pr"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bhavya-sri-donthu-0412b42b7"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="home-right">
        <img src={developer} alt="Developer" />
      </div>
    </section>
  );
}

export default Home;
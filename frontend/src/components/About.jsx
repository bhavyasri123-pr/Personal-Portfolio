import {
  FaGraduationCap,
  FaUniversity,
  FaChartLine,
  FaBrain,
  FaMapMarkerAlt
} from "react-icons/fa";

function About() {
  return (
    <section id="about" data-aos="fade-up">
      <h2>About Me</h2>

      <div className="about-description">
        <p>
          I am a B.Tech Computer Science and Engineering student at
          <span> Sri Venkateswara College of Engineering, Tirupati</span>,
          with a strong interest in
          <span> Java Full Stack Development</span> and
          <span> Machine Learning</span>.
        </p>

        <p>
          I enjoy building responsive web applications, solving real-world
          problems, and continuously learning new technologies.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <FaGraduationCap className="card-icon" />
          <h3>DEGREE</h3>
          <h4>B.Tech CSE</h4>
          <p>(2023 – 2027)</p>
        </div>

        <div className="about-card">
          <FaUniversity className="card-icon" />
          <h3>COLLEGE</h3>
          <h4>Sri Venkateswara College of Engineering</h4>
          <p>Tirupati</p>
        </div>

        <div className="about-card">
          <FaChartLine className="card-icon" />
          <h3>CGPA</h3>
          <h4>9.61</h4>
          <p>(Till Now)</p>
        </div>

        <div className="about-card">
          <FaBrain className="card-icon" />
          <h3>INTERESTS</h3>
          <h4>Java Full Stack Development</h4>
          <p>AI & Machine Learning</p>
        </div>

        <div className="about-card">
          <FaMapMarkerAlt className="card-icon" />
          <h3>LOCATION</h3>
          <h4>Tirupati</h4>
          <p>Andhra Pradesh</p>
        </div>
      </div>
    </section>
  );
}

export default About;
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" data-aos="fade-up">
      <div className="skills-header">
        <h2><span>SKILLS</span></h2>
      </div>

      <ul className="skills-grid">
        <li className="skill-card">
          <FaJava className="skill-icon" color="#E76F00" />
          <span>Java</span>
        </li>
        <li className="skill-card">
          <FaJs className="skill-icon" color="#F7DF1E" />
          <span>JavaScript</span>
        </li>
        <li className="skill-card">
          <FaReact className="skill-icon" color="#61DAFB" />
          <span>React</span>
        </li>
        <li className="skill-card">
          <FaHtml5 className="skill-icon" color="#E34F26" />
          <span>HTML5</span>
        </li>
        <li className="skill-card">
          <FaCss3Alt className="skill-icon" color="#1572B6" />
          <span>CSS3</span>
        </li>
        <li className="skill-card">
          <SiMysql className="skill-icon" color="#4479A1" />
          <span>MySQL</span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
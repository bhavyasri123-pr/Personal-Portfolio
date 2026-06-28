import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";
function Footer() {
  return (
    <footer
    className="footer"
    data-aos="fade-up"
>
      <h2> Donthu Bhavya Sri</h2>

      <p> Aspiring Java Full Stack Developer</p>

      <div className="footer-links">

<a href="mailto:bhavyasridonthu100@gmail.com">
  <FaEnvelope />
  Email Me
</a>

<a
href="https://github.com/bhavyasri123-pr"
target="_blank"
rel="noreferrer"
>

<FaGithub />

GitHub

</a>

<a
href="https://www.linkedin.com/in/bhavya-sri-donthu-0412b42b7"
target="_blank"
rel="noreferrer"
>

<FaLinkedin />

LinkedIn

</a>
</div>

      <p className="copyright">
        © 2026 Bhavya Sri
      </p>
    </footer>
  );
}

export default Footer;
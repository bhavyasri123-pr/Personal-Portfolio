import { useState } from "react";
import axios from "axios";
import {
FaUser,
FaEnvelope,
FaComment
} from "react-icons/fa";
function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "https://personal-portfolio-production-da8a.up.railway.app/api/contact",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section
    id="contact"
    data-aos="fade-up"
>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>

  <div className="input-group">
    <FaUser className="input-icon" />
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div className="input-group">
    <FaEnvelope className="input-icon" />
    <input
      type="email"
      name="email"
      placeholder="Enter Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="input-group textarea-group">
    <FaComment className="input-icon" />
    <textarea
      name="message"
      placeholder="Enter Message"
      value={formData.message}
      onChange={handleChange}
      required
    />
  </div>

  <button type="submit">
    Send
  </button>

</form>
    </section>
  );
}

export default Contact;
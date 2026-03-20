import { motion } from "framer-motion";
import "./Contact.css";
import resume from "../assets/resume.pdf";

export default function Contact() {
  return (
    <div className="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact</h2>

        <p>
          Feel free to reach out for collaborations or opportunities.
        </p>

        {/* Main Links */}
        <div className="contact-links">
          <a href="mailto:aasifmohamed32@gmail.com">Email</a>

          <a href="https://github.com/infesto05" target="_blank">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-aasif-ghani-4801bb292/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>

        {/* Resume Section (separate = premium look) */}
        <div className="resume-section">
          <a href={resume} target="_blank" className="resume-btn">
            View Resume
          </a>

          <a href={resume} download className="resume-btn outline">
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}
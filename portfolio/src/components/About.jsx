import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="about-content"
      >
        <h2>About Me</h2>

<p>
I am an aspiring software developer with a strong passion for building modern, scalable applications and exploring the power of artificial intelligence. I actively work with frontend technologies like React and JavaScript while also focusing on version control and development workflows using Git.

I have a growing interest in designing and integrating AI models into real-world applications. My work includes developing systems like an AI-powered dynamic pricing platform and an AI-based diagnostic tool for crop disease detection using YOLO and TabNet, where I focused on combining machine learning with practical user interfaces.

Through my projects, I aim to bridge the gap between intelligent systems and user-friendly applications, constantly learning and improving to build impactful, scalable solutions.
</p>
      </motion.div>
    </div>
  );
}
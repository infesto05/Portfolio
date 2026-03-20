import { motion } from "framer-motion";
import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "AI Dynamic Pricing",
    desc: "Smart pricing system based on expiry and demand.",
    details:
      "Built a system that dynamically adjusts prices based on product lifecycle, reducing waste and improving efficiency.",
    github: "https://github.com/infesto05/smart-detail-demo",
  },
  {
    title: "Expense Tracker",
    desc: "React-based budget tracking with analytics.",
    details:
      "A full-featured expense tracker with charts, filters, and CSV export.",
    github: "https://github.com/infesto05/Expense-Tracker",
  },
  {
    title: "Group Expense Chatbox",
    desc: "Real-time expense sharing system.",
    details:
      "Allows users to track shared expenses with chat-based UI.",
    github: "https://github.com/infesto05/group-expense-ChatBox",
  },
  {
    title: "Scam-shield",
    desc: "Simple Scam Detection System for text based messages.",
    details:
      "AI model is trained to detect scam messages so it makes sure to detect and alert the users to whether reply to the messages or not.  ",
    github: "https://github.com/infesto05/scam-shield-frontend",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-item">
            
            {/* Card */}
            <motion.div
              className="project-card"
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </motion.div>

            {/* EXPANDED SECTION */}
            {activeIndex === index && (
              <motion.div
                className="project-expand"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                <p>{proj.details}</p>

                <a href={proj.github} target="_blank">
                  View on GitHub →
                </a>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
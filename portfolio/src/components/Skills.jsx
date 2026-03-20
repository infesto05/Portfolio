import { motion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            className="skill-group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{group.title}</h3>

            <div className="skill-items">
              {group.skills.map((skill, index) => (
                <span key={index} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
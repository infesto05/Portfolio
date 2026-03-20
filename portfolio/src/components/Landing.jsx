import { motion } from "framer-motion";
import "./Landing.css";

export default function Landing({ onEnter }) {
  return (
    <motion.div
      className="landing"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="landing-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mohamed Aasif Ghani
      </motion.h1>

      <motion.button
        className="enter-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onEnter}
      >
        Portfolio →
      </motion.button>
    </motion.div>
  );
}
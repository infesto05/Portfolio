import { motion } from "framer-motion";
import { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="hero"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {/* Soft Glow */}
      <div
        className="glow"
        style={{ left: pos.x, top: pos.y }}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero-content"
      >
        <h1 className="hero-title">Mohamed Aasif Ghani</h1>

        <p className="hero-sub">
          Software Developer • AI Enthusiast
        </p>
      </motion.div>
    </div>
  );
}
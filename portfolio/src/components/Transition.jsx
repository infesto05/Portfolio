import { motion } from "framer-motion";

export default function Transition() {
  return (
    <motion.div
      className="transition-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    />
  );
}
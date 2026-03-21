import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence, motion } from "framer-motion";

import Landing from "./components/Landing";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Transition from "./components/Transition";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  const [entered, setEntered] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
  duration: 0.8, // faster (was 1.2)
  smooth: true,
});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleEnter = () => {
    setShowTransition(true);

    setTimeout(() => {
      setEntered(true);
      setShowTransition(false);
    }, 700);
  };

  return (
    <>
      <AnimatePresence>
        {showTransition && <Transition />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!entered ? (
          <Landing key="landing" onEnter={handleEnter} />
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Hero />
            <About />
            <Projects/>
            <Skills/>
            <Certifications/>
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import "./Certifications.css";

import net1 from "../assets/certificates/network1.pdf";
import net2 from "../assets/certificates/network2.pdf";
import py1 from "../assets/certificates/python1.pdf";
import py2 from "../assets/certificates/python2.pdf";
import java from "../assets/certificates/java.pdf";

const certs = [
  {
    title: "Cisco Networking",
    files: [net1, net2],
  },
  {
    title: "Python Essentials",
    files: [py1, py2],
  },
  {
    title: "Java SE 17",
    files: [java],
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);
  const [fileIndex, setFileIndex] = useState(0);

  useEffect(() => {
  if (selected) {
    window.scrollTo({ top: 0 });
  }
}, [selected]);

  return (
    <div className="certs">
      <h2 className="certs-title">Certifications</h2>

      <div className="timeline">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            onClick={() => {
              setSelected(cert);
              setFileIndex(0);
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="dot"></div>

            <div className="content">
              <h3>{cert.title}</h3>
              <p>Click to view</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PDF VIEWER */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="pdf-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="pdf-content">
              
              <h3>{selected.title}</h3>

              {/* Switch buttons */}
              {selected.files.length > 1 && (
                <div className="pdf-switch">
                  {selected.files.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setFileIndex(i)}
                      className={fileIndex === i ? "active" : ""}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}

              {/* PDF Viewer */}
              <iframe
                src={selected.files[fileIndex]}
                title="certificate"
              />

              <button
                className="close-btn"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
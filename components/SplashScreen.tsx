import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const text = "lokaksema 2026";

export default function SplashScreen() {
  const [fade, setFade] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 3000); // fade after 3s
    const hideTimer = setTimeout(() => setHide(true), 3400); // hide after fade
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            background: "#000",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: fade ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.6, ease: "easeInOut" } }} // smoother fade out
        >
          <div
            style={{
              display: "flex",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.03em",
              gap: "0.04em",
              position: "relative",
              fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
            }}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.02,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

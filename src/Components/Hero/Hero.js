import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.05 } }}
          className="hero-intro"
        >
          Hey there, my name is
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
          className="hero-name"
        >
          Sean Seale.
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.15 } }}
          className="hero-phrase"
        >
          I'm a Sydney based Frontend Developer.
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="hero-desc"
        >
          I build unique UI implementaions, have a passion for software
          engineering and a strong drive to continue learning. Looking for a
          workplace that I can grow into, building upon my skills every day.
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
          className="hero-button"
        >
          <button>Contact Me</button>
        </motion.div>
      </div>
    </div>
  );
}

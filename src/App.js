import { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from "framer-motion";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";

function App() {
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const executeScroll = (whichComponent) => {
    whichComponent === "about"
      ? aboutRef.current.scrollIntoView({ behavior: "smooth", inline: "start" })
      : whichComponent === "projects"
      ? projectsRef.current.scrollIntoView({ behavior: "smooth" })
      : experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);

  return (
    <div style={{ overflow: loading ? "hidden" : "" }} className="App">
      <div className="BG"></div>
      {loading ? (
        <motion.div
          initial={{ opacity: 100 }}
          animate={{ opacity: 0, transition: { duration: 2.9 } }}
          className="loader-backdrop"
        >
          <div className="nav-icon">
            SEAN<span>/</span>S.
          </div>
          <motion.div
            initial={{ opacity: 100 }}
            animate={{ opacity: 0, transition: { duration: 2.9 } }}
            className="loader"
          >
            <PropagateLoader color="#FD586E" loading={loading} size={20} />
          </motion.div>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="nav-animate-div"
          >
            <Nav executeScroll={executeScroll} />
          </motion.div>
          <Hero />
          <About refProp={aboutRef} />
          <Projects refProp={projectsRef} />
          <Experience refProp={experienceRef} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

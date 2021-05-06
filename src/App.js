import { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion } from "framer-motion";
import Hero from "./Components/Hero/Hero";
import useLockScroll from "./Hooks/useLockScroll";
import useMarginJump from "./Hooks/useMarginJump";
import useScrollDirection from "./Hooks/useScrollDirection";

function App() {
  const [loading, setLoading] = useState(true);
  const [appReference, setAppReference] = useState();

  const appRef = useRef();

  useEffect(() => {
    setAppReference(appRef);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);

  return (
    <div
      style={{ overflow: loading ? "hidden" : "" }}
      className="App"
      ref={appRef}
    >
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
            <Nav appRef={appReference} />
          </motion.div>
          <Hero />
          <div className="tempcontent">boop</div>
        </>
      )}
    </div>
  );
}

export default App;

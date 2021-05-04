import { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import PropagateLoader from "react-spinners/PropagateLoader";
import { motion, useCycle } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const appRef = useRef(0);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);

  return (
    <div className="App" ref={appRef}>
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
          <Nav appRef={appRef} />
          <div className="tempcontent">boop</div>
        </>
      )}
    </div>
  );
}

export default App;

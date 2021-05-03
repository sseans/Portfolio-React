import { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";

function App() {
  // const [refState, setRefState] = useState(null)
  const appRef = useRef(0);

  useEffect(() => {
    appRef.current.scrollTo = () => {};
  }, [appRef]);

  return (
    <div className="App" ref={appRef}>
      <Nav />
      <div className="tempcontent">boop</div>
    </div>
  );
}

export default App;

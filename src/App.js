import { useRef } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";

function App() {
  const appRef = useRef(null);

  return (
    <div className="App" ref={appRef}>
      <Nav appRef={appRef} />
      <div className="tempcontent">boop</div>
    </div>
  );
}

export default App;

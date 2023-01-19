import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
function App() {
  const dark = {
    background: "black",
    color: "white",
  };

  const light = {
    background: "white",
    color: "black",
  };

  const [toggle, setToggle] = useState(true);
  const [mode, setMode] = useState(light);
  const [nameMode, setNameMode] = useState("Dark Mode");
  const [color, setColor] = useState("light");

  const changeMode = () => {
    if (toggle) {
      setToggle(!toggle);
      setNameMode("Light Mode");
      setColor("dark");
      setMode(dark);

      document.body.style.backgroundColor = "black";
    } else {
      setToggle(!toggle);
      setNameMode("Dark Mode");
      setColor("light");
      setMode(light);

      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <div style={mode}>
        <Navbar
          naam={"TextPlay"}
          color={color}
          nmode={nameMode}
          changeMode={changeMode}
        />

        <Routes>
          <Route exact path="/" element={<Textarea mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

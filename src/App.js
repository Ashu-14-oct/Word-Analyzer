import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //dark mode
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enale Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Enable Light Mode");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title={"WordAnalyzer"}
          mode={mode}
          toggle={toggleMode}
          text={text}
        />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm mode={mode} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

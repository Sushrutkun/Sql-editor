import React, { useState } from "react";
import "./App.css"

const Navbar = import("./components/Navbar");
const Editor = import("./pages/Editor");

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className='App' id={`${darkMode ? `dark` : `light`}-mode`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Editor />
    </div>
  );
}

export default App;
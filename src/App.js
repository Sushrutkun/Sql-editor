import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
const Navbar = lazy(() => import("./components/Navbar"));
const Editor = lazy(() => import("./pages/Editor"));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className='App' id={`${darkMode ? `dark` : `light`}-mode`}>
      <Suspense
        fallback={
          <Loader />
        }
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Router>
          <Routes>
            <Route path='/' element={<Editor />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

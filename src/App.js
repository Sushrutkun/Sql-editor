import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";

// const Home = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
// const Github = lazy(() => import("./components/github/Github"));
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
          // <div>Loading ... </div>/
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

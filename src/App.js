import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Github = lazy(() => import("./components/Github"));
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
          <div>Loading ... </div>
          // <Loader />
        }
      >
        <BrowserRouter>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/editor' exact element={<Editor />} />
            <Route path='/github' exact element={<Github />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
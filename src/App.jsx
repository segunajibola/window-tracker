import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./navbar.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default App;

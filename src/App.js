import * as React from 'react';
import './App.css';
import { NavBar, Resume, Home, Footer } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const DarkModeContext = React.createContext(true);

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const localStorageValue = localStorage.getItem('isDarkMode');
    return localStorageValue ? JSON.parse(localStorageValue) : true;
  });
  
  React.useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <div className={`App text-OpenSans w-[100vw] flex flex-col min-h-[100vh] ${isDarkMode ? 'bg-vampire-black' :'bg-alabaster'}`}>
        <Router>
          <NavBar setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </DarkModeContext.Provider>
  );
};

export default App;


import * as React from 'react';
import './App.css';
import { Resume, Home } from "./components";
import { Route, Routes } from "react-router-dom";

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
      <div className={`App text-OpenSans w-[100vw] flex flex-col min-h-[100vh] rounded-[7rem] ${isDarkMode ? 'bg-prussian-blue text-electric-blue' :'bg-alabaster'}`}>
        <Routes>
          <Route path="/" element={<Home setIsDarkMode={setIsDarkMode}/>} />
          <Route path="/home" element={<Home setIsDarkMode={setIsDarkMode} />} />
          <Route path="/resume" element={<Resume setIsDarkMode={setIsDarkMode}/>} />
        </Routes>
      </div>
    </DarkModeContext.Provider>
  );
};

export default App;


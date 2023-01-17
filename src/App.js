import * as React from 'react';
import './App.css';
import { NavBar, Resume, Home, Footer } from "./components";
import { HashRouter as Router, Route, Routes, useLocation, withRouter } from "react-router-dom";

export const DarkModeContext = React.createContext(true);

const App = ({history}) => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const localStorageValue = localStorage.getItem('isDarkMode');
    return localStorageValue ? JSON.parse(localStorageValue) : true;
  });

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/2023-portfolio/') {
      history.push('/home');
    }
  }, [location, history]);
  
  React.useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <div className={`App text-OpenSans w-[100vw] flex flex-col min-h-[100vh] ${isDarkMode ? 'bg-vampire-black' :'bg-alabaster'}`}>
        <Router>
          <NavBar setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </DarkModeContext.Provider>
  );
};

export default withRouter(App);


import React from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../App';

const ButtonRoute = ({ text, link }) => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <Link to={`/${link}`}>
      <button className={`rounded py-3 px-3 mr-2 font-semibold ${isDarkMode ? 'text-alabaster bg-dark-charcoal hover:bg-purple-taupe' : 'text-dark-characoal hover:bg-queen-pink bg-pink-lace'}`}>{text}</button>
    </Link>
  );
};

export default ButtonRoute;

import React from 'react';
import { DarkModeContext } from '../../App';

const ButtonLink = ({ title = "", text, link, className = "" }) => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <a
      title={title}
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`
        rounded
        py-3
        px-3
        mr-2
        font-semibold
        ${isDarkMode ?
          'text-alabaster bg-dark-charcoal hover:bg-purple-taupe' :
        'text-dark-characoal hover:bg-queen-pink bg-pink-lace'}
        ${className}
      `}
    >
      {text}
    </a>
  );
};

export default ButtonLink;

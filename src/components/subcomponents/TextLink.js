import React from 'react'
import { DarkModeContext } from '../../App';

const TextLink = ({ text, link, className = "" }) => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <a
      title="LinkedIn"
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`flex py-2 px-1 rounded text-[1rem] ${isDarkMode ? 'hover:bg-vampire-black' : 'hover:bg-alabaster'} ${className}`}
    >
      {text}
    </a>
  )
}

export default TextLink;
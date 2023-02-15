import React, { useEffect } from 'react';
import { DarkModeContext } from '../../App';
import { StateContext } from '../Home';

const Button = ({ id, text, onClick, className, disabled, otherButtonsOn }) => {
  const isDarkMode = React.useContext(DarkModeContext);
  const state = React.useContext(StateContext);
  const [start, setStart] = React.useState(false);
  
  useEffect(() => {
    if (state === "NAVIGATION") {
      setStart(true);
      setTimeout(() => {
        setStart(false);
      }, 11000)
    }
  }, [state])

  return (
    <div id={id}
      className={`
        cursor-pointer
        text-[1.755rem]
        m-auto
        w-[9rem]
        ${className}
      `}
      onClick={disabled ? null : onClick}
    >
      <div>
        <span
          className={`
          ${isDarkMode ? "night-box-shadow night" : "day"} 
          ${disabled ? "on" : "off"} 
          ${(start && otherButtonsOn) ? "glitch" : ""}`
          }><p>{text}</p></span>
      </div>
    </div>
  )
}

export default Button;

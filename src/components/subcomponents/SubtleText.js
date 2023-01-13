import React, { useContext } from 'react'
import SubTitle from './SubTitle';
import { DarkModeContext } from '../../App';

const SubtleText = ({ text, className = "" }) => {
  const isDarkMode = useContext(DarkModeContext);
  return (
    <div className={`text-[1.5rem] ${isDarkMode ? 'text-black-olive' : 'text-queen-pink'} ${className}`}>
      <SubTitle text={text} />
    </div>
  )
}

export default SubtleText;
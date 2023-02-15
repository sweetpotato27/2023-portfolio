import React from 'react'
import { DarkModeContext } from '../App';

const ProjectSection = () => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div className={`md:pt-[25vh] ${isDarkMode ? 'text-electric-blue' : 'text-dark-charcoal'}`}>
      <div className="flex flex-col">
        <span>Work In Progress</span>
        <span>Stay Tuned</span>
      </div>
    </div>
  )
}

export default ProjectSection;

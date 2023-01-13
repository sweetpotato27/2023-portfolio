import React from 'react'
import { DarkModeContext } from '../App';

const ProjectSection = () => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div className={`md:px-26 md:py-72 ${isDarkMode ? 'text-alabaster bg-vampire-black' : 'text-dark-charcoal bg-alabaster'}`}>
      project coming soon...
    </div>
  )
}

export default ProjectSection;

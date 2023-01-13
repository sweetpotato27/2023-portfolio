import React from 'react'
import { Title, TextContent } from './subcomponents';
import { DarkModeContext } from '../App';

const IntroSection = () => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div className={`md:px-26 md:py-72 ${isDarkMode ? 'text-alabaster' : 'text-dark-charcoal'}`}>
      <div className="flex justify-center">
        <Title text="hello"/>
        <div className="ml-8 w-6 h-6 transition-colors transition-250 filter-grayscale-100 flex flex-col items-center">
          <p className="text-6xl animation-wave animation-5 animation-ease animation-infinite animation-paused">
            👋
          </p>
        </div>
      </div>
      <Title text="i am Dylan Matthews"/>
      <TextContent text="full stack software engineer"/>
    </div>
  )
}

export default IntroSection;

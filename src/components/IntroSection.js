import React from 'react'
import { Title, TextContent } from './subcomponents';
import { DarkModeContext } from '../App';

const IntroSection = () => {
  const isDarkMode = React.useContext(DarkModeContext);
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className={`md:px-26 md:py-72 ${isDarkMode ? 'text-alabaster' : 'text-dark-charcoal'}`}>
      <div className="flex justify-center">
        <Title text="hello"/>
        <div
          className={`ml-4 flex flex-col justify-center items-center text-6xl ${isHovered ? 'animate-wave' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          ✌️
        </div>
      </div>
      <Title text="i am Dylan Matthews"/>
      <TextContent text="full stack software engineer"/>
    </div>
  )
}

export default IntroSection;

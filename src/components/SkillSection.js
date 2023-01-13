import React from 'react'
import { Title, IconContent } from './subcomponents';
import { DarkModeContext } from '../App';
import skills from '../data/skills';

const SkillSection = () => {
  const isDarkMode = React.useContext(DarkModeContext);

  return (
    <div className={`md:px-26 md:py-72 ${isDarkMode ? 'text-alabaster bg-raisin-black' : 'text-dark-charcoal bg-dust-storm'}`}>
      <Title className="mb-8" text="what i build with"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Object.keys(skills).map((key) =>
          <IconContent key={key} text={key} icon={skills[key]} />
        )}
      </div>
    </div>
  )
}

export default SkillSection;

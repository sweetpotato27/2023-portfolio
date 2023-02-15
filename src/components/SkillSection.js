import React from 'react'
import { IconContent } from './subcomponents';
import { DarkModeContext } from '../App';
import skills from '../data/skills';

const SkillSection = () => {
  const isDarkMode = React.useContext(DarkModeContext);

  return (
    <div className={`md:pt-12 ${isDarkMode ? 'text-electric-blue' : 'text-dark-charcoal'}`}>
      {/* <Title className="mb-8" text="what i build with"/> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Object.keys(skills).map((skill, index) =>
          <IconContent key={index} index={index} text={skill} icon={skills[skill]} />
        )}
      </div>
    </div>
  )
}

export default SkillSection;

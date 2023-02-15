import React from 'react'
import { TextContent, ButtonLink } from './subcomponents';
import { DarkModeContext } from '../App';

const ContactSection = () => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div className={`md:mt-[25vh] ${isDarkMode ? 'text-electric-blue' : 'text-dark-charcoal'}`}>
      <TextContent
        className="mb-4"
        text="looking for a full stack software engineer?" />
      <ButtonLink text="send me an email" link="mailto:dbmsoftware27@gmail.com"/>
    </div>
  )
}

export default ContactSection;
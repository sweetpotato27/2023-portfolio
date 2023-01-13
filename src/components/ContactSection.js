import React from 'react'
import { TextContent, ButtonLink } from './subcomponents';
import { DarkModeContext } from '../App';

const ContactSection = () => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div className={`md:px-26 md:py-72 ${isDarkMode ? 'text-alabaster bg-raisin-black' : 'text-dark-charcoal bg-dust-storm'}`}>
      <TextContent text="looking for a full stack software engineer?" />
      <ButtonLink text="send me an email" link="mailto:dbmsoftware27@gmail.com"/>
    </div>
  )
}

export default ContactSection;
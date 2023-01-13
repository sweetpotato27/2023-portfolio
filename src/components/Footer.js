import React from 'react'
import { SubtleText, TextLink } from './subcomponents';
import { DarkModeContext } from '../App';

const Footer = () => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div className={`w-full ${isDarkMode ? 'text-alabaster bg-vampire-black' : 'text-dark-charcoal bg-alabaster'}`}>
      <div className="max-w-[960px] lg:m-auto mx-4 md:mx-8 py-4 shrink-0 flex flex-row justify-between items-center">
        <SubtleText text="Dylan Matthews" />
        <div>
          <TextLink text="GitHub" link="https://github.com/sweetpotato27"/>
          <TextLink text="LinkedIn" link="https://www.linkedin.com/in/dylan-brinkman-matthews/"/>
          <TextLink text="Contact Me" link="mailto:dbmsoftware27@gmail.com"/>
        </div>
      </div>
    </div>
  )
}

export default Footer;
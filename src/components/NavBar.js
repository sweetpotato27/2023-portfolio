import React, {useEffect} from "react";
import { ButtonRoute, DarkModeToggle, SocialLink, SubTitle } from "./subcomponents";
import { DarkModeContext } from '../App';

const NavBar = ({ setIsDarkMode }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isDarkMode = React.useContext(DarkModeContext);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768) setIsExpanded(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let hamburger = (<div>:(</div>);
  if (isExpanded) {
    hamburger = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      width="32"
      viewBox="0 0 48 48"
      fill={`${isDarkMode ? '#f1e8e6' : '#322B33'}`}
      className={`icon ${isExpanded ? 'show' : 'hide'}`}
    >
      <path
        d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
      />
    </svg>
  );
  } else {
    hamburger = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      width="32"
      viewBox="0 0 48 48"
      fill={`${isDarkMode ? '#f1e8e6' : '#322B33'}`}
      className={`icon ${isExpanded ? 'hide' : 'show'}`}
    >
      <path
        d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"
      />
    </svg>
  );
  }

  return (
    <div className={`h-[5rem]
                      fixed
                      w-full
                      z-20
                      flex
                      justify-center
                      items-center
                      px-4
                      m-auto
                      md:py-4
                      md:px-8
                      ${isDarkMode ? 'bg-raisin-black' : 'bg-dust-storm'}`}
    >
      <div className={`max-w-[960px] 
                        w-full 
                        flex
                        justify-between
                        items-center
                        my-4
                        ${isDarkMode ? 'text-alabaster' : 'text-dark-charcoal'}`}
      >
        <a href="/home" className={`rounded 
                                font-normal
                                text-2xl
                                tracking-tight
                                md:my-2
                                md:py-2
                                ${isDarkMode ? 'hover:bg-vampire-black' : 'hover:bg-alabaster'}`}
        >
          <SubTitle text="Dylan Matthews"/>
        </a>
        <div id="icons" className={`md:flex 
                                    items-center
                                    h-full
                                    hidden`}
        >
          <ButtonRoute text="resume" link="resume" />
          <SocialLink link="https://github.com/sweetpotato27" type="github"/>
          <SocialLink link="https://www.linkedin.com/in/dylan-brinkman-matthews/" type="linkedin"/>
          <SocialLink link="mailto:dbmsoftware27@gmail.com" type="mail"/>
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
        </div>
        <div 
          className={`flex 
                      md:hidden
                      ${isDarkMode ? 'text-alabaster' : 'text-dark-charcoal'}`}
        >
          <button
            className="w-8 h-8"
            onClick={() => setIsExpanded(!isExpanded)}>
            {hamburger}
          </button>
        </div>
      </div>
      <div id="menu"
        className={`p-4
                    hidden
                    flex-col
                    w-[100vw]
                    absolute
                    top-20
                    items-center
                    rounded-b-full
                    md:hidden 
                    ${isDarkMode ? 'bg-eerie-black' : 'bg-snow'} 
                    ${isExpanded ? 'show' : 'hide'}`}
      >
        <ButtonRoute text="resume" link="resume" />
        <SocialLink link="https://github.com/sweetpotato27" type="github"/>
        <SocialLink link="https://www.linkedin.com/in/dylan-brinkman-matthews/" type="linkedin"/>
        <SocialLink link="mailto:dbmsoftware27@gmail.com" type="mail"/>
        <DarkModeToggle setIsDarkMode={setIsDarkMode} />
      </div>
    </div>
  );
};

export default NavBar;
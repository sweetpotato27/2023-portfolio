import React, { useContext } from 'react';
import { DarkModeContext } from '../../App';

const SocialLink = ({link, type}) => {
  const isDarkMode = useContext(DarkModeContext);
  let icon = <div>:(</div>;
  if (type === 'linkedin') {
    icon = <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="-4 -4 32 32"
      fill="none"
      stroke={`${isDarkMode ? '#79EAFF' : '#322B33'}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
      </path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  } else if (type === 'github') {
    icon = <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="-4 -4 32 32"
      fill="none"
      stroke={`${isDarkMode ? '#79EAFF' : '#322B33'}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="">
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
      </path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  } else if (type === 'mail') {
    icon = <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      width="32"
      viewBox="0 0 48 48"
      fill={`${isDarkMode ? '#79EAFF' : '#322B33'}`}>
      <path
        d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z" />
    </svg>
  }
  
  return (
    <a
      title="LinkedIn"
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`svg-icon-container dark flex py-2 px-1 rounded ${isDarkMode ? 'hover:bg-vampire-black' : 'hover:bg-alabaster'}`}>
      {icon}
    </a>
  )
}

export default SocialLink;

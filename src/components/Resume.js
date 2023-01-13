import React from 'react';
import { Title, ParaContent, REMContent, TextLink, ButtonLink } from './subcomponents';
import { DarkModeContext } from '../App';

const Resume = () => {
  const isDarkMode = React.useContext(DarkModeContext);
  return (
    <div className={`max-w-[960px] pt-24 mx-4 md:mx-8 lg:m-auto text-left ${isDarkMode ? 'text-alabaster' : 'text-dark-charcoal'}`}>
      <div className="flex justify-between items-center">
        <Title text="resume" />
        
        <ButtonLink text={
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox='0 0 48 48'
              fill="currentColor"
            >
              <path d="M15.95 35.5h16.1v-3h-16.1Zm0-8.5h16.1v-3h-16.1ZM11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h18.05L40 14.95V41q0 1.2-.9 2.1-.9.9-2.1.9Zm16.55-27.7V7H11v34h26V16.3ZM11 7v9.3V7v34V7Z" />
            </svg>
            <span className="ml-2 hidden md:block">
              download resume
            </span>
          </div>
        } link="/DylanMatthewsResume.pdf" />
      </div>
  
      <REMContent text="(916).212.4415 - dbmsoftware27@gmail.com - github.com/sweetpotato27"/>
      <hr className="mt-4"/>
  
      <ParaContent className="my-4 md:my-6" text="SUMMARY" />
      <REMContent text="Motivated and proactive software developer with experience in building web
        applications and leading codebase transitions. Strong understanding of
        modern web development technologies and best practices, with a track
        record of delivering high-quality code and meeting project deadlines.
        Skilled in collaborating with cross-functional teams and adapting to
        fast-paced start-up environments."/>
  
      <ParaContent className="my-4 md:my-6" text="EXPERIENCE" />
      <div>
        <div className="flex items-center justify-between mb-2">
          <ParaContent className="text-[1rem] md:text-[1.2rem]" text={
            <div>
              Front End Intern -
              <TextLink className="text-[1rem] md:text-[1.2rem]" text="Outway, a digital home for the outdoors" link="https://www.outway.io/" />
            </div>} />
          <ParaContent className="text-[1rem] md:text-[1.2rem]" text="(July 2021 - December 2022)"/>
        </div>
        <ul className="list-disc pl-5">
          <li>
            <REMContent text="
            Refactored the Redux code to update to the modern Redux Toolkit
            API, applying clean code techniques to improve code quality and
            maintainability.
            "/>
          </li>
          <li>
            <REMContent text="
            Led the codebase transition from JavaScript to TypeScript,
            organizing the codebase and applying Domain Driven Development
            techniques.
            "/>
          </li>
          <li>
            <REMContent text="
            Built reusable components using React.js, following visual and
            written designs and providing building blocks for future
            development.
            "/>
          </li>
          <li>
            <REMContent text="
            Connected RESTful Serverless APIs to the front end to display and
            manipulate data in a production database.
            "/>
          </li>
          <li>
            <REMContent text="
            Adapted to quickly changing designs and timelines in a fast paced
            startup environment where I contributed to code reviews, design
            proposals, and system architecture plans.
            "/>
          </li>
        </ul>
      </div>
      <div className="mt-4 md:mt-6">
        <div className="flex items-center justify-between mb-2">
          <ParaContent className="text-[1rem] md:text-[1.2rem]" text="Full-Time 1000-hour Immersive Full-Stack Web Development Program  AppAcademy"/>
          <ParaContent className="text-[1rem] md:text-[1.2rem]" text="(Summer 2019)"/>
        </div>
        <ul className="list-disc pl-5">
          <li>
            <REMContent text="
            Completed a comprehensive program covering a range of web development technologies and best practices.
            "/>
          </li>
        </ul>
      </div>
      <div className="mt-4 md:mt-6">
        <div className="flex items-center justify-between">
          <ParaContent className="text-[1rem] md:text-[1.2rem]" text="Bachelors of Arts - Interactive Game Studies - St. Edward's University"/>
          <ParaContent className="text-[1rem] md:text-[1.2rem]" text="(2015 - 2017)"/>
        </div>
      </div>

      <ParaContent className="my-4 md:my-6" text="PROJECTS" />

      <div>
        <div className="flex items-center justify-between">
          <ParaContent className="text-[1rem] md:text-[1.2rem]" text="Quoridor | (Node.js, Express.js, Socket.io, Webpack, SCSS"/>
          <div className="flex flex-row">
            <TextLink className="!text-[1rem] md:!text-[1.2rem]" text="live" link="https://quoridor-portfolio-project.herokuapp.com/" />
            <div className="border-l-2"></div>
            <TextLink className="!text-[1rem] md:!text-[1.2rem]" text="github" link="https://github.com/sweetpotato27/quoridor" />
          </div>
        </div>
        <ul className="list-disc pl-5">
          <li>
            <REMContent text="
            Completed a comprehensive program covering a range of web development technologies and best practices.
            "/>
          </li>
        </ul>
      </div>
            
      <ParaContent className="my-4 md:my-6" text="SKILLS"/>
      <div>
        <ul className="list-disc pl-5">
          <li>
            <REMContent text="
            Strong understanding of modern web development technologies and best practices, including: JavaScript, TypeScript, HTML, CSS, UX/UI design, Git, React.js, Git, Node.js, Express.js, Ruby on Rails, Webflow, Shopify, SQL, MySQL, MongoDB, PostgreSQL, Express.js, Django, Webpack, Heroku, AWS, experience working with data storage and management tools, and Scrum and Lean agile development methodologies.
            "/>
          </li>
          <li>
            <REMContent text="
            Proven ability to lead codebase transitions and deliver high-quality code.
            "/>
          </li>
          <li>
            <REMContent text="
            Skilled in collaborating with cross-functional teams and adapting to fast-paced start-up environments.
            "/>
          </li>
          <li>
            <REMContent text="
            Proficient in object-oriented programming and algorithm design.
            "/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;


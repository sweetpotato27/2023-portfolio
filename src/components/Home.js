import React from "react";
import IntroSection from './IntroSection';
import SkillSection from './SkillSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';


const Home = () => {
  return (
    <div className={``}>
      <IntroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Home;

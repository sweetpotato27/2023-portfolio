import React, {useEffect, useState} from 'react'
import { Button } from "./subcomponents";

const ButtonSection = ({ getIsAnimating, onButtonClick, state }) => {
  const [buttonState, setButtonState] = React.useState({
    intro: false,
    skill: false,
    project: false,
    resume: false,
    contact: false,
  });
  const [areAnyButtonsOn, setAreAnyButtonsOn] = useState(Object.keys(buttonState).some(btn => !!buttonState[btn]));

  useEffect(() => {
    setAreAnyButtonsOn(Object.keys(buttonState).some(btn => !!buttonState[btn]));
  }, [buttonState]);

  useEffect(() => {
  }, [areAnyButtonsOn])
  const handleButtonClick = (event) => {
    if (!getIsAnimating()) {
      const type = event.currentTarget.id.split("-")[0];
      setButtonState({
        intro: false,
        skill: false,
        project: false,
        resume: false,
        contact: false,
        [type]: true,
      });
      onButtonClick(type);
    }
  }

  return (
    <div className="h-[7rem] border-t-4">
      <div className="flex justify-between pt-4 w-[75%] m-auto">
        <Button id="intro-button" className={"button"} state={state} onClick={handleButtonClick} otherButtonsOn={areAnyButtonsOn} disabled={buttonState["intro"]} text="01"/>
        <Button id="skill-button" className={"button"} state={state} onClick={handleButtonClick} otherButtonsOn={areAnyButtonsOn} disabled={buttonState["skill"]} text="02"/>
        <Button id="project-button" className={"button"} state={state} onClick={handleButtonClick} otherButtonsOn={areAnyButtonsOn} disabled={buttonState["project"]} text="03"/>
        <Button id="resume-button" className={"button"} state={state} onClick={handleButtonClick} otherButtonsOn={areAnyButtonsOn} disabled={buttonState["resume"]} text="04"/>
        <Button id="contact-button" className={"button"} state={state} onClick={handleButtonClick} otherButtonsOn={areAnyButtonsOn} disabled={buttonState["contact"]} text="05"/>
      </div>
    </div>
  )
}

export default ButtonSection;

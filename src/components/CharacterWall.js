import React, { useState, useEffect } from 'react';
import { Character } from './subcomponents';
import { generateGridOfCharacters, pxToInt } from "../util";
import IntroSection from "./IntroSection";
import ContactSection from "./ContactSection";
import ProjectSection from "./ProjectSection";
import Resume from "./Resume";
import SkillSection from "./SkillSection";

export const CharacterWall = ({ myRef }) => {
  const [contentState, setContentState] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [hasRained, setHasRainded] = useState(false);
  const [animationEndCounter, setAnimationEndCounter] = useState(0);
  const [elementOffset, setElementOffset] = useState({
    num: 39,
    str: "introskillprojectresumecontact",
  })
  const [okayToGenerateGrid, setOkayToGenerateGrid] = useState(false);
  const [gridOfCharactersData, setGridOfCharactersData] = useState(null);
  const [widthAndHeight, setWidthAndHeight] = useState([0, 0]);
  const [gridState, setGridState] = useState({
    totalElements: 0,
    elementsPerRow: 0,
    elementsPerColumn: 0,
  });
  const [elementState, setElementState] = useState({
    intro: [],
    skill: [],
    contact: [],
    project: [],
    resume: [],
    other: [],
  });

  useEffect(() => {
    console.log("content state => ", contentState);
  }, [contentState])

  useEffect(() => {
    if (animationEndCounter === gridState.totalElements - elementOffset.num) {
      console.log("LAST ANIMATION!!!");
      const moveElement = (elementId, targetX, targetY, duration, isTargetYREM = false) => {
        const rem = window.getComputedStyle(document.documentElement).fontSize.split("px")[0];
        const element = document.getElementById(elementId);
        const startX = element.offsetLeft;
        const startY = element.offsetTop;
        const distanceX = targetX - startX;
        const distanceY = isTargetYREM ? targetY * rem - startY : targetY - startY;
        let startTime;

        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startX, distanceX, duration);
          const rise = ease(timeElapsed, startY, distanceY, duration);
          element.style.left = `${run}px`;
          element.style.top = `${rise}px`;
          if (timeElapsed < duration) requestAnimationFrame(animate);
        }

        const ease = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(animate);
      }
      elementState[elementOffset.str].forEach((ele) => {
        moveElement(`${ele.type}-${ele.index}`, ele.index * 24 + 50, 7, 4000, true)
      });
      setTimeout(() => {
        console.log("FINISHED!!!!!!");
        console.log(elementOffset.str);
        setContentState(elementOffset.str.toUpperCase());
        console.log("ELEMENT STATE", elementState);
        setIsAnimating(false);
      }, 4250)
    }
  }, [animationEndCounter, elementOffset, gridState, elementState])

  useEffect(() => {
    console.log("element state => ", elementState);
  }, [elementState]);

  useEffect(() => {
  }, [gridOfCharactersData]);

  useEffect(() => {
    if (!hasGenerated && !hasRained) {
      const { totalElements, elementsPerRow, elementsPerColumn } = gridState;
      if (totalElements !== 0 && elementsPerRow !== 0 && elementsPerColumn !== 0) {
        setHasGenerated(true);
        setElementState({
          intro: [],
          skill: [],
          contact: [],
          project: [],
          resume: [],
          other: [],
        });
        setGridOfCharactersData(generateGridOfCharacters(gridState, setElementState));
      }
    }
  }, [gridState, hasGenerated, hasRained])

  useEffect(() => {
  }, [widthAndHeight]);

  useEffect(() => {
    const { totalElements, elementsPerRow, elementsPerColumn } = gridState;
    if (totalElements !== 0 && elementsPerRow !== 0 && elementsPerColumn !== 0) {
      if (gridOfCharactersData) {
        setOkayToGenerateGrid(true);
      }
    }
  }, [gridState, gridOfCharactersData]);

  useEffect(() => {
    const rem = window.getComputedStyle(document.documentElement).getPropertyValue('font-size').split("px")[0];
    const remValue = pxToInt(rem);
    if (remValue) {
      const characterWidth = remValue * 3;
      const characterHeight = remValue * 3;
      const width = widthAndHeight[0];
      const height = widthAndHeight[1];
      const getElementsPerRow = width => Math.floor(width / characterWidth);
      const getElementsPerColumn = height => Math.floor(height / characterHeight);
      const getElementsThatFit = (width, height) => getElementsPerRow(width) * getElementsPerColumn(height);

      const elementsPerRow = getElementsPerRow(width);
      const elementsPerColumn = getElementsPerColumn(height);
      const totalElements = getElementsThatFit(width, height);
      
      setGridState(prevState => ({
        ...prevState,
        totalElements,
        elementsPerRow,
        elementsPerColumn,
      }));
    }
  }, [widthAndHeight]);

  useEffect(() => {
    const handleResize = () => {
      const wallElement = document.getElementById('character-wall');
      setWidthAndHeight([wallElement.clientWidth, wallElement.offsetHeight]);
      setHasGenerated(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const wallElement = document.getElementById('character-wall');
    setWidthAndHeight([wallElement.clientWidth, wallElement.offsetHeight]);
  }, []);

  const minusFromElementOffset = (type) => {
    setElementOffset(prevState => ({ ...prevState, str: prevState.str.split(type).join("") }));
    switch (type) {
      case "intro":
        setElementOffset(prevState => ({...prevState, num: prevState.num - 12}));
        break;
      case "skill":
        setElementOffset(prevState => ({...prevState, num: prevState.num - 6}));
        break;
      case "project":
        setElementOffset(prevState => ({...prevState, num: prevState.num - 8}));
        break;
      case "contact":
        setElementOffset(prevState => ({...prevState, num: prevState.num - 7}));
        break;
      case "resume":
        setElementOffset(prevState => ({...prevState, num: prevState.num - 6}));
        break;
      default:
        break;
    } 
  }

  const renderContent = () => {
    switch (contentState) {
      case "INTRO":
        return <IntroSection />;
      case "PROJECT":
        return <ProjectSection />;
      case "SKILL":
        return <SkillSection />;
      case "CONTACT":
        return <ContactSection />;
      case "RESUME":
        return <Resume />;
      case null:
        return null;
      default:
        return null;
    }
  }

  const showElementsByType = (type) => {
    if (isAnimating === false) {
      // Should show proper content depending off type
      console.log(type.toUpperCase());
      setContentState(type.toUpperCase());
      elementState[type].forEach((ele) => {
        const element = document.getElementById(`${ele.type}-${ele.index}`);
        // REFACTOR: this does more than show elements.  
        element.classList.remove('move-element-down');
        element.style.cssText = "display: block; text-shadow: 0px 5px 2px #000;";
        // place elements in title position 
        // 7rem from top
        // elementindex * 24 + 50 from left
        element.style.left = `${ele.index * 24 + 50}px`;
        element.style.top = `${window.getComputedStyle(document.documentElement).fontSize.split("px")[0] * 7}px`;
      });
    }
  }

  const hideElementsByType = (type) => {
    if (isAnimating === false) {
      elementState[type].forEach((ele) => {
        const element = document.getElementById(`${ele.type}-${ele.index}`);
        element.style.cssText = "display: none;";
      });
    }
  }

  const rainThenHideElementsByType = (type) => {
    console.log("type being processes =>", type)
    if (isAnimating === false) setIsAnimating(true);
    minusFromElementOffset(type);
    elementState[type].forEach((ele) => {
      const element = document.getElementById(`${ele.type}-${ele.index}`);
      setTimeout(() => {
        element.classList.add("move-element-down");
        element.addEventListener("animationend", () => {
          setAnimationEndCounter(prevState => (prevState + 1));
          element.style.cssText = "display: none;";
        }, {once: true});
      }, Math.floor(Math.random() * (3000 - 0 + 1)) + 1000)
    })
    setHasRainded(true);
  }
  
  myRef.current.rainThenHideElementsByType = rainThenHideElementsByType;
  myRef.current.showElementsByType = showElementsByType;
  myRef.current.hideElementsByType = hideElementsByType;
  myRef.current.isAnimating = isAnimating;

  return (
    <div id="character-wall" className="grow border-b-4 border-t-4 my-1">
      {okayToGenerateGrid ?
        gridOfCharactersData.map(
          ({ key, character, xPos, yPos, type, index }) => <Character key={key} id={`${type}-${index}`} character={character} xPos={xPos} yPos={yPos} />
        )
        : <div>LOADING ...</div>}
      <div>
        {renderContent()}
      </div>
    </div>
  )
};

export default CharacterWall;
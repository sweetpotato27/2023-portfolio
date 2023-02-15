import React, {useEffect, useState, useRef, useMemo} from 'react'
import { DarkModeContext } from '../App';
import { TypeText } from './subcomponents';

const IntroSection = () => {
  const introText = useMemo(() => [
    " hello",
    " i am Dylan Matthews",
    " a full stack software engineer",
    " i proactively seek opportunies to expand my skills and knowledge",
    " i have diverse interests that provide a unique perspective when solving problems",
  ],[]);
  const [firstIndexHasRendered, setFirstIndexHadRendered] = useState(false);
  const isDarkMode = React.useContext(DarkModeContext);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log("index", index, containerRef)
    const container = document.getElementById('introduction-container');
    if (!container) return;
    const children = container.children;
    setTimeout(() => {
      //do something to children[index]
      if (index === 0) {
        if (firstIndexHasRendered === false) {
          setFirstIndexHadRendered(true);
          children[index].style.display = "block";
          // typeText(children[index], introText[index], 50)
        }
      } else {
        children[index].style.display = "block";
        // typeText(children[index], introText[index], 50)

      }
      if (index < children.length - 1) {
        setTimeout(() => {
          setIndex(index + 1);
        }, 835 * index + 500);
      }
    }, 1000);
  }, [index, introText, firstIndexHasRendered]);

  // const typeText = (element, text, delay) => {
  //   let index = 0;
  //   const type = () => {
  //     if (index < text.length) {
  //       element.innerHTML += text[index];
  //       index++;
  //       setTimeout(type, delay);
  //     }
  //   }
  //   type();
  // }


  return (
    <div className={`md:pt-20 ${isDarkMode ? 'text-alabaster' : 'text-dark-charcoal'}`}>
      <div className={`m-auto max-w-[960px] max-h-[75%]`}>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-title">Terminal</div>
            <div className="terminal-controls">
              <div className="terminal-control close"></div>
              <div className="terminal-control minimize"></div>
              <div className="terminal-control maximize"></div>
            </div>
          </div>
          <div id="introduction-container" ref={containerRef} className="terminal-body text-[1.1rem]">
            <div id="introduction-0" className="terminal-input">
              <TypeText element={document.getElementById("introduction-0")} text={introText[0]} delay={50} />
            </div>
            <div id="introduction-1" className="terminal-input hidden">
              <TypeText element={document.getElementById("introduction-1")} text={introText[1]} delay={50} />
            </div>
            <div id="introduction-2" className="terminal-input hidden">
              <TypeText element={document.getElementById("introduction-2")} text={introText[2]} delay={50} />
            </div>
            <div id="introduction-3" className="terminal-input hidden">
              <TypeText element={document.getElementById("introduction-3")} text={introText[3]} delay={50} />
            </div>
            <div id="introduction-4" className="terminal-input hidden">
              <TypeText element={document.getElementById("introduction-4")} text={introText[4]} delay={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection;

import React, {useState} from "react";
import CharacterWall from './CharacterWall';
import ButtonSection from './ButtonSection';
import NavBar from "./NavBar";

export const StateContext = React.createContext("GRID");

const Home = ({ setIsDarkMode }) => {
  // Home state progression:
  // GRID => NAVIGATION
  const [homeState, setHomeState] = useState("GRID")
  const types = ["intro", "skill", "project", "resume", "contact", "other"];
  const characterWallRef = React.useRef({});

  const getIsAnimating = () => {
    return characterWallRef.current.isAnimating;
  }

  const handleButtonClick = (type) => {
    console.log("clicked");
    getIsAnimating();
    if (!characterWallRef.current.isAnimating) {
      switch (homeState) {
        case "GRID":
          types.forEach((t) => {
            if (t !== type) {
              characterWallRef.current.rainThenHideElementsByType(t);
            }
          });
          setHomeState("NAVIGATION");
          break;
        case "NAVIGATION":
          types.forEach((t) => {
            if (t !== type) {
              characterWallRef.current.hideElementsByType(t);
            } else {
              characterWallRef.current.showElementsByType(t);
            }
          }); 
          break;
        default:
          console.log("shouldnt be here");
          break;
      }
    }
  }

  return (
    <StateContext.Provider value={homeState}>
    <div className={`grow flex flex-col w-full`}>
      <NavBar setIsDarkMode={setIsDarkMode}/>
      <CharacterWall myRef={characterWallRef}/>
      <ButtonSection getIsAnimating={getIsAnimating} state={homeState} onButtonClick={(type) => handleButtonClick(type)} />
    </div>
    </StateContext.Provider>
  );
};

export default Home;

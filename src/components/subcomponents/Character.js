import React from 'react';

const Character = ({ character, xPos, yPos, id }) => {
  const styles = {
    top: `${yPos}px`,
    left: `${xPos}px`,
    textShadow: `0px 5px 2px #000`,
  }
  return (
    <div id={id} style={styles} className={`z-10 w-[3rem] h-[3rem] cursor-default uppercase absolute`}>{character}</div>
  )
}

export default Character;

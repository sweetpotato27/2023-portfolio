import React from 'react'

const IconContent = ({ index, text, icon }) => {
  const styles = {
    textShadow: `0px 5px 2px #000`,
  }
  
  // useEffect(() => {
  //   const element = document.getElementById(`${text.split(" ").join("").split(".").join("")}-${index}`);
  //   const handleMouseMove = (event) => {
  //     let inner = element.querySelector('.spotlight-inner');
  //     let x = event.clientX - inner.clientWidth;
  //     let y = event.clientY - inner.clientHeight;
  //     if (x && y && inner) {
  //       inner.style.textShadow = `${-x/10}px ${-y/10}px 2px #000`;
  //     }
  //   }

  //   element.addEventListener('mousemove', handleMouseMove);
    
  //   return () => {
  //     element.removeEventListener('mousemove', handleMouseMove)
  //   }
  // }, [index, text]);

  return (
    <div
      id={`${text.split(" ").join("").split(".").join("")}-${index}`}
      style={styles}
      className="icon-content relative flex justify-center items-center mb-4"
    >
      <div className="spotlight-inner text-[2rem]">{text}</div>
      <div className="svg-icon-container dark ml-4">{icon}</div>
    </div>
  )
}

export default IconContent;
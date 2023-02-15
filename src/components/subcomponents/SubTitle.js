import React from 'react'

const SubTitle = ({ text, className = "" }) => {
  const styles = {
    textShadow: `0px 5px 2px #000`,
  }
  return (
    <div style={styles} className={`text-[1.7rem] ${className}`}>{text}</div>
  )
}

export default SubTitle;
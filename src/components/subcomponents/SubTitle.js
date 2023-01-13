import React from 'react'

const SubTitle = ({ text, className = "" }) => {
  return (
    <div className={`text-[1.5rem] ${className}`}>{text}</div>
  )
}

export default SubTitle;
import React from 'react'

const ParaContent = ({ text, className = "" }) => {
  return (
    <div className={`text-[1.2rem] ${className}`}>{text}</div>
  )
}

export default ParaContent;
import React from 'react'

const REMContent = ({ text, className = "" }) => {
  return (
    <div className={`text-[1rem] ${className}`}>{text}</div>
  )
}

export default REMContent;
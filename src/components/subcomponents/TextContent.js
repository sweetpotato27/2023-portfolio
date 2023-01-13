import React from 'react'

const TextContent = ({ text, className = "" }) => {
  return (
    <div className={`text-[2rem] ${className}`}>{text}</div>
  )
}

export default TextContent;
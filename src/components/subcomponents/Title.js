import React from 'react'

const Title = ({ text, className = "" }) => {
  return (
    <div className={`text-[3rem] ${className}`}>{text}</div>
  )
}

export default Title;
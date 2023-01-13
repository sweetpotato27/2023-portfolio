import React from 'react'

const IconContent = ({ text, icon }) => {
  return (
    <div className="flex justify-center items-center mb-4">
      <div className="text-[2rem]">{text}</div>
      <div className="ml-4">{icon}</div>
    </div>
  )
}

export default IconContent;
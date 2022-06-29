import React from 'react'

const Button = ({ children, border, ...props }) => {
  console.log(border)
  return (
    <button
      {...props}
      className={`bg-inherit p-2 rounded-md text-sm m-2 hover:bg-blue-400 hover:text-white transition-all duration-200 ${border ? 'border-blue-400 border-2' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button

import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='bg-inherit px-4 py-2 rounded-md text-sm'
    >
      {children}
    </button>
  )
}

export default Button

import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='bg-inherit py-2 rounded-md text-sm'
    >
      {children}
    </button>
  )
}

export default Button

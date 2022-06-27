import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='bg-slate-900 px-4 py-2 rounded-md text-white text-sm hover:opacity-50 transition-all'
    >
      {children}
    </button>
  )
}

export default Button

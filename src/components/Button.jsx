import React from 'react'

const linkCv = 'https://drive.google.com/file/d/1SLPQZO_ErUD1eItP-GdpBlsBpH_aK6fA/view?usp=sharing'

const Button = ({ children }) => {
  return (
    <button
      className='bg-slate-900 px-4 py-2 rounded-md text-white text-sm hover:opacity-50 transition-all'
    >
      {children}
    </button>
  )
}

export default Button

import React from 'react'

const Button = ({ children, border, full, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium text-sm transition-all duration-300 rounded-xl px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#030712]'
  
  let variantStyles = ''
  if (variant === 'primary' && !border) {
    variantStyles = 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0'
  } else if (border) {
    variantStyles = 'border border-slate-700 hover:border-cyan-400/80 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 hover:text-white backdrop-blur-md shadow-sm hover:shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0'
  } else if (variant === 'secondary') {
    variantStyles = 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-slate-700/60 backdrop-blur-md'
  } else {
    variantStyles = 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50'
  }

  const widthStyle = full ? 'w-full' : ''

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles} ${widthStyle} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

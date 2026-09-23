import React from 'react'

const Input = ({ name, type = 'text', label, ...props }) => {
  return (
    <div className='my-3 text-left'>
      {label && (
        <label htmlFor={name} className='block text-xs font-medium text-slate-300 mb-1.5 uppercase font-mono'>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        className='w-full px-4 py-2.5 bg-slate-900/70 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all backdrop-blur-md text-sm'
        {...props}
      />
    </div>
  )
}

export default Input

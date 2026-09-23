import React from 'react'

const Search = ({ value, onChange, placeholder = 'Buscar por tecnología o nombre...' }) => {
  return (
    <div className='relative w-full max-w-md'>
      <div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500'>
        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
      </div>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full pl-10 pr-4 py-2 bg-slate-900/70 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all backdrop-blur-md'
      />
      {value && (
        <button
          onClick={() => onChange({ target: { value: '' } })}
          className='absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300'
        >
          <span className='text-xs bg-slate-800 px-1.5 py-0.5 rounded'>Esc</span>
        </button>
      )}
    </div>
  )
}

export default Search

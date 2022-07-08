import React from 'react'

const Input = ({ name, type, ...props }) => {
  return (
    <div className='my-2'>
      <input
        className='w-full outline-none border-b-2 hover:border-blue-300 hover:rounded-md transition-all'
        type={type}
        name={name}
        {...props}
      />
    </div>
  )
}

export default Input

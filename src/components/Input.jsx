import React from 'react'

const Input = ({ name, type, ...props }) => {
  return (
    <div className='my-2'>
      <input
        className='w-full'
        type={type}
        name={name}
        {...props}
      />
    </div>
  )
}

export default Input

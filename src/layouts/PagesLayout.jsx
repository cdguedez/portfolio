import React from 'react'

const PagesLayout = ({ children }) => {
  return (
    <div className='bg-home bg-cover h-screen flex justify-center items-center'>{children}</div>
  )
}

export default PagesLayout

import React from 'react'

const Hero = ({ title, subTitle, country }) => {
  return (
    <>
      <h1 className='font-bold text-md mb-2 uppercase text-left'>
        {title}
      </h1>
      <h2 className='font-semibold text-lg mb-4'>
        {subTitle} {' '}
        <span className='font-bold text-lime-400 uppercase'>
          {country}
        </span>
      </h2>
    </>
  )
}

export default Hero

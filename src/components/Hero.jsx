import React from 'react'

const Hero = ({ title, subTitle, country }) => {
  return (
    <article>
      <h1 className='font-bold text-md mb-4 uppercase -ml-2 text-left'>
        {title}
        <hr className='w-24' />
      </h1>
      <h2 className='font-semibold text-lg mb-2'>
        {subTitle} {' '}
        <span className='font-bold text-lime-500 uppercase'>
          {country}
        </span>
      </h2>
    </article>
  )
}

export default Hero

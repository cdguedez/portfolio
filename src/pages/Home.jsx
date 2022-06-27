import React from 'react'

const linkCv = 'https://drive.google.com/file/d/1SLPQZO_ErUD1eItP-GdpBlsBpH_aK6fA/view?usp=sharing'

const Home = () => {
  return (
    <>
      <h1 className='uppercase font-bold text-2xl mb-2 text-left'>
        I'M CARLOS GUEDEZ
      </h1>
      <h2 className='font-semibold text-lg mb-4 text-left'>Web developer from {' '}
        <span className='font-bold text-lime-400 uppercase'>
          venezuela
        </span>
      </h2>
      <div className='text-left'>
        <a
          target='_blank'
          href={linkCv}
          className='bg-white bg-opacity-25 px-4 py-2 rounded-md hover:bg-opacity-50'
          rel='noreferrer'
        >
          Download CV
        </a>
      </div>
    </>
  )
}

export default Home

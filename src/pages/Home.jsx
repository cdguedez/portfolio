import React from 'react'
import Skills from './../components/Skills'
import { me } from './../utils/portfolio'

const linkCv = 'https://drive.google.com/file/d/1SLPQZO_ErUD1eItP-GdpBlsBpH_aK6fA/view?usp=sharing'

const Home = () => {
  return (
    <>
      <h1 className='uppercase font-bold text-2xl mb-2 text-left'>
        i'm {me.name}
      </h1>
      <h2 className='font-semibold text-lg text-left m-0'>Web developer from {' '}
        <span className='font-bold text-lime-400 uppercase'>
          {me.country}
        </span>
      </h2>
      <Skills skills={me.skills} />
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

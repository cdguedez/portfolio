import React from 'react'
import Skills from './../components/Skills'
import { me } from './../utils/portfolio'
import Button from './../components/Button'

// const linkCv = 'https://drive.google.com/file/d/1SLPQZO_ErUD1eItP-GdpBlsBpH_aK6fA/view?usp=sharing'

const Home = () => {
  const handleClick = () => window.alert('resume not available')

  return (
    <section className='bg-black bg-opacity-20 p-8 rounded-lg max-w-5xl'>
      <h1 className='uppercase font-bold text-2xl mb-2 text-left'>
        i'm {me.name} <Button onClick={handleClick}>Download CV</Button>
      </h1>
      <h2 className='font-semibold text-lg text-left'>Web developer from {' '}
        <span className='font-bold text-lime-400 uppercase'>
          {me.country}
        </span>
      </h2>
      <Skills skills={me.skills} />
    </section>
  )
}

export default Home

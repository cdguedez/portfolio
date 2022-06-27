import React from 'react'
import Skills from './../components/Skills'
import { me } from './../utils/portfolio'
import Button from './../components/Button'

const Home = () => {
  return (
    <>
      <h1 className='uppercase font-bold text-2xl mb-2 text-left'>
        i'm {me.name} <Button>Download CV</Button>
      </h1>
      <h2 className='font-semibold text-lg text-left'>Web developer from {' '}
        <span className='font-bold text-lime-400 uppercase'>
          {me.country}
        </span>
      </h2>
      <Skills skills={me.skills} />
    </>
  )
}

export default Home

import React from 'react'
import HeroHome from './../components/HeroHome'
import Button from './../components/Button'
import About from './About'
import { me } from './../utils/portfolio'

const linkCv = 'https://drive.google.com/file/d/1SLPQZO_ErUD1eItP-GdpBlsBpH_aK6fA/view'
const linkLinkedin = 'https://linkedin.com/in/cdguedez'

const Home = () => {
  return (
    <>
      <section className='w-full p-4'>
        <HeroHome
          name={me.name}
          jobTitle={me.jobTitle}
          networks={me.socialLinks}
        />
        <div className='my-2'>
          <Button border onClick={() => window.open(linkCv, '_blank')}>Download CV</Button>
          <Button border onClick={() => window.open(linkLinkedin, '_blank')}>Contact me</Button>
        </div>
        <About className='text-justify' />
      </section>
    </>
  )
}

export default Home

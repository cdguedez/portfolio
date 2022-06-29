import React from 'react'
import HeroHome from './../components/HeroHome'
import { me } from './../utils/portfolio'

const Home = () => {
  console.log(me.socialLinks)
  return (
    <section className='w-1/2'>
      <HeroHome
        name={me.name}
        jobTitle={me.jobTitle}
        networks={me.socialLinks}
      />
    </section>
    // <section className='max-w-6xl'>
    //   <article className='bg-blue-800 bg-opacity-20 p-8 rounded-lg'>
    //     <Skills skills={me.skills} />
    //     <Button onClick={handleClick}>Download CV</Button>
    //   </article>
    // </section>
  )
}

export default Home

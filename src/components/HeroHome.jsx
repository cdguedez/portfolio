import React from 'react'
import Linkedin from './../assets/icons/Linkedin'
import Github from './../assets/icons/Github'
import Twitter from './../assets/icons/Twitter'

const socialIcons = {
  linkedin: <Linkedin />,
  github: <Github />,
  twitter: <Twitter />
}

const HeroHome = ({ name, jobTitle, networks }) => {
  return (
    <article>
      <h1 className='font-bold text-3xl text-left'>Hi, 👋🏻 I'm {name}</h1>
      <hr className='bg-blue-400 my-4 h-1 w-1/3' />
      <h2 className='font-semibold text-xl text-left text-blue-400'>{jobTitle}</h2>
      <div className='flex'>
        {
          networks.map(({ name, url }) => {
            return <a href={url} target='_blank' key={name} rel='noreferrer'>{socialIcons[name]}</a>
          })
        }
      </div>
    </article>
  )
}

export default HeroHome

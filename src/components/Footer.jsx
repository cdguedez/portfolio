import React from 'react'
import Github from './../assets/icons/Github'
import Linkedin from './../assets/icons/Linkedin'
import Twitter from '../assets/icons/Twitter'

const Footer = () => {
  return (
    <footer className='bg-white py-1 h-auto fixed bottom-0 w-screen z-50'>
      <p className='flex justify-center items-center text-blue-500 text-sm'>
        <span className='uppercase'>creado por cdguedez</span>
        <a href='https://github.com/cdguedez' target='_blank' rel='noreferrer'><Github /></a>
        <a href='https://www.linkedin.com/in/cdguedez/' target='_blank' rel='noreferrer'><Linkedin /></a>
        <a href='https://twitter.com/cdguedez' target='_blank' rel='noreferrer'><Twitter /></a>
      </p>
    </footer>
  )
}

export default Footer

import Button from './../components/Button'

import { me } from '../utils/portfolio'
import { Github, Linkedin, Twitter } from '../assets/icons'

const linkCv = 'https://drive.google.com/file/d/1AT_qdGfuMfkmDvIxVIPdze1bJZgBiygA/view?usp=sharing'
const linkLinkedin = 'https://linkedin.com/in/cdguedez'

const socialIcons = {
  linkedin: <Linkedin />,
  github: <Github />,
  twitter: <Twitter />
}

const HeroHome = () => {
  const { name, jobTitle, socialLinks, avatar } = me
  return (
    <>
      <section className='flex justify-between pr-10'>
        <article>
          <h1 className='font-bold text-3xl text-left uppercase'>Hola, 👋🏻 Soy {name}</h1>
          <hr className='bg-blue-400 my-4 h-1 w-1/3' />
          <h2 className='font-semibold text-xl text-left text-blue-400'>{jobTitle}</h2>
          <section className='flex'>
            {
            socialLinks.map(({ name, url }) => {
              return <a href={url} target='_blank' key={name} rel='noreferrer'>{socialIcons[name]}</a>
            })
          }
          </section>
          <section className='my-2'>
            <Button border onClick={() => window.open(linkCv, '_blank')}>Descargar CV</Button>
            <Button border onClick={() => window.open(linkLinkedin, '_blank')}>Contactame</Button>
          </section>
        </article>
        <img src={avatar} className='rounded-full hidden md:block w-96 h-96' alt='avatar cdguedez' />
      </section>
    </>
  )
}

export default HeroHome

import Linkedin from './../assets/icons/Linkedin'
import Github from './../assets/icons/Github'
import Twitter from './../assets/icons/Twitter'
import Button from './../components/Button'

const linkCv = 'https://drive.google.com/file/d/1SLPQZO_ErUD1eItP-GdpBlsBpH_aK6fA/view'
const linkLinkedin = 'https://linkedin.com/in/cdguedez'

const socialIcons = {
  linkedin: <Linkedin />,
  github: <Github />,
  twitter: <Twitter />
}

const avatar = 'https://unavatar.io/cdguedez'

const HeroHome = ({ name, jobTitle, networks }) => {
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <h1 className='font-bold text-3xl text-left uppercase'>Hola, 👋🏻 Soy {name}</h1>
          <hr className='bg-blue-400 my-4 h-1 w-1/3' />
          <h2 className='font-semibold text-xl text-left text-blue-400'>{jobTitle}</h2>
          <div className='flex'>
            {
            networks.map(({ name, url }) => {
              return <a href={url} target='_blank' key={name} rel='noreferrer'>{socialIcons[name]}</a>
            })
          }
          </div>
          <div className='my-2'>
            <Button border onClick={() => window.open(linkCv, '_blank')}>Descargar CV</Button>
            <Button border onClick={() => window.open(linkLinkedin, '_blank')}>Contactame</Button>
          </div>
        </div>
        <img src={avatar} className='rounded-full hidden md:block' alt='avatar' />
      </div>
    </>
  )
}

export default HeroHome

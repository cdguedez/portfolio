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
    </div>
  )
}

export default HeroHome

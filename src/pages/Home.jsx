import HeroHome from './../components/HeroHome'
import Button from './../components/Button'
import About from './About'
import { me } from './../utils/portfolio'

const linkCv = 'https://drive.google.com/file/d/1SLPQZO_ErUD1eItP-GdpBlsBpH_aK6fA/view'
const linkLinkedin = 'https://linkedin.com/in/cdguedez'

const Home = () => {
  return (
    <>
      <article className='px-4 py-10'>
        <HeroHome
          name={me.name}
          jobTitle={me.jobTitle}
          networks={me.socialLinks}
        />
        <div className='my-2'>
          <Button border onClick={() => window.open(linkCv, '_blank')}>Descargar CV</Button>
          <Button border onClick={() => window.open(linkLinkedin, '_blank')}>Contactame</Button>
        </div>
      </article>
      <article className='bg-slate-200 bg-opacity-50 p-4'>
        <About className='text-left text-lg pt-4' />
      </article>
    </>
  )
}

export default Home

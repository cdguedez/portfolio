import HeroHome from './../components/HeroHome'
import About from './About'

const Home = () => {
  return (
    <div className='space-y-16 animate-fadeIn'>
      <HeroHome />
      <div className='relative'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-slate-800/80'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-[#030712] px-4 text-xs font-mono uppercase tracking-widest text-slate-500'>
            Experiencia & Perfil
          </span>
        </div>
      </div>
      <About />
    </div>
  )
}

export default Home

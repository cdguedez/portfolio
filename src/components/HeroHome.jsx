import Button from './../components/Button'
import { me } from '../utils/portfolio'
import { Github, Linkedin, Twitter } from '../assets/icons'

const linkCv = 'https://drive.google.com/file/d/1L3OZh74UDpdxYtnybreNkdDt6P_NB_pe/view?usp=sharing'
const linkLinkedin = 'https://linkedin.com/in/cdguedez'

const socialIcons = {
  linkedin: <Linkedin />,
  github: <Github />,
  twitter: <Twitter />
}

const HeroHome = () => {
  const { name, jobTitle, socialLinks, avatar } = me

  return (
    <section className='relative pt-4 pb-10'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
        {/* Left Column / Info */}
        <div className='flex-1 text-left'>
          {/* Status pill */}
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm'>
            <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
            <span>Disponible para proyectos & full-time</span>
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading'>
            Hola, soy{' '}
            <span className='bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent'>
              {name}
            </span>
            <span className='inline-block animate-float ml-2'>👋</span>
          </h1>

          <h2 className='text-xl sm:text-2xl font-semibold text-cyan-400 mt-3 font-heading'>
            {jobTitle} <span className='text-slate-500 font-normal'>| Fullstack & Web Architect</span>
          </h2>

          <p className='mt-4 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed'>
            Especializado en la creación de aplicaciones web escalables, arquitecturas de software modernas con React, Node.js y soluciones de alto rendimiento.
          </p>

          {/* Social Links */}
          <div className='flex items-center gap-3 my-6'>
            {socialLinks.map(({ name, url }) => (
              <a
                href={url}
                target='_blank'
                key={name}
                rel='noreferrer'
                className='h-10 w-10 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200 shadow-sm'
                aria-label={name}
              >
                {socialIcons[name]}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-wrap items-center gap-3 pt-2'>
            <Button
              variant='primary'
              onClick={() => window.open(linkCv, '_blank')}
            >
              <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
              Descargar CV
            </Button>
            <Button
              border
              onClick={() => window.open(linkLinkedin, '_blank')}
            >
              Contactar en LinkedIn
            </Button>
          </div>
        </div>

        {/* Right Column / Avatar with Glowing Aura */}
        <div className='relative group'>
          {/* Ambient Glow behind avatar */}
          <div className='absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow' />

          <div className='relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600'>
            <img
              src={avatar}
              alt={`Avatar ${name}`}
              className='w-full h-full object-cover rounded-full bg-slate-900 border-4 border-[#030712] shadow-2xl'
              onError={(e) => {
                e.currentTarget.src = 'https://unavatar.io/github/cdguedez'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome

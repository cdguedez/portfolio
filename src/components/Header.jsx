import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import BurgerIcon from './../assets/icons/BurgerIcon'
import CloseIcon from '../assets/icons/CloseIcon'
import Button from './Button'

const Header = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false)
  const navItems = items.filter(item => item.title)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-slate-800/80 transition-all'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        {/* Brand / Logo */}
        <Link to='/' className='flex items-center gap-2 group'>
          <span className='h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform'>
            CG
          </span>
          <span className='font-heading font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors'>
            cdguedez<span className='text-cyan-400'>.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden sm:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800'>
          {navItems.map(({ path, title }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`
              }
            >
              {title}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className='hidden sm:block'>
          <a
            href='https://linkedin.com/in/cdguedez'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 shadow-sm transition-all duration-200'
          >
            Disponible para trabajar
            <span className='ml-2 h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className='sm:hidden'>
          <Button
            variant='ghost'
            className='p-2 text-slate-300'
            onClick={() => setIsVisible(!isVisible)}
            aria-label='Toggle menu'
          >
            {isVisible ? <CloseIcon /> : <BurgerIcon />}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isVisible && (
        <div className='sm:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-2 pb-6 space-y-2'>
          {navItems.map(({ path, title }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsVisible(false)}
              className={({ isActive }) =>
                `block text-base font-medium px-4 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`
              }
            >
              {title}
            </NavLink>
          ))}
          <div className='pt-2'>
            <a
              href='https://linkedin.com/in/cdguedez'
              target='_blank'
              rel='noreferrer'
              className='block text-center text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800/80 text-cyan-400 border border-cyan-500/20'
            >
              Disponible para trabajar 🟢
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

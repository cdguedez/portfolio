import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ items }) => {
  return (
    <header className='p-4 h-[70px] bg-black fixed w-screen z-10'>
      <nav className='flex justify-between'>
        <span className='uppercase text-white font-bold'>cdguedez</span>
        <div className='flex content-center'>
          {
            items.map(({ path, title }) => (
              <Link
                key={path}
                className='text-slate-300 font-semibold hover:text-lime-400 px-1'
                to={path}
              >
                {title}
              </Link>
            ))
          }
        </div>
      </nav>
    </header>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ items }) => {
  return (
    <header className='p-4 h-auto bg-blue-500 fixed w-screen z-10'>
      <nav className='flex justify-around items-center'>
        <span className='uppercase text-white font-bold'>cdguedez</span>
        <div>
          {
            items.map(({ path, title }) => (
              <Link
                key={path}
                className='text-slate-300 font-semibold hover:text-lime-400 px-1 transition-all'
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

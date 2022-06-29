import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BurgerIcon from './../assets/icons/BurgerIcon'
import Button from './Button'

const Header = ({ items, color }) => {
  console.log(color)
  const [isVisible, setIsVisible] = useState(false)
  return (
    <header className=' bg-white p-4 h-auto fixed w-screen z-10'>
      <nav className='flex justify-between items-center bg-inherit'>
        <div className='sm:hidden bg-inherit'>
          <Button
            onClick={() => setIsVisible(!isVisible)}
          >
            <BurgerIcon />
          </Button>
          <div className={`flex flex-col fixed mt-4 rounded-[0_4px_4px_4px] bg-inherit ${!isVisible ? 'hidden' : ''}`}>
            {
            items.map(({ path, title }) => (
              <Link
                key={path}
                className='font-semibold px-4 py-2 transition-all'
                to={path}
              >
                {title}
              </Link>
            ))
          }
          </div>
        </div>
        <span className='uppercase font-bold'>cdguedez dev</span>
        <div className='hidden sm:flex'>
          {
            items.map(({ path, title }) => (
              <Link
                key={path}
                className='font-semibold px-1 transition-all'
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

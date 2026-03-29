import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      
      <div className='container mx-auto flex justify-between items-center'>

        {/* Logo */}
        <a href="#" className='flex items-center text-3xl font-bold text-white'>
          Manish
          <span className='text-blue ml-1'>Codes</span>
          <span className='w-4 h-4 bg-blue rounded-full ml-2 inline-block'></span>
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-10'>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='relative text-white/80 transition duration-300 hover:text-blue group'
            >
              <span>{item}</span>
              <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className='md:hidden text-white'>
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(false)} className='text-2xl cursor-pointer' />
          ) : (
            <FaBars onClick={() => setShowMenu(true)} className='text-2xl cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className='md:hidden bg-dark-300 h-screen flex flex-col items-center justify-center space-y-6'>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='text-xl text-white/80 hover:text-blue transition'
              onClick={() => setShowMenu(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
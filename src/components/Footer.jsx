import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t border-slate-800/80 bg-[#030712]/90 backdrop-blur-md py-6 transition-colors'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500'>
        <p className='flex items-center gap-1.5'>
          <span>Diseñado y construido por</span>
          <span className='font-semibold text-slate-300 hover:text-cyan-400 transition-colors'>
            Carlos Guedez
          </span>
          <span>© {new Date().getFullYear()}</span>
        </p>

        <div className='flex items-center gap-6'>
          <a
            href='https://github.com/cdguedez'
            target='_blank'
            rel='noreferrer'
            className='hover:text-cyan-400 transition-colors'
          >
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/cdguedez'
            target='_blank'
            rel='noreferrer'
            className='hover:text-cyan-400 transition-colors'
          >
            LinkedIn
          </a>
          <a
            href='https://twitter.com/cdguedez'
            target='_blank'
            rel='noreferrer'
            className='hover:text-cyan-400 transition-colors'
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

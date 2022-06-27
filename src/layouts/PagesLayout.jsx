import React from 'react'

const PagesLayout = ({ children }) => {
  return (
    <main className='bg-home bg-cover h-screen flex justify-center items-center text-slate-50 px-4'>
      <section className='w-full bg-black bg-opacity-50 px-6 py-4 rounded-lg text-center'>
        {children}
      </section>
    </main>
  )
}

export default PagesLayout

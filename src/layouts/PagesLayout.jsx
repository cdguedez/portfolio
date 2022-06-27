import React from 'react'

const PagesLayout = ({ children }) => {
  return (
    <>
      <main className='bg-blue-500 bg-opacity-95 min-h-screen h-auto flex justify-center items-center text-slate-50 py-16 px-4'>
        <section className='w-full md:max-w-6xl px-6 py-4 rounded-lg text-center'>
          {children}
        </section>
      </main>
    </>
  )
}

export default PagesLayout

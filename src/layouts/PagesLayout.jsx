import React from 'react'

const PagesLayout = ({ children }) => {
  return (
    <>
      <main className='bg-black bg-center min-h-screen h-auto flex justify-center items-center text-slate-50 p-4 relative top-[70px]'>
        <section className='w-full bg-blue-200 bg-opacity-10 px-6 py-4 rounded-lg text-center'>
          {children}
        </section>
      </main>
    </>
  )
}

export default PagesLayout

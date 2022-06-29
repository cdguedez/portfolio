import React from 'react'
import Header from './../components/Header'
import { Routes } from './../router/routes'

const PagesLayout = ({ children }) => {
  return (
    <>
      <Header items={Routes} color='red' />
      <main className='min-h-screen h-auto flex justify-center items-center px-2'>
        <section className='w-full md:max-w-6xl px-6 py-4 rounded-lg text-center'>
          {children}
        </section>
      </main>
    </>
  )
}

export default PagesLayout

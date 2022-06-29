import React from 'react'
import Header from './../components/Header'
import { Routes } from './../router/routes'

const PagesLayout = ({ children }) => {
  return (
    <>
      <Header items={Routes} />
      <main className='flex justify-center items-center h-screen'>
        {children}
      </main>
    </>
  )
}

export default PagesLayout

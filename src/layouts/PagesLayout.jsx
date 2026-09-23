import Header from './../components/Header'
import Footer from './../components/Footer'
import { Routes } from './../router/routes'

const PagesLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col justify-between relative overflow-x-hidden'>
      {/* Ambient background glowing orbs */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10' />
      <div className='absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10' />
      <div className='absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10' />

      <Header items={Routes} />
      
      <main className='flex-grow pt-24 pb-12 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default PagesLayout

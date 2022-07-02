import Header from './../components/Header'
import Footer from './../components/Footer'
import { Routes } from './../router/routes'

const PagesLayout = ({ children }) => {
  return (
    <>
      <Header items={Routes} />
      <main className='flex justify-center items-center h-screen'>
        <section className='w-full z-40 absolute top-24'>
          {children}
          <Footer />
        </section>
      </main>
    </>
  )
}

export default PagesLayout

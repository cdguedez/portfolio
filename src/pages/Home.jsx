import HeroHome from './../components/HeroHome'
import About from './About'

const Home = () => {
  return (
    <>
      <article className='px-4 py-10'>
        <HeroHome />
      </article>
      <article className='bg-slate-200 bg-opacity-50 p-4'>
        <About />
      </article>
    </>
  )
}

export default Home

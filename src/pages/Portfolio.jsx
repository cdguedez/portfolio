import Hero from './../components/Hero'
import Projects from './../components/Projects'

const Portfolio = () => {
  return (
    <section className='px-2'>
      <Hero
        title='My portfolio'
      />
      <Projects />
    </section>
  )
}

export default Portfolio

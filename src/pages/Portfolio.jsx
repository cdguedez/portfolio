import Hero from './../components/Hero'
import Projects from './../components/Projects'
import { projects } from './../utils/portfolio'
// import Search from './../components/Search'
const Portfolio = () => {
  return (
    <>
      <article className='px-4 py-10'>
        {/* <Search /> */}
        <Hero
          title='Mi Portafolio'
          subTitle='Aqui encontraras Proyectos personales y profesionales'
        />
      </article>
      <article className='p-4'>
        <Projects projects={projects} />
      </article>
    </>
  )
}

export default Portfolio

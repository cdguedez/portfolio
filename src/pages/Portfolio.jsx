import Hero from './../components/Hero'
import { projects } from './../utils/portfolio'
import CardProject from './../components/CardProject'

const Portfolio = () => {
  return (
    <>
      <Hero
        title='My portfolio'
        subTitle='my projects make by frontend web'
      />
      <hr className='bg-lime-400 my-4' />
      <section>
        {
          projects.map(project => <CardProject key={project.id} project={project} />)
        }
      </section>
    </>
  )
}

export default Portfolio

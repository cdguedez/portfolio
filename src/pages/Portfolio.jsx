import Hero from './../components/Hero'
import { projects } from './../utils/portfolio'

const Portfolio = () => {
  console.log(projects)
  return (
    <>
      <Hero
        title='My portfolio'
        subTitle='my projects make by frontend web'
      />
      <hr className='bg-lime-400' />
      <section>
        {
          projects.map(project => {
            return (
              <article
                key={project.id}
                className='bg-slate-600 p-4 my-1 rounded-tl-lg rounded-br-lg rounded-bl-lg shadow-sm shadow-lime-400'
              >
                <h2 className='uppercase'>{project.name}</h2>
                <span className={`lowercase ${project.isFinish ? 'text-[#00D26A]' : 'text-red-500'}`}>{project.isFinish ? 'finish 🟢' : 'in progress ⛔'}</span>
                <p>{project.description}</p>
              </article>
            )
          })
        }
      </section>
    </>
  )
}

export default Portfolio

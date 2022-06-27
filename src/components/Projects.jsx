import React from 'react'
import { projects } from './../utils/portfolio'
import CardProject from './../components/CardProject'

const Projects = () => {
  return (
    <section className='grid md:grid-cols-2 gap-x-4'>
      {
        projects.map(project => <CardProject key={project.id} project={project} />)
      }
    </section>
  )
}

export default Projects

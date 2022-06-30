import CardProject from './CardProject'
const Projects = ({ projects }) => {
  return (
    <div className='grid grid-cols-fill justify-center gap-2'>
      {
        projects.map(project => (
          <CardProject key={project.id} project={project} />
        ))
      }
    </div>
  )
}

export default Projects

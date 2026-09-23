import CardProject from './CardProject'

const Projects = ({ projects = [] }) => {
  if (projects.length === 0) {
    return (
      <div className='text-center py-16 px-4 bg-slate-900/40 rounded-2xl border border-slate-800'>
        <p className='text-slate-400 text-lg'>No se encontraron proyectos con ese filtro.</p>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {projects.map(project => (
        <CardProject key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects

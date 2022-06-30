import Skills from './Skills'
import Github from './../assets/icons/Github'
import ArrowUpRight from './../assets/icons/ArrowUp'

const CardProject = ({ project }) => {
  return (
    <div
      className='bg-slate-100 bg-opacity-25 h-auto w-full rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-shadow'
    >
      <div className='flex justify-between items-center'>
        <h1
          className='font-semibold uppercase'
        >
          {project.name}
        </h1>
        {project.repo && <a href={project.repo} target='_blank' rel='noreferrer'><Github /></a>}
        <a href={project.url} target='_blank' rel='noreferrer'><ArrowUpRight /></a>
      </div>
      <hr className='bg-blue-400 my-2 h-1 w-1/3' />
      <p>{project.description}</p>
      <Skills skills={project.skills} />
    </div>
  )
}

export default CardProject

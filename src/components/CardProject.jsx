import Skills from './Skills'
import Github from './../assets/icons/Github'

const CardProject = ({ project }) => {
  return (
    <div
      className='h-auto w-full border-blue-400 border-2 rounded-lg p-4 text-center hover:shadow-xl hover:translate-x-1 transition-all'
    >
      <div className='flex justify-around items-center'>
        <Github />
        <h1
          className='font-semibold text-xl uppercase mb-2'
        >
          {project.name}
        </h1>
        <Github />
      </div>
      <p>{project.description}</p>
      <Skills skills={project.skills} />
    </div>
  )
}

export default CardProject

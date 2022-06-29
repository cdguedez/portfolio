import Skills from './../components/Skills'

const CardProject = ({ project }) => {
  return (
    <article
      key={project.id}
      className='bg-blue-400 my-2 rounded-lg text-black shadow-xl hover:shadow-2xl transition-all'
    >
      {
        project.images?.length > 0 && (
          <figure>
            <img
              className='rounded-tl-lg rounded-tr-lg w-full max-h-[230px]'
              src={project.images[0]}
              alt={project.name}
            />
          </figure>
        )

      }
      <div className='text-white p-4'>
        <Skills skills={project.skills} />
        <h2><a target='_blank' href={project.url} rel='noreferrer'>{project.name}</a></h2>
        <span className='lowercase'>{project.isFinish ? '✅' : '🧑‍💻'}</span>
        <p>{project.description}</p>
      </div>
    </article>
  )
}

export default CardProject

const CardProject = ({ project }) => {
  console.log(project)
  return (
    <article
      key={project.id}
      className='bg-blue-400 my-2 rounded-lg text-black shadow-xl hover:shadow-2xl transition-shadow'
    >
      {
        project.images?.length > 0 && (
          <figure>
            <img
              className='rounded-tl-lg rounded-tr-lg'
              src={project.images[0]}
              alt={project.name}
            />
          </figure>
        )

      }
      <div className='p-4 text-slate-300'>
        <h2 className='uppercase'><a target='_blank' href={project.url} rel='noreferrer'>{project.name}</a></h2>
        <span className='lowercase'>{project.isFinish ? '✅' : '🧑‍💻'}</span>
        <p>{project.description}</p>
      </div>
    </article>
  )
}

export default CardProject

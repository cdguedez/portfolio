import React from 'react'

const CardProject = ({ project }) => {
  return (
    <article
      key={project.id}
      className='bg-slate-600 pb-4 my-2 rounded-tl-lg rounded-br-lg rounded-bl-lg shadow-sm shadow-lime-400'
    >
      {
        project.images.length > 0 && (
          <figure>
            <img
              className='rounded-tl-lg'
              src={project.images[0]}
              alt={project.name}
            />
          </figure>
        )

      }
      <h2 className='uppercase'><a target='_blank' href={project.url} rel='noreferrer'>{project.name}</a></h2>
      <span className={`lowercase ${project.isFinish ? 'text-[#54D26A]' : 'text-red-500'}`}>{project.isFinish ? 'finish 🟢' : 'in progress ⛔'}</span>
      <p>{project.description}</p>
    </article>
  )
}

export default CardProject

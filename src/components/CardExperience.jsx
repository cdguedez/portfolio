import React from 'react'

const CardExperience = ({
  company = 'company name',
  jobDescription = 'job description',
  duration = ['dd/mm/yyyy', 'dd/mm/yyyy'],
  exp = 'my content exp.',
  list
}) => {
  return (
    <article className='p-4'>
      <h2 className='font-semibold text-lg uppercase mb-1'>{company}</h2>
      <div className='mb-2'>
        <span className='text-sm pr-2 text-blue-400'>{jobDescription}</span>
        <span className='text-xs text-slate-600'>{duration[0]} - {duration[1]}</span>
      </div>
      <p>{exp}</p>
    </article>
  )
}

export default CardExperience

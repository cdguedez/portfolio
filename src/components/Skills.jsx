import React from 'react'

const Skills = ({ skills = [] }) => {
  return (
    <div className='flex flex-wrap gap-1.5 my-3'>
      {skills.map(skill => (
        <span
          className='inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-mono tracking-tight bg-slate-900/80 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-950/40 hover:scale-105 transition-all duration-200'
          key={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default Skills

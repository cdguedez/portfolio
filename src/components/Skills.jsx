const Skills = ({ skills }) => {
  return (
    <div className='my-2 text-left flex flex-wrap justify-center'>
      {skills.map(skill => (
        <span
          className='bg-white text-black text-sm m-1 px-2 rounded-full border-slate-700 border-[2px] font-semibold'
          key={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default Skills

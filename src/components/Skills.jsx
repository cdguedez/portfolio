const Skills = ({ skills }) => {
  return (
    <div className='my-2 text-left flex flex-wrap justify-center'>
      {skills.map(skill => (
        <span
          className='px-2 border-blue-400 border-2 rounded-xl m-1 text-[12px] uppercase'
          key={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default Skills

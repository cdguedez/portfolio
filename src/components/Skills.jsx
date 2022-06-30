const Skills = ({ skills }) => {
  return (
    <div className='my-2 text-left flex flex-wrap justify-center'>
      {skills.map(skill => (
        <span
          className='px-2 border-[1px] border-blue-400 rounded-md m-1'
          key={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default Skills

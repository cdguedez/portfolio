const Skills = ({ skills }) => {
  return (
    <div className='my-2 text-left flex flex-wrap justify-center'>
      {skills.map(skill => (
        <div className='bg-white text-black font-bold m-2 py-2 px-4 rounded-full' key={skill}>{skill}</div>
      ))}
    </div>
  )
}

export default Skills

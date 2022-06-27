const Skills = ({ skills }) => {
  return (
    <div className='mb-2 flex justify-content'>
      {skills.map(skill => (
        <div className='pr-2' key={skill}>{skill}</div>
      ))}
    </div>
  )
}

export default Skills

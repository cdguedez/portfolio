const Hero = ({ title, subTitle }) => {
  return (
    <article>
      <h1 className='font-bold text-3xl mb-4 uppercase -ml-2 text-left'>
        {title}
        <hr className='bg-blue-400 my-4 h-1 w-1/3' />
      </h1>
      <h2 className='font-semibold text-xl mb-2'>
        {subTitle}
      </h2>
    </article>
  )
}

export default Hero

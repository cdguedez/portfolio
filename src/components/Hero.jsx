const Hero = ({ title, subTitle = null, tag = null }) => {
  return (
    <div className='mb-8 text-left'>
      {tag && (
        <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3'>
          {tag}
        </span>
      )}
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading'>
        <span className='bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent'>
          {title}
        </span>
      </h1>
      {subTitle && (
        <p className='mt-2.5 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed'>
          {subTitle}
        </p>
      )}
    </div>
  )
}

export default Hero

import Skills from './Skills'
import Github from './../assets/icons/Github'
import ArrowUpRight from './../assets/icons/ArrowUp'

const CardProject = ({ project }) => {
  return (
    <div className='group relative flex flex-col justify-between bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300'>
      {/* Top subtle glow bar */}
      <div className='absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div>
        {/* Card Header */}
        <div className='flex items-start justify-between gap-4 mb-3'>
          <div>
            <span className='text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded'>
              {project.id}
            </span>
            <h3 className='text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-2 font-heading leading-snug'>
              {project.name}
            </h3>
          </div>

          {/* Action Links */}
          <div className='flex items-center gap-1.5 shrink-0 bg-slate-800/60 p-1 rounded-xl border border-slate-700/50'>
            {project.repo && (
              <a
                href={project.repo}
                target='_blank'
                rel='noreferrer'
                title='Ver código en GitHub'
                className='p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/80 transition-all'
              >
                <div className='w-4 h-4 flex items-center justify-center'>
                  <Github />
                </div>
              </a>
            )}
            {project.url && (
              <a
                href={project.url}
                target='_blank'
                rel='noreferrer'
                title='Visitar sitio web'
                className='p-1.5 rounded-lg text-cyan-400 hover:text-white hover:bg-cyan-600/60 transition-all'
              >
                <div className='w-4 h-4 flex items-center justify-center'>
                  <ArrowUpRight />
                </div>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className='text-sm text-slate-400 line-clamp-3 leading-relaxed mt-2 text-left'>
          {project.description}
        </p>
      </div>

      {/* Tech Stack Skills */}
      <div className='mt-5 pt-4 border-t border-slate-800/80 text-left'>
        <Skills skills={project.skills} />
      </div>
    </div>
  )
}

export default CardProject

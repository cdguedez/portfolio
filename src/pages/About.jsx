import { me } from '../utils/portfolio'

const About = () => {
  return (
    <div className='text-left py-8'>
      {/* Bento Grid layout */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Main Bio Card */}
        <div className='md:col-span-2 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none' />

          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4'>
            Trayectoria Profesional
          </div>

          <h2 className='text-2xl sm:text-3xl font-bold text-white font-heading mb-4'>
            Transformando ideas complejas en experiencias web rápidas y escalables
          </h2>

          <p className='text-slate-300 leading-relaxed text-base mb-4'>
            Soy desarrollador web con más de 3 años de experiencia construyendo soluciones completas, abarcando desde el diseño de arquitecturas backend robustas con <span className='text-cyan-400 font-semibold'>Node.js, Express y MySQL</span>, hasta interfaces dinámicas y altamente reactivas con <span className='text-cyan-400 font-semibold'>React</span> y <span className='text-cyan-400 font-semibold'>Next.js</span>.
          </p>

          <p className='text-slate-400 leading-relaxed text-sm'>
            Disfruto profundizar en la calidad del código, el rendimiento web y la experiencia de usuario. Mi enfoque de trabajo fomenta la colaboración continua mediante <strong className='text-slate-200'>pair programming</strong> y comunicación transparente para acelerar entregas y compartir conocimientos en equipo.
          </p>
        </div>

        {/* Stats & Quick Info Bento Card */}
        <div className='p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between'>
          <div>
            <h3 className='text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono'>
              Datos Clave
            </h3>
            <div className='space-y-4'>
              <div className='p-3 rounded-xl bg-slate-800/40 border border-slate-800'>
                <span className='text-xs text-slate-500 block font-mono'>Contacto</span>
                <a href={`tel:${me.phone}`} className='text-base font-semibold text-white'>{me.phone}</a>
              </div>
              <div className='p-3 rounded-xl bg-slate-800/40 border border-slate-800'>
                <span className='text-xs text-slate-500 block font-mono'>Ubicación</span>
                <span className='text-base font-semibold text-white'>{me.country}</span>
              </div>
              <div className='p-3 rounded-xl bg-slate-800/40 border border-slate-800'>
                <span className='text-xs text-slate-500 block font-mono'>Idiomas</span>
                <span className='text-base font-semibold text-white'>Español (Nativo) · Inglés (Básico/Técnico)</span>
              </div>
              <div className='p-3 rounded-xl bg-slate-800/40 border border-slate-800'>
                <span className='text-xs text-slate-500 block font-mono'>Intereses</span>
                <span className='text-sm text-slate-300 capitalize'>{me.hobbies.join(', ')}</span>
              </div>
            </div>
          </div>

          <div className='pt-6 border-t border-slate-800/80 mt-6'>
            <div className='flex items-center justify-between text-xs text-slate-400 font-mono'>
              <span>ESTADO</span>
              <span className='text-emerald-400 font-bold'>DISPONIBLE 🚀</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Breakdown */}
      <div className='mt-8 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md'>
        <h3 className='text-lg font-bold text-white font-heading mb-4'>
          Stack Tecnológico Principal
        </h3>
        <div className='flex flex-wrap gap-2'>
          {me.skills.map((skill, idx) => (
            <span
              key={idx}
              className='px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-800/80 text-cyan-300 border border-slate-700/60 hover:border-cyan-400/80 hover:bg-slate-700/80 transition-all cursor-default'
            >
              {skill === 'css33' ? 'CSS3' : skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About

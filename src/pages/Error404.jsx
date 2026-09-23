import { useNavigate } from 'react-router-dom'
import Button from './../components/Button'

const Error404 = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center py-20 px-4 text-center max-w-lg mx-auto'>
      <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6'>
        Error 404
      </div>

      <h1 className='text-4xl sm:text-5xl font-extrabold text-white font-heading mb-4'>
        Página no encontrada
      </h1>

      <p className='text-slate-400 text-sm leading-relaxed mb-8'>
        La página que buscas no existe o ha sido movida. Puedes volver al inicio para continuar navegando.
      </p>

      <Button variant='primary' onClick={() => navigate('/')}>
        Volver al Inicio
      </Button>
    </div>
  )
}

export default Error404

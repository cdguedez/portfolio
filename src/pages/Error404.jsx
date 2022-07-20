import { useNavigate } from 'react-router-dom'
import Button from './../components/Button'

const Error404 = () => {
  const navigate = useNavigate()
  const returnHome = () => {
    navigate('/')
  }

  return (
    <section className='flex flex-col m-2'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='uppercase mb-4 animate-pulse text-red-500'>ERROR 404 | Esta pagina no existe</h1>
        <p className='text-center'>Parece que estas ingresando una URL manual, Para evitar llegar a esta pagina solo usa nuestros link de navegacion</p>
      </div>
      <Button border onClick={() => returnHome()} to='/'>
        Regresar al Inicio
      </Button>
    </section>
  )
}

export default Error404

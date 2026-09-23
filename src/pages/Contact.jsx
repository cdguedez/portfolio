import { useState } from 'react'
import Hero from './../components/Hero'
import Input from './../components/Input'
import Button from './../components/Button'

const formInitial = {
  name: '',
  email: '',
  subject: ''
}

const Contact = () => {
  const [values, setValues] = useState(formInitial)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setValues(formInitial)
    }, 4000)
  }

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='space-y-8 animate-fadeIn text-left'>
      <Hero
        tag='Hablemos'
        title='¿Tienes una idea o proyecto en mente?'
        subTitle='Ponte en contacto conmigo para discutir colaboraciones, vacantes o consultorías técnicas.'
      />

      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 items-start'>
        {/* Contact Info Card */}
        <div className='p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md space-y-6'>
          <h3 className='text-xl font-bold text-white font-heading'>
            Canales Directos
          </h3>
          <p className='text-slate-400 text-sm leading-relaxed'>
            Estoy siempre abierto a escuchar sobre nuevos proyectos de desarrollo, oportunidades para colaborar o simplemente conectar con otros desarrolladores.
          </p>

          <div className='space-y-4 pt-2'>
            <a
              href='https://linkedin.com/in/cdguedez'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all text-slate-300 hover:text-white'
            >
              <div className='w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold'>
                in
              </div>
              <div>
                <div className='text-xs text-slate-400'>LinkedIn</div>
                <div className='text-sm font-semibold'>linkedin.com/in/cdguedez</div>
              </div>
            </a>

            <a
              href='https://github.com/cdguedez'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all text-slate-300 hover:text-white'
            >
              <div className='w-10 h-10 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold'>
                GH
              </div>
              <div>
                <div className='text-xs text-slate-400'>GitHub</div>
                <div className='text-sm font-semibold'>github.com/cdguedez</div>
              </div>
            </a>
          </div>

          <div className='p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-xs text-cyan-300'>
            💡 Respuesta rápida garantizada en menos de 24 horas.
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className='p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md'>
          {submitted ? (
            <div className='py-12 text-center'>
              <div className='w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 text-xl'>
                ✓
              </div>
              <h4 className='text-lg font-bold text-white mb-1'>¡Mensaje recibido!</h4>
              <p className='text-slate-400 text-sm'>Gracias por escribirme. Me pondré en contacto muy pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-4'>
              <Input
                label='Tu Nombre'
                type='text'
                name='name'
                placeholder='Ej. María González'
                value={values.name}
                required
                onChange={handleChange}
              />
              <Input
                label='Tu Correo Electrónico'
                type='email'
                name='email'
                placeholder='correo@ejemplo.com'
                value={values.email}
                required
                onChange={handleChange}
              />
              <div className='text-left'>
                <label htmlFor='subject' className='block text-xs font-medium text-slate-300 mb-1.5 uppercase font-mono'>
                  Mensaje o Consulta
                </label>
                <textarea
                  id='subject'
                  rows='4'
                  name='subject'
                  required
                  placeholder='Cuéntame sobre tu proyecto o propuesta...'
                  onChange={handleChange}
                  value={values.subject}
                  className='w-full px-4 py-2.5 bg-slate-900/70 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all backdrop-blur-md text-sm'
                />
              </div>
              <Button full variant='primary' type='submit'>
                Enviar Mensaje
              </Button>
            </form>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default Contact

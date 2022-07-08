import { useState } from 'react'
import Hero from './../components/Hero'
import Input from './../components/Input'
import Button from './../components/Button'

const form = {
  name: '',
  email: '',
  subject: ''
}

const Contact = () => {
  const [values, setValues] = useState(form)

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit to form')
    setValues(form)
    console.log(values)
  }

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    console.log(values)
  }

  return (
    <>
      <article className='px-4 py-10'>
        <Hero
          title='contactame'
          subTitle='Puedes contactarme a traves de este formulario'
        />
        <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in impedit quam culpa harum. Recusandae illo asperiores ad sit maxime molestiae cupiditate aperiam cumque quaerat hic maiores impedit, perspiciatis consectetur.
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              name='name'
              placeholder='Tu nombre'
              onChange={handleChange}
            />
            <Input
              type='email'
              name='email'
              placeholder='Tu email'
              onChange={handleChange}
            />
            <div>
              <textarea className='w-full outline-none border-2' rows='8' name='subject' onChange={handleChange} value={values.subject} />
            </div>
            <div>
              <Button border full>Enviar</Button>
            </div>
          </form>
        </div>
      </article>
    </>
  )
}

export default Contact

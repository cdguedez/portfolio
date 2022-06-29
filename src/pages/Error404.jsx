import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <section>
      <h1 className=''>ERROR 404 | PAGE NOT FOUND</h1>
      <Link to='/'>Return Home</Link>
    </section>
  )
}

export default Error404

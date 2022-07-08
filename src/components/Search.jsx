import React from 'react'

const Search = () => {
  return (
    <div className='mx-2'>
      <input
        type='search'
        name='search'
        className='w-full py-2 pl-4 text-xl border-2 rounded-md outline-none uppercase'
        placeholder='Buscar...'
        disabled
      />
    </div>
  )
}

export default Search

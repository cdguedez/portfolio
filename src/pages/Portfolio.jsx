import React, { useState, useEffect } from 'react'
import Hero from './../components/Hero'

const REPOS = 'https://api.github.com/users/cdguedez/repos'

const Portfolio = () => {
  const [repoList, setRepoList] = useState([])

  useEffect(() => {
    const getRepo = async () => {
      const res = await fetch(REPOS)
      const result = await res.json()
      setRepoList(result)
    }
    getRepo()
  }, [])

  console.log(repoList)

  return (
    <div>
      <Hero
        title='My portfolio'
        subTitle='my projects make by frontend web'
      />
    </div>
  )
}

export default Portfolio

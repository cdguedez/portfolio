import { useState, useMemo } from 'react'
import Hero from './../components/Hero'
import Projects from './../components/Projects'
import Search from './../components/Search'
import { projects } from './../utils/portfolio'

const categories = ['Todos', 'React', 'Node', 'WordPress', 'Fullstack']

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))

      if (!matchesSearch) return false

      if (selectedCategory === 'Todos') return true
      if (selectedCategory === 'React') {
        return project.skills.some(s => s.toLowerCase().includes('react'))
      }
      if (selectedCategory === 'Node') {
        return project.skills.some(s => s.toLowerCase().includes('node') || s.toLowerCase().includes('express'))
      }
      if (selectedCategory === 'WordPress') {
        return project.skills.some(s => s.toLowerCase().includes('word'))
      }
      if (selectedCategory === 'Fullstack') {
        return project.skills.length > 6 || project.skills.some(s => s.toLowerCase().includes('mysql') || s.toLowerCase().includes('api'))
      }
      return true
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className='space-y-8 animate-fadeIn'>
      <Hero
        tag='Portfolio & Proyectos'
        title='Proyectos Destacados'
        subTitle='Explora una selección de mis aplicaciones, APIs y plataformas desarrolladas en entornos reales y proyectos de código abierto.'
      />

      {/* Filter and Search Bar */}
      <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md'>
        {/* Category Pills */}
        <div className='flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0'>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <Search
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Projects count */}
      <div className='flex items-center justify-between text-xs text-slate-500 px-1 font-mono'>
        <span>Mostrando {filteredProjects.length} de {projects.length} proyectos</span>
        {selectedCategory !== 'Todos' && (
          <span>Filtro activo: <strong className='text-cyan-400'>{selectedCategory}</strong></span>
        )}
      </div>

      {/* Projects Grid */}
      <Projects projects={filteredProjects} />
    </div>
  )
}

export default Portfolio

import { lazy } from 'react'

const Home = lazy(() => import('./../../pages/Home'))
const Portfolio = lazy(() => import('./../../pages/Portfolio'))
const Contact = lazy(() => import('./../../pages/Contact'))
const Error404 = lazy(() => import('./../../pages/Error404'))

export const TemplateTitle = 'Carlos Guedez | Portafolio'

export const defaultRoute = '/'

export const Routes = [
  {
    title: 'Inicio',
    path: '/',
    element: <Home />
  },
  {
    title: 'Proyectos',
    path: '/projects',
    element: <Portfolio />
  },
  {
    title: 'Contacto',
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/*',
    element: <Error404 />
  }
]

import { lazy } from 'react'

const Home = lazy(() => import('./../../pages/Home'))
const Portfolio = lazy(() => import('./../../pages/Portfolio'))
const Contact = lazy(() => import('./../../pages/Contact'))
const Error404 = lazy(() => import('./../../pages/Error404'))

export const TemplateTitle = 'Portfolio cdguedez'

export const defaultRoute = '/home'

export const Routes = [
  {
    title: 'Inicio',
    path: '/',
    element: <Home />
  },
  {
    title: 'Portafolio',
    path: '/projects',
    element: <Portfolio />
  },
  {
    title: 'Contactame',
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/*',
    element: <Error404 />
  }
]

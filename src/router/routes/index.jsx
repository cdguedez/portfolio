import { lazy } from 'react'

const Home = lazy(() => import('./../../pages/Home'))
const Portfolio = lazy(() => import('./../../pages/Portfolio'))
const Contact = lazy(() => import('./../../pages/Contact'))

export const TemplateTitle = 'Portfolio cdguedez'

export const defaultRoute = '/home'

export const Routes = [
  {
    title: 'home',
    path: '/',
    element: <Home />
  },
  {
    title: 'portfolio',
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    title: 'contact',
    path: '/contact',
    element: <Contact />
  }
]

import { lazy } from 'react'

const Home = lazy(() => import('./../../pages/Home'))
const Portfolio = lazy(() => import('./../../pages/Portfolio'))
const Contact = lazy(() => import('./../../pages/Contact'))

export const TemplateTitle = 'Portfolio cdguedez'

export const defaultRoute = '/home'

export const Routes = [
  {
    title: 'Home',
    path: '/',
    element: <Home />
  },
  {
    title: 'Portfolio',
    path: '/projects',
    element: <Portfolio />
  },
  {
    title: 'Contact',
    path: '/contact',
    element: <Contact />
  }
]
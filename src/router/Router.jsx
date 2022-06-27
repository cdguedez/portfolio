import { Suspense } from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { Routes } from './routes'
import Header from './../components/Header'
import Loading from './../components/Loading'
import PagesLayout from '../layouts/PagesLayout'

const Router = () => {
  return (
    <>
      <Header items={Routes} />
      <PagesLayout>
        <Switch>
          {
            Routes.map(r => <Route key={r.path} path={r.path} element={<Suspense fallback={<Loading />}>{r.element}</Suspense>} />)
          }
        </Switch>
      </PagesLayout>
    </>
  )
}

export default Router

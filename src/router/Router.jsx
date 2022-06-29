import { Suspense } from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { Routes } from './routes'
import Loading from './../components/Loading'
import PagesLayout from './../layouts/PagesLayout'
import AuthLayout from './../layouts/AuthLayout'

const Router = () => {
  return (
    <>
      <Switch>
        {
            Routes.map(r => (
              <Route
                key={r.path}
                path={r.path}
                element={<Suspense fallback={<Loading />}><PagesLayout>{r.element}</PagesLayout></Suspense>}
              />
            ))
          }
        <Route
          path='/auth'
          element={<Suspense fallback={<Loading />}><AuthLayout /></Suspense>}
        />
      </Switch>
    </>
  )
}

export default Router

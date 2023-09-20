import { Routes, Route, Navigate } from 'react-router-dom'
import { HEADER, FOOTER } from './components'
import { HOME, PATIENT, FLYER, EQUIVALENTS, METRICS, DATES, LOGIN } from './pages'
import { SETTINGS } from './cms'

export const AppRouter = () => {
  return (
    <div>
      <HEADER />
      <Routes>
          <Route index element={ <HOME /> }/>
          <Route path='patient' element={ <PATIENT /> }/>
          <Route path='flyer' element={ <FLYER /> }/>
          <Route path='equivalents' element={ <EQUIVALENTS /> }/>
          <Route path='metrics' element={ <METRICS /> }/>
          <Route path='dates' element={ <DATES /> }/>            
          <Route path='settings' element={ <SETTINGS /> }/>

        <Route path='login' element={ <LOGIN /> }/>

          <Route path='*' element={ <Navigate to='/' /> }/>
      </Routes>
      <FOOTER />
    </div>
  )
}
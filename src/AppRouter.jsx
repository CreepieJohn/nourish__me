import { Routes, Route, Navigate } from 'react-router-dom'
import { HEADER, FOOTER, LOG_ERROR } from './components'
import { HOME, PATIENT, EQUIVALENTS, METRICS, DATES, LOGIN } from './pages'
import { SETTINGS, FLYER } from './cms'

export const AppRouter = () => {
  return (
    <div>
      <HEADER />
      <Routes>
        <Route index element={ <LOGIN /> }/>
          <Route path='/home' element={ <HOME /> }/>
          <Route path='/patient' element={ <PATIENT /> }/>
          <Route path='/flyer' element={ <FLYER /> }/>
          <Route path='/equivalents' element={ <EQUIVALENTS /> }/>
          <Route path='/metrics' element={ <METRICS /> }/>
          <Route path='/dates' element={ <DATES /> }/>            
          <Route path='/settings' element={ <SETTINGS /> }/>
          <Route path='/logError' element={ <LOG_ERROR /> }/>
          <Route path='*' element={ <Navigate to='/' /> }/>

      </Routes>
      <FOOTER />
    </div>
  )
}
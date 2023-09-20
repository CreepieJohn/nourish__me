import { Routes, Route, Navigate } from 'react-router-dom'
import { HOME, PATIENT, FLYER, EQUIVALENTS, METRICS, DATES } from './pages'
import { HEADER } from './components/header'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <HEADER /> }/>
          <Route index element={ <HOME /> }/>
          <Route path='patient' element={ <PATIENT /> }/>
          <Route path='flyer' element={ <FLYER />}/>
          <Route path='equivalents' element={ <EQUIVALENTS />}/>
          <Route path='metrics' element={ <METRICS />}/>
          <Route path='dates' element={ <DATES />}/>

        <Route path='*' element={ <Navigate to='/' /> }/>
    </Routes>
  )
}
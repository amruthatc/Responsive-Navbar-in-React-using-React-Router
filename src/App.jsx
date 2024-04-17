
import { Navbar } from './Components/Navbar'

import { Home,About, Contact, Services } from './Components/pages'

import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      </div>
  )
}

import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Compras from './pages/Compras'
import Favoritos from './pages/Favoritos'
import Home from './pages/Home'
import Accesorios from './pages/Accesorios'
import Relojes from './pages/Relojes'
import Gafas from './pages/Gafas'
import SelectProduct from './pages/SelectProduct'
import Login from './pages/Login'
import { UserContextProvider } from './context/userContext'
import CompraSucces from './pages/CompraSucces'
const App = () => {

  return (
    <UserContextProvider>

        
          <BrowserRouter>
            <Navbar/>
            <div className='mx-100'>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/carro' element={<Compras/>}/>
              <Route exact path='/carro/comprasucces' element={<CompraSucces/>}/>
              <Route exact path='/favoritos' element={<Favoritos/>}/>
              <Route exact path='/accesorios' element={<Accesorios/>}/>
              <Route exact path='/relojes' element={<Relojes/>}/>
              <Route exact path='/product/:id' element={<SelectProduct/>}/>
              <Route exact path='/gafas' element={<Gafas/>}/>
            </Routes>
            </div>
          </BrowserRouter>
    </UserContextProvider>
  )
}

export default App

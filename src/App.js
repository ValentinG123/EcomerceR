import React, {useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Compras from './pages/Compras'
import Home from './pages/Home'
import Accesorios from './pages/Accesorios'
import Relojes from './pages/Relojes'
import Gafas from './pages/Gafas'
import SelectProduct from './pages/SelectProduct'
import Login from './pages/Login'
import { UserContextProvider, useUserContext } from './context/userContext'
import CompraSucces from './pages/CompraSucces'
// firebase
import firebaseApp from './Firebase/firebase'
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import atraparInicioSecion from './functions/getLogin'
import LoginUrl from './pages/LoginUrl'
import LoginSucess from './pages/LoginSucess'
import Footer from './components/Footer/Footer'
const App = () => {
  const auth = getAuth(firebaseApp)
  const {usuario, setUsuario} = useUserContext();

  onAuthStateChanged(auth,(usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  
  
  
  return (

        
          <BrowserRouter>
            <Navbar/>
            <div className='position-absolute d-flex align-items-center flex-column  w-100'>

            <Routes>
              <Route exact path='/' element={<Home correoUsuario={usuario}/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/loginurl' element={<LoginUrl/>}/>
              <Route exact path='/success' element={<LoginSucess/>}/>
              <Route exact path='/carro' element={<Compras/>}/>
              <Route exact path='/carro/comprasucces' element={<CompraSucces/>}/>
              <Route exact path='/accesorios' element={<Accesorios/>}/>
              <Route exact path='/relojes' element={<Relojes/>}/>
              <Route exact path='/product/:id' element={<SelectProduct/>}/>
              <Route exact path='/gafas' element={<Gafas/>}/>
            </Routes>
            <Footer/>
            </div>

          </BrowserRouter>
  )
}

export default App

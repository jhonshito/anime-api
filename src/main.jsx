import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contenido from './context/Contenido'
import './index.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Descripcion from './components/Descripcion'
import Home from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Contenido>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='descripcion/:id' element={<Descripcion/>} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Contenido>
    </BrowserRouter>
  </>
)

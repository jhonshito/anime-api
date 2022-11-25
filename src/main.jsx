import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contenido from './context/Contenido'
import Data from "./components/Data"
import Form from './components/Form'
import './index.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Descripcion from './components/Descripcion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Contenido>
        <Routes>
        <Route path='/' element={<App />}>
          <Route path='/descripcion/:id' element={<Descripcion/>} />
        </Route>
        </Routes>
          <Form />
          <Data />
      </Contenido>
    </BrowserRouter>
  </React.StrictMode>
)

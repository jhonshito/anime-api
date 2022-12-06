
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='text-white z-10 bg-transparente fixed top-0 w-full justify-around flex h-16 items-center'>
        <div className='flex font-bold text-3xl uppercase'>
            <h2>anime</h2>
            <h2 className='text-azul'>trailer</h2>
        </div>
        <nav>
            <Link to='/' className='uppercase bg-azul px-3 py-2 rounded-md'>Inicio</Link>
        </nav>
    </header>
  )
}

export default Navbar
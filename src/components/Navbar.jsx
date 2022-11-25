
import React from 'react'

const Navbar = () => {
  return (
    <header className='text-white bg-transparente fixed top-0 w-full justify-around flex h-16 items-center'>
        <div className='flex font-bold text-3xl uppercase'>
            <h2>anime</h2>
            <h2 className='text-azul'>trailer</h2>
        </div>
        <nav>
            <button className='uppercase bg-azul w-20 h-9 rounded-md'>Inicio</button>
        </nav>
    </header>
  )
}

export default Navbar
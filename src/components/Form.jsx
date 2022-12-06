
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/Contenido'

const Form = () => {

    const { setSearch } = useContext(UserContext);

    const [texto, setTexto] = useState('')

    const handleChange = ({target}) => {
        // e.preventDefault();
        setTexto(target.value)
        // setSearch(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(texto)
        setTexto('')
    }
  return (
    <section className='text-white mt-28 grid justify-center md:flex md:justify-around'>
      <h1 className='uppercase text-2xl font-semibold text-center'>trailers de animes</h1>
      <form onSubmit={handleSubmit} className='mt-5 md:mt-0'>
        <input value={texto} onChange={handleChange} className='w-56 py-2 rounded-l-lg outline-none text-dark text-lg font-semibold indent-3' type="text" placeholder='Search anime' />
        <button className='w-20 bg-azul py-2 text-lg font-semibold rounded-r-lg' type='submit'>Buscar</button>
      </form>
    </section>
  )
}

export default Form

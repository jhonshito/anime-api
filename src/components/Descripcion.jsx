
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PosteImg from './PosteImg';

const Descripcion = () => {

  let { id } = useParams();

  const [datos, setDatos] = useState([])
  let url = `https://api.jikan.moe/v4/anime/${id}`

   const fetchMovies = async() => {

        try {
            const res = await fetch(`${url}`)
            const daticos = await res.json();
            datos == undefined ? setDatos([]) : setDatos(daticos.data)
            setDatos(daticos.data)
            console.log(datos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      fetchMovies()
    },[url])

  return (
    <div className='text-white mt-20 md:mx-auto md:w-[90%]'>
      <PosteImg datos={datos} />
    </div>
  )
}

export default Descripcion
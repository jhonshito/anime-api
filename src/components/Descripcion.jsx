
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
      // fetch(url)
      // .then(res => res.json())
      // .then(daticos => setDatos(daticos.data))
      fetchMovies()
    },[url])

  return (
    <div className='text-white mt-16'>
      <PosteImg datos={datos.images} />
      {/* Descripcion */}
    </div>
  )
}

export default Descripcion
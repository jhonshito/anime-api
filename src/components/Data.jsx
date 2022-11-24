
import React, { useState } from 'react'
import { useEffect } from "react"

const Data = () => {

    const [data, setData] = useState([])

    const urldata = 'https://api.jikan.moe/v4/anime?'

    const fetchMovies = async() => {

        try {
            const res = await fetch(`${urldata}`)
            const datos = await res.json();
            data == undefined ? setData(datos.data) : setData(datos.data)
            setData(datos.data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(data)

    useEffect(() => {
        fetchMovies()
    },[])
  return (
    <section className=' w-full mx-auto bg-mora flex flex-row flex-wrap'>
        {
            data.map((item, index) => (
                <div className='w-[150px] aspect-video mx-auto h-[300px] bg-white mt-10 shadow-2xl shadow-modo'>
                    <img className='w-full h-60 aspect-video' src={item.images.jpg.image_url} alt="" />
                </div>
            ))
        }
    </section>
  )
}

export default Data

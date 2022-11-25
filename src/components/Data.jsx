
import React, { useContext, useState } from 'react'
import { useEffect } from "react"
import { BsFillDiamondFill } from "react-icons/bs";
import { UserContext } from '../context/Contenido';
import { Link } from "react-router-dom"

const Data = () => {

    const { search } = useContext(UserContext);

    const [data, setData] = useState([])
    console.log(search)
    // const naruto = 'one puch man'

    const urldata = `https://api.jikan.moe/v4/anime?q=${search}`

    const fetchMovies = async() => {

        try {
            const res = await fetch(`${urldata}`)
            const datos = await res.json();
            data == undefined ? setData([...datos.data]) : setData([...datos.data])
            setData([...datos.data])
        } catch (error) {
            console.log(error)
        }
    }

    console.log(data)

    useEffect(() => {
        fetchMovies()
    },[urldata])
  return (
    <section className=' w-full mx-auto container flex flex-row flex-wrap'>
        {
            data == undefined ? setData([]) :
            data.map((item, index) => (
                <Link className='w-[200px] hover:bg-transparente gap-0 aspect-video mx-auto  max-h-[500px] mt-10 shadow-2xl pb-12 mb-14' key={item.mal_id} to={`/descripcion/${item.mal_id}`}>
                    <div>
                        <img className='w-[180px] h-60 aspect-video mx-auto mt-2' src={item.images.jpg.image_url} alt="" />
                        <h2 className='text-white mt-3 font-semibold ml-2'>{item.title}</h2>
                        <div className='flex items-center'>
                            <h3 className='text-white font-semibold ml-2'>type :</h3>
                            <BsFillDiamondFill className='text-white text-[8px] mt-1 ml-3 mr-3' />
                            <h3 className='text-azul font-semibold'>{item.type}</h3>
                        </div>
                    </div>
                </Link>
            ))
        }
    </section>
  )
}

export default Data

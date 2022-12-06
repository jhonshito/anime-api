
import React from 'react'

const PosteImg = ({ datos }) => {

  console.log(datos)

  return (
    <section className='w-full block md:flex py-10'>
      <div className='grid'>
        <div>
          <img className='mx-auto' src={datos.images == undefined ? datos = '' : datos.images.jpg.image_url} alt="" />

          {
            datos.trailer == undefined ? datos = '' :
            datos.trailer.embed_url == null ? <p className='text-center mt-5 py-2 w-60 break-words mx-auto uppercase font-bold bg-fondo rounded-lg text-azul '>Trailer actualmente no disponible</p> :
          <a className='mt-5 mx-auto  py-2 rounded-lg bg-azul flex justify-center  w-52 text-center' href={datos.trailer == undefined ? datos = '' : datos.trailer.url} target='_blank'>Ver Trailer</a>
          }
        </div>
      </div>

      <div className='md:w-[70%] w-full mt-9 md:mt-0 md:ml-12'>
        <h2 className='mx-7 break-words mb-5 text-4xl font-bold'>{datos.title == undefined ? datos = '' : datos.title}</h2>
        <h2 className='ml-7 text-2xl font-bold mb-5'>Sinopsis</h2>
        <div className='flex mx-7 flex-wrap gap-5 mb-5'>
          {
            datos.genres == undefined ? datos = '' : 
            datos.genres.map(item => (
              <p className='text-lg font-semibold bg-fondo text-colorText px-2 rounded-lg' key={item.mal_id}>{item.name}</p>
            ))
          }
        </div>
        <p className='break-words mx-7 font-semibold text-slate-700 mb-5'>{datos.synopsis == undefined ? datos = '' : datos.synopsis}</p>

        <div className='mx-7 flex flex-wrap gap-5 items-center'>
          <h3 className='uppercase font-bold text-lg'>Productores :</h3>
          {
            datos.producers == undefined ? datos = '' :
            datos.producers.map(item => (
              <p className='font-semibold text-colorText' key={item.mal_id}>{item.name}</p>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PosteImg

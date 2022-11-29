
import React from 'react'

const PosteImg = ({ datos }) => {

  return (
    <section className='w-full block md:flex py-10'>
      <div className='grid'>
        <img className='md:ml-10 mx-auto' src={datos.images == undefined ? datos = '' : datos.images.jpg.image_url} alt="" />
        <a className='md:absolute md:bottom-28 mt-5 mx-auto h-8 bg-azul md:ml-14 w-48 text-center' href={datos.trailer == undefined ? datos = '' : datos.trailer.url} target='_blank'>Ver Trailer</a>
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

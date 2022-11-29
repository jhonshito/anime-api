
import React from 'react'

const PosteImg = ({ datos }) => {

    console.log(datos)
  return (
    <section className='text-white'>
        <div className='w-full'>
            <img className='w-full h-[590px]' src={datos == undefined ? datos = '' : datos.jpg.large_image_url} alt="" />
        </div>
    </section>
  )
}

export default PosteImg

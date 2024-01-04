import React from 'react'

export default function TitleDescription({title, description}) {
  return (
    <div data-aos="fade-right" className='flex flex-col gap-3 mt-5 p-2 items-center text-center'>
      <h1 className='text-3xl lg:text-5xl font-bold text-blue-900'>{title}</h1>
      <p className='text-base md:text-xl md:w-1/2 w-full  font-bold'>{description}</p>
    </div>
  )
}

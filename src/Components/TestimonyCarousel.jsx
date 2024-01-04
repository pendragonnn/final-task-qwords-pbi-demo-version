import React from 'react';

export default function TestimonyCarousel({testimonyData}) {
  return (
    <div className='flex flex-col md:px-32 px-3 py-5 gap-3 lg:gap-8'>
      {/* Testimonial box */}
      {/* Photo and profile */}
      <div className='flex lg:flex-row flex-col items-center justify-center gap-3 lg:gap-5'>
        <img className='w-56 rounded-full' src={testimonyData.image} alt="" />
        {/* Name and position */}
        <div className='gap-3 font-bold p-2 text-center'>
          <h1 className='text-3xl'>{testimonyData.name}</h1>
          <p className='text-xl text-orange-500'>{testimonyData.position}</p>
        </div>
        {/* Highlight testimonial */}
        <div className='lg:w-1/2 w-full'>
          <p className='md:text-xl text-sm font-bold bg-orange-500 rounded-lg p-2 text-white md:text-center'>{testimonyData.highlightTestimony}</p>
        </div>
      </div>

      {/* Testimonial description */}
      {/* Detail testimonial and button */}
      <div className='flex flex-col lg:flex-row justify-evenly items-center gap-3 p-4 border-2 rounded-xl border-dotted lg:border-none'>
        <p className='lg:w-1/2 text-base text-black opacity-50 font-bold md:text-center '>{testimonyData.detailTestimony}</p>
        <button className='bg-orange-500 mx-auto text-white md:p-3 p-2 rounded-full'> <a target="_blank" href={testimonyData.linkYoutube}>Lihat video selengkapnya</a></button>
      </div>
    </div>
  );
}

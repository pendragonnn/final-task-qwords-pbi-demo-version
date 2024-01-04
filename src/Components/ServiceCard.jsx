import React from 'react'
import { Card } from 'flowbite-react';

export default function ServiceCard({ serviceData }) {
  function priceFormat(number) {
    number = number.toString().replace(/[^,\d]/g, "");
    number = parseInt(number.replace(/,/g, ""));

    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    let value = formatter.format(number);

    return value;
  }
  return (
    <Card className="relative text-center h-[250px] w-[500px] bg-gradient-to-br from-orange-400 to-orange-500 ">
      <div className='absolute top-3 left-3 bg-orange-100 rounded-full h-[30px] w-[30px]'>
      </div>
      {/* title and price */}
      <div className='flex justify-evenly items-center mx-5'>
        <h5 className="text-xl md:text-2xl tracking-tight text-center text-white rounded-full p-2 font-bold">
          {serviceData.title}
        </h5>
        <p className='text-sm md:text-xl text-white font-bold'>
          {priceFormat(serviceData.price)} <small className='text-sm'>/{serviceData.range}</small>
        </p>
      </div>
      <p className='text-sm text-white'>
        {serviceData.description}
      </p>
      <button className=' bg-white p-2 rounded-lg flex items-center justify-center text-orange-500'>
        Pesan Sekarang
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </Card>
  )
}

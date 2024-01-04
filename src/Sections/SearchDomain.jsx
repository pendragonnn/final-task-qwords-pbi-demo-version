import React from 'react'
import { Dropdown } from 'flowbite-react';

export default function SearchDomain() {
  const priceList = [
    {domain: '.com', price: 165000},
    {domain: '.id', price: 225000},
    {domain: '.info', price: 77000}
  ]

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
    <section className='w-full h-fit bg-orange-500 text-white md:py-5 py-3' style={{backgroundImage: 'url("https://i.ibb.co/5YLswnN/bg-fix.png")'}}>
      {/* title and description */}
      <div data-aos="fade-right" className='flex flex-col gap-3 text-center items-center mt-5'>
        <h1 className='text-3xl md:text-5xl font-bold p-2 border border-blue-900 rounded-xl bg-blue-900'>Cari nama domainmu</h1>
        <p className='animate__bounceIn w-2/4 md:text-xl text-sm my-4'>
          Nama Domain digunakan untuk mempermudah pengunjung menuju ke situs Anda. Pilih nama domain yang paling mencerminkan bisnis, produk, atau layanan Anda.
        </p>
      </div>

      {/* box for form section and domain price section */}
      <div className='flex md:flex-row flex-col md:justify-evenly my-5 items-center lg:px-10'>
        {/* form, dropdown, and search button */}
        <div data-aos="fade-right" className='flex flex-col gap-3 lg:w-1/2 lg:mb-0 mb-2 bg-orange-500 p-3 rounded-xl'>
          <form action="" className='flex w-full gap-3 items-center'>
            <input type="text" className='rounded-lg w-full text-black' placeholder='Cari nama domain anda' />
            {/* dropdown style manual */}
            <div className='bg-white text-orange-500 rounded-xl'>
              <Dropdown label=".id" dismissOnClick={false} color='inherit'>
                <Dropdown.Item>.id</Dropdown.Item>
                <Dropdown.Item>.com</Dropdown.Item>
                <Dropdown.Item>.xyz</Dropdown.Item>
                <Dropdown.Item>.ach</Dropdown.Item>
              </Dropdown>
            </div>

          </form>
          <button className='p-1 w-1/4 mx-auto bg-blue-900 rounded-lg text-white'>
            Cari
          </button>
        </div>

        {/* domain price section */}
        <div className='flex md:flex-col flex-row flex-wrap justify-center md:flex-nowrap md:justify-normal text-center gap-4 font-bold'>
        {priceList.map((price) => (
          <div key={price.domain} data-aos="fade-up" className=' border-blue-900 rounded-xl border-2'>
            <p className='text-base md:text-xl bg-blue-900 pt-2 px-2 rounded-tl-lg rounded-tr-lg'>{price.domain}</p>
            <p className='text-xl md:text-3xl p-2'>{priceFormat(price.price)}</p>
          </div>
        ))}
        </div>
      </div>

    </section>
  )
}

import React from 'react'

export default function Media() {
  return (
    <section className='h-fit mx-6 py-5'>
      {/* title & logo box */}
      <div className='flex lg:flex-row flex-col justify-center items-center'>
        {/* title */}
        <div data-aos="fade-right" className='p-2 flex flex-col mx-auto w-fit mb-3 gap-2 text-center'>
          <h1 className='md:text-5xl text-3xl font-bold'>Diliput Oleh</h1>
          <div className='flex gap-1 items-center p-1'>
            <a className='text-orange-500' href="">Lihat Semua Liputan </a>
            <img className='w-[24px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp" alt="" />
          </div>
        </div>
        {/* logo */}
        <div className='grid grid-cols-3 gap-3 p-2'>
          <div data-aos="zoom-in" className='mx-auto lg:col-span-2'>
            <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/Detikcom.webp" alt="" />
          </div>
          <div data-aos="zoom-up" className='mx-auto lg:col-span-1'>
            <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/Liputan6.webp" alt="" />
          </div>
          <div data-aos="zoom-in" className='mx-auto lg:col-span-3'>
            <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/antara.webp" alt="" />
          </div>
          <div data-aos="zoom-up" className='mx-auto lg:col-span-2'>
            <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/RM.webp" alt="" />
          </div>
          <div data-aos="zoom-in" className='mx-auto lg:col-span-1'>
            <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/KoranBernas.webp" alt="" />
          </div>
          <div data-aos="zoom-up" className='mx-auto lg:col-span-3'>
            <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/TribunJogja.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function TrustCompany() {
  return (
    <section className='h-fit my-10 px-5'>
      {/* title and company logo*/}
      <div className='md:flex md:justify-between'>
        {/* title and more info */}
        <div data-aos="fade-right" className='flex flex-col md:gap-10 gap-5 my-5 md:my-0 items-center justify-center mx-auto text-center'>
          <h1 className='text-3xl font-bold'>Telah Dipercaya oleh 45.000+ Pelanggan Aktif</h1>
          <div className='flex gap-1 items-center'>
            <a className='text-orange-500' href="">Dan Masih Banyak yang Lainnya </a>
            <img className='w-[24px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp" alt="" />
          </div>
        </div>

        {/* company logo */}
        <div data-aos="flip-up" className='grid grid-cols-3 lg:w-1/2 md:w-full w-fit gap-1 items-center'>
          <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Cimory.webp" alt="" />
          <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Forisa.webp" alt="" />
          <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Elsheskin.webp" alt="" />
          <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Icon.webp" alt="" />
          <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Horison.webp" alt="" />
          <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/MD.webp" alt="" />
        </div>
      </div>
    </section>
  )
}

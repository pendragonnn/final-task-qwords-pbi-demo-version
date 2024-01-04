import React from 'react'

export default function TrustCompany() {
  return (
    <section className='h-fit my-10 px-5'>
      {/* title and company logo*/}
      <div className='flex flex-col md:flex-row lg:justify-between'>
        {/* company logo */}
        <div data-aos="flip-down" className='grid grid-cols-4 w-100 lg:w-1/2 bg-orange-500 gap-3 items-center border border-orange-100 rounded-lg p-5 m-3 md:m-0 order-2 md:order-1'>
          <div className='col-span-2 bg-white rounded-full mx-auto' >
            <img className='col-span-2 md:w-40 w-32 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Cpanel.webp" alt="" />
          </div>
          <div className='col-span-2 bg-white rounded-full mx-auto' >
            <img className='col-span-2 md:w-40 w-32 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Idea.webp" alt="" />
          </div>
          <div className='col-span-4 bg-white rounded-full mx-auto' >
            <img className='col-span-2 md:w-40 w-32 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Google.webp" alt="" />
          </div>
          <div className='col-span-2 bg-white rounded-full mx-auto' >
            <img className='col-span-2 md:w-40 w-32 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Archi.webp" alt="" />
          </div>
          <div className='col-span-2 bg-white rounded-full mx-auto' >
            <img className='col-span-2 md:w-40 w-32 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/dotid.webp" alt="" />
          </div>

        </div>
        {/* title and more info */}
        <div data-aos="fade-right" className='flex flex-col md:gap-10 gap-5 my-5 md:my-0 items-center justify-center mx-auto text-center order-1 md:order-2'>
          <h1 className='text-3xl font-bold'>Partner Kami</h1>
          <div className='flex gap-1 items-center'>
            <img className='w-[24px] md:rotate-180 order-2 md:order-1' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp" alt="" />
            <a className='text-orange-500 order-1 md:order-2' href="">Lihat Semua Partner </a>
          </div>
        </div>
      </div>
    </section>
  )
}

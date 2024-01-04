import React from 'react'

export default function ServiceCenter() {
  return (
    <section className='h-fit flex items-center justify-center mt-10 bg-orange-500 md:p-20 p-5' style={{backgroundImage: 'url("https://i.ibb.co/5YLswnN/bg-fix.png")'}}>
      {/* title and contact box */}
      <div data-aos="fade-right" className='relative flex items-center h-full w-full md:flex-row flex-col gap-3 md:gap-0 bg-white rounded-xl md:p-20 p-10'>
        <div className='absolute bg-orange-500 top-5 left-5 h-[36px] w-[36px] rounded-full bg-cover bg-center' style={{backgroundImage: 'url("https://i.ibb.co/5YLswnN/bg-fix.png")'}}></div>
        {/* title */}
        <div data-aos="fade-down" className='lg:w-1/2 w-fit flex flex-col text-center gap-3'>
          <h1 className='font-bold lg:text-5xl text-3xl p-1'>Butuh <span className='text-orange-500'>Bantuan?</span></h1>
          <p className='font-bold'>Kami siap membantu anda 24 jam</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-2 text-white md:mx-5'>
          <div data-aos="zoom-in-up" className='w-full text-start text-sm lg:text-base flex lg:gap-3 gap-2 items-center justify-start p-2 border rounded-full bg-orange-500'>
            <div className='bg-white p-2 rounded-full'>
              <img className='w-full' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/phoneAlt.svg" alt="" />
            </div>
            <p>0804-1-808-888</p>
          </div>
          <div data-aos="zoom-in-up" className='w-full text-start text-sm md:text-base flex lg:gap-3 gap-2 items-center justify-start p-2 border rounded-full bg-orange-500'>
            <div className='bg-white p-2 rounded-full'>
              <img className='w-full' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/phoneAlt.svg" alt="" />
            </div>
            <p>02139708800</p>
          </div>
          <div data-aos="zoom-in-up" className='w-full text-start text-sm md:text-base flex lg:gap-3 gap-2 items-center justify-start p-2 border rounded-full bg-orange-500'>
            <div className='bg-white p-2 rounded-full'>
              <img className='w-full' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/waAlt.svg" alt="" />
            </div>
            <p>+62817437111 (WhatsApp only)</p>
          </div>
          <div data-aos="zoom-in-up" className='w-full text-start text-sm md:text-base flex lg:gap-3 gap-2 items-center justify-start p-2 border rounded-full bg-orange-500'>
            <div className='bg-white p-2 rounded-full'>
              <img className='w-full' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/emailAlt.svg" alt="" />
            </div>
            <p>info@qwords.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function PaymentMethod() {
  return (
    <section data-aos="zoom-in-down" className='h-fit mx-6 py-5 bg-orange-200 my-3 rounded-lg'>
      {/* description */}
      <div className='p-2 flex flex-col items-center mx-auto w-fit mb-3 gap-2 text-center'>
        <h1 className='font-bold text-xl'>Pilih Metode E-payment Otomatis</h1>
        <h1 className='font-bold text-xl'>Layanan Domain, Hosting, VPS langsung aktif tanpa perlu konfirmasi bayar </h1>
        <hr className='h-[5px] w-1/2 bg-orange-500'/>
        <div className='flex gap-1 items-center justify-center p-1'>
          <a className='text-orange-500' href="">Lihat Panduan Pembayaran </a>
          <img className='w-[24px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp" alt="" />
        </div>
      </div>


      {/* logo payment */}
      <div className='px-3 flex items-center justify-center'>
        <img className='rounded-lg' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/all-payment.webp" alt="" />
      </div>
    </section>
  )
}

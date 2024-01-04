import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import TitleDescription from '../Components/TitleDescription'

export default function Service() {
  const serviceData = [
    { title: 'SSL', description: 'Jadikan website Anda lebih terpercaya dan disukai oleh search engine dengan menggunakan SSL Certificate.', price: 112000, range: 'tahun' },
    { title: 'Dedicated Server', description: 'Nikmati kelola Dedicated Server sendiri dengan akses remote dari seluruh dunia tanpa batas.', price: 499000, range: 'bulan' },
    { title: 'Colocation Server', description: 'Akses cepat dari seluruh dunia dengan fasilitas 24x7 full monitoring dengan cooling system terbaik serta fire extinguisher.', price: 500000, range: 'bulan' },
  ]
  return (
    <section className='w-full h-fit px-5'>
      {/* title and description */}
      <TitleDescription title={"Lihat Juga Layanan Kami Yang Lain"}  description={'Optimalkan performa website bisnis Anda dengan berbagai layanan berkualitas dari Qwords'}/>
      
      {/* service card */}
      <div className='grid grid-cols-1 lg:grid-cols-3 h-fit lg:h-[50vh] my-2 gap-2 lg:p-2 px-4'>
        <div data-aos="fade-right" data-aos-delay="500" className='flex md:justify-center items-start'>
          {/* card 1 */}
          <ServiceCard serviceData={serviceData[0]} />
        </div>
        <div data-aos="fade-right" data-aos-delay="500" className='flex md:justify-center lg:items-center'>
          {/* card 2 */}
          <ServiceCard serviceData={serviceData[1]} />
        </div>
        <div data-aos="fade-right" data-aos-delay="500" className='flex md:justify-center lg:items-end'>
          {/* card 3 */}
          <ServiceCard serviceData={serviceData[2]} />
        </div>
      </div>
    </section>
  )
}

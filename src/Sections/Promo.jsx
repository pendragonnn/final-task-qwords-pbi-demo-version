import React from 'react'
import PromoCard from '../Components//PromoCard'

export default function Promo() {
  const promoList = [
      {valueCloudHosting : 'VCH1', price: 24500, discountPrice: 14500, disk: '3 GB', bandwith: 'Unlimited', coreCPU: 0.5, addOn: 'No'},
      {valueCloudHosting : 'Signature', price: 109000, discountPrice: 89900, disk: 'Unlimited', bandwith: 'Unlimited', coreCPU: 1, addOn: '5/5'},
      {valueCloudHosting : 'HPCH Bisnis 1', price: 90000, discountPrice: 79000, disk: '3 GB', bandwith: 'Unlimited', coreCPU: 1, addOn: '-'},
      {valueCloudHosting : 'VPS SC1', price: 135000, discountPrice: 75000, disk: 25, bandwith: 'Unlimited', coreCPU: 1, addOn: 'Unlimited'}
    ]
  return (
    <section className='h-fit p-3 mx-4'>
      {/* title and description */}
      <div data-aos="fade-right" data-aos-duration="1500"  className='flex flex-col gap-5 text-center my-2'>
        <h1 className='md:text-5xl text-3xl font-bold p-2'>Cloud Hosting Indonesia <span className='text-orange-500'>Diskon Hingga 50%</span></h1>
        <p className='md:text-xl text-base'>Layanan cloud hosting indonesia terbaik dengan teknologi andal untuk website anda</p>
      </div>

      {/* promo card */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
      {promoList.map((promo, index) => (
        <PromoCard key={index} promoData={promo} />
      ))}

      </div>
    </section>
  )
}

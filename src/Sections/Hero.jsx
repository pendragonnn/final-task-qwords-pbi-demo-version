import Typed from 'react-typed'
import { Carousel } from "@material-tailwind/react";

export default function Hero() {
  return (
    <section className='container mx-auto lg:h-screen h-fit lg:mt-0 my-5 lg:flex'>
      <div className='flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-3 lg:gap-2 mx-0'>
        <div data-aos="fade-right" data-aos-duration="1500" className='lg:w-1/2 w-full h-fit flex flex-col items-center px-5'>
          <h1 className='md:text-5xl text-3xl text-center font-bold p-2 bg-orange-500 rounded-tl-lg rounded-br-lg mb-2'>
            <Typed className='text-white font-bold' strings={['Cloud Hosting', 'Server', 'Domain']} typeSpeed={50} loop />
          </h1>
          <span className='text-center md:text-5xl text-3xl font-bold'>Untuk Keperluan Perusahaan Anda</span>

          <div className='my-5 text-center font-bold text-base'>
            Qwords menawarkan layanan yang cepat, aman, dan dukungan 24 jam untuk memenuhi kebutuhan hosting Anda. Tersertifikasi ISO 27001 dengan Data Center Tier 3.
          </div>

          {/* certificate logo box */}
          <div className='flex gap-3 mt-2 justify-evenly items-center mb-3'>
            <img className='animate__animated animate__bounce animate__repeat-2 h-[60px]' src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/icann-logo.webp" alt="" />
            <img className='animate__animated animate__bounce animate__repeat-2 h-[60px]' src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/logobsi-black.webp" alt="" />
            <img className='animate__animated animate__bounce animate__repeat-2 h-[60px]' src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/logoaccreditedpandi.webp" alt="" />
          </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="1500" className='lg:w-1/2 w-full h-fit flex justify-center'>
          <Carousel transition={{ duration: 2 }} autoplay={true} autoplayDelay={5000} loop={true} className="rounded-xl">
           <div className='bg-orange-300 h-[300px] rounded-tl-lg rounded-bl-lg shadow-lg flex items-center justify-between my-20 gap-5 px-5'>
           {/* image-carousel-1 */}
            <img className='w-1/2' src="https://www.qwords.com/wp-content/themes/qwords/assets/images/illustrations/bw.webp" alt="" />
            {/* box title and description carousel 1 */}
            <div className='w-1/2'>
              <h1 className='font-bold md:text-3xl'><span className='text-orange-500'>Bikin Website Impian</span> Dengan Mudah Disini Hanya 1 Jutaan</h1>
              <button className='bg-blue-900 p-2 md:text-base text-sm rounded-full my-2 text-white font-bold'>
                Lihat Selengkapnya
              </button>
            </div>
           </div>

           <div className='bg-orange-300 h-[300px] rounded-tr-lg rounded-br-lg shadow-lg flex items-center justify-between my-20 gap-5 px-5'>
           {/* image-carousel-2 */}
            <img className='w-1/2' src="https://www.qwords.com/wp-content/themes/qwords/assets/images/illustrations/guarantee.webp" alt="" />
            {/* box title and description carousel 2 */}
            <div className='w-1/2'>
              <h1 className='font-bold md:text-3xl'>Garansi 30 Hari <span className='text-orange-500'>Uang Kembali</span> </h1>
              <p className='text-sm md:text-base'>Untuk menjaga kepuasan pelanggan, kami memberikan garansi uang kembali yang berlaku hingga 30 hari setelah hosting aktif.</p>
            </div>
           </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

import { Carousel } from 'flowbite-react'
import React from 'react'
import TestimonyCarousel from '../Components/TestimonyCarousel'
import TitleDescription from '../Components/TitleDescription'

export default function Testimony() {
  const testimony = [
    { highlightTestimony: 'Semoga Qwords dapat terus bertahan, sehingga kami dan masyarakat Indonesia bisa mendapatkan layanan yang terbaik dari Qwords.', detailTestimony: 'Kami, ID Cert, merupakan sebuah perusahaan yang bergerak dalam bidang penyedia jasa informasi keamanan di Indonesia. Oleh karena itu, kami membutuhkan Qwords untuk mendukung kebutuhan kami terhadap server dan hosting yang selalu up selama 24 jam.', name: 'Budi Raharjo', position: 'Founder ID Cert', linkYoutube: 'https://www.youtube.com/watch?v=q2bJogin3eE&feature=youtu.be', image: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/testi1.webp' },
    { highlightTestimony: 'Pelayanan Qwords sangat cepat dan responsif, sehingga tidak butuh waktu lama untuk membantu website kami kembali normal. Terbaik pokoknya, mah!', detailTestimony: 'Sebagai media penyedia kabar seputar kota Bandung, Info BDG menggunakan website sebagai rumah informasi. Website kami yang sempat down kini menunjukkan traffic yang tinggi setelah menggunakan dukungan dari Qwords.', name: 'Kuns Kurniawan', position: 'PR Event Info BDG', linkYoutube: 'https://www.youtube.com/watch?v=f15zt4C2e4A&feature=youtu.be', image: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/testi2.webp' },
    { highlightTestimony: 'Hingga saat ini pula, kami tidak pernah menemukan masalah yang berarti dari layanan yang diberikan Qwords. Layanan Customer Service yang sangat baik, membuat kami tidak ingin berpindah dari Qwords.', detailTestimony: 'Penjualan Rumah Kopi Temanggung 90% dilakukan secara online, salah satunya menggunakan website. Semenjak tahun 2015 hingga saat ini, kami menggunakan hosting dan domain dari Qwords.', name: 'Denden Sofiudin', position: 'Owner Rumah Kopi temanggung', linkYoutube: 'https://www.youtube.com/watch?v=ftJMF63RznM&feature=youtu.be', image: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/testi3.webp' },
  ]
  return (
    <div className="h-fit py-5 rounded-lg">
      <TitleDescription title='Apa Kata Mereka?' description='Apa kata mereka yang sudah menggunakan layanan web hosting Indonesia dari Qwords? Simak pengalaman mereka yang telah membuktikan sendiri fitur dari layanan kami.' />
      <div className="relative h-fit bg-orange-300 py-5 mx-6 rounded-lg">
        {/* rectangle decoration top left */}
        <div data-aos="zoom-in-down" className='hidden md:inline absolute rounded-lg bg-yellow-500 w-[80px] h-[36px]  top-16 right-12'></div>
        <div data-aos="zoom-in-down" className='hidden md:inline absolute rounded-lg bg-yellow-400 w-[40px] h-[36px]  top-8 right-8'></div>

        {/* star decorate top right */}
        <div data-aos="zoom-in-down" className='hidden md:inline absolute rounded-lg bg-orange-500 w-[36px] h-[36px] top-8 left-8'></div>
        <div data-aos="zoom-in-down" className='hidden md:inline absolute rounded-lg bg-orange-500 w-[36px] h-[36px]  top-8 left-8'></div>

        {/* circle decoration bottom left*/}
        <div data-aos="zoom-in-up" className='hidden md:inline absolute rounded-full bg-yellow-400 w-[36px] h-[36px] bottom-5 left-10'></div>
        <div data-aos="zoom-in-up" className='hidden md:inline absolute rounded-full bg-orange-500 w-[50px] h-[50px] bottom-10 left-20'></div>
        <div data-aos="zoom-in-up" className='hidden md:inline absolute rounded-full bg-white opacity-50 w-[40px] h-[40px] bottom-16 left-10'></div>

        {/* rectangle decoration bottom right */}
        <div data-aos="zoom-in-up" className='hidden md:inline absolute rounded-full bg-white opacity-40 w-[120px] h-[36px] bottom-28 right-10'></div>
        <div data-aos="zoom-in-up" className='hidden md:inline absolute rounded-full bg-white opacity-40 w-[80px] h-[36px] bottom-16 right-10'></div>
        <div data-aos="zoom-in-up" className='hidden md:inline absolute rounded-full bg-white opacity-40 w-[40px] h-[36px] bottom-5 right-10'></div>

        <Carousel slideInterval={5000} className="">
          {/* testimoni box */}
          {testimony.map((testimonyData) => (
            <TestimonyCarousel key={testimonyData.highlightTestimony} testimonyData={testimonyData} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

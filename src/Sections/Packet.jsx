import React from 'react'
import PacketCard from '../Components/PacketCard'
import TitleDescription from '../Components/TitleDescription'

export default function Packet() {
  const packet = [
    { title: 'Perusahaan', description: 'Wujudkan website perusahaan profesional dan berkelas dengan dukungan web hosting terbaik dan fitur keamanan ekstra.', img: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/company.webp' },
    { title: 'UMKM dan Toko Online', description: 'Memberikan hosting terbaik untuk mendukung kebutuhan website pemasaran barang/jasa secara online.', img: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/umkm.webp' },
    { title: 'Organisasi dan Komunitas', description: 'Bikin website organisasi atau komunitas Anda dengan paket hosting unggulan yang ramah kantong', img: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/orgs.webp' },
    { title: 'Sekolah', description: 'Infrastruktur web hosting terbaik untuk menunjang kegiatan e-learning. Didukung platform MOODLE khusus pembelajaran daring', img: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/school.webp' },
    { title: 'Developer', description: 'Tersedia paket hosting Indonesia dengan spesifikasi khusus yang dev-friendly. Ekstra NodeJS dan Git Version Control', img: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/dev.webp' },
    { title: 'Blogger dan Personal', description: 'Memfasilitasi blogger dengan infrastruktur hosting Indonesia terbaik serta template website premium untuk tampil lebih profesional', img: 'https://qwords.com/v2/wp-content/themes/qwords/assets/images/photos/blog.webp' }
  ]
  return (
    <section className='w-full h-fit px-3 '>
      {/* title and description */}
      <TitleDescription title={'Solusi Paket Hosting Terbaik dari Kami'} description={'Kami menawarkan solusi paket hosting terbaik untuk segala kebutuhan website dan sistem Anda. Mulai dari blog hingga website bisnis dan perusahaan'}/>

      {/* packet cards */}
      <div  className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-10 gap-3 gap-y-3'>
        {packet.map((packet) => (
          <PacketCard key={packet.title} packetData={packet} />
        ))}
      </div>
    </section>
  )
}

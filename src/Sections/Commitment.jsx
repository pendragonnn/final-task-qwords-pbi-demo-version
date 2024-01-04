import CommitmentAccordion from '../Components/CommitmentAccordion'
import TitleDescription from '../Components/TitleDescription'

export default function Commitment() {
  const commitmentData = [
    { title: 'Layanan 24/7', description: 'Tim Technical Support dan Customer Service Qwords siap membantu Anda selama 24 jam, 7 hari. Anda dapat menghubungi melalui Live chat, Call Center, dan Support Ticket.', logo: 'https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/call.webp'},
    { title: 'Panduan Manual Lengkap', description: 'Qwords dilengkapi dengan halaman knowledge base berisi tutorial dan tips seputar pengelolaan website dan hosting. Dapat diakses dengan mudah dan solutif.', logo: 'https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/book.webp' },
    { title: 'Up time 99.99%', description: 'Uptime Network & Server di atas 99. 99% dengan konfigurasi server yang tepat. Didukung manajemen jaringan dan multiple upstream tier 1 provider network serta multiple peering.', logo: 'https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/router.webp' },
    { title: 'Jaminan Keamanan', description: 'Keamanan menjadi fokus utama kami di Qwords. Tindakan pemantauan dan pencegahan yang berstandar & berkelanjutan telah menjadi perhatian utama kami.', logo: 'https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/guard.webp' },
    { title: 'Clustered DNS', description: 'DNS Server Cloud Hosting Qwords terhubung satu dengan yang lainnya. Hal ini membuat DNS Server akan selalu dapat di akses karena saling membackup antar server.', logo: 'https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/networkAlt.webp' },
    { title: 'High Enterprise Server', description: 'Standar server Qwords adalah server kelas enterprise Dual Xeon Octa Core yang merupakan hardware kelas terbaik. Hardware ini biasa digunakan oleh perusahaan terkemuka.', logo: 'https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/diamond.webp' },
    { title: 'Tier 1 Network', description: 'Tier 1 Network merupakan jaringan dunia tanpa transit network, yang membuat jaringan lebih cepat serta jalur routing yang lebih pendek dan ketersediaan backup network.', logo: 'https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/router.webp' },
    { title: 'Peering Network', description: 'Jaringan di Qwords terhubung langsung ke public peering seperti OpenIXP dan CDIX yang membuat latency atau waktu tunggu pengiriman data semakin kecil.', logo: 'https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/new-icon/network.webp' },
  ]

  const commitmentDataFirst = commitmentData.slice(0, 4)
  const commitmentDataSecond = commitmentData.slice(4, 8)
  return (
    <section>
      {/* title and description */}
      <TitleDescription title='Komitmen Qwords' description='Berbagai alasan mengapa pelanggan memilih sewa hosting di Qwords' />

      {/* accordion commitment */}
      <div className='grid md:grid-cols-2 grid-cols-1 px-5 lg:gap-3'>
        <div>
          {commitmentDataFirst.map((commitment) => (
            <CommitmentAccordion key={commitment.title} commitmentData={commitment} />
          ))}
        </div>
        <div>
          {commitmentDataSecond.map((commitment) => (
            <CommitmentAccordion key={commitment.title} commitmentData={commitment} />
          ))}
        </div>

      </div>
    </section>
  )
}

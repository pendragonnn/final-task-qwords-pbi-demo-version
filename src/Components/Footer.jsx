import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full h-fit bg-gray-700 p-10'>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
        {/* col-1 */}
        <div className='flex flex-col text-white gap-3 px-1'>
          <img className='w-1/2 md:w-3/4 lg:w-5/12' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-dark.webp" alt="" />
          <h1 className='title-footer'>PT Qwords Company International</h1>
          <p>Cloud Web Hosting Indonesia. Domain & hosting terbaik dengan akses cepat yang didukung layanan support 24/7</p>
          <img className='w-1/2 md:w-3/4 lg:w-5/12' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/bsi.webp" alt="" />
          <h1 className='title-footer'>Customer Care</h1>
          <ul className='flex flex-col gap-2 '>
            <li><a href="">Pembayaran</a></li>
            <li><a href="">Faktur Pajak</a></li>
            <li><a href="">Bantuan 24 jam</a></li>
            <li><a href="">Qwords Rewards</a></li>
            <li><a href="">Knowledge Base</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Kontak</a></li>
          </ul>
        </div>

        {/* cols-2 */}
        <div className='flex flex-col text-white gap-3 px-1'>
          <h1 className='title-footer'>Mengenal Kami</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Corporate Website</a></li>
            <li><a href="">Qwords History</a></li>
            <li><a href="">Qwords Differences</a></li>
            <li><a href="">Media Publication</a></li>
            <li><a href="">Network & Infrastructure</a></li>
            <li><a href="">Partner</a></li>
            <li><a href="">Career & Employment</a></li>
          </ul>
          <h1 className='title-footer'>MSA/SLA/AUP</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Master Service Agreement</a></li>
            <li><a href="">Refund Policy</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Product Life Cycle Policy</a></li>
            <li><a href="">Penggunaan Merek dan Logo</a></li>
            <li><a href="">Migrasi Ke Qwords</a></li>
          </ul>
        </div>

        {/* col-3 */}
        <div className='flex flex-col text-white gap-3 px-1'>
          <h1 className='title-footer'>Layanan Lainnya</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Extended Support</a></li>
            <li><a href="">Manage The Box Server</a></li>
            <li><a href="">Flexi Main Domain</a></li>
            <li><a href="">FTP Backup</a></li>
            <li><a href="">Offline Backup</a></li>
            <li><a href="">Hosting Insurance</a></li>
            <li><a href="">Software Lisence</a></li>
            <li><a href="">Digital Signature</a></li>
          </ul>

          <h1 className='title-footer'>Layanan Reseller</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Afiliasi</a></li>
            <li><a href="">Qwords VIP Partner</a></li>
            <li><a href="">Private Label Hosting Reseller</a></li>
            <li><a href="">Private Label Domain Reseller</a></li>
          </ul>

          <h1 className='title-footer'>Free Tools</h1>
          <ul className='flex flex-col gap-2'>
            <li><a href="">Qwords Link-Q</a></li>
            <li><a href="">WhatsApp Link Generator</a></li>
            <li><a href="">Network Tools</a></li>
          </ul>
        </div>

        {/* col-4 */}
        <div className='flex flex-col text-white gap-3'>
          {/* address box */}
          <ul>
            <li className='flex flex-col gap-1'>
              <h1 className='title-footer'>Kantor Surabaya</h1>
              <p>Gedung Bursa Efek Indonesia Lt.10, Jl. Taman AIS Nasution No.21, Surabaya 60271 - Indonesia 031 30008800</p>
            </li>
            <li className='flex flex-col gap-1'>
              <h1 className='title-footer'>Kantor Yogyakarta</h1>
              <p>Jl. Blotan no. 18 Kayen Wedomartani, Ngemplak, Sleman, Yogyakarta 55584 - Indonesia 0274 6058800</p>
            </li>
            <li className='flex flex-col gap-1'>
              <h1 className='title-footer'>Kantor Jakarta</h1>
              <p>Gedung Cyber 1 Lantai 3, Jl.Kuningan Barat no.8, Jakarta 12710 - Indonesia 021 39708800</p>
            </li>
            <li className='flex flex-col gap-1'>
              <h1 className='title-footer'>Kantor Bandung</h1>
              <p>Jl. Terusan Setra Indah I No.19, Sukagalih, Sukajadi, Bandung 40163 - Indonesia 022 30508800</p>
            </li>
          </ul>
        </div>
      </div>

      {/* partner logo box*/}
      <div className='px-1 my-10 flex flex-col gap-3 items-center'>
        <h1 className='title-footer'>Terdaftar di PSE, ICANN dan Partner Lainnya</h1>
        <div className='w-1/2 flex flex-row gap-2 justify-center my-2'>
          <img className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/code.webp" alt="" />
          <img className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/icann-logo.webp" alt="" />
          <img className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_litespeed.svg" alt="" />
          <img className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_whmadmin.svg" alt="" />
          <img  className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-tech.webp" alt="" />
          <img  className='h-[50px] md:h-[72px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-sales.webp" alt="" />
        </div>
      </div>

      {/* socmed and copyright box */}
      <div className='flex flex-col items-center gap-3 p-2'>
        {/* socmed logo box */}
        <div className='flex gap-2 items-center'>
          <img className='md:h-[36px] h-[30px] bg-orange-500 rounded-full p-1' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Facebook.webp" alt="" />
          <img className='md:h-[36px] h-[30px] bg-orange-500 rounded-full p-1'  src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Instagram.webp" alt="" />
          <img className='md:h-[36px] h-[30px] bg-orange-500 rounded-full p-1' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Twitter.webp" alt="" />
          <img className='md:h-[36px] h-[30px] bg-orange-500 rounded-full p-1' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Youtube.webp" alt="" />
        </div>
        <p className='text-white text-center'>Copyright &#169; PT.Qwords Company International</p>
      </div>
    </footer>
  )
}

import React, { useState } from 'react'
import { Dropdown } from 'flowbite-react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const onMenuClickHandle = () => {
    setIsMenuActive(!isMenuActive)
  }

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const cloudHostingData = [
    { title: 'Cloud Hosting Lite', description: 'Berbasis DirectAdmin dengan penyimpnan lega', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Value%20Cloud%20Hsting.webp' },
    { title: 'Cloud Hosting Pro', description: 'Berbasis cPanel, cocok untuk perusahaan, e-commerce, dan startup', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/High%20Performance%20Bisnis.webp' },
    { title: 'Cloud Hosting Enterprise', description: 'Hosting performa tinggi dengan dedicated resource', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/High%20Peformance%20Enterprise.webp' },
    { title: 'Cloud Hosting WP', description: 'Hosting untuk WordPress performa cepat & gratis Elementor Pro', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Wordpress%20Hosting.webp' },
    { title: 'Unlimited Hosting', description: 'Hosting dengan Unlimited resource yang dapat diandalkan', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Unlimited%20Hosting.webp' },
    { title: 'Private Label cPanel Reseller', description: 'Bergabung dan mulai bisnis Sukses bersama Qwords', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Private%20Label%20cPanel%20Reseller.webp' },
    { title: 'Flex WP', description: 'WordPress Hosting super murah, bebas add-on CPU & RAM', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Wordpress%20Hosting.webp' },
  ]

  const serverData = [
    { title: 'Cloud VPS KVM SSD', description: 'KVM Ultrafast dengan Easy Install & OS terbaru', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Cloud%20VPS%20KVM%20SSD.webp' },
    { title: 'Dedicated Server', description: 'Multiple Internet Connection up to 10Gbps, Monitoring 24/7', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Dedicated%20Server.webp' },
    { title: 'Leased To Owned Server', description: 'Sekarang sewa, Nanti jadi hak milik Anda!', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Leased%20To%20Owned.webp' },
    { title: 'Server sekolah CBT/Moodle', description: 'Untuk kebutuhan e-learning, ujian sekolah, dsb', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Server%20Sekolah.webp' },
    { title: 'Colocation Server', description: '99% Uptime Server, UPS Backup, On-Site & Offsite Monitoring', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Colocation%20Server.webp' },
    { title: 'Flesksibel VPS', description: 'KVM Pay as you growth! Mulai dari Rp 200/jam', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Fleksibel%20VPS.webp' },
  ]

  const domainData = [
    { title: 'Daftar/Transfer Domain', description: 'Domain terbaik untuk identitas website Anda', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar%20Domain.webp' },
    { title: 'Domain Backorder', description: 'Dapatkan Domain berkualitas yang tidak diperbarui pemiliknya', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Domain%20Backorder.webp' },
    { title: 'Sewa Domain', description: 'Dapatkan Domain Premium tanpa bayar biaya penuh', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Sewa%20Domain.webp' },
    { title: 'Domain Negotiatior/Broker', description: 'Broker negosiasikan harga terbaik untuk Domain impian Anda', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Domain%20Negotiator.webp' },
    { title: 'Domain Premium .id', description: 'Domain premium berkualitas untuk website Anda', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Domain%20Premium.webp' },
    { title: 'Domain Privacy Protection', description: 'Lindungi data pribadi & rahasia Anda dari publik', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Domain%20Privacy.webp' },
    { title: 'Jual Beli & Lelang Domain', description: 'Untung berlipat dari Domain cantik dengan sistem lelang', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Jual-beli%20Domain.webp' },
    { title: 'Private Label Domain Reseller', description: 'Paket Reseller Domain dengan harga yang bersaing', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Private%20Label%20Domain.webp' },
  ]

  const emailSuiteData = [
    { title: 'Titan Email', description: 'Bisnis tampil profesional dengan email domain khusus dari Titan', icon: 'https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/titanemail-icon.webp' },
    { title: 'Microsoft 365', description: 'Untuk meningkatkan produktivitas kerja perusahaan Anda', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/office365.webp' },
    { title: 'Mailtogo', description: 'Marketing online lebih mudah dijalankan melalui MailToGo', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/Mailtogo.webp' },
    { title: 'EC Collaboration Suite', description: 'Email premium dengan Kapasitas 25GB hingga 1000 akun', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/EC%20Suite.webp' },
    { title: 'Google Workspace', description: 'Layanan Premium dari Google dengan Nama Domain Anda', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/google-workspace.webp' },
  ]

  const serviceData = [
    { title: 'SSL', description: 'Amankan komunikasi data anda', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/SSL.webp' },
    { title: 'Extended Support', description: 'Bantuan ekstra untuk akun Hosting Cpanel', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Extend%20Support.webp' },
    { title: 'Offline Backup', description: 'Backup offline dari server anda', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Offline%20Backup.webp' },
    { title: 'Hosting Insurance', description: 'Asuransi downtime untuk Hosting', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Hosting%20Insurance.webp' },
    { title: 'Jual/Beli Backlink', description: 'Jasa jual/beli backlink aman & berkualitas', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Link-Q.webp' },
    { title: 'Manage The Box Server', description: 'Manage Service untuk mengatur Server Anda', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Box%20Server.webp' },
    { title: 'Advanced Backup', description: 'Advanced Backup berbasis Acronis', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Advance%20Backup.webp' },
    { title: 'Licenses', description: 'Lisensi software bagi bisnis anda', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/License.webp' },
  ]

  const internetAccessData = [
    { title: 'Broadband Home', description: 'Internet untuk kebutuhan rumah dengan koneksi stabil tanpa buffering hingga 1Gbps. Kuota Unlimited', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/internet%20access/Broadband%20Home.webp' },
    { title: 'Broadband Wireless', description: 'Internet dengan teknologi wireless super cepat, bebas FUP untuk kebutuhan rumah & bisnis', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/internet%20access/Broadband%20Wireless.webp' },
    { title: 'Broadband Business', description: 'Jalankan bisnis bisa lebih fokus dengan jaringan internet cepat, koneksi stabil, dan aman', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/internet%20access/Broadband%20Business.webp' },
    { title: 'Check Coverage', description: 'Mau pasang internet? Cek apakah rumah Anda tercover Internet Qwords?', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/internet%20access/Check%20Coverage.webp' },
  ]

  const customerCareData = [
    { title: 'Pembayaran', description: 'Informasi lengkap seputar cara bayar, konfirmasi bayar dan faktur pajak', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Pembayaran.webp' },
    { title: 'Knowledge Base', description: 'Panduan yang lengkap informasi mengenai Hosting, website, dll', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Knowledge%20Base.webp' },
    { title: 'Blog', description: 'Temukan tips & artikel menarik seputar Hosting, Domain, website, dan internet di sini', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Blog.webp' },
    { title: 'Bantuan 24 Jam', description: 'Tim Support kami akan membantu menyelesaikan masalah secara solutif & respon cepat, 24/7', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Bantuan.webp' },
    { title: 'FAQ', description: 'Temukan jawaban dari pertanyaan yang paling sering diajukan di sini', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Kontak.webp' },
    { title: 'Kontak', description: 'Butuh informasi lebih lanjut? Kunjungi outlet kami atau hubungi melalui call center, live chat, dan media sosial', icon: 'https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/FAQ%202.webp' },
  ]

  return (
    <nav className='py-2 w-full sticky z-50 bg-white top-0 shadow-sm'>
      <div className="mx-4 flex items-center lg:justify-around justify-between">
        <img src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/logo-qw-light.webp" className='w-40 p-2 lg:w-28 ' alt="logo-qw-light" border="0" />
        {isMenuActive ? (
          <button className='p-2 lg:hidden' onClick={onMenuClickHandle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-8 md:w-12 md:h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        ) : (
          <button className='p-2 lg:hidden' onClick={onMenuClickHandle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-8 md:w-12 md:h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        )
        }

        <div className='hidden lg:flex mr-2 w-100 gap-5'>
          {/* for large screen */}
          <ul className='flex gap-2 text-orange-500 text-center text-base font-bold items-center'>
            {/* cloud hosting dropdown */}
            <li>
              <Dropdown label="Cloud Hosting" inline className='border rounded-lg border-dashed border-orange-500 shadow-xl w-[800px]'>
                <div className='grid grid-cols-2 h-fit w-full p-3'>
                  {cloudHostingData.map((dropdownData) => (
                    <Dropdown.Item className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                      <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                        {/* image */}
                        <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                        {/* title and description */}
                        <div className='text-start'>
                          <h1 className='font-bold text-base'>{dropdownData.title}</h1>
                          <p className='text-base font-normal'>{dropdownData.description}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </li>

            {/* server dropdown */}
            <li>
              <Dropdown label="Server" inline className='border rounded-lg border-dashed border-orange-500 shadow-xl w-[800px]'>
                <div className='grid grid-cols-2 h-fit w-full p-3'>
                  {serverData.map((dropdownData) => (
                    <Dropdown.Item className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                      <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                        {/* image */}
                        <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                        {/* title and description */}
                        <div className='text-start'>
                          <h1 className='font-bold text-base'>{dropdownData.title}</h1>
                          <p className='text-base font-normal'>{dropdownData.description}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </li>

            {/* email suite dropdown */}
            <li>
              <Dropdown label="Email Suite" inline className='border rounded-lg border-dashed border-orange-500 shadow-xl w-[800px]'>
                <div className='grid grid-cols-2 h-fit w-full p-3'>
                  {emailSuiteData.map((dropdownData) => (
                    <Dropdown.Item className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                      <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                        {/* image */}
                        <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                        {/* title and description */}
                        <div className='text-start'>
                          <h1 className='font-bold text-base'>{dropdownData.title}</h1>
                          <p className='text-base font-normal'>{dropdownData.description}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </li>

            {/* domain dropdown */}
            <li>
              <Dropdown label="Domain" inline className='border rounded-lg border-dashed border-orange-500 shadow-xl w-[800px]'>
                <div className='grid grid-cols-2 h-fit w-full p-3'>
                  {domainData.map((dropdownData) => (
                    <Dropdown.Item className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                      <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                        {/* image */}
                        <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                        {/* title and description */}
                        <div className='text-start'>
                          <h1 className='font-bold text-base'>{dropdownData.title}</h1>
                          <p className='text-base font-normal'>{dropdownData.description}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </li>

            {/* services dropdown */}
            <li>
              <Dropdown label="Services" inline className='border rounded-lg border-dashed border-orange-500 shadow-xl w-[800px]'>
                <div className='grid grid-cols-2 h-fit w-full p-3'>
                  {serviceData.map((dropdownData) => (
                    <Dropdown.Item className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                      <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                        {/* image */}
                        <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                        {/* title and description */}
                        <div className='text-start'>
                          <h1 className='font-bold text-base'>{dropdownData.title}</h1>
                          <p className='text-base font-normal'>{dropdownData.description}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </li>

            {/* internet access dropdown */}
            <li>
              <Dropdown label="Internet Access" inline className='border rounded-lg border-dashed border-orange-500 shadow-xl w-[800px]'>
                <div className='grid grid-cols-2 h-fit w-full p-3'>
                  {internetAccessData.map((dropdownData) => (
                    <Dropdown.Item className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                      <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                        {/* image */}
                        <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                        {/* title and description */}
                        <div className='text-start'>
                          <h1 className='font-bold text-base'>{dropdownData.title}</h1>
                          <p className='text-base font-normal'>{dropdownData.description}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </li>

            {/* customer care dropdown */}
            <li>
              <Dropdown label="Customer Care" inline className='border rounded-lg border-dashed border-orange-500 shadow-xl w-[800px]'>
                <div className='grid grid-cols-2 h-fit w-full p-3'>
                  {customerCareData.map((dropdownData) => (
                    <Dropdown.Item className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                      <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                        {/* image */}
                        <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                        {/* title and description */}
                        <div className='text-start'>
                          <h1 className='font-bold text-base'>{dropdownData.title}</h1>
                          <p className='text-base font-normal'>{dropdownData.description}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              </Dropdown>
            </li>

            <li>
              <a href="" className='flex items-center gap-1'>
                <div className='animate__animated animate__tada animate__infinite'>🎁</div>Promo
              </a>
            </li>
          </ul>

          {/* button box */}
          <div className='flex gap-2'>
            <button className='p-2 border border-orange-500 w-fit rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-bold text-base hover:border hover:border-orange-500 '>Log in</button>
            <button className='p-2 border border-orange-500 w-fit rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-bold text-base hover:border hover:border-orange-500 '>Register</button>
          </div>
        </div>


        {/* mobile mode */}
        {isMenuActive && (
          <div className='absolute lg:hidden bg-white rounded-xl w-fit top-20 right-0 p-4  h-[575px] overflow-x-auto'>
            <ul className='flex flex-col gap-2 md:text-3xl'>
              {/* Cloud Hosting */}
              <li>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(1)} className="text-black">Cloud Hosting</AccordionHeader>
                  <AccordionBody>
                    <div className='grid grid-cols-1 h-fit w-full p-3'>
                      {cloudHostingData.map((dropdownData) => (
                        <div className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                          <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                            {/* image */}
                            <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                            {/* title and description */}
                            <div className='text-start'>
                              <h1 className='font-bold text-xl'>{dropdownData.title}</h1>
                              <p className='text-base font-normal'>{dropdownData.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionBody>
                </Accordion>
              </li>

              {/* Server */}
              <li>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)} className='text-black'>Server</AccordionHeader>
                  <AccordionBody>
                    <div className='grid grid-cols-1 h-fit w-full p-3'>
                      {serverData.map((dropdownData) => (
                        <div className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                          <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                            {/* image */}
                            <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                            {/* title and description */}
                            <div className='text-start'>
                              <h1 className='font-bold text-xl'>{dropdownData.title}</h1>
                              <p className='text-base font-normal'>{dropdownData.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionBody>
                </Accordion>
              </li>

              {/* Domain */}
              <li>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)} className='text-black'>Domain</AccordionHeader>
                  <AccordionBody>
                    <div className='grid grid-cols-1 h-fit w-full p-3'>
                      {domainData.map((dropdownData) => (
                        <div className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                          <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                            {/* image */}
                            <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                            {/* title and description */}
                            <div className='text-start'>
                              <h1 className='font-bold text-xl'>{dropdownData.title}</h1>
                              <p className='text-base font-normal'>{dropdownData.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionBody>
                </Accordion>
              </li>

              {/* Email Suite */}
              <li>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)} className='text-black'>Email Suite</AccordionHeader>
                  <AccordionBody>
                    <div className='grid grid-cols-1 h-fit w-full p-3'>
                      {emailSuiteData.map((dropdownData) => (
                        <div className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                          <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                            {/* image */}
                            <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                            {/* title and description */}
                            <div className='text-start'>
                              <h1 className='font-bold text-xl'>{dropdownData.title}</h1>
                              <p className='text-base font-normal'>{dropdownData.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionBody>
                </Accordion>
              </li>

              {/* Services */}
              <li>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)} className='text-black'>Services</AccordionHeader>
                  <AccordionBody>
                    <div className='grid grid-cols-1 h-fit w-full p-3'>
                      {serviceData.map((dropdownData) => (
                        <div className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                          <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                            {/* image */}
                            <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                            {/* title and description */}
                            <div className='text-start'>
                              <h1 className='font-bold text-xl'>{dropdownData.title}</h1>
                              <p className='text-base font-normal'>{dropdownData.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionBody>
                </Accordion>
              </li>

              {/* Internet Access */}
              <li>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)} className='text-black'>Internet Access</AccordionHeader>
                  <AccordionBody>
                    <div className='grid grid-cols-1 h-fit w-full p-3'>
                      {internetAccessData.map((dropdownData) => (
                        <div className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                          <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                            {/* image */}
                            <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                            {/* title and description */}
                            <div className='text-start'>
                              <h1 className='font-bold text-xl'>{dropdownData.title}</h1>
                              <p className='text-base font-normal'>{dropdownData.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionBody>
                </Accordion>
              </li>

              {/* Customer Care */}
              <li>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)} className='text-black'>Customer Care</AccordionHeader>
                  <AccordionBody>
                    <div className='grid grid-cols-1 h-fit w-full p-3'>
                      {customerCareData.map((dropdownData) => (
                        <div className='hover:text-orange-500 rounded-lg' key={dropdownData.title}>
                          <div className='flex items-center gap-3 rounded-lg  p-2 w-full'>
                            {/* image */}
                            <img className='h-[50px] w-[50px] border border-opacity-50 border-dashed rounded p-1' src={dropdownData.icon} alt="" />
                            {/* title and description */}
                            <div className='text-start'>
                              <h1 className='font-bold text-xl'>{dropdownData.title}</h1>
                              <p className='text-base font-normal'>{dropdownData.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionBody>
                </Accordion>
              </li>

              <li className='flex justify-center items-center gap-2 mt-2'>
                <a href="" className='text-xl flex items-center gap-1 font-bold'>
                  <div className='animate__animated animate__tada animate__infinite'>🎁</div>Promo
                </a>
                <button className='p-2 w-fit border border-orange-500 rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-bold text-base hover:border hover:border-orange-500'>Log in</button>
                <button className='p-2 w-fit border border-orange-500 rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-bold text-base hover:border hover:border-orange-500'>Register</button>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

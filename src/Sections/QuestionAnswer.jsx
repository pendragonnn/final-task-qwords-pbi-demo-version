import React from 'react'
import QuestionAnswerAccordion from '../Components/QuestionAnswerAccordion'

export default function QuestionAnswer() {
  const questionAnswerData = [
    { question: "Apa itu web hosting?", answer: "Hosting adalah tempat penyimpanan file dan data website seperti teks, video dan gambar website. File dan data tersebut di simpan di dalam server yang terkoneksi dengan internet sehingga data tersebut dapat diakses oleh siapa saja, kapan saja dan di mana saja. Penjelasan lebih lanjut dapat Anda baca pada artikel ini: https://qwords.com/blog/apa-itu-hosting" },
    { question: "Ada beberapa jenis hosting di Qwords?", answer: "Untuk mendukung kesuksesan bisnis di era digital, Qwords menghadirkan beragam paket hosting Indonesia yang bisa dipilih sesuai kebutuhan yaitu Value Performance, High Performance Cloud Hosting Bisnis, High Performance Cloud Hosting Enterprice, WordPress Hosting, dan Unlimited Hosting" },
    { question: "Apa kelebihan dari cloud hosting Qwords?", answer: "Cloud hosting Qwords sudah dipercaya 45,000+ pelanggan dari dalam dan luar negeri. Anda akan mendapatkan jaminan keamanan, Uptime 99.99%, dukungan teknis selama 24 jam, 7 hari melalui Live chat, Call Center, atau Support Ticket dan masih banyak lagi." },
    { question: "Mengapa saya perlu web hosting?", answer: "Tanpa web hosting, Anda tidak bisa membuat website company profile, portal berita, blog pribadi, website toko online, atau jenis website lain yang bisa diakses secara online. Penyedia layanan web hosting seperti Qwords.com membantu memastikan data-data dan file website Anda tetap aman serta responsif ketika diakses oleh pengguna secara online." },
    { question: "Bagaimana cara membeli hosting?", answer: "Kami memiliki panduan cara membeli hosting di Qwords sesuai kebutuhan dengan mudah yang dapat Anda akses selengkapnya pada blog resmi kami (qwords.com/blog). Beli hosting Indonesia di Qwords kini juga semakin mudah dengan adanya berbagai metode pembayaran" },
    { question: "Apakah saya bisa transfer Hosting ke Qwords Cloud Web Hosting Indonesia?", answer: "Ya, Anda bisa melakukan transfer Hosting dari provider lain ke Qwords Cloud Hosting Indonesia. Caranya, silahkan lakukan pemesanan Cloud Hosting baru sesuai paket yang Anda inginkan, kemudian informasikan kebutuhan migrasi pada tim support kami, lalu proses migrasi akan dibantu hingga selesai." },
  ]
  return (
    <section className='px-5 h-fit my-10'>
      {/* title */}
      <div data-aos="fade-right" className='md:w-3/4 w-full flex items-center mx-auto p-2'>
        <h1 className='font-bold md:text-5xl text-3xl p-1 text-center'>Pertanyaan Seputar <span className='text-orange-500'>Layanan Web Hosting</span> Qwords</h1>
      </div>

      {/* question answer accordion */}
      {questionAnswerData.map((questionAnswerData) => (
        <QuestionAnswerAccordion key={questionAnswerData.question} questionAnswerDataDetail={questionAnswerData}/>
      ))}
    </section>
  )
}

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="px-10 py-20 flex flex-col gap-20 lg:gap-40">
    <div className='flex flex-col gap-5'>
      <Slider {...settings}>
        <div className='bg-Slider-1 w-[370px] h-[500px] lg:w-auto lg:h-[547px]'>
            <div className='flex flex-col gap-6 lg:w-[506px] lg:h-[344px] lg:mt-[70px] lg:ml-[102px]'>
            <p className='font-Poppins font-medium text-[48px] leading-[72px] text-white'>Kendali Dalam Satu Genggaman</p>
            <p className='font-Poppins font-normal text-2xl leading-9 text-white'>Sistem solar panel yang menggunakan matahari sebagai satu-satunya sumber energi dengan memanfaatkan baterai</p>
            <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>PESAN SEKARANG</button> 
        </div>
        </div>
        <div className='bg-Slider-2 w-[370px] h-[500px] lg:w-auto lg:h-[547px]'>
            <div className='flex flex-col gap-6 lg:w-[506px] lg:h-[344px] lg:mt-[70px] lg:ml-[102px]'>
            <p className='font-Poppins font-medium text-[48px] leading-[72px] text-white'>Pannel Surya</p>
            <p className='font-Poppins font-normal text-2xl leading-9 text-white'>Sistem solar panel yang menggunakan matahari sebagai satu-satunya sumber energi dengan memanfaatkan baterai</p>
            <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>DAPATKAN PENAWARAN</button> 
        </div>
        </div>
        <div className='bg-Slider-3 w-[370px] h-[500px] lg:w-auto lg:h-[547px]'>
            <div className='flex flex-col gap-6 lg:w-[506px] lg:h-[344px] lg:mt-[70px] lg:ml-[102px]'>
            <p className='font-Poppins font-medium text-[48px] leading-[72px] text-white'>Internet Service</p>
            <p className='font-Poppins font-normal text-2xl leading-9 text-white'>ICONNET Bangkit Bersatu Untuk Indonesia, dengan menjunjung tinggi nilai-nilai Nasionalisme, ICONNET berniat memberikan yang terbaik untuk masyarakat Indonesia</p>
            <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>DAPATKAN PENAWARAN</button> 
        </div>
        </div>
        <div className='bg-Slider-4 w-[370px] h-[500px] lg:w-auto lg:h-[547px]'>
            <div className='flex flex-col gap-6 lg:w-[506px] lg:h-[344px] lg:mt-[70px] lg:ml-[102px]'>
            <p className='font-Poppins font-medium text-[48px] leading-[72px] text-white'>Tentang Kami</p>
            <p className='font-Poppins font-normal text-2xl leading-9 text-white'>Smart Homes offer a better lifestyle by generating clean energy, cut monthly budgets, and give an easy to operate everyday household item.</p>
            <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>HUBUNGI CS SMARTHOMES</button> 
        </div>
        </div>
    </Slider>
    <h1 className='font-Poppins font-medium text-[32px] leading-[48px] text-center mt-[40px] '>ProdukUnggulan</h1>


    <div className='flex flex-col gap-[84px] items-center'>
    <div className='flex flex-col items-center lg:flex-row gap-16'>
         <div className='flex flex-col p-[16px] gap-2 w-[366.67px] h-[396px] bg-white border-solid border-[1px] border-[#EFF1F1] rounded-2xl'>
            <img src='assets/img/image1.png'/>
            <h1 className='font-Poppins font-normal text-xl leading-[30px] text-[#1E1E1E]'>Smart Door Lock</h1>
            <p className='font-Poppins font-normal text-base leading-6 tracking-wide text-[#1E1E1E]'>Smarthome</p>
            <p className='font-Poppins font-normal text-2xl leading-36-px tracking-wide text[#1E1E1E]'>Rp. 3.500.000</p>
            <p className='font-Poppins font-normal text-[10px] tracking-wide line-through text-[#878889]'>Rp. 2.500.000</p>
        <button className='items-center justify-center p-[14px] gap-9 w-[334.67px] h-11 bg-[#FF8A00] rounded-[10px] font-[Poppins] font-medium text-base leading-6 text-white'>Pesan Sekarang</button>
        </div>
        <div className='flex flex-col p-[16px] gap-2 w-[366.67px] h-[396px] bg-white border-solid border-[1px] border-[#EFF1F1] rounded-2xl'>
            <img src='assets/img/image2.png'/>
            <h1 className='font-Poppins font-normal text-xl leading-[30px] text-[#1E1E1E]'>Smart Bulb</h1>
            <p className='font-Poppins font-normal text-base leading-6 tracking-wide text-[#1E1E1E]'>Smarthome</p>
            <p className='font-Poppins font-normal text-2xl leading-36-px tracking-wide text[#1E1E1E]'>Rp. 170.000</p>
            <p className='font-Poppins font-normal text-[10px] tracking-wide line-through text-[#878889]'>Rp. 2.500.000</p>
        <button className='items-center justify-center p-[14px] gap-9 w-[334.67px] h-11 bg-[#FF8A00] rounded-[10px] font-[Poppins] font-medium text-base leading-6 text-white'>Pesan Sekarang</button>
        </div>
        <div className='flex flex-col p-[16px] gap-2 w-[366.67px] h-[396px] bg-white border-solid border-[1px] border-[#EFF1F1] rounded-2xl'>
            <img src='assets/img/image3.png'/>
            <h1 className='font-Poppins font-normal text-xl leading-[30px] text-[#1E1E1E]'>Smart LED</h1>
            <p className='font-Poppins font-normal text-base leading-6 tracking-wide text-[#1E1E1E]'>Smarthome</p>
            <p className='font-Poppins font-normal text-2xl leading-36-px tracking-wide text[#1E1E1E]'>Rp. 108.000</p>
            <p className='font-Poppins font-normal text-[10px] tracking-wide line-through text-[#878889]'>Rp. 2.500.000</p>
        <button className='items-center justify-center p-[14px] gap-9 w-[334.67px] h-11 bg-[#FF8A00] rounded-[10px] font-[Poppins] font-medium text-base leading-6 text-white'>Pesan Sekarang</button>
        </div>
    </div>
        <div className='flex flex-col lg:flex-row gap-16 items-center justify-center'>
        <div className='flex flex-col p-[16px] gap-2 w-[366.67px] h-[396px] bg-white border-solid border-[1px] border-[#EFF1F1] rounded-2xl'>
            <img src='assets/img/image4.png'/>
            <h1 className='font-Poppins font-normal text-xl leading-[30px] text-[#1E1E1E]'>Smart CCTV</h1>
            <p className='font-Poppins font-normal text-base leading-6 tracking-wide text-[#1E1E1E]'>Smarthome</p>
            <p className='font-Poppins font-normal text-2xl leading-36-px tracking-wide text[#1E1E1E]'>Rp. 520.000</p>
            <p className='font-Poppins font-normal text-[10px] tracking-wide line-through text-[#878889]'>Rp. 2.500.000</p>
        <button className='items-center justify-center p-[14px] gap-9 w-[334.67px] h-11 bg-[#FF8A00] rounded-[10px] font-[Poppins] font-medium text-base leading-6 text-white'>Pesan Sekarang</button>
        </div>
        <div className='flex flex-col p-[16px] gap-2 w-[366.67px] h-[396px] bg-white border-solid border-[1px] border-[#EFF1F1] rounded-2xl'>
            <img src='assets/img/image5.png'/>
            <h1 className='font-Poppins font-normal text-xl leading-[30px] text-[#1E1E1E]'>Robot Vacuum</h1>
            <p className='font-Poppins font-normal text-base leading-6 tracking-wide text-[#1E1E1E]'>Smarthome</p>
            <p className='font-Poppins font-normal text-2xl leading-36-px tracking-wide text[#1E1E1E]'>Rp. 2.500.000</p>
            <p className='font-Poppins font-normal text-[10px] tracking-wide line-through text-[#878889]'>Rp. 2.500.000</p>
        <button className='items-center justify-center p-[14px] gap-9 w-[334.67px] h-11 bg-[#FF8A00] rounded-[10px] font-[Poppins] font-medium text-base leading-6 text-white'>Pesan Sekarang</button>
        </div>
    </div> 
</div>

    <div className='bg-image-6  w-fulls lg:h-[547px] mt-[133px]'>
        <div className='flex flex-col gap-6 lg:w-[506] lg:h-[391] left-32 top-[1780px] lg:ml-[100px] lg:mt-[78px]'>
        <p className='font-Poppins font-medium text-[58px] leading-[87px] text-[#1E1E1E]'>Gratis<br/> Pengiriman &<br/> Pemasangan</p>
        <p className='font-Poppins font-light text-[32px] leading-[48px] text-[#616364]'>Area Jabodetabek</p>
        <p className='font-Poppins font-light text-2xl leading-9 text-[#616364]'>*khusus Produk IOT</p>
        </div>
    </div>

    <h1 className='font-Poppins font-medium text-[32px] leading-[48px] text-center mt-[107px] '>Koleksi Lainya</h1>

<div className='flex flex-col lg:flex-row gap-10 lg:ml-[120px] mt-[90px]'>
    <img src='assets/img/image7.png'/>
    <div className='flex flex-col gap-10 lg:mt-[100px]'>
        <p className='font-Poppins font-medium text-[52px] leading-[78px]'>Panel Surya dari PLN</p>
        <p className='font-Poppins font-normal text-2xl leading-9'>Sistem solar panel yang terhubung dengan<br/> jaringan PLN tanpa menggunakan baterai<br/> sebagai cadangan energi (listrik)</p>
        <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>LIHAT PRODUK DETAIL</button>
    </div>
</div>

<div className='flex flex-col-reverse lg:flex-row gap-[48px] lg:ml-[120px] mt-[108px]'>
    <div className='flex flex-col gap-10'>
    <p className='font-Poppins font-medium text-[52px] leading-[78px]'>Internet Broadband<br/> dari Iconnect</p>
        <p className='font-Poppins font-normal text-2xl leading-9'>We hope to help Sustainable Development Goals<br/> No. 7 which is affordable and clean energy with<br/> improving the energy available in Indonesia by<br/> disrupting real estate business with solar power<br/> that generates clean energy.</p>
        <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>LIHAT PRODUK DETAIL</button>
    </div>
    <img src='assets/img/image8.png'/>
</div>

<div className='bg-image-9 w-auto h-[500px] lg:w-auto lg:h-[547px] mt-[247px]'>
    <div className='flex flex-col gap-6 lg:w-[506px] lg:h-[422px] lg:left-[121px] lg:mt-[51px] lg:ml-[120px]'>
        <p className='font-Poppins font-medium text-2xl leading-9 text-[#616364]'>Benefit</p>
        <p className='font-Poppins font-medium text-[58px] leading-[87px] text-[#1E1E1E]'>One Call Technicial</p>
        <p className='font-Poppins font-light text-[32px] leading-[48px] text-[#1E1E1E]'>Ada Problem? Teknisi Kami Langsung Datang</p>
        <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>HUBUNGI CS SMART HOMES</button>
    </div>
</div>

    </div>
</div>
  )
}

export default HomePage

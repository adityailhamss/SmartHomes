import React from 'react';
import Back from '../assets/img/Group 26.png';
import Next from "../assets/img/next.png";
import Image10 from "../assets/img/img10.png";
import Image11 from "../assets/img/img11.png";
import Image12 from "../assets/img/img12.png";

function TentangKami() {
  return (
    <div className='px-10 py-2 flex flex-col gap-10 lg:gap-10 relative w-[1440px] h-auto'>
        <div className='flex flex-row'>
        <div className='pl-32 pr-12 py-2'>
            <button>
            <img src={Back} alt=""/>
            </button>
        </div>
        <div className='flex flex-row align-center gap-1 py-2 w-[187px] h-[21px]'>
            <h1 className='text-sm text-[#878889] font-normal'>Beranda</h1>
            <div className='w-[16px] h-[16px]'>
            <img src={Next} alt=""/>
            </div>
            <p className='text-sm text-[#1E1E1E] font-normal'>Tentang Kami</p>
        </div>
    </div>
    <div className='flex flex-row justify-center'>
            <p className="border border-[#EFF1F1] w-[1441px] h-0"></p>
        </div>
    <div className='bg-image-tk w-[1441px] h-[547px] pt-2'>
        <div className='flex flex-col align-start gap-6 pl-[122px] pt-[105px]'>
            <h1 className='font-Poppins font-medium text-2xl leading-9 text-[#ffffff]'>Tentang Kami</h1>
            <p className='font-Poppins font-light text-2xl leading-[48px] text-[#ffffff] w-[506px] h-[144px]'>Smart Homes offer a better lifestyle by generating clean energy, cut monthly budgets, and give an easy to operate everyday household item.</p>
            <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>HUBUNGI CS SMART HOMES</button>
        </div>
    </div>
    <div className='flex flex-col-reverse lg:flex-row gap-10 mt-[90px] justify-center'>
    <img src={Image10} alt=""/>
    <div className='flex flex-col gap-10 lg:mt-[100px]'>
        <p className='font-Poppins font-medium text-[52px] leading-[78px] text-[#616364]'>Easy Household Lifestyle</p>
        <p className='font-Poppins font-normal text-2xl w-[590px] h-[123px] text-[#616364]'>Helping people to live their life to the fullest at home by providing all in one and easy to reach household supply powered with IOT.</p>
        <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>LIHAT SEMUA PRODUK</button>
    </div>
    </div>
    <div className='flex flex-col lg:flex-row gap-[48px] mt-[108px] justify-center'>
    <div className='flex flex-col gap-10'>
    <p className='font-Poppins font-medium text-[48px] w-[590px] h-[129px] text-[#616364]'>Happy Homes Property Management Integration</p>
        <p className='font-Poppins font-normal text-2xl w-[590px] h-[144px] text-[#616364]'>Guaranteed good quality products and fast technician services to all of our products by doing a partnership with our other product, Happy Homes Property Management System.</p>
        <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>HUBUNGI CS KAMI</button>
    </div>
    <img src={Image11} alt=""/>
    </div>
    <div className='flex flex-col-reverse lg:flex-row gap-10 mt-[90px] justify-center'>
    <img src={Image12} alt=""/>
    <div className='flex flex-col gap-10 lg:mt-[100px]'>
        <p className='font-Poppins font-medium text-[52px] w-[590px] h-[142px] text-[#616364]'>Solar Panel Power Generated</p>
        <p className='font-Poppins font-normal text-2xl w-[590px] h-[72px] text-[#616364]'>save money by exporting electrical energy to PLN to reduce the cost of monthly electric bills.</p>
        <button className='lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>LIHAT SEMUA PRODUK</button>
    </div>
    </div>
    </div>
  )
}

export default TentangKami

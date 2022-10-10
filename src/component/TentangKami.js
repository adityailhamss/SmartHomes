import React from 'react';
import Back from '../assets/img/Group 26.png';
import Next from "../assets/img/next.png";
import Image10 from "../assets/img/img10.png";
import Image11 from "../assets/img/img11.png";
import Image12 from "../assets/img/img12.png";

function TentangKami() {
  return (
    <div className='px-2 lg:px-10 py-2 flex flex-col gap-4 lg:gap-6 relative w-[1440px] h-auto'>
        <div className='flex flex-row pl-3 lg:pl-32'>
        <div>
            <button>
            <img src={Back} alt=""/>
            </button>
        </div>
        <div className='flex flex-row items-center pl-5'>
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
        <div className='flex flex-col'>
            <div className='bg-image-tk w-[370px] h-[500px] lg:w-[1441px] lg:h-[547px] pt-2 ml-1'>
                <div className='flex flex-col items-center lg:items-start gap-6 pl-2 lg:pl-[122px] pt-[105px]'>
                    <h1 className='font-Poppins font-medium text-2xl leading-9 text-[#ffffff]'>Tentang Kami</h1>
                    <p className='font-Poppins font-light text-2xl leading-[48px] text-[#ffffff] w-auto h-auto lg:w-[506px] lg:h-[144px]'>Smart Homes offer a better lifestyle by generating clean energy, cut monthly budgets, and give an easy to operate everyday household item.</p>
                    <button className='w-[300px] h-[50px] lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>HUBUNGI CS SMART HOMES</button>
                </div>
            </div>
        </div>
    
    <div className='flex flex-col lg:flex-row gap-10 justify-center '>
        <div className='mt-[90px] w-[370px] h-[220px] lg:w-[590px] lg:h-[401px]'>
    <img src={Image10} alt=""/>
    </div>
    <div className='flex flex-col gap-10 mt-2 lg:mt-[100px] justify-center'>
        <p className='font-Poppins font-medium text-3xl lg:text-[52px] leading-[78px] text-[#616364]'>Easy Household Lifestyle</p>
        <p className='font-Poppins font-normal text-xl lg:text-2xl w-[380px] h-[100px] lg:w-[590px] lg:h-[123px] text-[#616364]'>Helping people to live their life to the fullest at home by providing all in one and easy to reach household supply powered with IOT.</p>
        <button className='w-[300px] h-[50px] lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>LIHAT SEMUA PRODUK</button>
    </div>
    </div>
    <div className='flex flex-col-reverse lg:flex-row gap-[48px] mt-[108px] justify-center'>
    <div className='flex flex-col gap-10'>
    <p className='font-Poppins font-medium text-3xl lg:text-[48px] w-[380px] h-auto lg:w-[590px] lg:h-[129px] text-[#616364]'>Happy Homes Property Management Integration</p>
        <p className='font-Poppins font-normal text-xl lg:text-2xl w-[380px] h-[130px] lg:w-[590px] lg:h-[144px] text-[#616364]'>Guaranteed good quality products and fast technician services to all of our products by doing a partnership with our other product, Happy Homes Property Management System.</p>
        <button className='w-[300px] h-[50px] lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>HUBUNGI CS KAMI</button>
    </div>
    <div className='w-[370px] h-[220px] lg:w-[590px] lg:h-[409px]'>
    <img src={Image11} alt=""/>
    </div>
    </div>
    <div className='flex flex-col lg:flex-row gap-[48px] mt-[90px] justify-center'>
        <div className='w-[370px] h-[220px] lg:w-[590px] lg:h-[409px]'>
    <img src={Image12} alt=""/>
    </div>
    <div className='flex flex-col gap-10'>
        <p className='font-Poppins font-medium text-3xl lg:text-[52px] w-[380px] h-auto lg:w-[590px] lg:h-[142px] text-[#616364]'>Solar Panel Power Generated</p>
        <p className='font-Poppins font-normal text-xl lg:text-2xl w-[380px] h-[72px] lg:w-[590px] lg:h-[72px] text-[#616364]'>save money by exporting electrical energy to PLN to reduce the cost of monthly electric bills.</p>
        <button className='w-[300px] h-[50px] lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>LIHAT SEMUA PRODUK</button>
    </div>
    </div>
    </div>
  )
}

export default TentangKami

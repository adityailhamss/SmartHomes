import React from 'react';
import Payment from "../assets/img/Payment.png";

const Footer = () => {
  return (
    <div className='flex flex-col align-center gap-4 px-32 py-8 w-auto h-[1000px] lg:h-[494px]'>
        <div className='flex flex-row'>
                <p className="border border-[#EFF1F1] w-[1280px] h-0"></p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between text-left gap-2 lg:gap-12 pt-8'>
            <div className='flex flex-col align-start gap-6 lg:w-[258px] lg:h-[254px]'>
                <h1 className='text-2xl font-normal text-[#FF8A00]'>Smart Homes</h1>
                <p className='text-base font-normal'>Digital Valley, 4th Floor Menara Bandung, Jl. Gegerkalong Hilir No.47, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152 info@smarthomes.com</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:items-start gap-12 w-[448px] h-[270px]'>
                <div className='flex flex-col gap-6 w-[200px] h-[270px]'>
                    <h1 className='text-2xl text-[#1E1E1E] font-normal'>Produk Kami</h1>
                    <ul>
                        <li className='text-base text-[#1E1E1E] font-normal text-left'>Smart Door Lock</li>
                        <li className='text-base text-[#1E1E1E] font-normal'>Smart Bulb</li>
                        <li className='text-base text-[#1E1E1E] font-normal'>Smart LED</li>
                        <li className='text-base text-[#1E1E1E] font-normal'>Smart CCTV</li>
                        <li className='text-base text-[#1E1E1E] font-normal'>Robot Vacuum</li>
                        <li className='text-base text-[#1E1E1E] font-normal'>Panel Surya</li>
                        <li className='text-base text-[#1E1E1E] font-normal'>Internet Service</li>
                    </ul>
                </div>
                <div className='flex flex-col align-start gap-6 w-[200px] h-[131px]'>
                    <h1 className='text-2xl text-[#1E1E1E] font-normal'>Office Hours</h1>
                    <ul>
                        <li className='text-base text-[#1E1E1E] font-normal'>Monday-Friday</li>
                        <li className='text-base text-[#1E1E1E] font-normal'>8am to 5pm</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-row lg:mt-[32px] mt-[115px]'>
            <p className="border border-[#EFF1F1] w-[1280px] h-0"></p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between align-center lg:gap-64 lg:pt-[30px] pt-[20px]'>
            <h1 className='text-lg font-normal lg:text-left text-center text-[#1E1E1E]'>© 2022, All rights reserved</h1>
            <img src={Payment} alt=""/>
        </div>
    </div>
  )
}

export default Footer

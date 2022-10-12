import React from 'react';
import Payment from "../assets/img/Payment.png";

const Footer = () => {
  return (
    <div className='flex flex-col px-10 lg:px-32 items-start gap-4 absolute w-[300px] lg:w-[1200px] h-[494px]'>
        <div className='flex flex-col items-start gap-2 w-[300px] lg:w-[1200px] h-[32px]'>   
            <div className='border border-[#EFF1F1] w-[300px] lg:w-[1152px] h-0'>

            </div>
        </div>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-12 w-[300px] lg:w-[1200px] h-[2500px] lg:h-[350px]'>
                <div className='flex flex-col items-start gap-6 w-[200px] lg:w-[258px] h-[254px]'>
                    <h1 className='font-normal text-2xl text-[#FF8A00] w-[173px] h-[62px]'>Smart Homes</h1>
                    <p className='font-normal text-xl'>Digital Valley, 4th Floor Menara Bandung, Jl. Gegerkalong Hilir No.47, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152 info@smarthomes.com</p>
                </div>
            
            <div className='flex flex-col lg:flex-row items-start gap-12 w-auto h-auto lg:w-[448px] lg:h-[400px]'>
                <div className='flex flex-col items-start gap-6 w-[200px] h-auto lg:h-[350px]'>
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
                <div className='flex flex-col items-start gap-6 w-auto h-auto lg:w-[200px] lg:h-[131px]'>
                     <h1 className='text-2xl text-[#1E1E1E] font-normal'>Office Hours</h1>
                     <ul>
                        <li className='text-base text-[#1E1E1E] font-normal'>Monday-Friday</li>
                        <li className='text-base text-[#1E1E1E] font-normal'>8am to 5pm</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-start gap-2 w-[300px] lg:w-[1200px] h-[32px]'>   
            <div className='border border-[#EFF1F1] w-[300px] lg:w-[1152px] h-0'>

            </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between mb-4 lg:mb-8 w-[350px] h-[150px] lg:w-[1200px] lg:h-[32px] '>
            <h1 className='text-lg font-normal text-left  text-[#1E1E1E]'>© 2022, All rights reserved</h1>
            <div>
            <img src={Payment} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Footer

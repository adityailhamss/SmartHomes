import React from 'react'
import { useNavigate } from "react-router-dom";
import Next from "../assets/img/next.png";
import Back from '../assets/img/Group 26.png';
// import Cover from '../assets/img/cover.png';
import Is1 from '../assets/img/is1.png';
import Is2 from '../assets/img/is2.png';
import Is3 from '../assets/img/is3.png';


function InternetService() {

    const navigate = useNavigate();

    const Contact = () => {
     navigate("/Contact");
    };

    const home = () => {
        navigate("/");
       };

  return (
    <div className='flex flex-col'>
        <div className='flex flex-row pl-3 lg:pl-32'>
            <div>
                <button onClick={home}>
                <img src={Back} alt=""/>
                </button>
            </div>
            <div className='flex flex-row pl-5 items-center'>
                <h1 className='text-sm text-[#878889] font-normal'>Beranda</h1>
                <div className='w-[16px] h-[16px]'>
                <img src={Next} alt=""/>
                </div>
                <p className='text-sm text-[#1E1E1E] font-normal'>Internet Service</p>
            </div>
        </div>
        <div className='flex flex-row py-4'>
            <p className="border border-[#EFF1F1] w-[1441px] h-0"></p>
        </div>
        {/* <div >
            <img src={Cover} className="w-auto h-auto "/>
        </div> */}
        <div className='bg-image-is w-[370px] h-[500px] lg:w-[1441px] lg:h-[547px] pt-2'>
        <div className='flex flex-col items-center lg:items-start gap-6 pl-2 lg:pl-[122px] pt-[105px]'>
            <h1 className='font-Poppins font-medium text-2xl leading-9 text-[#ffffff]'>Tentang Kami</h1>
            <p className='font-Poppins font-light text-2xl leading-[48px] text-[#ffffff] w-auto h-auto lg:w-[506px] lg:h-[144px]'>Smart Homes offer a better lifestyle by generating clean energy, cut monthly budgets, and give an easy to operate everyday household item.</p>
            <button className='w-[300px] h-[50px] lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>HUBUNGI CS SMART HOMES</button>
        </div>
    </div>
        <div className="py-12 text-center">
            <h1 className="text-3xl lg:text-5xl text-[#616364]">Keunggulan Iconnect</h1>
        </div>
        <div className='flex flex-col gap-[84px] items-center py-4'>
            <div className='flex flex-col items-center lg:flex-row gap-8'>
                <div className='flex flex-col p-[16px] gap-2 w-[320.67px] h-[268px] bg-[#FBFBFC] border-solid border-[1px] border-[#EFF1F1] rounded-2xl items-center text-center'>
                    <img src={Is1} className="w-20 h-20"/>
                    <h1 className='font-Poppins font-normal text-xl leading-[30px] text-[#1E1E1E]'>Reliable</h1>
                    <p className='font-Poppins font-normal text-base leading-6 tracking-wide text-[#1E1E1E]'>ICONNET memiliki kecepatan internet yang tinggi dan stabil karena menggunakan jaringan Fiber.</p>
                    
                </div>
                <div className='flex flex-col p-[16px] gap-2 w-[320.67px] h-[268px] bg-[#FBFBFC] border-solid border-[1px] border-[#EFF1F1] rounded-2xl items-center text-center'>
                    <img src={Is2} className="w-20 h-20"/>
                    <h1 className='font-Poppins font-normal text-xl leading-[30px] text-[#1E1E1E]'>Affordable</h1>
                    <p className='font-Poppins font-normal text-base leading-6 tracking-wide text-[#1E1E1E]'>Koneksi ICONNET sangat stabil karena menggunakan jaringan fiber optic yang tercanggih.</p>
                    
                </div>
                <div className='flex flex-col p-[16px] gap-2 w-[320.67px] h-[268px] bg-[#FBFBFC] border-solid border-[1px] border-[#EFF1F1] rounded-2xl items-center text-center'>
                    <img src={Is3} className="w-20 h-20"/>
                    <h1 className='font-Poppins font-normal text-xl leading-[30px] text-[#1E1E1E]'>Unlimited</h1>
                    <p className='font-Poppins font-normal text-base leading-6 tracking-wide text-[#1E1E1E]'>ICONNET saat ini mempunyai coverage area yang paling luas jangkauannya.</p>               
                </div>
            </div>
        </div>
        <div className="py-10 text-center">
            <h1 className="text-3xl lg:text-5xl text-[#616364]">Paket Langganan</h1>
        </div>
        <div className='flex flex-col  items-center py-4'>
            <div className='flex flex-col items-center lg:flex-row gap-4'>
                <div className='flex flex-col  gap-8 w-[284px] h-[449px] bg-white border-solid border-[1px] border-[#EFF1F1]  items-center text-center'>
                    <div className="bg-[#FFF1DF] w-full h-[84px] justify-center">
                        <h1 className="text-[#FF8A00] text-[32px] pt-3">Basic</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">Rp 135.000</p>
                        <p>/bulan</p>
                        <p>*Harga belum termasuk ppn</p>
                    </div>
                    <div>
                        <p>Full Fiber To The Home</p>
                    </div>
                    <div>
                        <p>Up to 10 Mbps Download/Upload</p>
                    </div>
                    <div>
                        <p>Unlimited Quota</p>
                    </div>
                </div>
                <div className='flex flex-col  gap-8 w-[284px] h-[449px] bg-white border-solid border-[1px] border-[#EFF1F1]  items-center text-center'>
                    <div className="bg-[#FFF1DF] w-full h-[84px] justify-center">
                        <h1 className="text-[#FF8A00] text-[32px] pt-3">Regular</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">Rp 185.000</p>
                        <p>/bulan</p>
                        <p>*Harga belum termasuk ppn</p>
                    </div>
                    <div>
                        <p>Full Fiber To The Home</p>
                    </div>
                    <div>
                        <p>Up to 20 Mbps Download/Upload</p>
                    </div>
                    <div>
                        <p>Unlimited Quota</p>
                    </div>
                </div>
                <div className='flex flex-col  gap-8 w-[284px] h-[449px] bg-white border-solid border-[1px] border-[#EFF1F1]  items-center text-center'>
                    <div className="bg-[#FFF1DF] w-full h-[84px] justify-center">
                        <h1 className="text-[#FF8A00] text-[32px] pt-3">Premium</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">Rp 297.000</p>
                        <p>/bulan</p>
                        <p>*Harga belum termasuk ppn</p>
                    </div>
                    <div>
                        <p>Full Fiber To The Home</p>
                    </div>
                    <div>
                        <p>Up to 50 Mbps Download/Upload</p>
                    </div>
                    <div>
                        <p>Unlimited Quota</p>
                    </div>
                </div>
                <div className='flex flex-col  gap-8 w-[284px] h-[449px] bg-white border-solid border-[1px] border-[#EFF1F1]  items-center text-center'>
                    <div className="bg-[#FFF1DF] w-full h-[84px] justify-center">
                        <h1 className="text-[#FF8A00] text-[32px] pt-3">Advanced</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">Rp 427.000</p>
                        <p>/bulan</p>
                        <p>*Harga belum termasuk ppn</p>
                    </div>
                    <div>
                        <p>Full Fiber To The Home</p>
                    </div>
                    <div>
                        <p>Up to 100 Mbps Download/Upload</p>
                    </div>
                    <div>
                        <p>Unlimited Quota</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="flex flex-row gap-4 justify-center py-7">
            <button onClick={Contact} className="bg-[#FFFAF4] border-[1px] border-[#FF8A00] w-[300px] h-[44px] rounded-xl text-base text-[#FF8A00]">Hubungi Kami</button>
            <button onClick={Contact} className="bg-[#FF8A00] w-[300px] h-[44px] rounded-xl text-base text-[#FFFFFF]">Pesan Sekarang</button>
        </div>
        
    </div>
  )
}

export default InternetService
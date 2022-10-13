import React from 'react';
import Back from '../assets/img/Group 26.png';
import Next from "../assets/img/next.png";
import ImagePS1 from "../assets/img/imageps1.png";
import ImagePS2 from "../assets/img/imageps2.png";
import ImagePS3 from "../assets/img/imageps3.png";
import ImagePS4 from "../assets/img/imageps4.png";
import ImagePS5 from "../assets/img/imageps5.png";
import ImagePS6 from "../assets/img/imageps6.png";
import ImagePS7 from "../assets/img/imageps7.png";
import Arrow from "../assets/img/Arrow 1.png";

function PanelSurya() {
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
            <p className='text-sm text-[#1E1E1E] font-normal'>Panel Surya</p>
        </div>
    </div>
    <div className='flex flex-row justify-center'>
            <p className="border border-[#EFF1F1] w-[1441px] h-0"></p>
        </div>
    <div className='bg-image-ps w-[370px] h-[500px] lg:w-[1441px] lg:h-[547px] pt-2'>
        <div className='flex flex-col items-center lg:items-start gap-6 pl-2 lg:pl-[122px] pt-[105px]'>
            <h1 className='font-Poppins font-medium text-[48px] leading-9 text-[#ffffff]'>Pannel Surya</h1>
            <p className='font-Poppins font-light text-2xl leading-[48px] text-[#ffffff] w-auto h-auto lg:w-[506px] lg:h-[144px]'> Sistem solar panel yang menggunakan matahari sebagai satu-satunya sumber energi dengan memanfaatkan baterai</p>
            <button className='w-[300px] h-[50px] lg:w-[318px] lg:h-[56px] bg-[#FF8A00] rounded-sm items-center font-Poppins font-medium text-base leading-6 text-white '>DAPATKAN PENAWARAN</button>
        </div>
    </div>
    <div className='flex flex-col items-start lg:items-center gap-20 ml-2 lg:ml-[121px] mt-[58px]'>
        <h1 className='text-3xl lg:text-[42px] font-normal text-center'>Cara Kerja Panel Surya</h1>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:mt-[80px] border border-[#C5C7C8] bg-[#FAFAFB] w-[300px] h-[1200px] lg:w-[1200px] lg:h-[205px] rounded-2xl'>
            <div className='flex flex-col justify-center items-center gap-6 w-[102px] h-[130px] ml-[24px] mt-[37.5px]'>
                <img src={ImagePS1} alt=""/>
                <p className='text-lg text-[#616364] font-normal'>Solar Panel</p>
            </div>
            <p className='text-3xl text-[#FF8A00]'>+</p>
            <div className='flex flex-col justify-center items-center gap-6 w-[155px] h-[157px] ml-[6px] mt-[37.5px]'>
                <img src={ImagePS2} alt=""/>
                <p className='text-lg text-[#616364] font-normal w-[155px] h-[54px] text-center'>Breaker (Export - Import)</p>
            </div>
            <div className='flex flex-col items-center gap-4 ml-[10px]'>
                <p className='text-lg text-[#616364] text-center font-normal'>Energi Listrik</p>
                <img src={Arrow} alt=""/>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 w-[80px] h-[130px] ml-[6px] mt-[37.5px]'>
                <img src={ImagePS3} alt=""/>
                <p className='text-lg text-[#616364] font-normal w-[155px] h-[54px] text-center'>PLN</p>
            </div>
            <div className='flex flex-col items-center gap-4 ml-[10px]'>
                <p className='text-lg text-[#616364] text-center font-normal'>Keuntungan</p>
                <img src={Arrow} alt=""/>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 w-[80px] h-[130px] ml-[6px] mt-[37.5px]'>
                <img src={ImagePS4} alt=""/>
                <p className='text-lg text-[#616364] font-normal w-[155px] h-[54px] text-center'>Pengurangan Listrik Perbulan</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-12'>
            <img src={ImagePS5} alt="" className='w-[360px] h-[200px] lg:w-[750px] lg:h-[352px]'/>
            <p className='text-lg text-[#616364] font-normal w-[360px] lg:w-[392px] h-[240px]'>Sistem kerja panel surya adalah dengan mengubah energi matahari menjadi energi listrik yang selanjutnya dapat dihubungkan secara on-grid ke sistem PLN, yang dapat mengurangi pengeluaran listrik perbulan dari hasil penjualan listrik yang dihasilkan panel surya secara langsung ke PLN</p>
        </div>
        <h1 className='text-3xl lg:text-5xl font-normal text-center text-[#616364] w-[360px] h-auto lg:w-[424px] lg:h-[126px]'>Benefit SmartHome Panel Surya</h1>
        <div className='flex flex-col lg:flex-row pl-14 lg:pl-0 items-start gap-8 w-auto h-auto lg:w-[1060px] lg:h-[232px]'>
            <div className='flex flex-col justify-center items-center gap-6 border rounded-3xl bg-[#EFF1F1] border-[#C5C7C8] w-[241px] h-[232px]'>
                <p className='text-6xl font-normal'>± 50%</p>
                <p className='text-center text-2xl font-normal text-[#616364]'>Hemat Biaya</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 border rounded-3xl bg-[#EFF1F1] border-[#C5C7C8] w-[241px] h-[232px]'>
                <p className='text-6xl font-normal'>30Th</p>
                <p className='text-center text-2xl font-normal text-[#616364]'>Garansi Performa</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 border rounded-3xl bg-[#EFF1F1] border-[#C5C7C8] w-[241px] h-[232px]'>
                <img src={ImagePS6} alt=""/>
                <p className='text-center text-2xl font-normal text-[#616364]'>Mendukung Go Green</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 border rounded-3xl bg-[#EFF1F1] border-[#C5C7C8] w-[241px] h-[232px]'>
                <img src={ImagePS7} alt=""/>
                <p className='text-center text-2xl font-normal text-[#616364]'>Anti Pemadaman Listrik</p>
            </div>
        </div>
        <div className='flex flex-row items-center lg:items-start gap-4 pl-4 lg:pl-0'>
            <button className='border border-[#FF8A00] rounded-lg bg-[#FFFAF4] w-[150px] h-[44px] lg:w-[300px] lg:h-[44px] text-lg text-[#FF8A00]'>HUBUNGI KAMI</button>
            <button className='border border-[#FF8A00] rounded-lg bg-[#FF8A00] w-[160px] h-[44px] lg:w-[300px] lg:h-[44px] text-lg text-[#FFFFFF]'>PESAN SEKARANG</button>
        </div>
    </div>
    </div>
  )
}

export default PanelSurya

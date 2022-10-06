import React from 'react';
import Back from '../assets/img/Group 26.png';
import Next from "../assets/img/next.png";

function Contact() {
  return (
    <div>
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
            <p className='text-sm text-[#1E1E1E] font-normal'>Hubungi Kami</p>
        </div>
        </div>
        <div className='flex flex-row justify-center'>
            <p className="border border-[#EFF1F1] w-[1441px] h-0"></p>
        </div>
        <div className='flex flex-col align-start w-[690px] h-[484px] mt-[84px] ml-[338px] mb-[263px] gap-6'>
          <div className='flex flex-row gap-2.5 w-[642px] h-[48px] justify-center'>
            <h1 className='text-3xl text-[#1E1E1E]'>Hubungi Kami</h1>
          </div>
          <form className="md:px-0 px-10 gap-3 pt-3">
          <label className="block gap-4">
            <span className="flex flex-row font-bold pb-6 text-lg font-[Poppins] text-[#414141]">
              Nama
            </span>
            <input
              className="border w-full lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
              placeholder="Tulis Disini"
              type="text"
              name="nama"
            />
          </label>
          <label className="block pt-4">
            <span className="flex flex-row font-bold pb-6 text-lg font-[Poppins] text-[#414141]">
              Email
            </span>
            <input
              className="border w-full lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
              placeholder="Tulis Disini"
              type="text"
              name="nama"
            />
          </label>
          <label className="block pt-4 pb-4">
            <span className="flex flex-row font-bold pb-6 text-lg font-[Poppins] text-[#414141]">
              Pesan
            </span>
            <input
              className="border w-full lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
              placeholder="Tulis Disini"
              type="text"
              name="nama"
            />
          </label>
          </form>
          <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-row gap-6 md:grid-flow-col justify-center md:justify-start">
            <button
              
              className="rounded border w-40 h-10 md:w-52 md:h-14 bg-[#FFFAF4] text-[#FF8A00] border-[#FF8A00] text-2xl"
            >
              KIRIM VIA WA
            </button>
            <button
              
              className="rounded border w-40 h-10 md:w-52 md:h-14 bg-[#FF8A00] text-[#FFFFFF] border-[#E9520B] text-2xl"
            >
              KIRIM EMAIL
            </button>
          </div>
        </div>
        </div>
        
      </div>
  )
}

export default Contact

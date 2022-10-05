import React from 'react';
import Back from '../assets/img/Group 26.png';
import Next from "../assets/img/next.png";

function Contact() {
  return (
    <div className='flex flex-row'>
        <div className='pl-32 pr-12 py-32'>
            <button>
            <img src={Back} alt=""/>
            </button>
        </div>
        <div className='flex flex-row align-center gap-1 py-32 w-[187px] h-[21px]'>
            <h1 className='text-sm text-[#878889] font-normal'>Beranda</h1>
            <div className='w-[16px] h-[16px]'>
            <img src={Next} alt=""/>
            </div>
            <p className='text-sm text-[#1E1E1E] font-normal'>Hubungi Kami</p>
        </div>
    </div>
  )
}

export default Contact

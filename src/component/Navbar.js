import React from 'react';
import Logo from "../assets/logo/Logo.png";

function Navbar() {
  return (
    <div className='flex flex-row px-32 py-6'>
        <img src={Logo}></img>
        <div className='flex flex-row px-20'>
        <p className=''>Tentang Kami</p>
        </div>
    </div>
  )
}

export default Navbar

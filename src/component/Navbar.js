import React from 'react';
import Logo from "../assets/logo/Logo.png";
import Cart from "../assets/img/Group 2.png";
import Profile from "../assets/img/Ellipse 2.png";
import Down from "../assets/img/iconDown.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='flex flex-row pl-32 py-6 gap-11'>
        <div className='w-[106px] h-[54px]'>
        <NavLink to={"/"}>
            <img src={Logo} alt=""/>
        </NavLink>
        </div>
        <div className='flex flex-row gap-4 align-center'>
            <div className='flex flex-row align-center'>
            <NavLink
            to={"/TentangKami"}
              className="py-4 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Tentang Kami
            </NavLink>
            </div>
            <div className='flex flex-row align-center'>
            <NavLink
            to={"/Contact"}
              className="py-4 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Hubungi Kami
            </NavLink>
            </div>
            <div className='flex flex-row align-center'>
            <NavLink
            to={"/"}
              className="py-4 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Semua Produk
            </NavLink>
            </div>
            <div className='flex flex-row align-center'>
            <NavLink
            to={"/PanelSurya"}
              className="py-4 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Panel Surya
            </NavLink>
            </div>
            <div className='flex flex-row align-center'>
            <NavLink
            to={"/InternetService"}
              className="py-4 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Internet Service
            </NavLink>
            </div>
        </div>
        <div className='flex flex-row justify-center alignt-center gap-1.5 py-4'>
            <div className='w-[32px] h-[32px]'>
              <img src={Cart} alt=""/>
            </div>
            <div className='flex flex-row align-center gap-1'>
                <div className='flex flex-col align-start gap-1'>
                  <p className='text-xs text-[#1E1E1E]'>Check Out</p>
                  <p className='text-xs text-[#FF8A00]'>Rp. 3.670.000</p>
                </div>
            </div>
            <div className='flex flex-row pl-12'>
              <img src={Profile} alt=""/>
              <button>
              <img src={Down} alt=""/>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar

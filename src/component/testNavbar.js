import { NavLink } from "react-router-dom";
import Menu from "../assets/img/menu.png";
import Logo from "../assets/logo/Logo.png";
import React from "react";
import { useState } from "react";
import Cart from "../assets/img/Group 2.png";
import Profile from "../assets/img/Ellipse 2.png";
import Down from "../assets/img/iconDown.png";

function TestNavbar() {
    const [drop, setDrop] = useState(false);
    const dropDown = () => {
    setDrop(!drop);
  };
  return (
    <div className="flex flex-row px-14 items-center">
        <div className="py-5 lg:py-0">
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <ul className="hidden lg:flex flex-row ml-auto xl:mr-20">
          <li className="py-8">
            <NavLink
              to={"/TentangKami"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Tentang Kami
            </NavLink>
          </li>
          <li className="py-8">
            <NavLink
              to={"/Contact"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Hubungi Kami
            </NavLink>
          </li>
          <li className="py-8">
            <NavLink
              to={"/"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Semua Produk
            </NavLink>
          </li>
          <li className="py-8">
            <NavLink
              to={"/PanelSurya"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Panel Surya
            </NavLink>
          </li>
          <li className="py-8">
            <NavLink
              to={"/InternetService"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#FF8A00" : "#616364",
              })}
              end
            >
              Internet Service
            </NavLink>
          </li>
          <div className='flex flex-row justify-center alignt-center gap-1.5 py-4'>
            {/* <div className='w-[32px] h-[32px]'>
              <img src={Cart} alt=""/>
            </div>
            <div className='flex flex-row align-center gap-1'>
                <div className='flex flex-col align-start gap-1'>
                  <button className='text-xs text-[#1E1E1E]'>Check Out</button>
                  <p className='text-xs text-[#FF8A00]'>Rp. 3.670.000</p>
                </div>
            </div> */}
            {/* <div className='flex flex-row pl-12'>
              <img src={Profile} alt=""/>
              <button>
              <img src={Down} alt=""/>
              </button>
            </div> */}
        </div>
          </ul>
          <div className="ml-auto my-auto lg:hidden inline-block w-[2rem] relative hover:cursor-pointer">
          <img src={Menu} alt="" onClick={dropDown} />
          <div
            className={`absolute z-[1] right-0 ${
              drop ? "block" : "hidden"
            } min-w-[200px] flex flex-col items-center text-center gap-4 border-2 rounded-xl border-black py-4 bg-white`}
          >
            <ul className="">
          <li className="py-2">
            <NavLink
              to={"/TentangKami"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
              end
            >
              Tentang Kami
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to={"/Contact"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
              end
            >
              Hubungi Kami
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to={"/"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
              end
            >
              Semua Produk
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to={"/PanelSurya"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
              end
            >
              Panel Surya
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to={"/InternetService"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
              end
            >
              Internet Service
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to={"/Cart"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
              end
            >
              Cart
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to={"/Profile"}
              className="py-8 px-6 tracking-widest"
              style={(isActive) => ({
                color: isActive.isActive ? "#E9520B" : "#C4C4C4",
              })}
              end
            >
              Profile
            </NavLink>
          </li>
          </ul>

          </div>
    
        </div>

    </div>
  )
}

export default TestNavbar
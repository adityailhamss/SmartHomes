import React, {useRef, useState} from 'react';
import Back from '../assets/img/Group 26.png';
import Next from "../assets/img/next.png";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

function Contact() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t38pnr9', 
        'template_yt2cdvq', form.current, '1WU2noYiBWYFITM61')
        .then(
          () => {
            alert("Your message has been sent.");
            setValidated(false);
            e.target.reset();
          },
          (error) => {
            alert("There was a problem sending your message.", error);
          }
        );
    };
            
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // alert("Message was sent!");
        sendEmail(event);
      }
      setValidated(true);
    };
  return (
    <div className='flex flex-col px-2 lg:px-10 py-2 gap-4 lg:gap-6'>
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
            <p className='text-sm text-[#1E1E1E] font-normal'>Hubungi Kami</p>
        </div>
    </div>
        <div className='flex flex-row justify-center'>
            <p className="border border-[#EFF1F1] w-[1441px] h-0"></p>
        </div>
        <div className='flex flex-col items-start lg:items-center w-[690px] h-[484px] mt-[84px] ml-6 lg:ml-[338px] mb-[263px] gap-6'>
          <div className='flex flex-row gap-2.5 w-[642px] h-[48px] justify-start lg:justify-center'>
            <h1 className='text-3xl text-[#1E1E1E]'>Hubungi Kami</h1>
          </div>
          <form className="gap-3 pt-3" noValidate ref={form} onSubmit={handleSubmit} validated={validated}>
          <label className="block gap-4">
            <span className="flex flex-row font-bold pb-6 text-lg font-[Poppins] text-[#414141]">
              Nama
            </span>
            <input
              className="border w-[330px] lg:w-[642px] h-14 rounded border-[#DADADA] pl-3 font-sans"
              placeholder="Tulis Disini"
              type="text"
              name="nama"
              id='nama'
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
              name="email"
              id='email'
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
              name="pesan"
              id='pesan'
            />
          </label>
          </form>
          <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-row gap-6 md:grid-flow-col justify-center md:justify-start">
          <a href="https://wa.me/6285722159221">
            <button
              
              className="rounded border w-40 h-10 md:w-52 md:h-14 bg-[#FFFAF4] text-[#FF8A00] border-[#FF8A00] text-xl lg:text-2xl"
            >
              KIRIM VIA WA
            </button>
            </a>
            <button
            type='submit'
              value="send"
              onClick={sendEmail}
              className="rounded border w-40 h-10 md:w-52 md:h-14 bg-[#FF8A00] text-[#FFFFFF] border-[#E9520B] text-xl lg:text-2xl"
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

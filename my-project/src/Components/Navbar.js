import React, { useState } from 'react'
import Button from './Button';
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import logo from '../Media/Logo.png';

const Nav = () => {
    let Links =[
      {name:"MENU",link:"#Menu"},
      {name:"ABOUT",link:"#AboutUs"},
      {name:"CONTACT",link:"#ContactUs"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <nav className='absolute z-50 '>
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-lime-200 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-sans 
      text-gray-800'>
        <img src={logo} alt='logo' className='w-[128px]'/>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {open ? <IoClose></IoClose>:<GiHamburgerMenu></GiHamburgerMenu>}
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static grid grid-cols-1 auto-rows-auto gap-2  bg-lime-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all md:my-auto duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 font-sans font-bold text-xl md:my-0 my-7'>
              <a href={link.link} className="text-xl relative after:bg-yellow-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">{link.name}</a>
            </li>
          ))
        }
        <div className='mr-6 md:mr-0 grid grid-cols-1 grid-flow-row md:block gap-y-3 '>
        <Button><span className='inline'>My Orders</span><SlNote className='inline ml-3' /></Button>
        </div>
      </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav
import React, { useState } from 'react'
import Button from './Button';
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import logo from '../Media/Logo.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import { IoFastFoodOutline } from "react-icons/io5";
import { useCart } from '../Context/CartContext';
import { IoReceiptOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Nav = () => {

    const location = useLocation() 
    const { getCartCount } = useCart();
    const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the element with the ID from the fragment identifier
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location.hash])
    let Links =[
      {name:"HOME",link:"/"},
      {name:"MENU",link:"/#Menu"},
      {name:"ABOUT",link:"/#AboutUs"},
      {name:"CONTACT",link:"/#ContactUs"},
    ];
    let [open,setOpen]=useState(false);
    const handleLinkClick = (link) => {
      setOpen(false);
      if (link === '/') {
          window.scrollTo(0, 0);
      } else {
          navigate(link);
      }
  };
  return (
    <nav className='absolute z-50 '>
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-lime-200 py-3 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-sans 
      text-gray-800'>
        <img src={logo} alt='logo' className='max-w-[128px]'/>
        {!open ? <button onClick={() => navigate("/Orders") }  className="px-3 py-2 text-xs font-medium absolute right-20 top-4  text-center inline-flex items-center md:hidden   bg-[#F4CE14] rounded-lg hover:bg-yellow-200 hover:shadow-lg hover:scale-105 transform transition">
        <span style={getCartCount() === 0 ? {display : "none"} : {display : "block"}} className='absolute top-[0px] right-[0px] bg-red-500 text-white text-[8px] w-3 h-3 rounded-full flex justify-center items-center'>{getCartCount()}</span>
              Orders<IoReceiptOutline className='ml-2'></IoReceiptOutline> 
        </button>:null}
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
      {open ? <IoClose></IoClose>:<GiHamburgerMenu></GiHamburgerMenu>}
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static grid grid-cols-1 auto-rows-auto gap-2  bg-lime-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all md:my-auto duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 font-sans font-bold text-xl md:my-0 my-7'>
              <Link onClick={() => handleLinkClick(link.link)} to={link.link} className="text-xl relative after:bg-yellow-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">{link.name}</Link>
            </li>
          ))
        }
        <div className='mr-6 md:mr-0 grid grid-cols-1 grid-flow-row md:block gap-y-3 '>
        <Button toggled={open} setToggled={setOpen} link = {"/Orders"}>My Orders<IoFastFoodOutline className='inline mb-1 ml-3 text-[20px]' /><span style={getCartCount() === 0 ? {display : "none"} : {display : "block"}} className='absolute top-[0px] right-[0px] bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{getCartCount()}</span></Button>
        <Button toggled={open} setToggled={setOpen} link={"/Bookings"}>Book a Table<SlNote className='inline ml-3' /></Button>
        </div>
      </ul>
      </div>
    </div>
  </nav>
    )
}

export default Nav
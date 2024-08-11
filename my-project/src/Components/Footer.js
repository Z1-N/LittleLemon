import React from 'react';
import FooterLogo from '../Media/FooterLogo.png';
import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className='w-full  bg-slate-900  grid grid-cols-5  md:gap-x-6 gap-x-2   md:py-10 text-slate-500'>
                    <div className='mt-3 ml-3 grid grid-col-2 grid-flow-col md:gap-x-5'>
                        <img src={FooterLogo} alt='Logo' className='w-[54px]' />
                        <p className='md:text-sm  md:block hidden '>Little Lemon a world of delicacy, We serve the best food for your taste.</p>
                    </div>
                <div>
                    <div className='mt-3'>
                        <p className='mb-4 font-bold text-sm md:text-lg text-center'>Navigation</p>
                        <ul className='grid grid-cols-1 gap-4 md:text-lg text-center'>
                        <li className=' hover:text-white duration-500 ease-in'>
                                <a href='/'>Home</a>
                            </li>
                            <li className=' hover:text-white duration-500 ease-in'>
                                <a href='/#Menu'>Menu</a>
                            </li>
                            <li className=' hover:text-white duration-500'>
                                <a href='/#AboutUs'>About</a>
                            </li>
                            <li className=' hover:text-white duration-500'>
                                <a href='/#ContactUs'>Contact</a>
                            </li>                            
                        </ul>
                    </div>
                </div>
                    <div className='mt-3 text-xs font-bold'>
                        <p className='mb-4 text-bold text-sm md:text-lg'>Contact</p>
                        <FiMapPin className='inline md:text-lg'/>
                        <p className='inline md:text-sm  ml-2'>Location</p>
                        <br></br>
                        <p className='text-[8px]/3 md:text-xs text-left indent-1 mt-1'>Little Lemon, 19/20 Royal Hibernian Way, Duke Lane Upper, Dublin 2 Dublin 2, Dublin, D02 K772, Ireland</p>
                        <br></br>
                        <div className='md:grid grid-cols-2 mb-4'>
                            <div>
                        <FaPhone className='inline text-sm md:text-lg rotate-90'/>
                        <p className='inline mx-2 md:text-sm text-nowrap'>Call Us</p>
                        <p className='text-[8px]/3 md:text-xs mt-1'>011-784-3366</p>
                            </div>
                            <div >
                        <FiMail className='inline md:text-lg'/>
                        <p className='inline md:text-sm ml-2'>Email</p>
                        <p className='text-[8px]/3 md:text-xs mt-1 '>info@littlelemon.com</p>
                            </div>
                        </div>
                        <div>
                        <FiClock className='inline md:text-lg'/>
                        <p className='inline md:text-lg md:ml-2 md:text-center text-nowrap'>Opening Hours</p>
                        <div className='md:grid grid-cols-2 md:gap-x-10 md:gap-y-2 md:text-nowrap'>
                        <p className='text-[8px]/3 md:text-xs'>Saturday<br/>10:00 AM - 12:00 PM</p>
                        <p className='text-[8px]/3 md:text-xs'>Monday - Friday<br></br>9:00 AM - 12:00 PM</p>
                        </div>
                        <p className='text-[8px]/3 md:text-xs'>Closed on Sunday</p>
                        </div>
                    </div>
                <div>
                    <div>
                        <p className='md:text-lg text-sm  mt-3  font-bold'>Follow Us</p>
                        <ul className='md:flex space-x-4 my-2 '>
                            <li className='ml-4 md:ml-auto my-2 md:my-auto'>
                                <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                                     <p className='text-xs md:text-base'>Twitter</p><FaXTwitter className='md:h-6 md:w-6 hover:text-white duration-500 ease-in' />
                                </a>
                            </li>
                            <li className='my-2 md:my-auto'>
                                <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                                    <p className='text-xs md:text-base'>Facebook</p><FaSquareFacebook className='md:h-6 md:w-6 hover:text-white duration-500 ease-in' />
                                </a>
                            </li>
                            <li className='my-2 md:my-auto'>
                                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                                    <p className='text-xs md:text-base'>Instagram</p><FaInstagram className='md:h-6 md:w-6 hover:text-white duration-500 ease-in' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div>
                        <p className='ml-4 mt-3 md:text-base text-xs'>All rights reserved To <br></br> Eltayib Yousif &copy; 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
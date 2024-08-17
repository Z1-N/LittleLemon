import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ link, children }) => {
  const navigate = useNavigate()
  return (
    <button 
      onClick={() => navigate(link)} 
      className='bg-[#F4CE14] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-yellow-200 hover:shadow-lg hover:scale-105 transform transition duration-500'
    >
      {children}
    </button>
  )
}

export default Button
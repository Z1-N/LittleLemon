import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ link, children, toggled, setToggled }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (setToggled) {
      setToggled(!toggled)
    }
    if (link) {
      navigate(link)
    }
  }

  return (
    <button 
      onClick={handleClick} 
      className='bg-[#F4CE14] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-yellow-200 hover:shadow-lg hover:scale-105 transform transition duration-500 '
    >
      {children}
    </button>
  )
}

export default Button
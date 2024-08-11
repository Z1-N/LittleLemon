import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#F4CE14]  font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-yellow-200 hover:shadow-lg hover:scale-105 transform transition 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
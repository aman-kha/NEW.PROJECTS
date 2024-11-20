import React from 'react'
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useState } from 'react';
const Navber = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'> Aman khan</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>

            <li className='menuLink'> <a href='#hero'>Home</a></li>
            <li className='menuLink'> <a href='#about'>About</a></li>
            <li className='menuLink'> <a href='#projects'>Projects</a></li>
            <li className='menuLink'> <a href='#contact'>Contact</a></li>
        </ul>
       <div className='md:hidden'onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30} /> :
        <AiOutlineMenu size={30} />
        }
       </div>
      </div>

       {isMenuOpen && (
        <ul className='flex flex-col gao-4 mt-4 md:hidden'>
        <li className='menuLink'>
            <a href='#hero'onClick={toggleMenu}>Home</a>
         </li>
         <li className='menuLink'>
            <a href='#About'onClick={toggleMenu}>About</a>
         </li>
         <li className='menuLink'>
            <a href='#Projects'onClick={toggleMenu}>Projects</a>
         </li>
         <li className='menuLink'>
            <a href='#Contact'onClick={toggleMenu}>Contact</a> 
         </li>
        </ul>
       )}
      

    </div>
  )
}

export default Navber

import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
            <img src={assets.logo} alt="" className='w-44 cursor-pointer' />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden bg-green-600' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                <button onClick={()=>navigate('/login')} className='bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] text-white cursor-pointer px-8 py-3 rounded-full font-semibold hidden md:block hover:scale-105 transition-all duration-300 shadow-md'>
                    Create Account
                </button>
            </div>
        </div>
    )
}

export default Navbar
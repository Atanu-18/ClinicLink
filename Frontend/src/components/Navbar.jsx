import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    //two state variable-- showMenu & token
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-cyan-400 '>
            <img src={assets.logo} alt="" className='w-44 cursor-pointer' />
            <ul className='hidden md:flex items-start gap-5 font-medium bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] bg-clip-text text-transparent text-xl font-medium'>
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
                {
                    token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img src={assets.profile_pic} alt="" className='w-8 rounded-full' />
                        <img src={assets.dropdown_icon} alt="" className='w-2.5' />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block shadow-lg'>
                            <div className='min-w-48 bg-gradient-to-r from-[#4fbbed] to-[#43f484] text-white rounded flex flex-col gap-4 p-4'>
                                <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div> : <button onClick={() => navigate('/login')} className='bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] text-white cursor-pointer px-8 py-3 rounded-full font-semibold hidden md:block hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl'>
                        Create Account
                    </button>
                }

            </div>
        </div>
    )
}

export default Navbar
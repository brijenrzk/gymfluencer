import React from 'react'
import { appleImg, bagImg, searchImg } from "../utils"
import Image from 'next/image'
import { navLists } from '@/constants'
const Navbar = () => {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width justify-center items-center'>
                <h2>GymFluencer.</h2>
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((nav, i) => (
                        <div className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' key={nav}>{nav}</div>
                    ))}
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <Image src={searchImg} alt="Search" width={18} height={18} />
                    <button className='btn'>Login</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
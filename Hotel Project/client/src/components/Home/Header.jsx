import { useState, useEffect, useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext'
import useScroll from '../../hooks/useScroll'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Header = () => {
    const [scrolled] = useScroll()



    const { isMobile, isOpen, openSidebar } = useContext(SidebarContext)
    return (
        <header className={`w-full h-[50px] ${scrolled ? "bg-white fixed" : "bg-transparent"} absolute transition-all duration-500 min-[375px]:flex min-[375px]:items-center min-[375px]:justify-around  `} id="navbar">
            <div className="flex justify-between items-center w-11/12">
                <h1 className={`text-2xl font-light ${scrolled ? "text-cyan-400" : "text-white"}`}>Hotel Goa</h1>
                {isMobile ? (
                    <button className="" onClick={openSidebar}>
                        {scrolled ? (

                            <img src="/burger_menu(grey).svg" className='w-[35px]' />


                        ) : (

                            <img src="/burgerMenu.svg" alt="BurgerMenu" className='w-[35px]' />


                        )}

                    </button>
                ) : (
                    <nav className="flex gap-15 items-center">
                        <a href="#" className={`${scrolled ? "text-gray-900" : "text-white"} hover:text-gray-900`}>Home</a>
                        <a href="#" className={`${scrolled ? "text-gray-900" : "text-white"} hover:text-gray-900`}>Rooms</a>
                        <a href="#" className={`${scrolled ? "text-gray-900" : "text-white"} hover:text-gray-900`}>Contact</a>
                        <a href="#" className={`${scrolled ? "text-gray-900" : "text-white"} hover:text-gray-900`}>Gallery</a>
                        <Link className="w-[170px]">
                            <button className="bg-[#deb86d] w-full flex items-center justify-center gap-2 pb-2 pt-2 text-white uppercase font-bold">
                                <img src="/calendar.svg" alt="" />
                                book online
                            </button>
                        </Link>
                    </nav>
                )}


                <Sidebar />

            </div>
        </header>
    )
}

export default Header
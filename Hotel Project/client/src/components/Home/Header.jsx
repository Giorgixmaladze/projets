import { useState, useEffect, useContext } from 'react'
import { SidebarContext } from '../../context/SidebarContext'
import useScroll from '../../hooks/useScroll'

const Header = () => {
    const [scrolled] = useScroll()



    const { isMobile } = useContext(SidebarContext)
    return (
        <header className={`w-full h-[50px] ${scrolled ? "bg-white fixed" : "bg-transparent"} absolute transition-all duration-500 min-[375px]:flex min-[375px]:items-center min-[375px]:justify-around  `} id="navbar">
            <div className="flex justify-between items-center w-11/12">
                <h1 className={`text-2xl font-light ${scrolled ? "text-cyan-400" : "text-white"}`}>Hotel Goa</h1>
                {isMobile ? (
                    <button className="">
                        {scrolled ? (
                            <img src="/burger_menu(grey).svg" className='w-[35px]' />
                        ) : (
                            <img src="/burgerMenu.svg" alt="BurgerMenu" className='w-[35px]' />
                        )}

                    </button>
                ) : (
                    <nav className="flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Rooms</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header
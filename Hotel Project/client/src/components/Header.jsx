import { useState, useEffect, useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'

const Header = () => {
   const {isMobile} = useContext(SidebarContext)
    return(
        <header className="w-full pl-4 pt-4 bg-transparent">
            <div className="flex justify-around items-center">
                <h1 className="text-2xl font-light text-white">Hotel Goa</h1>
                {isMobile ? (
                    <button className="">
                        
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
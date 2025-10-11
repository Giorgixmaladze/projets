import { createContext, useState, useEffect } from "react";
export const SidebarContext = createContext()


const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState()
    const [isMobile, setIsMobile] = useState(false)
    const openSidebar = () => setIsOpen(true)

    const closeSidebar = () => setIsOpen(false)


    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Check initial screen size
        checkScreenSize()
        
        // Add event listener
        window.addEventListener('resize', checkScreenSize)

        // Cleanup function
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])




    return (
        <SidebarContext.Provider value={{ openSidebar, closeSidebar, isOpen, isMobile }} >{children}</SidebarContext.Provider>
    )
}


export default SidebarProvider
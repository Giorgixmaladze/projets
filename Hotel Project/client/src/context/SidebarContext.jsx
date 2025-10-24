import { createContext, useState } from "react";
import { useEffect } from "react";
export const SidebarContext = createContext()


const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const openSidebar = () => setIsOpen(true)

    const closeSidebar = () => setIsOpen(false)


    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }

       
        checkScreenSize()
        
        
        window.addEventListener('resize', checkScreenSize)

        
    }, [])




    return (
        <SidebarContext.Provider value={{ openSidebar, closeSidebar, isOpen, isMobile }} >{children}</SidebarContext.Provider>
    )
}


export default SidebarProvider
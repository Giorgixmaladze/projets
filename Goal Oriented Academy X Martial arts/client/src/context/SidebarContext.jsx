import { createContext } from "react";
import { useState } from "react";
export const sidebarContext = createContext()

const SidebarProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)


    const openSidebar = () => setSidebar(true)

    const closeSidebar = () => setSidebar(false)

    return <sidebarContext.Provider value={{ openSidebar,closeSidebar,sidebar }}>{children}</sidebarContext.Provider>
}

export default SidebarProvider
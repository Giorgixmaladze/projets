import { useContext } from "react"
import "../../styles/sidebarAnimation.css"
import { SidebarContext } from "../../context/SidebarContext"
import NavToPage from "./NavPage"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const { isOpen, closeSidebar } = useContext(SidebarContext)

    return (
        <div className={`bg-[rgba(0,0,0,0.3)] ${isOpen ? "w-screen h-screen" : "w-0 h-0"} fixed top-0 left-0 `}>
            <div className={`${isOpen ? "w-7/12" : "w-0"} bg-white h-full fixed right-0 sidebar pt-5 transition-all duration-300`}>
                <div className={`${isOpen ? "flex" : "hidden"} justify-center border-b border-b-gray-400 pb-5 transition-all duration-1000`}>
                    <h2 className="uppercase text-gray-500 text-[20px]">menu</h2>

                </div>

                <div className="w-11/12 flex justify-end items-center pt-5">
                    <button onClick={closeSidebar}>
                        <img src="/close.svg" alt="" className="w-[40px]" />
                    </button>
                </div>
                <nav className="pt-5 flex flex-col gap-8">
                    <div>
                        <NavToPage page="Home" sidebar={isOpen} />
                        <NavToPage page="Rooms" sidebar={isOpen} />
                        <NavToPage page="Contact Us" sidebar={isOpen} />
                        <NavToPage page="Gallery" sidebar={isOpen} />
                    </div>
                    {isOpen && (
                        <div className="flex justify-center">
                            <Link className="w-11/12">
                                <button className="bg-[#deb86d] w-full flex items-center justify-center gap-2 pb-3 pt-3 text-white uppercase font-bold">
                                    <img src="/calendar.svg" alt="" />
                                    book online
                                </button>
                            </Link>
                        </div>
                    )}

                </nav>
            </div>
        </div>
    )
}
export default Sidebar
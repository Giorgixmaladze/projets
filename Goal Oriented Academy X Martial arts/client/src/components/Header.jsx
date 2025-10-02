
import { useContext } from "react"
import Sidebar from "./Sidebar"
import { sidebarContext } from "../context/SidebarContext"

const Header = ({ txt }) => {
    const { openSidebar, sidebar,closeSidebar } = useContext(sidebarContext)
    return (

        <header className="min-[375px]:h-[70px] min-[375px]:w-full bg-gray-950 min-[375px]:flex min-[375px]:items-center min-[375px]:justify-around">
            <img src="#logo" alt="" />
            <h1 className="text-[20px] font-bold bg-gradient-to-r from-green-900 to-green-200 bg-clip-text text-transparent glow">
                {txt}
            </h1>

            <div className="min-[375px]:flex min-[375px]:items-center">
                <div className="min-[375px]:hidden min-[768px]:flex">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>

                        <button>Register</button>
                        <button>Goa Matial Arts</button>
                    </nav>
                </div>
                {sidebar?(
                   
                   <button onClick={closeSidebar}>
                    <img src="/Home/close(white).png" alt="" />
                   </button>
                ):(<button onClick={openSidebar}>
                    <img src="/Home/burger-menu(white).png"  alt="" />
                </button> )}
                
            </div>
            {sidebar && <Sidebar />}


        </header>
    )


}


export default Header
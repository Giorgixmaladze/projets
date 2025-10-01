
import { useContext } from "react"
import Sidebar from "./Sidebar"
import { sidebarContext } from "../context/SidebarContext"

const Header = ({ txt }) => {
    const {openSidebar,sidebar} = useContext(sidebarContext)
    return (

        <header className="min-[375px]:h-[70px] min-[375px]:w-full bg-[#0f0b0a] border-b-[1px] border-[#0a3f07] ">
            <img src="#logo" alt="" />
            <h1>{txt}</h1>

            <div>
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
                <button onClick={openSidebar}>Open sidebar</button>
            </div>
            {sidebar && <Sidebar/>}


        </header>
    )


}


export default Header
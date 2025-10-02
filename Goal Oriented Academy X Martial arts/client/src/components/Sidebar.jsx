import { useContext } from "react"
import { sidebarContext } from "../context/SidebarContext"

const Sidebar = () =>{
    const {closeSidebar} = useContext(sidebarContext)


    return (
        <div className="min-[375px]:w-full min-[375px]:h-full bg-[#0f0b0ade] absolute top-[70px]">

            <div>
                <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Register</li>
                </ul>
                <button>Goa Matial Arts</button>
            </nav>
            </div>
            
            
        </div>
    )
}


export default Sidebar
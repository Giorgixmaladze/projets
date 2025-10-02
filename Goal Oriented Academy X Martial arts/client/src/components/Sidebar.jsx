import { useContext } from "react"
import { sidebarContext } from "../context/SidebarContext"

const Sidebar = () => {
    const { closeSidebar } = useContext(sidebarContext)


    return (
        <div className="min-[375px]:w-full min-[375px]:h-full bg-[#0f0b0ade] absolute top-[70px] flex items-baseline justify-center pt-[50px] ">
            <div className="flex items-center gap-[30px]">

                <img src="/Home/goa.png" className="w-[200px]" alt="" />

                <div>
                    <nav>
                        <ul className="text-white text-1xl flex flex-col ">
                            <li><button className="w-[80px] h-[35px] border-[1px] border-green-950 bg-transparent shadow-[0_0_10px_black]">Home</button></li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Register</li>
                        </ul>
                        <button className="text-[20px] font-bold bg-gradient-to-r from-red-800  to-gray-800 bg-clip-text text-transparent shine">Goa Matial Arts</button>
                    </nav>
                </div>
            </div>



        </div>
    )
}


export default Sidebar
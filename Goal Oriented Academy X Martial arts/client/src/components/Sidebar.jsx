import { useContext } from "react"
import { sidebarContext } from "../context/SidebarContext"
import { AuthContext } from "../context/context"

const Sidebar = () => {
    const { closeSidebar } = useContext(sidebarContext)
    const {changePage,page} = useContext(AuthContext)

    return (
        <div className="min-[375px]:w-full min-[375px]:h-full bg-[#0f0b0ac5] absolute top-[70px] flex items-baseline justify-center pt-[50px] ">
            <div className="flex items-center gap-[30px]">

                <img src="/Home/goa.png" className="w-[200px]" alt="" />

                <div>
                    <nav>
                        <ul className="text-white text-1xl flex flex-col ">
                            <li><button onClick={changePage} className={`w-[80px] h-[35px] border-[1px]${page==="Home" && "border-green-950 bg-transparent shadow-[inset_0_0_7px_green]"}`}>Home</button></li>
                            <li><button onClick={changePage} className={`w-[80px] h-[35px] border-[1px]${page==="About" && "border-green-950 bg-transparent shadow-[inset_0_0_7px_green]"}`}>About</button></li>
                            <li><button onClick={changePage} className={`w-[80px] h-[35px] border-[1px]${page==="Contact" && "border-green-950 bg-transparent shadow-[inset_0_0_7px_green]"}`}>Contact</button></li>
                            <li><button onClick={changePage} className={`w-[80px] h-[35px] border-[1px]${page==="Register" && "border-green-950 bg-transparent shadow-[inset_0_0_7px_green]"}`}>Register</button></li>
                        </ul>
                        <button className="text-[20px] font-bold bg-gradient-to-r from-red-800  to-white bg-clip-text text-transparent shine">Goa Matial Arts</button>
                    </nav>
                </div>
            </div>



        </div>
    )
}


export default Sidebar
import { useContext } from "react"
import { AuthContext } from "../context/context"

const Header = () => {

    const {dark,toggleDarkMode} = useContext(AuthContext)
    
    return (
        <header className='w-screen flex items-center justify-center min-[375px]: h-[64px]'>
            <div className='flex justify-between min-[375px]: w-10/12'>
                <span className='flex min-[375px]: gap-[10px]'>
                    <img className='min-[375px]: w-[30px] ' src="public/images/Group2.png" />
                    <h2 className={`${dark ? ("text-white") : ("text-black")} font-semibold min-[375px]: text-[23px]`}>Character Counter</h2>
                </span>
                <button className={`${dark ? ("bg-transparent") : ("bg-gray-200")} flex justify-center items-center rounded-[5px] min-[375px]: w-[32px] min-[375px]:h-[32px]`}
                    onClick={toggleDarkMode}

                >
                    {dark ? (
                        <img src="/images/light-mode.png" alt="Light Mode" />
                    ) : (
                        <span className="material-symbols-outlined">
                            dark_mode
                        </span>
                    )}

                </button>
            </div>
        </header>
    )
}
export default Header
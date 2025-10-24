import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"

const NavToPage = ({ page, sidebar }) => {
    const { changePage, currPage } = useContext(AuthContext)

    return (
        sidebar && (
            <div className="">
                <Link to="/" className="w-full">
                    <button
                        className={`w-full flex items-center justify-center ${currPage === page?"text-[#e2b86d] bg-[#f5f5f5]":"text-gray-600"} pt-3 pb-3 border-b border-b-gray-300 font-semibold text-[20px]`}
                        onClick={changePage}>
                        {page}
                    </button>
                </Link>
            </div>
        )

    )
}

export default NavToPage
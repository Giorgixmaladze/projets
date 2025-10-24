import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const [currPage,setCurrPage] = useState("")


    const changePage = (e) =>{
        setCurrPage(e.target.textContent)
        console.log(currPage)
    }

    return(
        <AuthContext.Provider value={{currPage,changePage}} >{children}</AuthContext.Provider>
    )
}

export default AuthProvider
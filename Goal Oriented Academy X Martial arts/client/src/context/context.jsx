import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [page,setPage] = useState("Home")
    const changePage = (e) =>{
        setPage(e.target.textContent)
    }


    return (
        <AuthContext.Provider value={{changePage,page}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
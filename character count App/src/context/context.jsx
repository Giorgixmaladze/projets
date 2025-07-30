import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [eachCount,setEachCount] = useState([])
    const eachCharCount = (text) => {
    
        const obj = {};
        for (const char of text) {
            obj[char] = (obj[char] || 0) + 1;
        }

        const sortedObj = Object.entries(obj).sort((a,b) =>{
            return b[1]-a[1]
        })

        setEachCount(sortedObj)
   
    }


    return (
        <AuthContext.Provider value={{eachCount, eachCharCount }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
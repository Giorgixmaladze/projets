import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const eachCharCount = (text) => {
    
        const obj = {};
        for (const char of text) {
            obj[char] = (obj[char] || 0) + 1;
        }

        const sortedObj = Object.entries(obj).sort((a,b) =>{
            return b[1]-a[1]
        })
        console.log(sortedObj);
    }


    return (
        <AuthContext.Provider value={{ eachCharCount }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
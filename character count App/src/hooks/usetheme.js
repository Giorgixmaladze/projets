import { useState } from "react"

const useTheme = () =>{
    const[dark, setDark] = useState(false)
    
    const toggleDarkMode = () =>{
        setDark(!dark)
        console.log(dark)
    }
    return [dark,toggleDarkMode]
}

export default useTheme
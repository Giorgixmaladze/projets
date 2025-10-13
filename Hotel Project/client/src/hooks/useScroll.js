import { useEffect, useState } from "react"

const useScroll = (pixel = 50) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > pixel)
        }
        
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        
    }, [pixel])

    return [scrolled]
}

export default useScroll
import { createContext, useState } from "react";
import useTheme from "../hooks/usetheme";
import { useEffect } from "react";
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [characterCount, setCharacterCount] = useState(0)
    const [text, setText] = useState("")
    const [spacesCount, setSpacesCount] = useState(0)
    // theme change
    const [dark, toggleDarkMode] = useTheme()


    // exclude spaces

    const [spacesExcluded, setSpacesExcluded] = useState(false)


    const exclude = () => {
        setSpacesExcluded(!spacesExcluded)
    }
    useEffect(() => {
        if (spacesExcluded) {
            let count = 0
            for (let i of text) {
                if (i === " ") count += 1
            }
            setSpacesCount(count)
        } else {
            setSpacesCount(0)
        }
    }, [text, spacesExcluded])


    const [eachCount, setEachCount] = useState([])
    const eachCharCount = (text) => {

        const obj = {};
        for (const char of text) {
            obj[char] = (obj[char] || 0) + 1;
        }

        const sortedObj = Object.entries(obj).sort((a, b) => {
            return b[1] - a[1]
        })

        setEachCount(sortedObj)

    }


    const [wordsCount, setWordsCount] = useState(0)
    const [sentencesCount, setSentencesCount] = useState(0)
    useEffect(() => {
        if (text.trim() === "") {
            setWordsCount(0)
            setSentencesCount(0)
        } else {
            const words = text.split(' ').filter(word => word !== '').length
            const sentences = text.split(".").filter(sentence => sentence.trim() !== '').length
            setWordsCount(words)
            setSentencesCount(sentences)
        }
    }, [text])



    //character limit

    const [limit, setLimit] = useState(false)
    const [maxLimit, setMaxLimit] = useState(0)


    const toggleLimit = () => {
        setLimit(!limit)
    }

    const handleLimit = (e) => {
        e.preventDefault()
        setMaxLimit(e.target.lim.value)
    }



    return (
        <AuthContext.Provider value={{ characterCount, setCharacterCount, text, setText, spacesCount, setSpacesCount, eachCount, eachCharCount, dark, toggleDarkMode, spacesExcluded,exclude, wordsCount, sentencesCount, limit, toggleLimit, handleLimit, maxLimit, setMaxLimit }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
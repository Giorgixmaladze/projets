import { useContext, useEffect, useState } from 'react'
import useTheme from './hooks/usetheme'
import { AuthContext } from './context/context'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [characterCount, setCharacterCount] = useState(0)
  const [text, setText] = useState("")
  const [spacesCount, setSpacesCount] = useState(0)

  // theme change
  const [dark, toggleDarkMode] = useTheme()

  const { eachCount, eachCharCount } = useContext(AuthContext)


  // exclude spaces

  const [spacesExcluded, setSpacesExcluded] = useState(false)

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

  
  // words and sentence count

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







  return (
    <div className={`${dark ? "bg-[#121a25]" : ''} w-screen min-h-screen flex flex-col min-[375px]:gap-[50px] pt-10 items-center`}>

      {/* Header */}
      <Header />



      {/* main */}
      <Main />


    </div>
  )
}

export default App

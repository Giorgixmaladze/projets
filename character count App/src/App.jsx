import { useEffect, useState } from 'react'
import useTheme from './hooks/usetheme'

function App() {

  const [characterCount, setCharacterCount] = useState(0)
  const [text, setText] = useState("")
  const [spacesCount, setSpacesCount] = useState(0)
  // theme change
  const [dark, toggleDarkMode] = useTheme()



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

  const exclude = () => {
    setSpacesExcluded(!spacesExcluded)
  }
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
    <div className={`${dark ? "bg-black" : ''} w-screen h-screen flex flex-col min-[375px]:gap-[50px]`}>

      {/* Header */}
      <header className='w-screen flex items-center justify-center min-[375px]: h-[64px]'>
        <div className='flex justify-between min-[375px]: w-10/12'>
          <span className='flex min-[375px]: gap-[10px]'>
            <img className='min-[375px]: w-[30px] ' src="public/images/Group2.png" />
            <h2 className='font-semibold min-[375px]: text-[23px]'>Character Counter</h2>
          </span>
          <button className='bg-gray-200 flex justify-center items-center rounded-[5px] min-[375px]: w-[32px] min-[375px]:h-[32px]'
            onClick={toggleDarkMode}

          >
            <span className="material-symbols-outlined">
              dark_mode
            </span>
          </button>
        </div>
      </header>



      {/* main */}
      <main className='w-screen flex min-[375px]:flex-col min-[375px]:items-center min-[375px]: gap-[50px]'>

        <div className='flex min-[375px]: w-11/12 min-[375px]: flex-col min-[375px]:gap-[40px] '>
          <h1 className='font-semibold min-[375px]:text-[45px] min-[375px]:text-center'>Analyze your text in real-time.</h1>
          <div className='flex min-[375px]:flex-col min-[375px]: gap-[20px]'>
            <textarea name='userInput' maxLength={limit && maxLimit} onChange={(e) => {
              setCharacterCount(e.target.value.length)
              setText(e.target.value)
            }} className='min-[375px]: w-full min-[375px]: h-[200px] border border-gray-300 bg-gray-100 outline-0 min-[375px]:rounded-[10px] min-[375px]:text-[20px]' />
            <div className=' flex min-[375px]: flex-col min-[375px]:gap-[10px] '>
              <span className='flex min-[375px]: gap-[10px]' >
                <input type="checkbox" onClick={exclude} name='spaceExclude' id='exclude' />
                <label htmlFor="exclude">Exclude Spaces</label>
              </span>
              <span className='flex min-[375px]: gap-[10px]'  >
                <input type="checkbox" onClick={toggleLimit} name='characterLimit' id='limit' />
                <label htmlFor="limit">Set Character Limit</label>
                {
                  limit && (
                    <form onSubmit={handleLimit}>
                      <input type="number" name='lim' className='border border-gray-300' />
                      <button>Set</button>
                    </form>

                  )
                }
              </span>
              <p>Approx. reading time:{characterCount > 100 ? (">1 minute") : "< 1minute"}</p>
            </div>
          </div>
        </div>


        {/* divs */}
        <div className='w-screen flex min-[375px]: flex-col min-[375px]:items-center min-[375px]: gap-[20px]  '>
          <div className="bg-[url('public/images/shape-95.png')] bg-no-repeat min-[375px]:bg-right min-[375px]: w-11/12 min-[375px]:h-[130px] bg-purple-400 min-[375px]:rounded-[10px] min-[375px]: pt-[10px] min-[375px]:pl-[20px]">
            <h2 className='min-[375px]:text-[40px]'>{spacesExcluded ? (characterCount - spacesCount) : characterCount}</h2>
            <p className='min-[375px]:text-[28px]'>Total characters</p>
          </div>
          <div className="bg-[url('public/images/shape-29.png')] bg-no-repeat min-[375px]:bg-right min-[375px]: w-11/12 min-[375px]:h-[130px] bg-yellow-500 min-[375px]:rounded-[10px] min-[375px]: pt-[10px] min-[375px]:pl-[20px]">
            <h2 className='min-[375px]:text-[40px]'>{wordsCount}</h2>
            <p className='min-[375px]:text-[28px]'>Word Count</p>
          </div>

          <div className="bg-[url('public/images/shape-111.png')] bg-no-repeat min-[375px]:bg-right min-[375px]: w-11/12 min-[375px]:h-[130px] bg-orange-400 min-[375px]:rounded-[10px] min-[375px]: pt-[10px] min-[375px]:pl-[20px]">
            <h2 className='min-[375px]:text-[40px]'>{sentencesCount}</h2>
            <p className='min-[375px]:text-[28px]'>Sentence Count</p>
          </div>
        </div>



      </main>



    </div>
  )
}

export default App

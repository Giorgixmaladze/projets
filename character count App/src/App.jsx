import { useContext, useEffect, useState } from 'react'
import useTheme from './hooks/usetheme'
import { AuthContext } from './context/context'

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
    <div className={`${dark ? "bg-[#121a25]" : ''} w-screen min-h-screen flex flex-col min-[375px]:gap-[50px] pt-10 items-center`}>

      {/* Header */}
      <header className='w-screen flex items-center justify-center min-[375px]: h-[64px]'>
        <div className='flex justify-between min-[375px]: w-10/12'>
          <span className='flex min-[375px]: gap-[10px]'>
            <img className='min-[375px]: w-[30px] ' src="public/images/Group2.png" />
            <h2 className={`${dark?("text-white"):("text-black")} font-semibold min-[375px]: text-[23px]`}>Character Counter</h2>
          </span>
          <button className={`${dark?("bg-transparent"):("bg-gray-200")} flex justify-center items-center rounded-[5px] min-[375px]: w-[32px] min-[375px]:h-[32px]`}
            onClick={toggleDarkMode}

          >
            {dark ? (
              <img src="/images/light-mode.png" alt="Light Mode" />
            ) : (
              <span className="material-symbols-outlined">
                dark_mode
              </span>
            )}

          </button>
        </div>
      </header>



      {/* main */}
      <main className='w-screen flex min-[375px]:flex-col min-[375px]:items-center min-[375px]: gap-[50px] min-xl:w-7/12'>

        <div className='flex min-[375px]: w-11/12 min-[375px]: flex-col min-[375px]:gap-[40px] '>
          <h1 className={`${dark?("text-white"):("text-black")} font-semibold min-[375px]:text-[45px] min-[375px]:text-center min-md:text-[70px]`}>Analyze your text in real-time.</h1>
          <div className='flex min-[375px]:flex-col min-[375px]: gap-[20px]'>
            <textarea name='userInput' maxLength={limit ? maxLimit : undefined} onChange={(e) => {
              setCharacterCount(e.target.value.length)
              setText(e.target.value)
              eachCharCount(e.target.value)
            }} className='min-[375px]: w-full min-[375px]: h-[200px] border border-gray-300 bg-gray-100 outline-0 min-[375px]:rounded-[10px] min-[375px]:text-[20px]' />
            <div className=' flex min-[375px]: flex-col min-[375px]:gap-[10px] min-md:flex-row min-md:gap-[50px]'>
              <span className='flex min-[375px]: gap-[10px]' >
                <input type="checkbox" onClick={exclude} name='spaceExclude' id='exclude' />
                <label className={`${dark?("text-white"):("text-black")} `} htmlFor="exclude">Exclude Spaces</label>
              </span>
              <span className='flex min-[375px]: gap-[10px]'  >
                <input type="checkbox" onClick={toggleLimit} name='characterLimit' id='limit' />
                <label className={`${dark?("text-white"):("text-black")} `} htmlFor="limit">Set Character Limit</label>
                {
                  limit && (
                    <form onSubmit={handleLimit}>
                      <input  type="number" name='lim' className={`${dark?("text-white"):("text-black")} border border-gray-300`} />
                      <button className={`${dark?("text-white"):("text-black")} `}>Set</button>
                    </form>

                  )
                }
              </span>
              <p className={`${dark?("text-white"):("text-black")}`}>Approx. reading time:{characterCount > 100 ? (">1 minute") : "< 1minute"}</p>
            </div>
          </div>
        </div>


        {/* divs */}
        <div className='w-screen flex min-[375px]: flex-col min-[375px]:items-center min-[375px]: gap-[20px] min-md:flex-row min-md:w-11/12'>
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

        {/*letter density*/}
        <div className='w-screen min-[375px]:pl-[20px] font-semibold min-xl:w-7/12' >
          <div className='w-11/12'>
            <h2 className={`min-[375px] text-[31px] ${dark?("text-white"):("text-black")}`}>Letter Density</h2>
          </div>

          <div className='flex items-center flex-col w-full gap-[20px] pt-8'>
            {eachCount.map((char, index) => {
              return (
                <div key={index} className='flex justify-evenly w-full items-center'>
                  <p className={`${dark?("text-white"):("text-black")} font-medium text-[20px]`}>{char[0]}</p>
                  <div className={`${dark?("bg-[#21222c]"):("bg-gray-200")}  rounded-[10px]  w-8/12 h-[12px]`}>
                    <div className='rounded-[10px] bg-[#d79df7] h-full' style={{ width: `${(char[1] / characterCount) * 100}%` }}>

                    </div>
                  </div>
                  <p className={`${dark?("text-white"):("text-black")} font-medium text-[20px]`}>{char[1]}({((char[1] / characterCount) * 100).toFixed(2)}%)</p>
                </div>
              )
            })}
          </div>
        </div>

      </main>



    </div>
  )
}

export default App

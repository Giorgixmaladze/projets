import { useContext } from "react"
import Divs from "./Divs"
import Letters from "./Letters"
import { AuthContext } from "../context/context"

const Main = () =>{
    const{dark,maxLimit,limit,setCharacterCount,setText,eachCharCount,exclude,toggleLimit,handleLimit,characterCount} = useContext(AuthContext)

    return(
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
        <Divs />

        {/*letter density*/}
        <Letters/>
                
        </main>
    )
}

export default Main
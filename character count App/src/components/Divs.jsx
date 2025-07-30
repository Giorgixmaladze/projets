import { useContext } from "react"
import { AuthContext } from "../context/context"

const Divs = () =>{
    const {characterCount,spacesCount,spacesExcluded,wordsCount,sentencesCount} = useContext(AuthContext)
    return(
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

    )
}
export default Divs
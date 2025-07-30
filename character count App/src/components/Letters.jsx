import { useContext } from "react"
import { AuthContext } from "../context/context"

const Letters = () =>{
    const{characterCount,dark,eachCount} = useContext(AuthContext)

    return (
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
    )
}

export default Letters
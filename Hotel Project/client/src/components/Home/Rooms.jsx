import { useEffect } from "react"
import { fetchData } from "../../utils/fetchData"
import { useState } from "react"
const Rooms = () =>{
    const [rooms,setRooms] = useState([])
    useEffect(() => {
        fetchData("http://localhost:3000/rooms").then((data) => {
            setRooms(data)
        })
    }, [])

    return(
        <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:justify-center min-[375px]:gap-4 pt-[130px]">
            <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:justify-center min-[375px]:gap-4">
               <h2 className="uppercase font-semibold text-[20px] text-[#deb872]">Our Favorite Rooms</h2> 
               <p className="text-gray-500">Check out our rooms and book your favorite one</p>
            </div>
            <div>
                {
                    rooms.map((room,index) =>{
                        return(
                            <div key={index}>
                                <img src={room.image} alt="" />
                                <h3>{room.name}</h3>
                                <p>{room.price}</p>
                                <button>View Details</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Rooms
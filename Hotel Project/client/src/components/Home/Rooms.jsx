import { useEffect } from "react"
import { fetchData } from "../../utils/fetchData"
import { useState } from "react"
const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetchData("http://localhost:3000/rooms").then((data) => {
            setRooms(data)
        })
    }, [])

    return (
        <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:justify-center min-[375px]:gap-4 pt-[130px]">
            <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:justify-center min-[375px]:gap-4">
                <h2 className="uppercase font-semibold text-[20px] text-[#deb872]">Our Favorite Rooms</h2>
                <p className="text-gray-500">Check out our rooms and book your favorite one</p>
            </div>
            <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:gap-15" >
                {
                    rooms.map((room, index) => {
                        return (
                            <div key={index} className="w-11/12 flex min-[375px]:flex-col min-[375px]:items-center bg-gray-100 border min-[375px]:gap-[30px] border-gray-100 pb-5">
                                <img src={room.image} alt="" />
                                <span className="flex w-full min-[375px]:items-center gap-7 min-[375px]:justify-around">
                                    <span className="flex flex-col gap-2">
                                        <h3 className="text-gray-500 text-[18px] font-semibold">{room.name}</h3>
                                        <p className="text-gray-700">${room.price} / Night</p>
                                    </span>

                                    <button className="min-[375px]:w-[107px] min-[375px]:h-[30px] bg-[#deb86d] text-white font-semibold">View Details</button>
                                </span>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Rooms
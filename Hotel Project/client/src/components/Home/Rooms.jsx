import { useEffect } from "react"
import { fetchData } from "../../utils/fetchData"
import { useState } from "react"
import RoomCard from "./RoomCard"
const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetchData("http://localhost:3000/rooms").then((data) => {
            setRooms(data.slice(0,4))
        })
    }, [])

    return (
        <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:justify-center min-[375px]:gap-4 pt-[130px]">
            <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:justify-center min-[375px]:gap-4">
                <h2 className="uppercase font-semibold min-[375px]:text-[20px] text-[#deb872] min-md:text-4xl min-md:font-bold">Our Favorite Rooms</h2>
                <p className="text-gray-500 min-md:text-[18px]">Check out our rooms and book your favorite one</p>
            </div>
            <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:gap-15 min-lg:grid min-lg:grid-cols-2 min-lg:gap-5 min-lg:justify-items-center min-lg:pt-8" >
                {
                    rooms.map((room, index) => {
                        return (
                            <RoomCard index={index} room={room} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Rooms
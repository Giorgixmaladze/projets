
const RoomCard = ({ index,room}) => {

    return (
        <div key={index} className="w-11/12 flex min-[375px]:flex-col min-[375px]:items-center bg-gray-100 border min-[375px]:gap-[30px] border-gray-100 pb-5">
            <img src={room.image} alt="" />
            <span className="flex w-full min-[375px]:items-center gap-7 min-[375px]:justify-around min-md:gap-50">
                <span className="flex flex-col gap-2">
                    <h3 className="text-gray-500 text-[18px] font-semibold">{room.name}</h3>
                    <p className="text-gray-700 min-lg:hidden">${room.price} / Night</p>
                </span>

                <button className="min-[375px]:w-[107px] min-[375px]:h-[30px] bg-[#deb86d] text-white font-semibold">View Details</button>
            </span>

        </div>
    )
}

export default RoomCard
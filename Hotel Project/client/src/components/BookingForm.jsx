const BookingForm = () => {
    return (
        <div className="bg-gray-100 w-11/12 min-[375px]:flex min-[375px]:justify-center min-[375px]:h-[55vh] min-[375px]:items-center  ">
            <form action="" className="min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-[15px] min-[375px]:w-11/12 ">
                <input type="email" name="email" placeholder="Your Email Address" className="min-[375px]:h-[45px] bg-[#e4e5e7] pl-4 pr-4 text-gray-500" />
                <select name="roomType" placeholder="Select Room Type" className="w-full h-[45px] bg-[#e4e5e7] pl-4 pr-10 text-gray-500 appearance-none outline-none ">
                    <option value="" disabled>Select Room Type</option>
                    <option value="single" className="w-4">Single Room</option>
                    <option value="double">Double Room</option>
                    <option value="deluxe">Deluxe Room</option>
                </select>

                <input
                    type="text"
                    name="arrivalDate"
                    placeholder="Arrival Date"
                    className="min-[375px]:h-[45px] bg-[#e4e5e7] pl-4 pr-4 text-gray-500"
                    onFocus={(e) => { e.target.type = 'date' }}
                    onBlur={(e) => { if (!e.target.value) { e.target.type = 'text' } }}
                />

                <input
                    type="text"
                    name="departureDate"
                    placeholder="Departure Date"
                    className="min-[375px]:h-[45px] bg-[#e4e5e7] pl-4 pr-4 text-gray-500"
                    onFocus={(e) => { e.target.type = 'date' }}
                    onBlur={(e) => { if (!e.target.value) { e.target.type = 'text' } }}
                />

                <select name="adults" placeholder="Adults" className="w-full min-[375px]:h-[45px] bg-[#e4e5e7] pl-4 pr-10 text-gray-500 appearance-none outline-none">
                    <option value="" disabled>Adults</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>


                <select name="children" placeholder="Children" className="w-full min-[375px]:h-[45px] bg-[#e4e5e7] pl-4 pr-10 text-gray-500 appearance-none outline-none">
                    <option value="" disabled>Children</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>


                </select>

                <button className="min-[375px]:h-[45px] min-[375px]:w-full bg-[#deb86d] text-white font-semibold">BOOK A ROOM</button>
            </form>
        </div>
    )
}

export default BookingForm
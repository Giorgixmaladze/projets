import BookingForm from "../../components/Home/BookingForm"
import Rooms from "../../components/Home/Rooms"
import Services from "../../components/Home/Services"
const HomeMain = () => {
    return (
        <div className="min-[375px]:flex min-[375px]:flex-col ">
            <div className="min-[375px]:pt-20 min-[375px]:flex min-[375px]:justify-center">
                <BookingForm />
            </div>
            <div className="flex min-[375px]:flex-col min-[375px]:gap-30">
                <Rooms />
                <Services />
            </div>

        </div>
    )
}

export default HomeMain
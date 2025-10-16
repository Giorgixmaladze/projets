import BookingForm from "../../components/Home/BookingForm"
import Rooms from "../../components/Home/Rooms"
const HomeMain = () =>{
    return(
        <div className="min-[375px]:flex min-[375px]:flex-col ">
            <div className="min-[375px]:pt-5 min-[375px]:flex min-[375px]:justify-center">
              <BookingForm />  
            </div>
            <Rooms />
        </div>
    )
}

export default HomeMain
import Header from "../../components/Header"

const HomeIntro = () =>{
    return(
        <div>
            <div className="h-screen bg-[url('/home/zante.jpg')] bg-cover bg-center bg-no-repeat">
                 <Header />
                <div className="w-full h-full bg-[rgba(245,40,145,0.35)] min-[375px]:flex min-[375px]: flex-col min-[375px]:items-center min-[375px]:justify-center">
                   
                   <div className="min-[375px]:flex min-[375px]:items-center min-[375px]:flex-col">
                        <h2 className="font-semibold text-2xl text-white uppercase">Modern & Spacious Rooms</h2>
                        <p className="font-light text-gray-200">Enjoy your holidays at the Goa Hotel</p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default HomeIntro
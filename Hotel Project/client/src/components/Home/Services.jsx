import { useEffect } from "react"

const Services = () =>{
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetchData("http://localhost:3000/services").then((data) => {
            setServices(data)
        })
    },[])

    return(
        <div className="bg-[#f5f5f5]">
            <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:justify-center min-[375px]:gap-4 min-[375px]:pt-20">
                <h2 className="uppecrase  font-semibold text-[20px] text-[#deb872]">Our awesome services</h2>
                <p className="capitalize text-gray-500">Check out our services and use favourite one</p>
            </div>
            <div >
              
            </div>
        </div>
    )
}


export default Services
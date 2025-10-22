import { useEffect, useState } from "react"
import { fetchData } from "../../utils/fetchData"

import ServiceCard from "./ServiceCards"


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetchData("http://localhost:3000/services").then((data) => {
            setServices(data)
            if (data.length > 0) {
                setSelectedService(data[0])
            }
        })
    }, [])

    const [selectedService, setSelectedService] = useState(null)

    return (
        <div className="bg-[#f5f5f5] ">
            <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:justify-center min-[375px]:gap-4 min-[375px]:pt-20">
                <h2 className="uppecrase  font-semibold text-[20px] text-[#deb872]">Our awesome services</h2>
                <p className="capitalize text-gray-500">Check out our services and use favourite one</p>
            </div>
            <div className="min-[375px]: flex min-[375px]:flex-col min-[375px]: items-center min-[375px]:gap-10 min-[375px]:pt-10" >
                {selectedService && <img src={selectedService.image} alt={selectedService.name} className="min-[375px]:w-11/12 "/>}
                {services.map((service, index) => {
                    return <ServiceCard key={index} service={service} setSelectedService={setSelectedService} selectedService={selectedService}/>
                })}
            </div>
        </div>
    )
}


export default Services
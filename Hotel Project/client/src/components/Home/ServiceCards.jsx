import React from "react"

const ServiceCard = ({ service,setSelectedService,selectedService }) => {
    return (
        <div className={`${selectedService === service?"bg-gray-400":"bg-white"} w-11/12 shadow-md p-4 hover:shadow-lg cursor-pointer flex items-center gap-4 transition-all duration-200`} onClick={()=> setSelectedService(service)}>
            <img src={service.icon} alt={service.name} className="w-10 h-10 object-cover"/>
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
            </div>
        </div>
    )
}


export default ServiceCard


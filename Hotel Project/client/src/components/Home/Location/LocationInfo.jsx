import LocationHeader from "./LocationHeader"
import LocationMain from "./LocationMain"
const LocationInfo = () => {
    return(
        <div className="min-[375px]:flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:justify-center ">
            <LocationHeader />
            <LocationMain />
        </div>
    )
}

export default LocationInfo
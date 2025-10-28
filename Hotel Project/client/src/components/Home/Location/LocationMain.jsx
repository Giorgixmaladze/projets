import ContactInfo from "./ContactInfo"
import Form from "./Form"

const LocationMain = () => {
    return (
        <div className="min-[375px]:w-11/12 min-[375px]:pt-10 min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-8 min-lg:flex-row">
            <iframe
                title="Location map"

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25854.905243862493!2d73.83069021539552!3d15.370011793695591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa%2C%20India!5e0!3m2!1sen!2sge!4v1761384650718!5m2!1sen!2sge"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full min-[375px]:h-85 min-md:h-95 min-lg:w-90"
            ></iframe>
            <div className="min-lg:flex min-lg:flex-col gap-8 min-lg:w-8/12">
                <div className="min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-2 min-md:flex-row min-md:w-full min-md:justify-around">
                    <ContactInfo icon="/home/location.svg" text="123 Goa Street, Goa" />
                    <ContactInfo icon="/home/phone.svg" text="555-555-555" />
                    <ContactInfo icon="/home/email.svg" text="example@gmail.com" />
                </div>
                <Form />
            </div>

        </div>
    )
}


export default LocationMain
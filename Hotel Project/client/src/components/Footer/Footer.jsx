import ContactData from "./ContactData"

const Footer = () => {
    return (
        <footer className="bg-[#f9f9f9] min-[375px]:flex min-[375px]:flex-col min-[375px]:items-center min-[375px]:pt-10 min-[375px]:gap-7 ">
            <div className="min-[375px]:w-11/12 min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-8 min-md:items-center min-md:w-6/12">
                <h2 className={`min-[375px]:text-[35px] font-medium text-cyan-400`}>Hotel Goa</h2>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.

                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
            </div>
            <div className="min-md:flex min-md:w-11/12 justify-around">
                <div className="min-[375px]:11/12 min-md:w-5/12">
                    <h3 className="text-gray-600 min-[375px]:text-2xl font-semibold">Useful Links</h3>
                    <nav >
                        <ul className="min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-2 min-[375px]:pt-6">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Rooms</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Gallery</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="min-[375px]:w-11/12 min-md:w-5/12">
                    <h3 className="text-gray-600 min-[375px]:text-2xl font-semibold">Contact Us</h3>
                    <div className="min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-3 min-[375px]:pt-8 pb-10">
                        <ContactData icon="/location-gray.svg" text="Goa island" />
                        <ContactData icon="/phone-gray.svg" text="Phone: 555-555-555" />
                        <ContactData icon="/fax.svg" text="Fax: 800 123 3456" />
                        <ContactData icon="/email-gray.svg" text="Email: contact@gmail.com" />
                    </div>
                </div>



            </div>
        </footer>
    )
}

export default Footer
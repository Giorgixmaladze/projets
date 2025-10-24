import GoaInfoPictures from "./GoaInfoPictures"

const GoaInfo = () => {
    return (
        <div className="bg-[#0fc0f5]">
            <div className="min-[375px]:flex min-[375px]: justify-around pt-15">
                <GoaInfoPictures url={"https://marquishotels.in/wp-content/uploads/2019/06/North_Goa_Beach-1024x768.jpg"}/>
                <GoaInfoPictures url={"https://cf.bstatic.com/xdata/images/hotel/max1024x768/606152253.jpg?k=5cfa57a64919562035238b48bd8d4aa7f0e31328e6193451c3afb702738f46b4&o=&hp=1"}/>
            </div>
            <div>
                <h3 className="text-white font-bold text-[25px]">Goa Hotel</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
            </div>
        </div>
    )
}

export default GoaInfo
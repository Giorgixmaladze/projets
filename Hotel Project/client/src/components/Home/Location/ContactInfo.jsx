const ContactInfo  = ({icon,text}) =>{
    return(
        <div className="bg-[#deb872] min-[375px]:h-8 min-[375px]:flex min-[375px]:gap-2 min-[375px]:pl-3 items-center">
            <img src={icon}/>
            <p className="text-white">{text}</p>
        </div>
    )
}


export default ContactInfo
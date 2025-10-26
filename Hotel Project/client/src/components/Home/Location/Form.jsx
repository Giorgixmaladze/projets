const Form = () =>{
    return(
        <form className="min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-4">
            <input type="text" placeholder="Your Name" className="pl-3 border border-gray-300 min-[375px]:h-[45px] min-[375px]:w-full"/>
        <input type="email" placeholder="Your Email Address" className=" pl-3 border border-gray-300 min-[375px]:h-[45px] min-[375px]:w-full"/>
        <textarea placeholder="Your message" className="pl-3 border border-gray-300 min-[375px]:h-[100px] min-[375px]:w-full"/>
        <button className="bg-[#deb872] min-[375px]:h-[45px] min-[375px]:flex min-[375px]:items-center justify-center min-[375px]:gap-5 text-white uppercase font-semibold">
            <img src="/home/send.svg" alt="" />
            Send Message
        </button>
        
        </form>
        
    )
}
export default Form
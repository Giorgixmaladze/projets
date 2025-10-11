import Header from "../../components/Header"

const HomeIntro = () =>{
    return(
        <div>
            <div className="h-screen bg-[url('/home/zante.jpg')] bg-cover bg-center bg-no-repeat">
                 
                <div className="w-full h-full bg-[rgba(245,40,145,0.35)]">
                   <Header />
                </div>
            </div>
        </div>
    )
}

export default HomeIntro
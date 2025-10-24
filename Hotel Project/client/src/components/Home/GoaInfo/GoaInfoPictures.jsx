const GoaInfoPictures = ({ url }) => {
    return (
        <div className="w-[180px] h-[180px] bg-[#32cbfc] flex justify-center items-center rounded-[50%]">
            <img className="w-[150px] h-[150px] rounded-[50%]" src={url} alt="" />
        </div>
    )
}

export default GoaInfoPictures

export const changeBg = () =>{
    const images = ["/home/zante.jpg","/home/zante2.jpg","/home/zante3.jpg","/home/zante3.jpg"]
    const div = document.getElementById("change")
    if (!div) return
    const randomIndex = Math.floor(Math.random() * images.length)
    div.style.backgroundImage = `url(${images[randomIndex]})`
}

export const startBackgroundRotation = (intervalMs = 10000) => {
    // trigger once immediately, then repeat
    changeBg()
    const id = setInterval(changeBg, intervalMs)
    return id
}
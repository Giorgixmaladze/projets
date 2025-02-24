import { useState, useEffect } from 'react'
import light from "./images/light.png"
import dark from "./images/dark.png"
import Search from './components/Search'
import User from './components/User'



function App() {

  const [togg, setToggle] = useState("#141c2f")
  const [data,setData] = useState([])


  useEffect(() => {
    localStorage.setItem("color", togg)
  }, [togg])


  const handleChanger = () => {
    if (togg.toLowerCase() === "#141c2f") {
      setToggle("white")
    } else if (togg.toLowerCase() === "white") {
      setToggle("#141c2f")
    }
  }

  let color = {
    backgroundColor: togg
  }
  return (
    <div id='container' style={{ backgroundColor: color.backgroundColor }}>

      <div id='parent'>
        <div id='head'>
          <h2 style={{ color: togg === "#141c2f" ? "white" : "black" }}>devfinder</h2>
          <div id='change'>
            <p style={{color:togg === "#141c2f" ? "white" : "black"}}>{togg === "#141c2f" ? "light" : "dark"}</p>
            <img id='light' onClick={handleChanger} src={togg === "#141c2f" ? light : dark} />
          </div>

        </div>
        <Search data={[data,setData]} color={togg}/>
        <User data={[data,setData]} color={togg}/>
      </div>

    </div>
  )
}

export default App

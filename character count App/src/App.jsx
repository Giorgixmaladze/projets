import { useContext, useEffect, useState } from 'react'
import useTheme from './hooks/usetheme'
import { AuthContext } from './context/context'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const {dark} = useContext(AuthContext)
  return (
    <div className={`${dark ? "bg-[#121a25]" : ''} w-screen min-h-screen flex flex-col min-[375px]:gap-[50px] pt-10 items-center`}>

      {/* Header */}
      <Header />



      {/* main */}
      <Main />


    </div>
  )
}

export default App

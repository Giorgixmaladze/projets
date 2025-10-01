import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SidebarProvider from './context/SidebarContext'

function App() {



  return (
    <SidebarProvider>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </SidebarProvider>
   
    
  )
}

export default App

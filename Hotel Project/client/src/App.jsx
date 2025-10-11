import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import SidebarProvider from './context/SidebarContext.jsx'


function App() {
  return (
    <SidebarProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </SidebarProvider>
  )
}

export default App

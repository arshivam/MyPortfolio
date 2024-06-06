import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import ProfileInfo from './components/ProfileInfo'
// import Skill from './components/Skill'


function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Footer/> */}
    {/* <ProfileInfo/>
    <Skill/> */}
    </>
  )
}

export default App

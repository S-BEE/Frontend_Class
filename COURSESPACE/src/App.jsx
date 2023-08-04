import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Courses from './component/courses'
import Learning from './component/Learning'
import { Routes, Route } from 'react-router-dom'
import Fallback from './component/Fallback'
import Products from './component/Products'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Courses />
    <Learning />

    {/* <Routes>
        <Route path='/'  element={<Hero />} ></Route>
        <Route path='courses'  element={<Courses />} ></Route>
        <Route path='Learn'  element={<Learning />} ></Route>
        <Route path='testimonial'  element={<Hero />} ></Route>
        <Route path='*'  element={<Fallback />} ></Route>
    </Routes> */}
      
    {/* <Route path='products' element={<Products/>} >
      <Route path='new' element={<NewProducts/>}/>
      <Route path='old' element={<OldProducts/>}/>
    <Route /> */}
      
    </>
  )
}

export default App

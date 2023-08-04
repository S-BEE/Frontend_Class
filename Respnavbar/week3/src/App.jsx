
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NAVBAR/Navbar'
import AboutUs from './components/Pages/AboutUs'
import Blog from './components/Pages/Blog'
import ContactUs from './components/Pages/ContactUs'
import Services from './components/Pages/Services'
import SignUp from './components/Pages/SignUp'
import Fallback from './components/Fallback'
import Home from './components/Pages/Home'
import Layout from './components/Layout'
import Layoutless from './components/Layoutless'
import Posts from './components/Pages/Posts'
import Dashboard from './components/advance/Dashboard'
import { useState } from 'react'
import Counting from './components/advance/Counting'
import AnyCount from './components/advance/AnyCount'

function App() {

  //const [name,setName]= useState('ADEOYE AMRAH')
  //const [title, setTitle]= useState('Miss')

  
  return (
    <>
         <Routes>
         <Route path='/' element={<SignUp/>}/>
         <Route path='/board' element={<Dashboard username='Amrah Adeoye'/>}/>
        
          
          {/* 
          <Route element={<Layout/>}>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='*' element= {<Fallback />} /> 
        </Route>*/}
     
        {/* <Route element={<Layoutless/>}>
          
          <Route path='contact' element= {<ContactUs />} />
        </Route> */}
       
      </Routes>   

    </>
  )
}

export default App

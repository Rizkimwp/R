import React, { Suspense, useEffect } from 'react'
import Navbar from './content/Navbar'
import Jumbotron from './content/Jumbotron'
import Profile from './content/Profile'
import Project from './content/Project'
import Experience from './content/Experience'
import TestimonialCarousel from './content/Testimonial'
import AOS from 'aos'
import Contact from './content/Contact'
import Footer from './content/Footer'
import { Route, Routes } from 'react-router-dom'
import { useTetris } from './hooks/useTetris'

const Calculator = React.lazy(() => import('./pages/Calculator'));
const Noroute = React.lazy(() => import('./pages/Noroute'))
const Login  = React.lazy(() => import('./pages/LoginPage'))
const StackGame = React.lazy(() => import('./pages/StackGame'))

function App() {
  useEffect(() => {
    AOS.init({})
  }, [])
  const {board} = useTetris()
  return (
    <div className="w-5/6">
      <Navbar />
      <Suspense fallback={'Loading...'}>
     
    <Routes>
      <Route path='/' element={<Noroute/>}/>
      <Route path='/calculator' element={<Calculator/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/stackgame' element={<StackGame/>} />
    </Routes>
      </Suspense>
     
    </div>
  )
}

export default App

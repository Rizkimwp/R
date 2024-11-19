import React, { useEffect } from 'react'
import Navbar from './content/Navbar'
import Jumbotron from './content/Jumbotron'
import Profile from './content/Profile'
import Project from './content/Project'
import Experience from './content/Experience'
import TestimonialCarousel from './content/Testimonial'
import AOS from 'aos'
import Contact from './content/Contact'
function App() {
  useEffect(() => {
    AOS.init({

    })
  }, [])

  return (
    <div className="w-5/6">
      <Navbar />  
      <Jumbotron />
      <Profile />
      <Project />
      <TestimonialCarousel />
      <Experience />
      <Contact/>
    </div>
  )
}

export default App

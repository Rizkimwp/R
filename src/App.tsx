import React from 'react'
import Navbar from './content/Navbar'
import Jumbotron from './content/Jumbotron'
import Profile from './content/Profile'
import Project from './content/Project'
import Experience from './content/Experience'
import TestimonialCarousel from './content/Testimonial'

function App() {
  return (
    <div className="w-5/6">
      <Navbar />
      <Jumbotron />
      <Profile />
      <Project />
      <TestimonialCarousel />
      <Experience />
    </div>
  )
}

export default App

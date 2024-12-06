import Contact from "../content/Contact"
import Experience from "../content/Experience"
import Footer from "../content/Footer"
import Jumbotron from "../content/Jumbotron"
import Profile from "../content/Profile"
import Project from "../content/Project"
import Testimonial from "../content/Testimonial"
import TestimonialCarousel from '../content/Testimonial'
const Noroute = () => {
    return(
        <>
        <Jumbotron />
      <Profile />
      <Project />
      <TestimonialCarousel /> 
      <Experience />
      <Contact />
      <Footer />
      </>
    )
}

export default Noroute
import React, { useEffect } from 'react'
import 'animate.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import TypewriterComponent from 'typewriter-effect';
import Writer from '../components/writer';
const Jumbotron = () => {
 
  return (
    <>
      <div className="container-md mx-auto w-screen bg-white h-screen w-screen flex justify-evenly items-center py-8">
        <div className="text-center flex flex-col items-center md:w-3/5">
          <div className="text-bold md:text-5xl sm:text-5xl text-3xl font-fightree font-bold md:mb-11 mb-5 " data-aos="fade-up">
            Rizky Maulana
          </div>
          <div
            className="text-4xl md:text-7xl font-extrabold font-fightree mt-5 text-primary text-center flex items-center justify-center"
            data-aos="fa"
          >
            <span className="bg-primary rounded-lg ml-2 text-white">
              <TypewriterComponent
                options={{
                  autoStart: true,
                  strings: ['Froted','Fronted', 'Frontend',  'Moblie', 'Mobil', 'Mobile'],
                  delay:100,
                  cursor:'.'
                }}
              />
            </span>
            <span className="ml-2">Developer</span>
          </div>

          <div className="text-xl md:text-2xl font-semibold font-fightree mt-5 text-primary text-opacity-50 mx-8 md:mx-0 text-center animate__animated  animate__fadeInUpBig animate__delay-0.9s">
            One-Year Experience as an Undergraduate <span className="font-bold">Frontend & Mobile Developer</span> Using React and Flutter in Developing
            Websites and Mobile Applications
          </div>
          <div className="flex flex-row  justify-center items-center mt-5 ">
            <a href='https://www.instagram.com/rizkimwp' target='_blank' className=" h-20 w-20 bg-abu  rounded-2xl justify-center p-2 mr-10 transition-transform duration-300 ease-in-out hover:translate-y-2 hover:shadow-lg animate__bounceIn animate__animated animate__delay-1s">
              <img src="/logo/logoid.png" alt="Logo" />
            </a>
            <a href="https://github.com/Rizkimwp" target='_blank' className="h-20 w-20 bg-abu rounded-2xl justify-center p-2 transition-transform duration-300 ease-in-out hover:translate-y-2 hover:shadow-lg animate__bounceIn animate__animated animate__delay-1s">
              <img src="/logo/logogit.png" alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jumbotron

import React, { useEffect } from 'react'
import 'animate.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import TypewriterComponent from 'typewriter-effect';
import Writer from '../components/writer';
const Jumbotron = () => {
 
  return (
    <>
      
      <div className="h-screen w-screen bg-cover bg-center bg-hero-pattern relative">
  {/* Blur background using an overlay */}
  <div className="absolute inset-0 bg-dark/40 bg-opacity-65 backdrop-blur-lg"></div>

  <div className="container mx-auto flex flex-col md:flex-row justify-center items-center h-full relative z-20">
    {/* Bagian Kiri */}
    <div className="w-full md:w-1/2 p-10 mt-24 md:mt-0 md:p-20">
      <div
        className="text-bold text-3xl sm:text-5xl md:text-5xl font-lora font-bold md:mb-11 mb-5 text-color4"
        data-aos="fade-up"
      >
        Hello, I'am
      </div>
      <div
        className="font-extrabold font-fightree mt-5 text-white"
        data-aos="fade-up"
      >
        <h2 className='text-6xl sm:text-8xl md:text-9xl font-playfair'>Rizky Maulana</h2>
        <div className="ml-2 text-xl sm:text-2xl md:text-3xl font-lora mt-4">
          <TypewriterComponent
            options={{
              autoStart: true,
              strings: ['Froted', 'Fronted', 'Frontend Developer'],
              delay: 100,
              cursor: '.',
            }}
          />
        </div>
      </div>
    </div>

    {/* Bagian Kanan (Gambar) */}
    <div className="w-full md:w-1/2 p-3 h-full flex justify-center items-end md:mb-10 relative brightness-100 drop-shadow-2xl">
      {/* Gambar */}
      <img src="asset/bg_image.png" alt="Your Image" className="w-full h-auto md:w-max md:h-2/3 z-0" />
    </div>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute bg-gradient-to-t from-black to-transparent z-30 w-screen h-96 items-end bottom-0 "></div>
</div>

    </>
  )
}

export default Jumbotron

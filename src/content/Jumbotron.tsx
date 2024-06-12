import React from 'react'
import 'animate.css'
const Jumbotron = () => {
  return (
    <>
      <div className="container-md mx-auto w-screen bg-white h-screen w-screen flex justify-evenly items-center py-8">
        <div className="text-center flex flex-col items-center md:w-3/5">
          <div className="text-bold md:text-5xl sm:text-5xl text-3xl font-fightree font-bold md:mb-11 mb-5 animate__animated animate__fadeIn  animate__delay-0.5s">
            Rizky Maulana
          </div>
          <div className="text-4xl md:text-7xl font-extrabold font-fightree mt-5 text-primary text-center animate__animated animate__fadeInRight animate__delay-0.7s">
            <span className="bg-secondary rounded-lg text-white  ">Frontend</span> Developer
          </div>
          <div className="text-xl md:text-2xl font-semibold font-fightree mt-5 text-primary text-opacity-50 mx-8 md:mx-0 text-center animate__animated  animate__fadeInUpBig animate__delay-0.9s">
            One-Year Experience as an Undergraduate <span className="font-bold">Frontend Developer</span> Using React.ts in Developing
            Websites and Applications
          </div>
          <div className="flex flex-row  justify-center items-center mt-5 ">
            <div className=" h-20 w-20 bg-abu  rounded-2xl justify-center p-2 mr-10 transition-transform duration-300 ease-in-out hover:translate-y-2 hover:shadow-lg animate__bounceIn animate__animated animate__delay-1s">
              <img src="/logo/logoid.png" alt="Logo" />
            </div>
            <div className="h-20 w-20 bg-abu rounded-2xl justify-center p-2 transition-transform duration-300 ease-in-out hover:translate-y-2 hover:shadow-lg animate__bounceIn animate__animated animate__delay-1s">
              <img src="/logo/logogit.png" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jumbotron

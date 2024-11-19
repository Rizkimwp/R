import React from 'react'
import { Link } from 'react-scroll'
import { FaAirbnb, FaPhone, FaRocket, FaUserAlt } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 w-1/2 bg-secondary rounded-2xl h-15 z-50 transition-transform duration-300 ease-in-out hover:translate-y-1 hover:shadow-lg ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-white hidden md:block">R</div>
        <div className="hidden md:flex sm:flex space-x-4">
          <Link
            to="profile"
            smooth={true}
            duration={700}
            delay={100}
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-navbar cursor-pointer"
          >
            PROFILE
          </Link>

          <Link
            to="project"
            smooth={true}
            duration={700}
            delay={100}
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-navbar cursor-pointer"
          >
            PROJECT
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={700}
            delay={100}
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-navbar cursor-pointer"
          >
            EXPERIENCE
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            delay={100}
            className=" text-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium  hover:text-navbar"
          >
            CONTACT
          </Link>
        </div>
        <div className="md:hidden  flex ">
          <Link
            to="profile"
            smooth={true}
            duration={700}
            delay={100}
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-navbar cursor-pointer"
          >
            <FaUserAlt size={'18px'} />
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={700}
            delay={100}
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-navbar cursor-pointer"
          >
            <FaRocket size={'18px'} />
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={700}
            delay={100}
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-navbar cursor-pointer"
          >
            <FaAirbnb size={'18px'} />
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={700}
            delay={100}
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-navbar cursor-pointer"
          >
            <FaPhone size={'18px'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-scroll'
import { FaAirbnb, FaPhone, FaRocket, FaUserAlt } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="md:absolute bg-secondary  fixed  top-2 left-1/2 transform -translate-x-1/2 w-1/2 md:bg-transparent rounded-2xl h-15 z-50 ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-white hidden md:block font-montserrat">RIZKI MAULANA</div>
        <div className="hidden md:flex sm:flex space-x-4 font-montserrat">
          <Link
            to="profile"
            smooth={true}
            duration={700}
            delay={100}
            className="font-bold text-white px-3 py-2 rounded-md text-sm  hover:text-color4 cursor-pointer"
          >
            PROFILE
          </Link>

          <Link
            to="project"
            smooth={true}
            duration={700}
            delay={100}
            className="text-white px-3 py-2 rounded-md text-sm font-bold hover:text-color4 cursor-pointer"
          >
            PROJECT
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={700}
            delay={100}
            className="text-white px-3 py-2 rounded-md text-sm font-bold hover:text-color4 cursor-pointer"
          >
            TOOLS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            delay={100}
            className=" text-white text-gray-700 px-3 py-2 rounded-md text-sm font-bold  hover:text-color4"
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

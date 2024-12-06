import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className="w-screen border-1 rounded-t-xl mt-9">
      <div className="container mx-auto items-center  p-10 flex flex-col md:flex-row justify-evenly">
        <h2 className="font-thin ">
          {' '}
          <i className="fas fa-copyright  "></i>&#169; Copyright Rizki Maulana
        </h2>
        <ul className="flex  font-thin font-montserrat text-dark  space-x-2">
          <li>
            <Link
              className='hover:border-b-2 hover:mb-1 hover:text-secondary hover:border-primary'
              to="profile"
              smooth={true}
              duration={700}
              delay={100}

            >
              Profile
            </Link>
          </li>
          <li>
            {' '}
            <Link
              className='hover:border-b-2 hover:mb-1 hover:text-secondary hover:border-primary'
              to="project"
              smooth={true}
              duration={700}
              delay={100}

            >
              Project
            </Link>
          </li>
          <li>
            {' '}
            <Link
              className='hover:border-b-2 hover:mb-1 hover:text-secondary hover:border-primary'
              to="experience"
              smooth={true}
              duration={700}
              delay={100}

            >
              Experience
            </Link>
          </li>
          <li>
            {' '}
            <Link
              className='hover:border-b-2 hover:mb-1 hover:text-secondary hover:border-primary'
              to="contact"
              smooth={true}
              duration={700}
              delay={100}

            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

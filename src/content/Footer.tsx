import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className="w-screen border-1 rounded-t-xl mt-9">
      <div className="container mx-auto p-10 flex justify-evenly">
        <h2 className="font-thin">
          {' '}
          <i className="fas fa-copyright    "></i>&#169; Copyright Rizki Maulana
        </h2>
        <ul className="flex">
          <li>
            <Link
              to="profile"
              smooth={true}
              duration={700}
              delay={100}
              className="font-thin hover:border-b-2 hover:mb-1 hover:border-primary m-1"
            >
              Profile
            </Link>
          </li>
          <li>
            {' '}
            <Link
              to="project"
              smooth={true}
              duration={700}
              delay={100}
              className="font-thin hover:border-b-2 hover:mb-1 hover:border-primary m-1"
            >
              Project
            </Link>
          </li>
          <li>
            {' '}
            <Link
              to="experience"
              smooth={true}
              duration={700}
              delay={100}
              className="font-thin hover:border-b-2 hover:mb-1 hover:border-primary m-1"
            >
              Experience
            </Link>
          </li>
          <li>
            {' '}
            <Link
              to="contact"
              smooth={true}
              duration={700}
              delay={100}
              className="font-thin hover:border-b-2 hover:mb-1 hover:border-primary m-1"
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

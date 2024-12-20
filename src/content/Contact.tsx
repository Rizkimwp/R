import React from 'react'
import { FaMailBulk, FaVoicemail, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="w-screen bg-navy  p-5" id="contact">
      <div className="container-md mx-auto flex flex-col items-center">
        <div className="bg-abu rounded-full p-10 hover:shadow-lg hover:shadow-color4">
          <img src="./asset/handshake.png" alt="" className="object-contain h-28 w-28" />
        </div>

        <h3 className="fa text-center fa-text-height font-semibold mt-4 text-3xl text-white font-playfair" aria-hidden="true">
          Tell me about your next project
        </h3>
        <div className="flex m-4">
          <div className="flex-2 m-2">
            <a
              href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=rizki.mwp404@gmail.com"
              className="rounded-xl bg-white p-2 flex items-center font-bold hover:bg-navbar hover:text-dark"
            >
              <i className="mr-2">
                <FaMailBulk />
              </i>
              Hire Me
            </a>
          </div>
          <div className="flex-2 m-2">
            <a
              href="https://wa.me/6281295489405"
              className="rounded-xl border-solid border-white text-white hover:text-dark border-2 p-2 hover:bg-success flex items-center font-bold "
            >
              <i className="mr-2">
                <FaWhatsapp />
              </i>{' '}
              Whatsapp{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

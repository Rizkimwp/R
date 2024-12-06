import React, { useRef, useState } from 'react'
import TestimonialCard, { TestimonialCardProps } from '../components/TestimonialCard'

const Testimonial = () => {
  const testimonials: TestimonialCardProps[] = [
    { avatar: 'asset/gope.jpg', name: 'ANDIKA YUDIANSYAH', jobTitle: 'Unit Head', quote: 'Best service ever!' },
    {
      avatar: 'asset/fahrul.jpg',
      name: 'Fahrul Maulana',
      jobTitle: 'Backend Developer',
      quote:
        'My colleague, Rizky Maulana, is an outstanding frontend developer. He excels at translating backend requirements into intuitive, engaging user interfaces. Always ready to provide creative solutions and ensure smooth integration, his effective communication and commitment to quality make him a reliable partner who consistently exceeds expectations.',
    },
    { avatar: 'asset/aldi.jpg', name: 'Arif Rinaldi', jobTitle: 'HSE Officer', quote: 'Beliau merupakan temen dekat saya dari semester 4, dan sangat berkonribusi dalam perkuliahan dengan membantu sesama teman' },
    { avatar: 'asset/elga.jpg', name: 'Elga Prizky', jobTitle: 'Komisi V DPRD', quote: 'Perfect dan sangat visioner' },
    { avatar: 'asset/chandra.jpeg', name: 'Chandra Kencana', jobTitle: 'Marketing', quote: 'Aktif, bekerja dalam profesioanal sekali, penuh semangat dan menyelesaikan masalah penuh ketenangan' },
  ]

  const itemsPerPage = 2 // Minimum cards per page
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  // Calculate the cards to display for the current page
  const currentItems = testimonials.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }
  return (
    <div className="w-screen bg-navy py-8 pb-36" id="project">
      {/* Header */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between mt-7 md:mt-36">
        <div className="flex flex-col md:flex-row items-center relative">
          <img
            src="/asset/about.png"
            alt="Logo"
            className="w-10 h-10 md:w-24 md:h-24 mb-1 md:mb-0 z-10"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
          <div className="text-color4 text-xl md:text-2xl font-semibold font-montserrat z-10 md:ml-4">
            <p>Happy Client Say</p>
          </div>
        </div>

        {/* Navigation Buttons for Desktop */}
        <div className="hidden md:flex justify-center items-center mt-5 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-color4 text-black font-semibold rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-color2'
              }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-color4 text-black font-semibold rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-color2'
              }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className=" items-center  mx-auto mt-7">
        <div className="flex  flex-col md:flex-row  gap-10 justify-center items-center">
          {currentItems.map((testimonial, index) => (
            <div key={index} data-aos="flip-up" className="row-span-4" data-aos-easing="linear" data-aos-duration="1000">
              <TestimonialCard
                key={index}
                avatar={testimonial.avatar}
                name={testimonial.name}
                jobTitle={testimonial.jobTitle}
                quote={testimonial.quote}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons for Mobile */}
      <div className="flex md:hidden justify-center items-center mt-5 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-color4 text-black font-semibold rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-color2'
            }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-color4 text-black font-semibold rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-color2'
            }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Testimonial

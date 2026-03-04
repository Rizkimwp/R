import React, { useRef } from 'react'
import Card from '../components/Card'
const CardProps = [
  { title: 'Website CMS Puskesmas', link: '', url: '/asset/puskesmas.png', urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'] },
  {
    title: 'E-Commerce Puspiptek',
    link: '',
    url: '/asset/puspiptek.png',
    urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'],
  },
  {
    title: 'PPDB App Platform',
    link: 'http://devpmb.sasmitajaya.sch.id/',
    url: '/asset/ppdb.png',
    urlIcon: ['/logo/logo192.png', '/logo/typescript.png', '/logo/mui.png', '/logo/vite.png', '/logo/postgresql.png', '/logo/nest.png'],
  },
  {
    title: 'Extrakurikuler App',
    link: 'https://alistiqomah.rizkimaulana.site/',
    url: '/asset/eskul.png',
    urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'],
  },
  {
    title: 'Pos Indonesia',
    link: 'https://posindonesia.rizkimaulana.site/',
    url: '/asset/posindonesia.png',
    urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'],
  },
  {
    title: 'PPDB TK AL HIKMAH',
    link: 'https://tkalhikmah.rizkimaulana.site/',
    url: '/asset/tkalhikmah.png',
    urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'],
  },
]
const Project = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-screen py-8 pb-20 bg-black" id="project">
      {/* Header */}
      <div className="container flex flex-col justify-between mx-auto mt-20 md:flex-row md:mt-36">
        <div className="relative flex flex-col items-center md:flex-row">
          <img
            src="/logo/rocket.png"
            alt="Logo"
            className="z-10 w-10 h-10 mb-1 md:w-24 md:h-24 md:mb-0"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          />
          <div className="z-10 text-xl font-semibold text-color4 md:text-2xl font-montserrat md:ml-4">
            <p>My Projects</p>
          </div>
        </div>

        {/* Navigation Buttons for Desktop */}
        <div className="items-center justify-center hidden mt-5 space-x-4 md:flex">
          <button
            className="px-4 py-2 font-semibold text-black transition rounded bg-color4 font-montserrat hover:bg-color2"
            onClick={scrollLeft}
          >
            {"<"}
          </button>
          <button
            className="px-4 py-2 font-semibold text-black transition rounded bg-color4 font-montserrat hover:bg-color2"
            onClick={scrollRight}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto md:ps-28 mt-7">
        <div
          ref={scrollContainer}
          className="flex space-x-4 overflow-x-auto flex-nowrap sm:overflow-x-hidden"
          style={{
            WebkitOverflowScrolling: "touch", // Smooth scrolling for iOS
            // Ensure horizontal scrolling
          }}
        >
          {CardProps.map((f, i) => (
            <div
              key={i}
              className={`flex-none w-80 p-2 last:mr-0`}
              data-aos="flip-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Card
                link={f.link}
                title={f.title}
                iconImageUrl={f.urlIcon}
                imageUrl={f.url}
              />
            </div>
          ))}
        </div>




      </div>
    </div>

  );
}

export default Project

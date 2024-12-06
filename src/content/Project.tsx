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
  {
    title: 'Form Login',
    link: '/login',
    url: '/asset/login.png',
    urlIcon: ['/logo/tailwind.png', '/logo/logo192.png'],
  },
  {
    title: 'Calculator',
    link: '/calculator',
    url: '/asset/calculator.png',
    urlIcon: ['/logo/tailwind.png', '/logo/logo192.png'],
  },
  {
    title: 'Stack Game',
    link: '/stackgame',
    url: '/asset/letris.png',
    urlIcon: ['/logo/tailwind.png', '/logo/logo192.png'],
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
    <div className="w-screen bg-black py-8 pb-20" id="project">
  {/* Header */}
  <div className="container mx-auto flex flex-col md:flex-row justify-between mt-20 md:mt-36">
    <div className="flex flex-col md:flex-row items-center relative">
      <img
        src="/logo/rocket.png"
        alt="Logo"
        className="w-10 h-10 md:w-24 md:h-24 mb-1 md:mb-0 z-10"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      />
      <div className="text-color4 text-xl md:text-2xl font-semibold font-montserrat z-10 md:ml-4">
        <p>My Projects</p>
      </div>
    </div>

    {/* Navigation Buttons for Desktop */}
    <div className="hidden md:flex justify-center items-center mt-5 space-x-4">
      <button
        className="bg-color4 text-black font-montserrat font-semibold px-4 py-2 rounded hover:bg-color2 transition"
        onClick={scrollLeft}
      >
        {"<"}
      </button>
      <button
        className="bg-color4 text-black font-montserrat font-semibold px-4 py-2 rounded hover:bg-color2 transition"
        onClick={scrollRight}
      >
       {">"}
      </button>
    </div>
  </div>

  {/* Cards */}
  <div className=" md:ps-28 mx-auto mt-7">
  <div
    ref={scrollContainer}
    className="flex flex-nowrap overflow-x-auto sm:overflow-x-hidden space-x-4"
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

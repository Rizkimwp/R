import React from 'react'
import Card from '../components/Card'
const CardProps = [
  { title: 'Website CMS Puskesmas', url: '/asset/puskesmas.png', urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'] },
  {
    title: 'Website E-Commerce Puspiptek',
    url: '/asset/puspiptek.png',
    urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'],
  },
  {
    title: 'PPDB App Platform',
    url: '/asset/ppdb.png',
    urlIcon: ['/logo/logo192.png', '/logo/typescript.png', '/logo/mui.png', '/logo/vite.png', '/logo/postgresql.png', '/logo/nest.png'],
  },
  {
    title: 'Extrakurikuler App',
    url: '/asset/eskul.png',
    urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'],
  },
]
const Project = () => {
  return (
    <>
      <div className="w-screen bg-gradient-to-b from-white to-navbar lg:w-screen  py-8" id="project">
        <div className="container-md mx-auto flex flex-col items-center justify-evenly">
          <div className="text-center flex flex-col items-center md:w-3/5">
            <div className="flex flex-col md:flex-row items-center justify-center relative">
              <div className="md:h-10 md:w-64 h-7 w-40 bg-navbar top-10 -rotate-10 absolute md:left-0 -rotate-8 md:-rotate-6"></div>
              <img src="/logo/rocket.png" alt="Logo" className="w-10 h-10 md:w-24 md:h-24 mb-1   md:mb-0 z-10" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"/>
              <div className="text-xl md:text-5xl font-semibold font-fightree z-10 md:ml-4 ">
                <span className="font-extrabold ">PROJECT</span> HIGHLIGHTED
              </div>
            </div>
            <div className="text-xl md:text-2xl font-semibold font-fightree mt-5 text-primary text-opacity-50 mx-8 md:mx-0 text-center">
              Several projects that I have created, from various applications and websites, some of which are used by the public and some
              are used personally.
            </div>
          </div>
        </div>
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-7  p-4">
          {CardProps.map((f, i) => (
            <div key={i} className="flex  justify-center" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1000">
              <Card title={f.title} iconImageUrl={f.urlIcon} imageUrl={f.url} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project

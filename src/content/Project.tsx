import React from 'react'
import Card from '../components/Card'
const CardProps = [
  { title: 'Website CMS Puskesmas', link: '', url: '/asset/puskesmas.png', urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'] },
  {
    title: 'Website E-Commerce Puspiptek',
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
    link: '',
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
    url: '/asset/eskul.png',
    urlIcon: ['/logo/laravel.png', '/logo/bootstrap.png', '/logo/mysql.png'],
  },
]
const Project = () => {
  return (
    <>
      <div className="w-screen bg-gradient-to-b from-white to-navbar py-8" id="project">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-center flex flex-col items-center md:w-3/5">
            <div className="flex flex-col md:flex-row items-center relative">
              <div className="md:h-10 md:w-64 h-7 w-40 bg-navbar top-10 -rotate-10 absolute md:left-0 -rotate-8 md:-rotate-6"></div>
              <img src="/logo/rocket.png" alt="Logo" className="w-10 h-10 md:w-24 md:h-24 mb-1 md:mb-0 z-10" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" />
              <div className="text-xl md:text-5xl font-semibold font-fightree z-10 md:ml-4 ">
                <span className="font-extrabold">PROJECT</span> HIGHLIGHTED
              </div>
            </div>
            <div className="text-xl md:text-2xl font-semibold font-fightree mt-5 text-primary text-opacity-50 mx-8 md:mx-0 text-center">
              Several projects that I have created, from various applications and websites, some of which are used by the public and some
              are used personally.
            </div>
          </div>
        </div>
        <div className="container flex mx-auto flex-wrap   mt-7 ">
          {CardProps.map((f, i) => (
            <div key={i} className=" m-4 sm:m-0 w-full sm:w-1/2 lg:w-1/3 p-2" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1000">
              <Card link={f.link} title={f.title} iconImageUrl={f.urlIcon} imageUrl={f.url} />
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Project

import React from 'react'
import SkillBox from '../components/SkillBox'

const ItemBox = [
  { url: '/logo/mui.png', title: 'Material UI' },
  { url: '/logo/laravel.png', title: 'Laravel' },
  { url: '/logo/vite.png', title: 'Vite' },
  { url: '/logo/bootstrap.png', title: 'Bootstrap' },
  { url: '/logo/logo192.png', title: 'React' },
  { url: '/logo/typescript.png', title: 'Typescript' },
  { url: '/logo/mysql.png', title: 'MYSQL' },
  { url: '/logo/postgresql.png', title: 'Postgres Sql' },
  { url: '/logo/nest.png', title: 'Nest Js' },
  { url: '/logo/js.png', title: 'Javascript' },
  { url: '/logo/tailwind.png', title: 'Tailwind' },
  { url: '/logo/typeorm.png', title: 'TypeORM' },
]
const Experience = () => {
  return (
    <div className="w-screen bg-dark p-10 rounded-t-3xl -mt-5">
      <div className="container-md mx-auto flex flex-col items-center justify-evenly" id="experience">
        <div className="text-center flex flex-col items-center md:w-3/5">
          <div className="flex flex-col md:flex-row items-center justify-center relative">
            <div className="md:h-10 md:w-64 h-7 w-40 bg-navbar bg-opacity-20 top-10 -rotate-10 absolute md:left-0 -rotate-8 md:-rotate-6"></div>
            <img src="/logo/rocket.png" alt="Logo" className="w-10 h-10 md:w-24 md:h-24 mb-1   md:mb-0 z-10" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" />
            <div className="text-xl md:text-5xl font-semibold font-playfair z-10 md:ml-4 text-white">
              <span className="font-extrabold text-white">SPECIALIZED</span> TOOLS
            </div>
          </div>
          <div className="text-xl md:text-2xl font-semibold font-lora mt-5 text-white text-opacity-50 mx-8 md:mx-0 text-center">
            Several projects that I have created, from various applications and websites, some of which are used by the public and some are
            used personally.
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-6 md:grid-cols-6 gap-4 md:gap-6 mt-7">
        {ItemBox.map((f, i) => (
          <div key={i} className="flex justify-center " data-aos="zoom-in">
            <SkillBox title={f.title} imageUrl={f.url} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Experience

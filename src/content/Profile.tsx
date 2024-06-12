import React from 'react'

const Profile = () => {
  return (
    <div className="container-md mx-auto w-screen bg-white flex justify-center items-center py-8" id="profile">
      <div className="md:grid md:grid-cols-2 md:grid-rows-3 gap-4 w-4/5 md:w-2/5 lg:w-4/5 ">
        <div className="md:col-span-1 md:row-span-3 flex flex-col justify-center items-start  order-last md:order-first">
          <div className="flex flex-row items-start  md:items-center text-start  ">
            <div className="md:h-10 md:w-64 h-7 w-40 bg-navbar  absolute -rotate-8 md:-rotate-6"></div>
            <img src="/asset/about.png" alt="Logo" className="w-10 h-10 md:w-24 md:h-24 mb-4 z-10" />
            <div className="text-2xl md:text-5xl font-semibold font-fightree z-10">
              <span className="font-extrabold">ABOUT</span> ME
            </div>
          </div>
          <div className="mt-3 text-xl md:text-2xl font-bold  text-primary text-opacity-50 font-fightree  md:text-start md:items-start">
            Hi, I'm Rizky Maulana, undergraduate informatics engineer. I have experience as a frontend developer for 1 year and am very
            enthusiastic about developing websites and applications.
          </div>
        </div>
        <div className="md:col-span-1 md:row-span-3 flex justify-center items-center">
          <img src="/asset/bg-hero.png" alt="Background Hero" className="w-full h-auto rounded-lg " />
        </div>
      </div>
    </div>
  )
}

export default Profile

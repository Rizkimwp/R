import React from 'react'
import { Link } from 'react-router-dom'

interface CardProps {
  title: string
  iconImageUrl: string[]
  imageUrl: string
  link:string
}

const Card: React.FC<CardProps> = ({link, title, iconImageUrl, imageUrl }) => {
  return (
    <Link to={link} target='_blank' className='items-center'>
    <div className="rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:scale-105 border-b-4 border-color4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4 bg-navy">
        <div className="font-bold text-xl mb-2 text-white font-playfair">{title}</div>
        <div className=" text-base text-white flex flex-col md:flex-row justify-between sm:justify-start  mt-3 space-x-2 space-y-3">
          <div className="text-sm font-lora me-2 font-fightree flex-row flex font-semibold">Build With:
          {iconImageUrl.map((url, index) => (
            <img key={index} src={url} alt={`icon-${index}`} className="h-6 w-6" />
          ))}
          </div>
          <button className=" sm:hidden rounded-lg bg-color2 p-2 text-white font-semibold ">View</button>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Card

import React from 'react'

interface CardProps {
  title: string
  iconImageUrl: string[]
  imageUrl: string
}

const Card: React.FC<CardProps> = ({ title, iconImageUrl, imageUrl }) => {
  return (
    <div className=" w-4/5 rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base flex justify-start mt-3 space-x-2">
          <div className="text-md me-2 font-fightree font-semibold">Build With:</div>
          {iconImageUrl.map((url, index) => (
            <img key={index} src={url} alt={`icon-${index}`} className="h-6 w-6" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card

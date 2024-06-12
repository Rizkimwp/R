import React from 'react'
interface SkillBoxProps {
  title: string
  imageUrl: string
}
const SkillBox: React.FC<SkillBoxProps> = ({ title, imageUrl }) => {
  return (
    <div className="w-32 h-32 bg-navbar rounded-md shadow-md hover:shadow-xl transition duration-300 hover:scale-105 relative group hover:shadow-abu p-4">
      <img className="w-full h-full object-cover rounded-md group-hover:blur-sm transition-blur duration-300" src={imageUrl} alt={title} />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <span className="text-primary text-lg font-semibold group-hover:text-yellow-500 transition-colors duration-300 font-fightree">
          {title}
        </span>
      </div>
    </div>
  )
}

export default SkillBox

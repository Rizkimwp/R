import React from "react";

export interface TestimonialCardProps {
  avatar: string;
  name: string;
  jobTitle: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, name, jobTitle, quote }) => {
  return (
    <div className="max-w-sm bg-dark md:w-96 p-8 shadow-lg rounded-lg overflow-hidden border-2 border-color4">
      <div className="flex items-center space-x-4 p-6">
        <img 
          src={avatar} 
          alt={name} 
          className="w-24 h-24 rounded-full object-cover" 
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name.toLocaleUpperCase()}</h3>
          <p className="text-sm text-abu">{jobTitle}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <blockquote className="text-white italic">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
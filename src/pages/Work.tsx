import React from 'react';

interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: 'Frontend Developer',
    company: 'Sasmita Jaya Foundation',
    date: 'Jan 2024 - Jul 2024',
    description: [
      'Developed and maintained web applications using React and TypeScript.',
      'Collaborated with designers and backend developers to implement responsive UI/UX.',
      'Optimized web applications for maximum speed and scalability.',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'Dinas Kesehatan Kab. Serang',
    date: 'Agustus 2023 - Dec 2023',
    description: [
      'Assisted in developing cms websites using laravel framework, and bootsrap for css',
      'Performed website testing and debugging to improve functionality.',
      'Contributed to documentation and knowledge sharing among team members.',
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white font-montserrat mb-8">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{experience.title}</h3>
              <p className="text-gray-600 font-medium">{experience.company}</p>
              <span className="text-sm text-gray-500">{experience.date}</span>

              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

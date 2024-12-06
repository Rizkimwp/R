import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Custom Web Development',
            description: 'Modern, responsive websites tailored to your brand.',
        },
        {
            title: 'Frontend Application Development',
            description: 'Scalable and user-friendly apps with seamless integrations.',
        },
        {
            title: 'Landing Pages & Company Profiles',
            description: 'SEO-optimized, conversion-focused, and mobile-friendly designs.',
        },
        {
            title: 'Maintenance & Updates',
            description: 'Bug fixes, performance optimization, and feature updates.',
        },
        {
            title: 'Consulting & Technical Support',
            description: 'Expert advice and solutions tailored to your needs.',
        },
        {
            title: 'E-Commerce Solutions',
            description: 'Customized online stores with secure payment integration.',
        },
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center font-montserrat text-abu mb-8">Services I Offer</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <li
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-dark mb-2 font-playfair">{service.title}</h3>
                            <p className="text-gray-600 font-lora">{service.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Services;

import React, { useState } from 'react';

interface CertificateSliderProps {
    id: number; 
    image: string; 
    title: string
}

const CertificateSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const certificates: CertificateSliderProps[] = [
        {
            id: 1,
            image: 'asset/sertifikat1.jpg',
            title: 'Dicoding',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/600x400',
            title: 'Certificate 2',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/600x400',
            title: 'Certificate 3',
        },
        // Add more certificates as needed
    ];

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white font-montserrat mb-8">My Certificates</h2>

                <div className="relative">
                    {/* Certificate Slider */}
                    <div className="flex justify-center">
                        <div className="w-3/4 max-w-4xl  overflow-hidden ">
                            <div className="relative flex flex-row">
                                <img
                                    src={certificates[currentIndex].image}
                                    alt={certificates[currentIndex].title}
                                    className="w-full h-60 object-fit rounded-lg shadow-md "
                                />
                                
                                <button className='bg-primary absolute bg-opacity-75 bottom-4 right-5 md:right-10 p-2 font-semibold rounded-md text-lg text-white hover:text-dark hover:bg-success'>Preview</button>
                            </div>
                        </div>
                    </div>

                    {/* Custom Pagination */}
                    <div className="flex justify-center mt-4 space-x-2">
                        <button
                            onClick={prevSlide}
                            className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600"
                        >
                            Prev
                        </button>
                        <span className="text-xl font-medium text-white">
                            {currentIndex + 1} / {certificates.length}
                        </span>
                        <button
                            onClick={nextSlide}
                            className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateSlider;

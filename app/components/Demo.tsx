'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Demo = () => {

    const images = [
        "/images/atp_upload.png",
        "/images/atp_start-blur.png",
        "/images/atp_start.png",
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };



    return (
        <section className="bg-light ">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary-text">
                        See It in Action
                    </h2>

                </div>

                <div className="relative bg-white rounded-2xl shadow-lg shadow-primary overflow-hidden">

                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white/90 border border-light-gray 
                         flex items-center justify-center 
                         hover:bg-primary hover:text-white 
                         transition-all"
                        >
                            <FiChevronLeft size={20} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white/90 border border-light-gray 
                         flex items-center justify-center 
                         hover:bg-primary hover:text-white 
                         transition-all"
                        >
                            <FiChevronRight size={20} />
                        </button>
                    </div>

                    <div className="relative h-90 md:h-130 cursor-pointer">
                        {images.map((img, index) => (
                            <Link href={'/quiz/upload'} key={index} 
                            >
                                <img
                                    src={img}
                                    alt={`Demo ${index + 1}`}
                                    className={`absolute inset-0 w-full h-full object-contain p-8
                  transition-all duration-500 ease-in-out
                  ${index === current
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-95"
                                        }`}
                                />
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 pb-6">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all
                  ${current === index
                                        ? "bg-primary scale-125"
                                        : "bg-dark-gray"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Demo
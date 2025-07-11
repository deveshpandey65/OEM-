// components/HondaBikeGallery.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const bikes = [
    {
        name: "Honda SP 125",
        images: [
            "https://cdn.bikedekho.com/processedimages/honda/sp125/640X309/sp1256789eaeb8a21e.jpg?tr=w-320",
            "https://cdn.bikedekho.com/processedimages/honda/sp125/640X309/sp1256789eb1e778e8.jpg?tr=w-150",
            "https://cdn.bikedekho.com/processedimages/honda/sp125/640X309/sp1256789eb1ef1461.jpg?tr=w-150",
        ],
        button: "SP125 Images",
    },
    {
        name: "Honda Shine",
        images: [
            "/bikes/shine-1.jpg",
            "/bikes/shine-2.jpg",
            "/bikes/shine-3.jpg",
        ],
        button: "Shine Images",
    },
    {
        name: "Honda Unicorn",
        images: [
            "/bikes/unicorn-1.jpg",
            "/bikes/unicorn-2.jpg",
            "/bikes/unicorn-3.jpg",
        ],
        button: "Unicorn Images",
    },
    {
        name: "Honda Unicorn",
        images: [
            "/bikes/unicorn-1.jpg",
            "/bikes/unicorn-2.jpg",
            "/bikes/unicorn-3.jpg",
        ],
        button: "Unicorn Images",
    },
    {
        name: "Honda Unicorn",
        images: [
            "/bikes/unicorn-1.jpg",
            "/bikes/unicorn-2.jpg",
            "/bikes/unicorn-3.jpg",
        ],
        button: "Unicorn Images",
    },
    // Add more bikes here
];

export default function HondaBikeGallery({brand}) {
    return (
        <div className="w-full mb-4 max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{brand.toUpperCase()} Bikes Images</h2>

            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {bikes.map((bike, index) => (
                    <SwiperSlide key={index}>
                        <div className="border-gray-300 border rounded-xl overflow-hidden shadow-sm bg-white">
                            <img
                                src={bike.images[0]}
                                alt={`${bike.name} main`}
                                className="w-full h-40 object-cover"
                            />
                            <div className="grid grid-cols-2 gap-2 p-2">
                                {bike.images.slice(1).map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`${bike.name} thumb ${i + 1}`}
                                        className="h-20 w-full object-cover rounded"
                                    />
                                ))}
                            </div>
                            <div className="px-4 pb-4">
                                <p className="text-sm font-medium text-gray-700 mt-2">{bike.name}</p>
                                <button className="mt-2 w-full border border-red-600 text-red-600 text-sm font-semibold py-1 rounded hover:bg-red-50 transition">
                                    {bike.button}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="text-sm text-blue-600 mt-4 cursor-pointer hover:underline">
                View All Honda Images
            </div>
        </div>
    );
}

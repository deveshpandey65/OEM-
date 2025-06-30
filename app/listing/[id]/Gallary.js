"use client";
import { useState } from "react";
import { FaHeart, FaWalking, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CarGallery({ images, distance = "4.2 Km Away", delivery = { airport: true, home: true } }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="bg-white rounded-xl shadow p-4 mb-4">
            {/* Top Tags */}
            <div className="flex justify-between items-center mb-2">
                <span className="flex items-center text-sm text-teal-600 font-medium bg-teal-50 px-2 py-0.5 rounded">
                    <FaWalking className="mr-1" /> {distance}
                </span>
                <div className="flex gap-3 text-sm font-medium">
                    {delivery.airport && (
                        <span className="text-orange-500">✔ Airport delivery</span>
                    )}
                    {delivery.home && (
                        <span className="text-teal-600">✔ Home delivery</span>
                    )}
                    <FaHeart className="text-gray-500 cursor-pointer" />
                </div>
            </div>

            {/* Main Image + Arrows */}
            <div className="relative mb-3">
                <img
                    src={images[currentIndex]}
                    alt="Car"
                    className="rounded-xl w-full h-[400px] object-cover"
                />
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
                >
                    <FaArrowRight />
                </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3 mt-2">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt="Thumb"
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-full h-full object-cover rounded-lg cursor-pointer border-2 ${idx === currentIndex ? 'border-teal-600' : 'border-transparent'}`}
                    />
                ))}
            </div>
        </div>
    );
}

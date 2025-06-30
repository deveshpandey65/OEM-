"use client";

import { FaStar, FaBolt, FaGasPump, FaRoad } from "react-icons/fa";
import { GiTireIron } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const bikes = [
    {
        name: "Royal Enfield",
        price: 110,
        reviews: 140,
        rating: 4,
        images: [
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-01.png",
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-02.png",
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-03.png",
        ],
        avatar:
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/profiles/avatar-11.jpg",
        stats: {
            brake: "Drum",
            mileage: "35 Km/L",
            fuel: "Diesel",
            tyre: "Tubeless",
        },
        downloads: "3.9m",
    },
    {
        name: "Royal Enfield",
        price: 110,
        reviews: 140,
        rating: 4,
        images: [
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-01.png",
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-02.png",
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-03.png",
        ],
        avatar:
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/profiles/avatar-11.jpg",
        stats: {
            brake: "Drum",
            mileage: "35 Km/L",
            fuel: "Diesel",
            tyre: "Tubeless",
        },
        downloads: "3.9m",
    },
    {
        name: "Royal Enfield",
        price: 110,
        reviews: 140,
        rating: 4,
        images: [
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-01.png",
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-02.png",
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-03.png",
        ],
        avatar:
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/profiles/avatar-11.jpg",
        stats: {
            brake: "Drum",
            mileage: "35 Km/L",
            fuel: "Diesel",
            tyre: "Tubeless",
        },
        downloads: "3.9m",
    },
    {
        name: "Royal Enfield",
        price: 110,
        reviews: 140,
        rating: 4,
        images: [
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-01.png",
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-02.png",
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bike/bike5-slide-03.png",
        ],
        avatar:
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/profiles/avatar-11.jpg",
        stats: {
            brake: "Drum",
            mileage: "35 Km/L",
            fuel: "Diesel",
            tyre: "Tubeless",
        },
        downloads: "3.9m",
    },
];

export default function PopularBikes() {
    return (
        <section className="bg-[#f9f9f9] py-20 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Most Popular <span className="underline decoration-[#ff9a1f]">Bikes</span>
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Here's a list of some of the most popular Bikes globally, based on sales and customer preferences
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {bikes.map((bike, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow p-4 flex flex-col lg:flex-row items-start gap-6 relative"
                    >
                        {/* Avatar */}
                        <Image
                            src={bike.avatar}
                            alt="user"
                            width={40}
                            height={40}
                            className="rounded-full absolute top-4 left-4 border-2 border-white shadow"
                        />

                        {/* Image Slider */}
                        <div className="w-full lg:w-1/2">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                className="w-full h-48"
                            >
                                {bike.images.map((img, idx) => (
                                    <SwiperSlide
                                        key={idx}
                                        className="flex items-center justify-center h-full"
                                    >
                                        <img
                                            src={img}
                                            alt={`${bike.name} ${idx + 1}`}
                                            className="object-contain h-full max-h-48"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Details */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-wrap justify-between items-center gap-2">
                                <div className="flex items-center text-yellow-500 text-sm">
                                    {Array.from({ length: bike.rating }).map((_, idx) => (
                                        <FaStar key={idx} />
                                    ))}
                                    <span className="ml-2 text-gray-500">{bike.reviews} Reviews</span>
                                </div>
                                <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                    <FaBolt size={12} /> {bike.downloads}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold mt-2">{bike.name}</h3>

                            <div className="grid grid-cols-2 sm:grid-cols-4 text-sm text-gray-600 mt-4 gap-4">
                                <div className="flex flex-col items-center">
                                    <FaBolt />
                                    <span>{bike.stats.brake}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaRoad />
                                    <span>{bike.stats.mileage}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaGasPump />
                                    <span>{bike.stats.fuel}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <GiTireIron />
                                    <span>{bike.stats.tyre}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-4 flex-wrap gap-3">
                                <span className="text-lg font-bold">
                                    ${bike.price}
                                    <span className="text-sm font-normal text-gray-500"> / Day</span>
                                </span>
                                <div className="flex gap-2">
                                    <button className="border rounded-full p-2 hover:bg-gray-100">❤️</button>
                                    <button className="bg-black text-white px-4 py-2 rounded text-sm font-semibold">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

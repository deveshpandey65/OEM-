// components/HondaBikeVideos.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const videos = [
    {
        thumbnail: "/videos/nx500.jpg",
        title: "2024 Honda NX500 India Review: This is a really good adventure tourer | PowerDrift",
        date: "Apr 30, 2024",
        views: "1.47k Views",
        channel: "By BikeDekho",
    },
    {
        thumbnail: "/videos/nx500.jpg",
        title: "2024 Honda NX500 India Review: This is a really good adventure tourer | PowerDrift",
        date: "Apr 30, 2024",
        views: "1.47k Views",
        channel: "By BikeDekho",
    },
    {
        thumbnail: "/videos/nx500.jpg",
        title: "2024 Honda NX500 India Review: This is a really good adventure tourer | PowerDrift",
        date: "Apr 30, 2024",
        views: "1.47k Views",
        channel: "By BikeDekho",
    },
    {
        thumbnail: "/videos/shine100.jpg",
        title: "Honda Shine 100 Hindi Walkaround | Aa Gayi “Honda ki Sau”! | BikeDekho",
        date: "Mar 20, 2023",
        views: "21.61k Views",
        channel: "By BikeDekho",
    },
    // Add more video items here
];

export default function BikeVideos({brand}) {
    return (
        <div className="w-full mb-4 max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{brand.toUpperCase()} Bikes Videos</h2>

            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.3 },
                }}
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            {/* Thumbnail */}
                            <div className="relative">
                                <img
                                    src={video.thumbnail}
                                    alt="video thumbnail"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="p-4">
                                <p className="text-sm font-medium text-gray-800 leading-snug mb-2">
                                    {video.title}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {video.date} • {video.views} • {video.channel}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* View All */}
            <div className="text-sm text-blue-600 mt-4 cursor-pointer hover:underline">
                View All Honda Videos
            </div>
        </div>
    );
}

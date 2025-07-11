// components/HondaNewsSection.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const news = [
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling 125cc Bikes Of May 2025",
        description:
            "Based on the SIAM (Society of Indian Automobile Manufacturers) sales data,...",
        author: "Samarth",
        date: "Jun 26, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Is The Honda CB300R Discontinued?",
        description:
            "According to our dealership sources, Honda seems to have silently discontinued the CB300R in India...",
        author: "Pranav",
        date: "Jun 26, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling Scooters In India: May 2025",
        description:
            "SIAM (Society of Indian Automobile Manufacturers) recently released its sales data...",
        author: "Samarth",
        date: "Jun 25, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling Scooters In India: May 2025",
        description:
            "SIAM (Society of Indian Automobile Manufacturers) recently released its sales data...",
        author: "Samarth",
        date: "Jun 25, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling Scooters In India: May 2025",
        description:
            "SIAM (Society of Indian Automobile Manufacturers) recently released its sales data...",
        author: "Samarth",
        date: "Jun 25, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling Scooters In India: May 2025",
        description:
            "SIAM (Society of Indian Automobile Manufacturers) recently released its sales data...",
        author: "Samarth",
        date: "Jun 25, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling Scooters In India: May 2025",
        description:
            "SIAM (Society of Indian Automobile Manufacturers) recently released its sales data...",
        author: "Samarth",
        date: "Jun 25, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling Scooters In India: May 2025",
        description:
            "SIAM (Society of Indian Automobile Manufacturers) recently released its sales data...",
        author: "Samarth",
        date: "Jun 25, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling Scooters In India: May 2025",
        description:
            "SIAM (Society of Indian Automobile Manufacturers) recently released its sales data...",
        author: "Samarth",
        date: "Jun 25, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling Scooters In India: May 2025",
        description:
            "SIAM (Society of Indian Automobile Manufacturers) recently released its sales data...",
        author: "Samarth",
        date: "Jun 25, 2025",
    },
    {
        thumbnail: "https://cdn.bikedekho.com/upload/newsimages/cover_685d262628768.jpg?&tr=h-194",
        title: "Top 5 Best-Selling Scooters In India: May 2025",
        description:
            "SIAM (Society of Indian Automobile Manufacturers) recently released its sales data...",
        author: "Samarth",
        date: "Jun 25, 2025",
    },
    
];

export default function NewsSection({brand}) {
    return (
        <div className="w-full mb-4 max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{brand.toUpperCase()} Bikes News</h2>

            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {news.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white border-gray-200 border rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-44 object-cover"
                            />
                            <div className="p-4 flex flex-col justify-between flex-1">
                                <h3 className="font-semibold text-sm text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-xs text-gray-600 line-clamp-3 mb-4">{item.description}</p>
                                <p className="text-xs text-gray-400 mt-auto">
                                    By {item.author} • {item.date}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="text-sm text-blue-600 mt-4 cursor-pointer hover:underline">
                View All Honda News
            </div>
        </div>
    );
}

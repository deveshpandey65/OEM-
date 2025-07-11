// components/HondaUserReviews.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
    {
        name: "Durga",
        date: "Jul 01, 2025",
        rating: 5.0,
        bike: "Honda Shine 100",
        title: "Orally shine is classic",
        content:
            "Orally shine is classic and the valuable for price. Best suggestion for middle class people to choose for your family or the younger once. While coming to millage this bike gives almost 45-50 and smother in experience. The maintainace of...",
    },
    {
        name: "Krishnaveni",
        date: "Jun 30, 2025",
        rating: 5.0,
        bike: "Honda Hornet 2.0",
        title: "Awesome very cool",
        content:
            "Super bike wonderful mind blowing amazing system very very cool something speciality drive carefully this is a amazing bike and also safest in the road without complaint super speed and amazing mileage reasonable price and a...",
    },
    {
        name: "Harsh",
        date: "Jun 30, 2025",
        rating: 4.5,
        bike: "Honda SP 125",
        title: "Bike is value for money",
        content:
            "I bought this bike one year before and it's performance is good and it looks good and give very high mileage which reduces my fuel expenses and this bike is stable at high speed and feels very smooth which driving and sitting posture is very comf...",
    },
    {
        name: "Harsh",
        date: "Jun 30, 2025",
        rating: 4.5,
        bike: "Honda SP 125",
        title: "Bike is value for money",
        content:
            "I bought this bike one year before and it's performance is good and it looks good and give very high mileage which reduces my fuel expenses and this bike is stable at high speed and feels very smooth which driving and sitting posture is very comf...",
    },
    {
        name: "Harsh",
        date: "Jun 30, 2025",
        rating: 4.5,
        bike: "Honda SP 125",
        title: "Bike is value for money",
        content:
            "I bought this bike one year before and it's performance is good and it looks good and give very high mileage which reduces my fuel expenses and this bike is stable at high speed and feels very smooth which driving and sitting posture is very comf...",
    },
    {
        name: "Harsh",
        date: "Jun 30, 2025",
        rating: 4.5,
        bike: "Honda SP 125",
        title: "Bike is value for money",
        content:
            "I bought this bike one year before and it's performance is good and it looks good and give very high mileage which reduces my fuel expenses and this bike is stable at high speed and feels very smooth which driving and sitting posture is very comf...",
    }
];

export default function UserReviews({brand}) {
    return (
        <div className="w-full mb-4 max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{brand.toUpperCase()} Bikes User Reviews</h2>

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
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white border-gray-300 border rounded-lg shadow-sm p-4 h-full flex flex-col justify-between">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="ml-2 text-sm text-gray-700">
                                    <p className="font-medium">{review.name} <span className="text-xs text-gray-500">On {review.date}</span></p>
                                    <div className="flex items-center text-sm font-semibold text-yellow-500">
                                        {review.rating.toFixed(1)}{" "}
                                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 .587l3.668 7.431L24 9.751l-6 5.847 1.417 8.268L12 18.896l-7.417 4.97L6 15.598 0 9.751l8.332-1.733z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-1">{review.bike}</p>
                            <p className="text-md font-semibold text-gray-800 mb-2">{review.title}</p>
                            <p className="text-sm text-gray-600 mb-4">
                                {review.content}
                                <span className="text-blue-600 cursor-pointer ml-1 hover:underline">Read More</span>
                            </p>

                            {/* Like/Dislike icons */}
                            <div className="flex items-center space-x-4 text-gray-400 text-sm">
                                <button className="flex items-center hover:text-green-600">
                                    👍
                                </button>
                                <button className="flex items-center hover:text-red-500">
                                    👎
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

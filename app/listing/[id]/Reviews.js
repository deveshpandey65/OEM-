import React from "react";
import { FaStar, FaReply, FaThumbsUp, FaHeart, FaCommentDots } from "react-icons/fa";

const ratings = [
    { label: "Service", value: 4.6 },
    { label: "Location", value: 4.8 },
    { label: "Value for Money", value: 3.0 },
    { label: "Facilities", value: 4.5 },
    { label: "Cleanliness", value: 4.8 },
];

const reviews = [
    {
        name: "Johnson",
        date: "02 Jan 2023",
        rating: 5,
        avatar: "https://i.pravatar.cc/40?img=1",
        review: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages...",
    },
    {
        name: "Johnson",
        date: "02 Jan 2023",
        rating: 5,
        avatar: "https://i.pravatar.cc/40?img=2",
        review: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages...",
    },
    {
        name: "Casandra",
        date: "25 March 2024",
        rating: 5,
        avatar: "https://i.pravatar.cc/40?img=3",
        review: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages...",
    },
];

export default function ReviewSection() {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <div className="w-6 h-1 bg-orange-500 mt-1 mb-4 rounded" />

            <div className="flex gap-4 flex-wrap">
                <div className="flex flex-col items-center w-[100px]">
                    <div className="text-4xl font-bold text-green-600">4.5<span className="text-sm text-gray-500">/5</span></div>
                    <p className="text-sm text-gray-600">Excellent</p>
                    <p className="text-xs text-gray-400 mt-1">Based on 256 Reviews</p>
                </div>

                <div className="flex-1">
                    {ratings.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm mb-1">
                            <span>{item.label}</span>
                            <div className="flex-1 mx-2 bg-gray-200 rounded h-2 overflow-hidden">
                                <div className="bg-orange-500 h-2" style={{ width: `${item.value * 20}%` }} />
                            </div>
                            <span className="w-6 text-right">{item.value.toFixed(1)}</span>
                        </div>
                    ))}
                </div>
            </div>

            <p className="mt-6 font-medium">Showing 3 guest reviews</p>

            {reviews.map((review, idx) => (
                <div key={idx} className="mt-4 p-4 rounded-md border">
                    <div className="flex items-start gap-3">
                        <img src={review.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">{review.name}</p>
                                <div className="flex items-center text-yellow-500">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-xs" />
                                    ))}
                                    <span className="text-gray-500 text-xs ml-1">({review.rating.toFixed(1)})</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 mb-2">{review.date}</p>
                            <p className="text-sm text-gray-700">{review.review}</p>
                            <button className="mt-2 flex items-center text-sm text-cyan-600 hover:underline">
                                <FaReply className="mr-1" /> Reply
                            </button>
                            <div className="mt-2 flex gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1"><FaCommentDots /> 10</span>
                                <span className="flex items-center gap-1"><FaThumbsUp /> 12</span>
                                <span className="flex items-center gap-1"><FaHeart /> 15</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

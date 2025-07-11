import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ratingFields = ["Service", "Location", "Facilities", "Value for Money", "Cleanliness"];

export default function ReviewForm() {
    const [ratings, setRatings] = useState({});
    const [form, setForm] = useState({ name: "", email: "", comments: "" });

    const handleRating = (field, value) => {
        setRatings({ ...ratings, [field]: value });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", { ...form, ratings });
    };

    return (
        <form onSubmit={handleSubmit} className="my-4 bg-white p-4 rounded-xl shadow-md space-y-6">
            <h3 className="text-lg font-semibold">Leave a Reply</h3>
            <div className="w-6 h-1 bg-orange-500 rounded" />

            {/* Ratings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ratingFields.map((field) => (
                    <div key={field} className="flex items-center gap-2">
                        <span className="w-[110px]">{field}</span>
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`cursor-pointer ${ratings[field] > i ? "text-orange-400" : "text-gray-300"
                                    }`}
                                onClick={() => handleRating(field, i + 1)}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium mb-1">
                        Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full p-2 bg-gray-100 rounded-md"
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">
                        Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email Address"
                        required
                        className="w-full p-2 bg-gray-100 rounded-md"
                    />
                </div>
            </div>

            {/* Comments */}
            <div>
                <label className="block font-medium mb-1">Comments</label>
                <textarea
                    name="comments"
                    value={form.comments}
                    onChange={handleChange}
                    placeholder="Comments"
                    rows={4}
                    className="w-full p-2 bg-gray-100 rounded-md"
                />
            </div>

            <div className="text-right">
                <button
                    type="submit"
                    className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-600"
                >
                    Submit Review
                </button>
            </div>
        </form>
    );
}

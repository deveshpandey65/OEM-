'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const indiaStatesWithCities = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang"],
    "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
    "Delhi": ["New Delhi", "Dwarka", "Rohini", "Karol Bagh"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "Haryana": ["Gurugram", "Faridabad", "Panipat"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangalore", "Hubli"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Manipur": ["Imphal"],
    "Meghalaya": ["Shillong"],
    "Mizoram": ["Aizawl"],
    "Nagaland": ["Kohima", "Dimapur"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
    "Sikkim": ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
    "Tripura": ["Agartala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida", "Varanasi", "Agra"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Nainital"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur"]
};

export default function LeftContent() {
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity("");
    };

    return (
        <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-6xl mx-auto px-4"
        >
            <div className="w-full flex flex-col items-start justify-center gap-6">
                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-black leading-tight">
                    INDIA's First Hyper Local Automobile Platform
                    <span className="pl-2 relative inline-block">
                        <span className="text-black">Coveten</span>
                        <span className="ml-2 absolute -bottom-1 left-0 w-full h-2 bg-[#0a5ebe] -z-10"></span>
                    </span>
                </h1>

                <p className="text-base md:text-xl font-semibold text-black">
                    We prioritize customer satisfaction
                </p>

                {/* Search Section */}
                <div className="w-full bg-white shadow-lg p-4 md:p-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Type */}
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500 mb-1">Type</label>
                        <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a5ebe]">
                            <option>Cruiser</option>
                            <option>Scooter</option>
                            <option>Sport</option>
                            <option>Touring</option>
                        </select>
                    </div>

                    {/* Model */}
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500 mb-1">Model</label>
                        <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a5ebe]">
                            <option>KTM 300</option>
                            <option>KTM RC 390</option>
                            <option>Yamaha R15</option>
                            <option>Royal Enfield</option>
                        </select>
                    </div>

                    {/* State */}
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500 mb-1">State</label>
                        <select
                            value={selectedState}
                            onChange={handleStateChange}
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a5ebe]"
                        >
                            <option value="">Select State</option>
                            {Object.keys(indiaStatesWithCities).map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>

                    {/* City */}
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-500 mb-1">City</label>
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a5ebe]"
                            disabled={!selectedState}
                        >
                            <option value="">Select City</option>
                            {(indiaStatesWithCities[selectedState] || []).map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    {/* Button */}
                    <div className="self-end">
                        <button className="bg-[#0a5ebe] hover:bg-[#272e41] text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 w-full">
                            <i className="bx bx-search-alt text-lg" />
                            Search
                        </button>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600">
                    Experience the ultimate freedom of Dreamsrental – tailor adventure by choosing from Premium bikes.
                </p>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full mt-6 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-4">
                            <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="user1" />
                            <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="user2" />
                            <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="user3" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-black">6K + Customers</p>
                            <p className="text-sm text-gray-500">have used our renting services</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-5 py-2 border border-black text-black font-medium rounded-md hover:bg-gray-100 transition">
                            Book a Test Drive
                        </button>
                        <button className="px-5 py-2 bg-black text-white font-medium rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
                            <span className="text-white text-lg">+</span> Book an Interactive Demo
                        </button>
                        <button className="px-5 py-2 bg-black text-white font-medium rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
                            <span className="text-white text-lg">+</span> Buy Your Dream Bike
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

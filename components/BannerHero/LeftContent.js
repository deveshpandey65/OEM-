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
const data = {
    Scooter: {
        "Ola Electric": ["S1 Pro", "S1 Air", "S1X"],
        "Ather Energy": ["450X", "450 Apex"],
        "TVS Motor": ["iQube", "iQube ST"],
        "Bajaj Auto": ["Chetak EV"],
        "Hero MotoCorp (Vida)": ["Vida V1 Plus", "Vida V1 Pro"]
    },
    Motorcycle: {
        "Royal Enfield": ["Classic 350", "Meteor 350"],
        "KTM": ["RC 390", "Duke 250"],
        "Yamaha": ["R15 V4", "MT-15"]
    }
};

export default function LeftContent() {
    const [selectedType, setSelectedType] = useState("");
    const [selectedMake, setSelectedMake] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [showSearchModal, setShowSearchModal] = useState(false);

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setSelectedMake("");
    };

    const handleMakeChange = (e) => {
        setSelectedMake(e.target.value);
    };

    const SearchForm = () => (
        <div className="w-full bg-white shadow-lg p-4 md:p-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Type */}
            <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1">Type</label>
                <select
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a5ebe]"
                    value={selectedType}
                    onChange={handleTypeChange}
                >
                    <option value="">Select Type</option>
                    {Object.keys(data).map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            {/* Make */}
            <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1">Make</label>
                <select
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a5ebe]"
                    value={selectedMake}
                    onChange={handleMakeChange}
                    disabled={!selectedType}
                >
                    <option value="">Select Make</option>
                    {selectedType && Object.keys(data[selectedType]).map((make) => (
                        <option key={make} value={make}>{make}</option>
                    ))}
                </select>
            </div>

            {/* Model */}
            <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1">Model</label>
                <select
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a5ebe]"
                    disabled={!selectedMake}
                >
                    <option value="">Select Model</option>
                    {selectedType && selectedMake && data[selectedType][selectedMake].map((model) => (
                        <option key={model} value={model}>{model}</option>
                    ))}
                </select>
            </div>

            {/* State */}
            <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1">State</label>
                <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
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
                <button className="bg-[#0a5ebe] hover:bg-[#272e41] text-white px-6 py-3 rounded-md w-full">
                    <i className="bx bx-search-alt text-lg" /> Search
                </button>
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-6xl mx-auto px-4"
        >
            <div className="w-full flex flex-col items-start justify-center mb-4 gap-6">
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

                {/* Desktop Search Form */}
                <div className="hidden md:block w-full">
                    <SearchForm />
                </div>

                {/* Mobile Floating Button */}
                <div className="md:hidden fixed bottom-4 right-4 z-50">
                    <button
                        className="bg-[#0a5ebe] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2"
                        onClick={() => setShowSearchModal(true)}
                    >
                        <i className="bx bx-search-alt text-lg" /> Search
                    </button>
                </div>

                {/* Modal for Mobile */}
                {showSearchModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
                        <div className="bg-white rounded-xl w-full max-w-2xl p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold text-gray-700">Search Options</h2>
                                <button
                                    onClick={() => setShowSearchModal(false)}
                                    className="text-gray-500 hover:text-black text-2xl font-bold"
                                >
                                    &times;
                                </button>
                            </div>
                            <SearchForm />
                        </div>
                    </div>
                )}

                <p className="text-sm md:text-base text-gray-600">
                    Experience the ultimate freedom of Dreamsrental – tailor adventure by choosing from Premium bikes.
                </p>

                {/* Additional UI elements */}
                <div className="hidden md:flex flex-col gap-4 w-full mt-6 md:flex-row md:items-center md:justify-between ">
                    {/* Customer avatars + text */}
                        <div className="flex -space-x-2">
                            <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white" alt="user1" />
                            <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white" alt="user2" />
                            <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white" alt="user3" />
                        </div>
                        <div className="text-sm sm:text-base">
                            <p className="font-semibold text-black">6K+ Customers</p>
                            <p className="text-gray-500 text-xs sm:text-sm">have used our renting services</p>
                        </div>
                

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                        <button className="w-full sm:w-auto px-4 py-2 border border-black text-black text-sm font-medium rounded-md hover:bg-gray-100 transition">
                            Book a Test Drive
                        </button>
                        <button className="w-full sm:w-auto px-4 py-2 bg-black text-white text-sm font-medium rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                            <span className="text-lg">+</span> Interactive Demo
                        </button>
                        <button className="w-full sm:w-auto px-4 py-2 bg-black text-white text-sm font-medium rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                            <span className="text-lg">+</span> Buy Your Dream Bike
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


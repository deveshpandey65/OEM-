'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function LeftContent() {
    return (
        <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-4xl mx-auto "
        >
            <div className="w-full flex flex-col items-start justify-center gap-6 md:px-4">
                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
                    Make Your Ride Easy With
                    <span className="pl-2 relative inline-block">
                        <span className="text-black">Dreams Rent</span>
                        <span className="ml-2 absolute -bottom-1 left-0 w-full h-2 bg-[#ffa633] -z-10"></span>
                    </span>
                </h1>

                <p className="text-lg md:text-xl font-semibold text-black">
                    We prioritize customer satisfaction
                </p>

                {/* Search Section */}
                <div className="w-[90%] bg-white shadow-lg p-4  md:p-6 rounded-xl flex flex-col gap-4 md:flex-wrap lg:flex-nowrap lg:flex-row">
                    <div className="flex flex-col w-full md:w-[48%] lg:w-1/4">
                        <label className="text-sm text-gray-500 mb-1">Any type</label>
                        <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffa633]">
                            <option>Cruiser</option>
                            <option>Scooter</option>
                            <option>Sport</option>
                            <option>Touring</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full md:w-[48%] lg:w-1/4">
                        <label className="text-sm text-gray-500 mb-1">Model</label>
                        <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffa633]">
                            <option>KTM 300</option>
                            <option>KTM RC 390</option>
                            <option>Yamaha R15</option>
                            <option>Royal Enfield</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full md:w-[48%] lg:w-1/4">
                        <label className="text-sm text-gray-500 mb-1">Location</label>
                        <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffa633]">
                            <option>New York</option>
                            <option>Los Angeles</option>
                            <option>Chicago</option>
                            <option>San Francisco</option>
                        </select>
                    </div>
                    <div className="w-full md:w-auto self-end md:self-center">
                        <button className="bg-[#ffa633] hover:bg-[#ff9a1f] text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 w-full">
                            <i className="bx bx-search-alt text-lg" />
                            Search
                        </button>
                    </div>
                </div>

                <p className="text-sm md:text-base text-gray-600">
                    Experience the ultimate freedom of Dreamsrental – tailor adventure by choosing from Premium bikes.
                </p>

                {/* Bottom Section: Customers + Buttons */}
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
                            Rent a Bike
                        </button>
                        <button className="px-5 py-2 bg-black text-white font-medium rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
                            <span className="text-white text-lg">+</span> Add a Bike
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

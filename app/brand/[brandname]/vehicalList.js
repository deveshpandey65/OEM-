"use client";
import { FaStar, FaHeart } from "react-icons/fa";
import { bikes } from "./bikes";



export default function VehicalList({brand, nav}) {
    return (
        <div className=" py-6">
            <h2 className="text-2xl font-semibold mb-4">{brand.toUpperCase()} Bikes Price in India</h2>

            {bikes.map((bike, idx) => (
                <div
                    key={idx}
                    className="flex flex-col md:flex-row bg-white border-gray-100 rounded-lg shadow-sm mb-6 overflow-hidden"
                >
                    <img
                        src={bike.image}
                        alt={bike.name}
                        className="w-full md:w-1/3  object-contain bg-gray-100"
                    />
                    <div className="p-4 flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold">{bike.name}</h3>
                                <p className="text-gray-700 text-sm">{bike.price} <span className="text-xs text-gray-400">(View On Road Price)</span></p>
                            </div>
                            <FaHeart className="text-gray-400 mt-1 cursor-pointer" />
                        </div>

                        <div className="flex items-center mt-2 text-sm text-yellow-600 font-medium">
                            <FaStar className="mr-1" />
                            {bike.rating}/5
                            <span className="text-gray-500 ml-2">| {bike.reviews} Reviews</span>
                        </div>

                        <div className="text-sm text-gray-600 mt-2">
                            {bike.mileage} &nbsp;&nbsp;•&nbsp;&nbsp; {bike.cc} &nbsp;&nbsp;•&nbsp;&nbsp; {bike.power}
                        </div>

                        <button className="mt-4 px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50 transition">
                            View June Offers
                        </button>
                    </div>
                    
                </div>
            ))}
            <div className="w-full h-10 flex justify-center items-center bg-white">
                <span className="text-blue-500">View All {brand.toUpperCase()} Upcomming {nav.toUpperCase()}</span>
            </div>
        </div>
    );
}

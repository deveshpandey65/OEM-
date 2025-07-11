'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar, FaGasPump, FaCalendarAlt, FaRoad, FaHeart } from 'react-icons/fa';
import { GiCarSeat, GiGearStick } from 'react-icons/gi';
import { MdPlace } from 'react-icons/md';

export default function Wishlist() {
    const [wishlistCars, setWishlistCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/wishlist', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setWishlistCars(res.data);
            } catch (err) {
                console.error('Error fetching wishlist:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlist();
    }, []);
    if (loading) {
        return <div className="p-6 mx-[5%]">Loading...</div>;
    }

    return (
        <div className="p-6 mx-[5%]">
            <h2 className="text-2xl font-bold mb-4">Wishlist</h2>

            {wishlistCars.length === 0 ? (
                <div>No items in your wishlist.</div>
            ) : (
                <div className="space-y-4">
                    {wishlistCars.map((car) => (
                        <div key={car.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4">
                            {/* Image & Heart */}
                            <div className="relative w-full md:w-48 flex-shrink-0">
                                <img
                                    src={car.image || 'https://dreamsrent.dreamstechnologies.com/html/template/assets/img/cars/car-04.jpg'} // fallback image
                                    alt={car.model_name}
                                    className="rounded-lg w-full h-32 md:h-28 object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                                    <FaHeart className={`text-xl text-red-500`} />
                                </div>
                            </div>

                            {/* Car Info */}
                            <div className="flex-1 space-y-1">
                                <h3 className="font-semibold text-lg">{car.model_name}</h3>
                                <div className="text-sm text-gray-500">Category : {car.brand}</div>

                                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 bg-gray-100 p-2 rounded-lg">
                                    <span className="flex items-center gap-1"><GiGearStick /> Manual</span>
                                    <span className="flex items-center gap-1"><FaRoad /> 1000 KM</span>
                                    <span className="flex items-center gap-1"><FaGasPump /> EV</span>
                                    <span className="flex items-center gap-1"><FaCalendarAlt /> 2023</span>
                                    <span className="flex items-center gap-1"><GiCarSeat /> 2 Persons</span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                    <MdPlace className="text-gray-500" />
                                    India
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-end h-full">
                                <div className="flex items-center gap-2 text-orange-500">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`text-sm ${i < 4 ? '' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="text-xs text-red-500 font-semibold">(5.0)</span>
                                </div>
                                <div className="text-lg font-bold text-gray-700">
                                    ₹{car.price} <span className="text-sm text-gray-500 font-normal">/ Day</span>
                                </div>
                                <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm">
                                    🗓 Rent Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

"use client";
import { useEffect, useState } from "react";
import { FaStar, FaGasPump, FaRoad, FaUsers, FaMapMarkerAlt, FaHeart, FaCamera, FaSearch, FaListUl, FaThLarge, FaMapMarkedAlt } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { carsData } from "./cars";
import Locationfilter from "./locationfilter";
import Sort from "./sort";
import Navbar from "@/components/Navbar";
import Filter from "./filter";
import Link from "next/link";
import { useRouter } from 'next/navigation';
export default function CarListingsPage() {
    const [filteredCars, setFilteredCars] = useState(carsData);
    const [carsShow, setCarsShow] = useState(carsData.slice(0, 5));
    const [showCount, setShowCount] = useState(5);
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const router = useRouter();

    const [selectedFilters, setSelectedFilters] = useState({});
    useEffect(() => {
        const verifyToken = async () => {
          const token = localStorage.getItem('token');
    
          if (!token) {
            console.log('not token')
            router.push('/signin');
            return;
          }
    
          try {
            const response = await fetch('http://localhost:5000/api/user/profile', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            if (response.status === 200) {
              setIsLoggedIn(true);
            } else {
            //   localStorage.removeItem('token');
              router.push('/signin');
            }
          } catch (error) {
            console.error("Token invalid or request failed:", error);
            // localStorage.removeItem('token');
            router.push('/signin');
          }
        };
    
        verifyToken();
      }, [router]);
      if (!isLoggedIn) return ""

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <div className="relative w-full h-20  text-black flex items-center justify-center">
                            <Navbar/>
            </div>

            <header className="relative top-0 h-30 mb-2 w-full bg-black text-white p-4 sm:p-6 text-center text-xl sm:text-2xl font-bold">
                Car Listings
            </header>

            <div className="max-w-7xl mx-auto px-4">
                <Locationfilter
                    originalCars={carsData}
                    setCars={setFilteredCars}
                    setCarsShow={setCarsShow}
                    setSelectedFilteres={setSelectedFilters}
                />

                <Sort originalCars={filteredCars} show={showCount} setShow={setShowCount} setCarsShow={setCarsShow} />

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <Filter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} originalCars={filteredCars} setFilterCars={setFilteredCars} setShow={setShowCount} carsShow={setCarsShow} />

                    {/* Car Cards */}
                    <main className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {carsShow.map((car, idx) => (
                            <div key={idx} className="bg-white rounded-2xl h-fit shadow p-4">
                                <div className="relative mb-3">
                                    <img src={car.image} alt={car.name} className="rounded-xl w-full h-44 object-cover" />
                                    <span className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1">
                                        <FaHeart className="text-gray-600" />
                                    </span>
                                    <span className="absolute top-2 left-2 text-xs bg-white bg-opacity-90 rounded px-2 py-0.5 font-medium">
                                        {car.brand}
                                    </span>
                                    <div className="absolute bottom-2 right-2 flex items-center text-xs bg-white rounded-full px-2 py-0.5">
                                        <FaCamera className="mr-1" /> {car.photoCount.toString().padStart(2, "0")}
                                    </div>
                                    <img src={car.userImg} className="absolute bottom-[-12px] left-2 w-6 h-6 rounded-full border-2 border-white" />
                                </div>
                                <Link href={`/listing/${car.id}`} key={car.id}>
                                    <h3 className="font-semibold text-lg cursor-pointer hover:text-cyan-700 transition">{car.name}</h3>
                                </Link>
                                
                                <div className="flex items-center text-yellow-500 text-sm mb-1">
                                    {[...Array(4)].map((_, i) => <FaStar key={i} />)}
                                    <span className="text-gray-600 ml-1">({car.rating}) {car.reviews}</span>
                                </div>
                                <p className="text-blue-900 text-xs font-semibold mb-2 underline cursor-pointer">Reviews</p>
                                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-0.5 rounded">{car.timeAgo}</span>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600 mt-3">
                                    <div className="flex items-center gap-1"><GiGearStickPattern /> {car.type}</div>
                                    <div className="flex items-center gap-1"><FaRoad /> {car.distance}</div>
                                    <div className="flex items-center gap-1"><FaGasPump /> {car.fuel}</div>
                                    <div className="flex items-center gap-1"><FaGasPump /> {car.fuelAlt}</div>
                                    <div className="flex items-center gap-1"><span className="text-sm">🚗</span> {car.year}</div>
                                    <div className="flex items-center gap-1"><FaUsers /> {car.persons} Persons</div>
                                </div>

                                <div className="flex justify-between items-center mt-4 p-2 bg-gray-50 rounded-xl">
                                    <div className="flex items-center text-gray-600 text-sm">
                                        <FaMapMarkerAlt className="mr-1" /> {car.location}
                                    </div>
                                    <div className="text-red-600 font-bold text-lg">₹{car.price}</div>
                                </div>

                                <button className="mt-4 w-full bg-cyan-900 text-white py-2 rounded-xl font-semibold"
                                    onClick={() => router.push(`/listing/${car.id}`)} 
                                        
                                >
                                    Rent Now
                                </button>
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}

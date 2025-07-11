import { carsData } from "../cars";
import { FaStar, FaMapMarkerAlt, FaUsers, FaGasPump, FaTachometerAlt, FaCalendarAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
const cars = carsData.slice(0, 3);

export default function InterestedCars() {
    return (
        <div className="my-10">
            <h2 className="text-2xl font-bold mb-4">You May be Interested in</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car, idx) => (
                    <div className="relative bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                        {car.featured && (
                            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                                Featured
                            </div>
                        )}

                        <div className="relative">
                            <img src={car.image} alt={car.name} className="h-48 w-full object-cover" />
                            <button className="absolute top-2 right-2 text-white text-xl">
                                {car.liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                            </button>
                            <img src={car.ownerImg} alt="owner" className="absolute bottom-2 right-2 w-8 h-8 rounded-full border-2 border-white" />
                        </div>

                        <div className="p-4 space-y-1">
                            <h4 className="font-semibold">{car.name}</h4>
                            <div className="flex items-center text-sm text-gray-600">
                                <div className="flex text-yellow-400 mr-1">
                                    {[...Array(4)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <span className="ml-1">(4.0) {car.reviews} Reviews</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-xs text-gray-700 mt-2">
                                <div className="flex items-center gap-1"><FaTachometerAlt /> {car.transmission}</div>
                                <div className="flex items-center gap-1"><FaCalendarAlt /> {car.km} KM</div>
                                <div className="flex items-center gap-1"><FaGasPump /> {car.fuel}</div>
                                <div className="flex items-center gap-1"><FaMapMarkerAlt /> {car.power}</div>
                                <div className="flex items-center gap-1"><FaCalendarAlt /> {car.year}</div>
                                <div className="flex items-center gap-1"><FaUsers /> {car.capacity} Persons</div>
                            </div>

                            <div className="flex justify-between items-center mt-3">
                                <div className="flex items-center text-sm">
                                    <FaMapMarkerAlt className="mr-1" />
                                    {car.location}
                                </div>
                                <div className="text-lg font-bold text-red-600">${car.price} <span className="text-xs font-normal text-gray-500">/ Day</span></div>
                            </div>

                            <button className="mt-3 w-full bg-teal-700 text-white py-2 text-sm font-semibold rounded hover:bg-teal-800">
                                📅 Rent Now
                            </button>
                        </div>
                  </div>
                ))}
            </div>
        </div>
    );
}

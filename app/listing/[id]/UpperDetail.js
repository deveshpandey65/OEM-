import { FaStar, FaMapMarkerAlt, FaEye, FaCar, FaCalendarAlt, FaLink } from "react-icons/fa";

export default function Header({ car }) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-xl shadow mb-6">
            <div>
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-700">
                    <span className="flex items-center gap-1 text-gray-800 font-medium">
                         {car.type}
                    </span>
                    <span className="bg-teal-600 text-white text-xs px-2 py-0.5 rounded">{car.year}</span>
                    <div className="flex items-center text-yellow-500">
                        {[...Array(Math.floor(car.rating))].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        <span className="ml-1 text-gray-800">({car.rating.toFixed(1)})</span>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900">{car.name}</h1>

                <div className="flex flex-wrap items-center text-sm text-gray-600 mt-2 gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1">
                        <FaMapMarkerAlt /> Location: {car.location}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaEye /> Views: {car.views || 250}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaCar /> Listed on: {car.listedDate || "01 Jan, 2024"}
                    </span>
                </div>
            </div>

            <div className="flex mt-4 sm:mt-0 gap-2">
                <button className="flex items-center gap-1 bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded text-sm font-medium">
                    <FaCalendarAlt /> Total Booking: {car.totalBookings || 300}
                </button>
                <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm font-medium">
                    <FaLink /> Compare
                </button>
            </div>
        </div>
    );
}

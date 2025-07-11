// components/HondaBikesSeries.jsx
import Image from "next/image";
import {bikes} from './bikes';

export default function BikeSeries({brand}) {
    return (
        <div className="w-full mb-4 md:max-w-xs bg-white rounded-xl shadow-md p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">{brand.toUpperCase()} Bikes Series</h2>
            <div className="space-y-4">
                {bikes.map((bike, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <img
                            src={bike.image}
                            alt={bike.name}
                            className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                            <h3 className="text-sm font-medium text-gray-700">{bike.name}</h3>
                            <p className="text-base font-semibold text-gray-900">{bike.priceRange}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

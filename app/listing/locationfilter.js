import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Locationfilter({ originalCars, setCars, setCarsShow, setSelectedFilteres }) {
    const [location, setLocation] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [returnTime, setReturnTime] = useState("");

    const handleSubmit = () => {
        const pickup = pickupDate && pickupTime ? new Date(`${pickupDate}T${pickupTime}`) : null;
        const drop = returnDate && returnTime ? new Date(`${returnDate}T${returnTime}`) : null;
        const now = new Date();

        if (pickup && drop) {
            if (pickup < now || drop < pickup) {
                alert("Invalid pickup/return time");
                return;
            }
        }

        const filtered = originalCars.filter((car) =>
            location ? car.location.toLowerCase().includes(location.toLowerCase()) : true
        );

        setCars(filtered);
        setCarsShow(filtered.slice(0, 5));
        setSelectedFilteres("");
    };

    return (
        <div className="bg-white p-6 rounded-b-xl shadow grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {/* Pickup Location */}
            <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Pickup Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="px-3 py-2 rounded bg-gray-100 w-full"
                    placeholder="Enter city or place"
                />
            </div>

            {/* Pickup Date & Time */}
            <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Pickup Date & Time</label>
                <div className="flex gap-2">
                    <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-1/2 px-2 py-2 rounded bg-gray-100"
                    />
                    <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-1/2 px-2 py-2 rounded bg-gray-100"
                    />
                </div>
            </div>

            {/* Return Date & Time */}
            <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Return Date & Time</label>
                <div className="flex gap-2">
                    <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-1/2 px-2 py-2 rounded bg-gray-100"
                    />
                    <input
                        type="time"
                        value={returnTime}
                        onChange={(e) => setReturnTime(e.target.value)}
                        className="w-1/2 px-2 py-2 rounded bg-gray-100"
                    />
                </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end justify-end">
                <button
                    onClick={handleSubmit}
                    className="bg-orange-400 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold w-full sm:w-auto"
                >
                    <FaSearch /> Search
                </button>
            </div>
        </div>
    );
}

import { FaWifi, FaRoad, FaSatelliteDish } from "react-icons/fa";
import { MdGpsFixed, MdChildCare, MdLocalGasStation } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";

const services = [
    { name: "GPS Navigation Systems", icon: <MdGpsFixed className="text-cyan-800" /> },
    { name: "Wi-Fi Hotspot", icon: <FaWifi className="text-cyan-800" /> },
    { name: "Child Safety Seats", icon: <MdChildCare className="text-cyan-800" /> },
    { name: "Fuel Options", icon: <MdLocalGasStation className="text-cyan-800" /> },
    { name: "Roadside Assistance", icon: <FaRoad className="text-cyan-800" /> },
    { name: "Satellite Radio", icon: <FaSatelliteDish className="text-cyan-800" /> },
    { name: "Additional Accessories", icon: <IoMdOptions className="text-cyan-800" /> },
    { name: "Express Check-in/out", icon: <BiLogIn className="text-cyan-800" /> },
];

export  function ExtraServices() {
    return (
        <div className="bg-white rounded-xl p-6 mb-4 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-2">Extra Service</h2>
            <div className="h-1 w-6 bg-orange-500 mb-4 rounded"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-800 bg-gray-50 rounded-md px-3 py-2 shadow-sm border border-gray-200"
                    >
                        <div className="bg-cyan-50 p-2 rounded-md">{service.icon}</div>
                        <span>{service.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

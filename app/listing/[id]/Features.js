const specs = [
    { label: "Body", value: "Sedan", icon: "/icons/body.png" },
    { label: "Make", value: "Nisssan", icon: "/icons/make.png" },
    { label: "Transmission", value: "Automatic", icon: "/icons/transmission.png" },
    { label: "Fuel Type", value: "Diesel", icon: "/icons/fuel.png" },
    { label: "Mileage", value: "16 Km", icon: "/icons/mileage.png" },
    { label: "Drivetrain", value: "Front Wheel", icon: "/icons/drive.png" },
    { label: "Year", value: "2018", icon: "/icons/year.png" },
    { label: "AC", value: "Air Condition", icon: "/icons/ac.png" },
    { label: "VIN", value: "45456444", icon: "/icons/vin.png" },
    { label: "Door", value: "4 Doors", icon: "/icons/door.png" },
    { label: "Brake", value: "ABS", icon: "/icons/brake.png" },
    { label: "Engine (Hp)", value: "3,000", icon: "/icons/engine.png" },
];

const carFeatures = [
    "Multi-zone A/C", "Premium sound system", "6 Cylinders",
    "Heated front seats", "Bluetooth", "Adaptive Cruise Control",
    "Android Auto", "Keyless Start", "Intermittent wipers",
    "Navigation system", "Memory seat", "4 power windows"
];

export function Specifications() {
    return (
        <section className="bg-white p-6 mb-6 rounded-xl shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <div className="w-8 h-1 bg-orange-500 rounded mb-4"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {specs.map((item, idx) => (
                    <div key={idx} className="flex items-start p-3 rounded-lg bg-gray-50 hover:shadow-md transition">
                        <div className="w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center mr-3">
                            <img src={item.icon} alt={item.label} className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-gray-800">{item.label}</div>
                            <div className="text-sm text-gray-500">{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}

export function CarFeatures() {
    return (
        <section className="bg-white p-6 rounded-xl shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-2">Car Features</h2>
            <div className="w-8 h-1 bg-orange-500 rounded mb-4"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3">
                {carFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <div className="w-6 h-6 bg-cyan-800 rounded-full flex items-center justify-center text-white text-sm">
                            ✓
                        </div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </section>
      
    );
}
  
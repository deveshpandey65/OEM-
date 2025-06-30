import React from 'react'

export default function Pricing() {
  return (
        <div className="w-full bg-white rounded-xl shadow-md p-4 space-y-4">
            {/* Title */}
            <div>
                <h3 className="text-lg font-semibold">Pricing</h3>
                <div className="w-6 h-1 bg-orange-500 mt-1 rounded" />
            </div>

            {/* Pricing Options */}
            <div className="space-y-2">
                {[
                    { label: "Daily", price: "$300", checked: true },
                    { label: "Weekly", price: "$820" },
                    { label: "Monthly", price: "$2400" },
                    { label: "Yearly", price: "$9400" },
                ].map(({ label, price, checked }) => (
                    <div
                        key={label}
                        className={`flex justify-between items-center border px-3 py-2 rounded-lg ${checked ? "bg-gray-100 border-cyan-800" : "border-gray-300"
                            }`}
                    >
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="pricing" defaultChecked={checked} />
                            <span>{label}</span>
                        </label>
                        <span className="font-bold">{price}</span>
                    </div>
                ))}
            </div>

            {/* Delivery / Self Pickup */}
            <div className="flex gap-2">
                <button className="w-1/2 border border-cyan-800 text-cyan-800 py-2 rounded-lg font-medium bg-cyan-50">
                    Delivery
                </button>
                <button className="w-1/2 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium">
                    Self Pickup
                </button>
            </div>

            {/* Locations */}
            <div className="space-y-2 text-sm">
                <div>
                    <label className="block font-medium">Delivery Location</label>
                    <input
                        type="text"
                        placeholder="45, 4th Avanue  Mark Street USA"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="same-location" />
                    <label htmlFor="same-location">Return to same location</label>
                </div>
                <div>
                    <label className="block font-medium">Return Location</label>
                    <input
                        type="text"
                        placeholder="78, 10th street Laplace USA"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                    />
                </div>
            </div>

            {/* Date Pickers */}
            <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                    <label className="block font-medium">Pickup Date</label>
                    <input type="date" className="w-full border rounded-md px-2 py-2" />
                </div>
                <div>
                    <label className="block font-medium">Time</label>
                    <input type="time" className="w-full border rounded-md px-2 py-2" />
                </div>
                <div>
                    <label className="block font-medium">Return Date</label>
                    <input type="date" className="w-full border rounded-md px-2 py-2" />
                </div>
                <div>
                    <label className="block font-medium">Time</label>
                    <input type="time" className="w-full border rounded-md px-2 py-2" />
                </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg">
                    Book
                </button>
                <button className="w-full bg-cyan-800 hover:bg-cyan-900 text-white font-bold py-2 rounded-lg">
                    Enquire Us
                </button>
            </div>
        </div>
    )
}

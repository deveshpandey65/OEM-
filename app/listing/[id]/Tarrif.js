import React from "react";

const tariffData = [
    { name: "4 to 5 Days", price: "$150", baseKm: "25", extraPrice: "$28" },
    { name: "5 to 8 Days", price: "$250", baseKm: "90", extraPrice: "$45" },
    { name: "8 to 15 Days", price: "$380", baseKm: "120", extraPrice: "$60" },
    { name: "16 to 25 Days", price: "$500", baseKm: "500", extraPrice: "$80" },
];

export default function TariffTable() {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md my-4">
            <h3 className="text-lg font-semibold">Tariff</h3>
            <div className="w-6 h-1 bg-orange-500 mt-1 mb-4 rounded" />

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-black text-white text-left">
                            <th className="p-3">Name</th>
                            <th className="p-3">Daily Price</th>
                            <th className="p-3">Base Kilometers</th>
                            <th className="p-3">Kilometers Extra Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {tariffData.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-200 even:bg-gray-50"
                            >
                                <td className="p-3">{item.name}</td>
                                <td className="p-3">{item.price}</td>
                                <td className="p-3">{item.baseKm}</td>
                                <td className="p-3">{item.extraPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

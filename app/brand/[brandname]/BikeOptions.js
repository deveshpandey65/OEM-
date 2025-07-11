// components/HondaBikeOptions.jsx
import { useState } from "react";

export default function BikeOptions() {
    const [activeTab, setActiveTab] = useState("budget");

    const budgetOptions = [
        "Honda Bikes Under 1 Lakh",
        "Honda Bikes Under 1.5 Lakh",
        "Honda Bikes Under 2 Lakh",
        "Honda Bikes Under 5 Lakh",
    ];

    const bodytypeOptions = [
        "Sports Bikes",
        "Cruiser Bikes",
        "Commuter Bikes",
        "Adventure Bikes",
    ];

    return (
        <div className="bg-white mb-4 rounded-xl shadow-md p-4 w-full md:max-w-xs">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Honda Bikes Options</h2>

            {/* Tabs */}
            <div className="flex border-b text-sm mb-3">
                <button
                    onClick={() => setActiveTab("budget")}
                    className={`py-2 px-4 font-medium ${activeTab === "budget"
                            ? "text-red-600 border-b-2 border-red-600"
                            : "text-gray-500"
                        }`}
                >
                    By Budget
                </button>
                <button
                    onClick={() => setActiveTab("bodytype")}
                    className={`py-2 px-4 font-medium ${activeTab === "bodytype"
                            ? "text-red-600 border-b-2 border-red-600"
                            : "text-gray-500"
                        }`}
                >
                    By Bodytype
                </button>
            </div>

            {/* List */}
            <div className="space-y-3">
                {(activeTab === "budget" ? budgetOptions : bodytypeOptions).map((item, index) => (
                    <div
                        key={index}
                        className="bg-white px-4 py-2 rounded-lg shadow-sm text-gray-800 text-sm font-medium cursor-pointer hover:bg-gray-50"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

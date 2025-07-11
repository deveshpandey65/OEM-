import { Star } from "lucide-react";
import { useState } from "react";

export default function BrandDescription({ brand, nav }) {
    const [showFull, setShowFull] = useState(false);

    return (
        <div className="mt-8">
            {/* Title and rating */}
            <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                <span>{brand.toUpperCase()} {nav.toUpperCase()}</span>
                <span className="text-sm font-semibold text-gray-700 flex items-center space-x-1">
                    <span className="ml-2 text-black">4.0</span>
                    <span className="text-sm text-gray-600">/5</span>
                    <Star size={16} fill="#facc15" className="text-yellow-400 ml-1 mr-1" />
                    <span className="text-sm text-gray-600">| 2586 reviews</span>
                </span>
            </h2>

            {/* Description */}
            <div className="mt-4 bg-white text-gray-700 text-sm leading-relaxed border border-gray-200 p-4 rounded-xl">
                <p>
                    Honda bikes price in India starts at Rs 68,794 for Honda Shine 100, which is the cheapest model.
                    The most expensive Honda two wheeler is Honda Gold Wing priced at Rs 39.20 Lakh.
                    The most popular models for Honda includes 6 Commuter, 8 Sports, 1 Street, 3 Cruiser, 1 Roadster, 4 Adventure Tourer, 1 Super, 1 Tourer and 2 Off Road.
                </p>

                {!showFull ? (
                    <span
                        onClick={() => setShowFull(true)}
                        className="text-blue-600 font-medium ml-2 cursor-pointer hover:underline"
                    >
                        Read More
                    </span>
                ) : (
                    <>
                        {/* Table */}
                        <h3 className="mt-6 mb-2 text-lg font-semibold">Honda Bikes Price List 2025 in India</h3>
                        <table className="w-full text-left text-sm border border-gray-300">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="p-2 border">Model</th>
                                    <th className="p-2 border">Ex-Showroom Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="p-2 border">Honda SP 125</td><td className="p-2 border">₹ 92,678 - 1 Lakh</td></tr>
                                <tr><td className="p-2 border">Honda Shine</td><td className="p-2 border">₹ 85,021 - 89,772</td></tr>
                                <tr><td className="p-2 border">Honda Unicorn</td><td className="p-2 border">₹ 1.20 Lakh</td></tr>
                                <tr><td className="p-2 border">Honda Hornet 2.0</td><td className="p-2 border">₹ 1.57 Lakh</td></tr>
                                <tr><td className="p-2 border">Honda SP160</td><td className="p-2 border">₹ 1.22 - 1.28 Lakh</td></tr>
                            </tbody>
                        </table>

                        {/* Latest Updates */}
                        <h3 className="mt-6 mb-2 text-lg font-semibold">Latest Updates on Honda</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Honda unveiled the 2025 Honda Transalp 750 with a new design inspired from the Africa Twin.</li>
                            <li>Honda also unveiled the Honda CRF300L and CRF300 Rally, both expected in India soon.</li>
                            <li>Honda is working on an entry-level adventure tourer based on the CB350 for launch in late 2025.</li>
                            <li>CB350 will also spawn a 350cc scrambler version with rugged bits, expected in late 2025.</li>
                            <li>CB300F Flex Fuel is one of the first bikes to support E85 fuel, expected at Auto Expo 2025.</li>
                        </ul>

                        <span
                            onClick={() => setShowFull(false)}
                            className="text-blue-600 font-medium mt-4 block cursor-pointer hover:underline"
                        >
                            Show Less
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

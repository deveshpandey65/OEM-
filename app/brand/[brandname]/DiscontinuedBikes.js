// components/DiscontinuedBikes.jsx
export default function DiscontinuedBikes() {
    const bikes = [
        "Honda CB",
        "Honda Interceptor",
        "Honda SP160 [2023-2024]",
        "Honda CB 125 F",
        "Honda Navi",
        "Honda Unicorn [2020-2024]",
    ];

    return (
        <div className="bg-white mb-4 rounded-xl shadow-md p-4 w-full md:max-w-xs mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Discontinued Honda Bikes</h2>
            <ul className="space-y-3">
                {bikes.map((bike, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center text-gray-800 text-sm font-medium cursor-pointer hover:text-red-600"
                    >
                        {bike}
                        <span className="text-lg">&rsaquo;</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
  
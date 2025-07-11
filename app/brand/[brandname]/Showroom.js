const showrooms = [
    { city: "Delhi", count: 70, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg" },
    { city: "Bangalore", count: 62, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Chennai", count: 50, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Pune", count: 45, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Hyderabad", count: 44, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Ahmedabad", count: 38, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Jaipur", count: 35, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Mumbai", count: 31, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Lucknow", count: 29, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Patna", count: 17, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Gurgaon", count: 15, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
    { city: "Ghaziabad", count: 13, img: "https://cdn.bikedekho.com/pwa/img/delhi.svg/" },
];

export default function ShowroomGrid({brand}) {
    return (
        <div className="p-6 mb-4 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Honda Bikes Showrooms
                </h2>
                <div className="relative w-full md:w-64 mt-4 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search your city"
                        className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-400">
                        ▼
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {showrooms.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white border border-gray-300 rounded-xl shadow-sm flex flex-col items-center p-4 text-center hover:shadow-md transition"
                    >
                        <img
                            src={item.img}
                            alt={item.city}
                            className="w-16 h-16 mb-3 object-contain"
                        />
                        <p className="text-sm font-semibold text-gray-800">
                            {item.count} Honda
                        </p>
                        <p className="text-sm text-gray-600">
                            Showrooms in {item.city}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
  
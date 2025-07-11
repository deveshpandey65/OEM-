// components/SimilarBrands.jsx
const brands = [
    { name: "Royal Enfield", bikes: "25 Bikes", logo: "https://cdn.bikedekho.com/pwa/img/brandLogo_168x84/royal-enfield.jpg" },
    { name: "TVS", bikes: "17 Bikes", logo: "https://cdn.bikedekho.com/pwa/img/brandLogo_168x84/tvs.jpg" },
    { name: "Yamaha", bikes: "29 Bikes", logo: "https://cdn.bikedekho.com/pwa/img/brandLogo_168x84/tvs.jpg" },
    { name: "Hero", bikes: "31 Bikes", logo: "https://cdn.bikedekho.com/pwa/img/brandLogo_168x84/tvs.jpg" },
    { name: "Bajaj", bikes: "25 Bikes", logo: "https://cdn.bikedekho.com/pwa/img/brandLogo_168x84/tvs.jpg" },
    { name: "KTM", bikes: "27 Bikes", logo: "https://cdn.bikedekho.com/pwa/img/brandLogo_168x84/tvs.jpg" },
    { name: "Suzuki", bikes: "21 Bikes", logo: "https://cdn.bikedekho.com/pwa/img/brandLogo_168x84/tvs.jpg" },
    { name: "Jawa", bikes: "5 Bikes", logo: "https://cdn.bikedekho.com/pwa/img/brandLogo_168x84/tvs.jpg" },
];

export default function SimilarBrands() {
    return (
        <div className="w-full  md:max-w-xs mb-4 bg-white rounded-xl border-gray-200 border-[1px] shadow-md py-4">
            <h2 className="text-lg px-4 font-semibold text-gray-800 mb-4">Similar Brands of Honda</h2>
            <div className="grid grid-cols-3 border-t  border-gray-400">
                {brands.map((brand, index) => {
                    const isLastColumn = (index + 1) % 3 === 0;
                    const isLastRow = index >= brands.length - (brands.length % 3 || 3);

                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center space-y-1 p-2 py-4 border-b border-gray-400
                                        ${!isLastColumn ? "border-r" : ""}
        `}
                        >
                            <img src={brand.logo} alt={brand.name} className="object-contain" />
                            <p className="text-sm font-medium text-gray-800">{brand.name}</p>
                            <p className="text-xs text-gray-500">{brand.bikes}</p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-4 px-4 text-sm text-blue-600 font-medium hover:underline cursor-pointer">
                View All Bikes Brands
            </div>
        </div>
    );
}
  
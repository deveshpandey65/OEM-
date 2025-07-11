export default function BrandNav({ navname, setNav }) {
    const navs = [
        { name: "BIKES", nav: "bikes" },
        { name: "SCOOTERS", nav: "scooters" },
        { name: "SHOWROOMS", nav: "showrooms" },
        { name: "IMAGES", nav: "images" },
        { name: "NEWS", nav: "news" },
        { name: "ROAD TEST", nav: "road-test" },
        { name: "VIDEOS", nav: "videos" },
        { name: "SERVICE CENTERS", nav: "service-centers" },
        { name: "MORE ▼", nav: "more" },
    ];

    return (
        <div className="bg-white border-b shadow-sm">
            <nav className="flex space-x-6 px-8 py-3 text-sm overflow-x-scroll  font-medium text-gray-600">
                {navs.map((link, index) => (
                    <a
                        key={index}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setNav(link.nav);
                        }}
                        className={`uppercase hover:text-red-600 transition ${navname === link.nav
                            ? "text-red-600 border-b-2 border-red-600 pb-1"
                            : ""
                            }`}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </div>
    );
}

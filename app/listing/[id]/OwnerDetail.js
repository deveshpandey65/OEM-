import React from "react";
import {
    FaStar,
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaBehance,
    FaPinterestP,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

export const OwnerInfo = () => (
    <div className="bg-white my-6 p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold">Listing Owner Details</h3>
        <div className="w-6 h-1 bg-orange-500 mt-1 mb-4 rounded" />

        <div className="flex items-center bg-gray-100 p-3 rounded-lg">
            <img
                src="https://i.pravatar.cc/50"
                alt="Owner"
                className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
                <p className="font-semibold">Brooklyn Cars</p>
                <div className="flex items-center text-sm text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="mr-0.5" />
                    ))}
                    <span className="text-gray-600 ml-1">(5.0)</span>
                </div>
            </div>
        </div>

        <div className="text-sm text-gray-700 space-y-2 mt-4">
            <div className="flex justify-between">
                <span className="font-medium">Email</span>
                <span>info@example.com</span>
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Phone Number</span>
                <span>+1 14XXX XXX78</span>
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Location</span>
                <span className="text-right">
                    4635 Pheasant Ridge Road,<br /> City Hollywood, USA
                </span>
            </div>
        </div>

        <button className="mt-4 w-full bg-black text-white py-2 rounded-md font-semibold">
            Message to owner
        </button>
        <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-green-600 font-medium mt-2 flex justify-center items-center gap-1"
        >
            <FaWhatsapp /> Chat Via Whatsapp
        </a>
    </div>
);

export const CarLocationMap = () => (
    <div className="bg-white my-6 p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold">View Car Location</h3>
        <div className="w-6 h-1 bg-orange-500 mt-1 mb-4 rounded" />
        <iframe
            src="https://www.google.com/maps?q=los+angeles&output=embed"
            className="w-full rounded-lg"
            height="150"
            allowFullScreen=""
            loading="lazy"
        />
    </div>
);

export const ShareIcons = () => {
    const icons = [
        { icon: <FaFacebookF />, color: "bg-blue-600" },
        { icon: <FaInstagram />, color: "bg-pink-600" },
        { icon: <FaBehance />, color: "bg-blue-500" },
        { icon: <FaPinterestP />, color: "bg-red-600" },
        { icon: <FaTwitter />, color: "bg-sky-500" },
        { icon: <FaLinkedinIn />, color: "bg-blue-700" },
    ];

    return (
        <div className="bg-white p-4 my-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold">Share</h3>
            <div className="w-6 h-1 bg-orange-500 mt-1 mb-4 rounded" />
            <div className="flex gap-3">
                {icons.map((item, idx) => (
                    <div
                        key={idx}
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${item.color} hover:opacity-80 cursor-pointer`}
                    >
                        {item.icon}
                    </div>
                ))}
            </div>
        </div>
    );
};



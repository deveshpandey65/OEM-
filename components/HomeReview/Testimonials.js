"use client";

import Image from "next/image";
import { FaStar, FaCheckCircle } from "react-icons/fa";

export default function Testimonials() {
    return (
        <section className="bg-[#f6fbfa] py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side */}
                <div className="text-left space-y-4">
                    <h2 className="text-3xl font-semibold leading-tight">
                        What Our <br />
                        <span className="underline decoration-[#ff9a1f] font-bold">Customers Say</span>
                    </h2>
                    <Image
                        src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/testimonial-img.jpg"
                        alt="testimonial preview"
                        width={400}
                        height={240}
                        className="rounded-md object-cover w-full max-w-sm"
                    />
                    <p className="text-lg font-medium">Excellent</p>
                    <div className="flex gap-1">
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <FaStar key={i} className="text-green-500" />
                            ))}
                    </div>
                    <p className="text-sm text-gray-600">Based on 8,312 Reviews</p>
                    <div className="flex items-center gap-2 text-lg font-semibold mt-2">
                        <FaStar className="text-green-500" />
                        Trustpilot
                    </div>
                </div>

                {/* Right Side */}
                <div className="bg-white rounded-xl p-8 shadow-md relative">
                    <p className="font-semibold text-lg">Ananya Sharma</p>
                    <p className="text-sm text-gray-500 mb-2">Mumbai, India</p>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <FaStar key={i} className="text-green-500 text-sm" />
                                ))}
                        </div>
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                            <FaCheckCircle className="text-gray-500" /> Verified
                        </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                        “ NAVEauto Made My Commute a Breeze “
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        I recently started using NAVEauto for my daily commute, and I’m beyond impressed!
                        The scooters are sleek, eco-friendly, and super affordable. What I love most is
                        how smooth the booking process is and how reliable their service has been. NAVEauto
                        has truly redefined urban travel for me in Mumbai.
                    </p>

                    {/* User Avatars */}
                    <div className="flex gap-4 mt-6">
                        {[
                            "https://randomuser.me/api/portraits/women/44.jpg",
                            "https://randomuser.me/api/portraits/men/21.jpg",
                            "https://randomuser.me/api/portraits/women/68.jpg",
                            "https://randomuser.me/api/portraits/men/53.jpg"
                        ].map((src, i) => (
                            <Image
                                key={i}
                                src={src}
                                alt={`user-${i}`}
                                width={50}
                                height={50}
                                className="rounded-full border shadow object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

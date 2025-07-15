"use client";

import { FaMapMarkerAlt, FaRegThumbsUp } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
export default function HowItWorks() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#f6fbfa] py-20 px-4 relative overflow-hidden">
            {/* LEFT Background Image */}
            <Image
                src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-01.png"
                alt="left-dots-bg"
                width={300}
                height={600}
                className="absolute left-0 top-0 h-full w-auto object-cover pointer-events-none"
            />

            {/* RIGHT Top Spinner */}
            <Image
                src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-03.png"
                alt="spinner"
                width={50}
                height={50}
                className="absolute top-4 right-4 animate-spin-fast"
            />

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                    How NAVEauto{" "}
                    <span className="underline decoration-[#ff9a1f]">Works</span>
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Here's a basic outline of how our bike rental typically Works
                </p>
            </div>

            {/* Main Steps */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {[
                    {
                        number: "01",
                        icon: <FaMapMarkerAlt className="text-white" size={30} />,
                        title: "Select Pickup/ Delivery Date & Location",
                        desc: "Determine the date & location for your Bike rental. Consider factors such as your travel itinerary, pickup/drop-off locations.",
                        iconBg: "bg-black",
                    },
                    {
                        number: "02",
                        icon: <FiTarget className="text-white" size={30} />,
                        title: "Reserve your Bike",
                        desc: "Check the availability of your desired vehicle type for your chosen dates and location. Ensure that the rental rates.",
                        iconBg: "bg-teal-600",
                    },
                    {
                        number: "03",
                        icon: <FaRegThumbsUp className="text-white" size={30} />,
                        title: "Enjoy Your Ride",
                        desc: "Check the availability of your desired vehicle type for your chosen dates and location. Ensure that the rental rates.",
                        iconBg: "bg-black",
                    },
                ].map((step, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg px-6 pb-6 shadow-md relative text-left"
                    >
                        <div className="flex flex-row justify-between items-center">
                            <div className="text-[60px] w-fit font-bold text-[#f1f5f4] relative">
                                {step.number}
                            </div>
                            <div
                                className={`w-20 h-20 ${step.iconBg} flex items-center justify-center rounded-b-md relative z-10`}
                            >
                                {step.icon}
                            </div>
                        </div>
                        <h3 className="mt-12 text-lg font-semibold border-b pb-2">
                            {step.title}
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Brand Logos */}
            <div className="text-center mt-20 relative z-10">
                <h4 className="text-lg font-semibold mb-6">
                    Bikes from popular Brands around the world
                </h4>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    {[
                        ["suzuki", "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/brand/brand-01.svg"],
                        ["royal", "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/brand/brand-02.svg"],
                        ["ktm", "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/brand/brand-03.svg"],
                        ["jawa", "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/brand/brand-04.svg"],
                        ["husqvarna", "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/brand/brand-05.svg"],
                        ["honda", "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/brand/brand-06.svg"],
                        ["hero", "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/brand/brand-07.svg"],
                    ].map(([alt, url]) => (
                        <Image
                            key={alt}
                            src={url}
                            alt={alt}
                            width={80}
                            height={40}
                            className="object-contain"
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

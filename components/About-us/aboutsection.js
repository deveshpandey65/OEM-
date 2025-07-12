'use client';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function AboutSection() {
    return (
        <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-[500px] aspect-[6/5] rounded-[20px] overflow-hidden shadow-lg bg-gray-300">
                        {/* Orange background behind the image */}
                        <div className="absolute inset-0 left-0 w-1/2 bg-[#0a5ebe] z-0 rounded-l-[15px]" />

                        {/* Vertical Label */}
                        <div className="absolute -left-16 sm:-left-20 top-1/2 -translate-y-1/2 rotate-[-90deg] text-white font-semibold text-sm sm:text-xl z-10 whitespace-nowrap">
                            12+ years of experiences
                        </div>

                        {/* Image */}
                        <img
                            src="/assets/img/bike.png"
                            alt="about"
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-auto object-contain z-20 rounded-r-[15px]"
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2">

                    <h4 className="text-[#007871] font-semibold uppercase mb-2 text-sm sm:text-base">
                        About Us
                    </h4>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        India's Most Trusted Mobility Platform
                    </h2>

                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        In a country where vehicles drive dreams, NAVEauto was born with a bold mission—to transform
                        how Indians buy, own, and experience mobility. We’re here to fix the fragmented and outdated journey.
                    </p>

                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                        Built by experts from mobility, tech, and design, we deliver a seamless experience from discovery to
                        delivery—trusted, transparent, and truly Indian at heart.
                    </p>

                    {/* List Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                        {[
                            "New & Electric Vehicles in One Place",
                            "Verified Dealers with Real Inventory",
                            "Instant Finance & Paperless Process",
                            "Smart Insurance & After-Sales Support"
                        ].map((text, index) => (
                            <div className="flex items-start gap-2" key={index}>
                                <FaCheckCircle className="text-teal-600 mt-1" />
                                <span className="text-sm sm:text-base">{text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

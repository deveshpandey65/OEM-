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
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                >
                    <h4 className="text-[#007871] font-semibold uppercase mb-2 text-sm sm:text-base">
                        About Us
                    </h4>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        India’s Most Trusted Mobility Platform
                    </h2>

                    {/* <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        In a country where mobility is a lifeline for aspirations, growth, and opportunity,
                        we at <strong>NAVE Mobility Innovations</strong> asked ourselves a simple yet bold question:
                        “Why does something as essential as owning a vehicle still feel like a fragmented, outdated,
                        and stressful experience for millions of Indians?”
                    </p>

                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        From that one question, a new answer was born — <strong>NAVEauto</strong>.
                    </p>

                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        We’re a team of mobility experts, engineers, and dreamers. NAVE is not just a company —
                        it’s an answer to the inefficiencies that plague India's mobility ecosystem, to the mistrust
                        buyers feel, and to the need for modern, tech-driven, human-first vehicle commerce.
                    </p>

                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        Our mission is simple — make buying, owning, and maintaining a vehicle in India as smooth,
                        intelligent, and delightful as using a top-tier consumer app.
                    </p>

                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                        We aren’t building just another listing site. We’re reimagining mobility e-commerce from the ground up — from discovery to transaction to ownership.
                    </p> */}

                    {/* Feature List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-6">
                        {[
                            "New Vehicle Sales (2W / 3W / 4W, ICE & EV)",
                            "Transparent Dealer Inventory",
                            "Embedded Finance Options",
                            "Paperless Purchase Journeys",
                            "Instant Customer Support",
                            "Hyperlocal Delivery & Ownership Onboarding",
                            "Intelligent Service & Insurance Layer",
                            "Long-term Ownership Assistance (Coming Soon)"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <FaCheckCircle className="text-teal-600 mt-1" />
                                <span className="text-sm sm:text-base">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        We are proudly <strong>built in India, for India</strong>. Our team comes from diverse backgrounds:
                        engineering, tech, design, policy, and customer experience — united by a common belief that Indians deserve better.
                    </p>

                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        We’ve seen digital revolutions in banking, education, and healthcare. So, why should mobility be left behind?
                    </p>

                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        At NAVE, we’re building a full-stack platform that connects every dot in the vehicle ecosystem.
                        And most importantly — we’re putting <strong>trust, control, and value</strong> back into the hands of customers.
                    </p>

                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                        We are NAVEauto — where Navigation, Accessibility, Value Addition, and Efficiency define the new way to move.
                    </p>

                    <p className="text-gray-700 font-semibold text-sm sm:text-base mt-2">
                        Welcome aboard.
                    </p> */}
                </motion.div>


            </div>
            <div className="bg-gradient-to-br from-[#f5faff] via-white to-[#f2f8ff] rounded-2xl shadow-xl border border-[#dceeff] p-6 sm:p-10 max-w-5xl mx-auto my-12 space-y-6 leading-relaxed text-gray-800">

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0a5ebe] mb-4">
                    Our Story – A New Way to Move
                </h2>

                <p className="text-base sm:text-lg">
                    In a country where mobility is a lifeline for aspirations, growth, and opportunity, we at
                    <span className="font-semibold text-[#007871]"> NAVE Mobility Innovations </span>
                    asked ourselves a simple yet bold question:
                    <em className="block mt-1 ml-2 text-gray-700">“Why does something as essential as owning a vehicle still feel like a fragmented, outdated, and stressful experience for millions of Indians?”</em>
                </p>

                <p className="text-base sm:text-lg">
                    From that one question, a new answer was born —
                    <span className="font-semibold text-[#0a5ebe]"> NAVEauto</span>.
                </p>

                <p className="text-base sm:text-lg">
                    We’re a team of mobility experts, engineers, and dreamers. NAVE is not just a company — it’s an answer to the inefficiencies that plague India's mobility ecosystem, the mistrust buyers feel, and the growing need for modern, tech-driven, human-first vehicle commerce.
                </p>

                <p className="text-base sm:text-lg">
                    Our mission is clear — make buying, owning, and maintaining a vehicle in India as smooth, intelligent, and delightful as using a world-class consumer app.
                </p>

                <p className="text-base sm:text-lg">
                    We're not building just another listing site. We're
                    <strong className="text-gray-900 ml-1">reimagining the foundation of mobility e-commerce</strong> — from discovery to transaction to long-term ownership.
                </p>

                <hr className="border-t border-dashed border-[#aad4ff] my-6" />

                <p className="text-base sm:text-lg">
                    We are proudly <strong>built in India, for India</strong>. Our team spans engineering, technology, design, policy, and customer care — all united by the belief that Indians deserve a seamless mobility experience.
                </p>

                <p className="text-base sm:text-lg">
                    We've seen digital transformation in banking, education, and healthcare. So why should mobility be left behind?
                </p>

                <p className="text-base sm:text-lg">
                    At NAVE, we're building a full-stack platform that connects every dot in the vehicle ecosystem — with
                    <span className="font-medium text-[#007871] ml-1">trust, control, and value</span> at every step.
                </p>

                <p className="text-lg font-medium text-[#0a5ebe]">
                    We are <span className="font-bold">NAVEauto</span> — where Navigation, Accessibility, Value Addition, and Efficiency define the new way to move.
                </p>

                <p className="text-base sm:text-lg font-semibold text-[#007871] mt-2">
                    Welcome aboard.
                </p>
            </div>


        </section>
    );
}

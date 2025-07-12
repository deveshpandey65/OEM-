'use client';
import { FaHandshake, FaMapMarkerAlt, FaLightbulb, FaTruck, FaSmile } from 'react-icons/fa';

export default function WhyPeopleLoveUs() {
    return (
        <section className="bg-[#111] t text-white py-20 relative overflow-hidden">
            <div className="container mx-[5%] px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-3/5">
                    <h2 className="text-4xl font-bold mb-4">
                        Why people <span className="text-[#0a5ebe]">LOVE</span> us
                    </h2>
                    <p className="text-lg mb-10">
                        From trust and transparency to hyperlocal support and all-in-one convenience, we make buying vehicles feel fast, simple, and delightful.
                    </p>

                    {/* Grid of Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1c1c1c] p-4 rounded-full">
                                <FaHandshake className="text-[#0a5ebe] text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-1">Trust at Every Step</h4>
                                <p className="text-sm text-gray-300">
                                    Transparent pricing, verified dealers, and no hidden charges—from search to ownership.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1c1c1c] p-4 rounded-full">
                                <FaMapMarkerAlt className="text-[#0a5ebe] text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-1">Hyperlocal & Human</h4>
                                <p className="text-sm text-gray-300">
                                    Our local teams provide on-ground support for personalized service and quick delivery.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1c1c1c] p-4 rounded-full">
                                <FaLightbulb className="text-[#0a5ebe] text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-1">Smarter Buying Decisions</h4>
                                <p className="text-sm text-gray-300">
                                    From comparisons to AI-powered suggestions, we help you pick the right vehicle—not just the most advertised.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1c1c1c] p-4 rounded-full">
                                <FaTruck className="text-[#0a5ebe] text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-1">End-to-End Convenience</h4>
                                <p className="text-sm text-gray-300">
                                    Finance, insurance, paperwork, delivery—we handle it all in one seamless flow.
                                </p>
                            </div>
                        </div>

                        
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-2/5 hidden w-full md:flex justify-center mt-10 lg:mt-0">
                    <img
                        src="/assets/img/bike.png"
                        alt="Why People Love Us"
                        className="w-[90%] max-w-[500px] h-auto"
                    />
                </div>
            </div>
        </section>
    );
}

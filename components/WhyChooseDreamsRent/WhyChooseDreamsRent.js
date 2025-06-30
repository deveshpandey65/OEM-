'use client';
import { FaBookmark, FaBolt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

export default function WhyPeopleLoveDreamsRent() {
    return (
        <section className="bg-[#111] text-white py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-3/5">
                    <h2 className="text-4xl font-bold mb-4">
                        Why People Love To Use <span className="text-orange-400">Dreams Rent</span>
                    </h2>
                    <p className="text-lg mb-10">
                        Using Dreams Rent for bike rentals because it offers quality bikes, convenience, flexibility,
                        affordability, excellent customer service & a commitment to community engagement &
                        sustainability.
                    </p>

                    {/* Grid of Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1c1c1c] p-4 rounded-full">
                                <FaBookmark className="text-orange-400 text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-1">Quality Bikes</h4>
                                <p className="text-sm text-gray-300">
                                    Dreams Rent offers a fleet of high-quality bikes, that including mountain bikes, road bikes, city bikes.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1c1c1c] p-4 rounded-full">
                                <FaBolt className="text-orange-400 text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-1">Variety of Options</h4>
                                <p className="text-sm text-gray-300">
                                    Whether customers are looking for bikes for leisurely rides, commuting, or adventure cycling.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1c1c1c] p-4 rounded-full">
                                <FaCalendarAlt className="text-orange-400 text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-1">Flexible Rental Periods</h4>
                                <p className="text-sm text-gray-300">
                                    Customers appreciate the flexibility of choosing rental durations that suit their schedules.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-[#1c1c1c] p-4 rounded-full">
                                <FaDollarSign className="text-orange-400 text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-1">Affordable Pricing</h4>
                                <p className="text-sm text-gray-300">
                                    Dreams Rent offers competitive pricing for bike rentals, making cycling accessible to a wide range of people.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-2/5 hidden w-full md:flex justify-center  mt-10 lg:mt-0">
                    <img
                        src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/quality-img.png"
                        alt="Bike"
                        className="w-[90%] max-w-[500px] h-auto"
                    />
                </div>
            </div>
        </section>
    );
}

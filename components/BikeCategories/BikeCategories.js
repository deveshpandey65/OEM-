"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { motion } from "framer-motion"; 

import "swiper/css";
import "swiper/css/navigation";

import { FaMotorcycle, FaRoad, FaBolt, FaBiking } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";

const bikeData = [
    { name: "Off Road", bikes: 35, icon: FaBiking },
    { name: "Cruiser", bikes: 15, icon: FaMotorcycle },
    { name: "Scooters", bikes: 40, icon: GiScooter },
    { name: "Tourers", bikes: 10, icon: FaRoad },
    { name: "Sports", bikes: 20, icon: FaMotorcycle },
    { name: "Electric", bikes: 30, icon: FaBolt },
    { name: "Scramblers", bikes: 25, icon: FaBiking },
];

export default function BikeCategories() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <motion.section
        
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gray-100 py-16 px-4 text-center relative overflow-hidden"
        >
            <h2 className="text-3xl md:text-4xl font-bold">
                Popular Bike{" "}
                <span className="text-black underline decoration-[#ff9a1f]">
                    Categories
                </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Most popular worldwide Category due to their reliability, affordability,
                and features.
            </p>

            <div className="relative mt-10">
                {/* Left Dot Image */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 hidden lg:block">
                    <img
                        src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/category-bg.png"
                        alt="dots left"
                        className="w-50 h-50 mb-4 opacity-60"
                    />
                </div>

                {/* Right Dot Image */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden lg:block w-[5%]">
                    <img
                        src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/category-bg.png"
                        alt="dots right"
                        className="w-32 h-32 opacity-60"
                    />
                </div>

                {/* Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="absolute mx-20 left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-[#ff9a1f] hover:bg-[#ff9a1f] hover:text-white rounded-full p-3 shadow transition"
                >
                    &#8592;
                </button>
                <button
                    ref={nextRef}
                    className="absolute mx-20 right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-[#ff9a1f] hover:bg-[#ff9a1f] hover:text-white rounded-full p-3 shadow transition"
                >
                    &#8594;
                </button>

                {/* Swiper */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    speed={1000}
                    grabCursor={true}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 },
                    }}
                    className=" !mx-20"
                >
                    {bikeData.map((bike, index) => {
                        const IconComponent = bike.icon;
                        return (
                            <SwiperSlide key={index}>
                                <div className="group bg-white p-6 max-w-[200px] rounded-md shadow text-center hover:text-green-300 transition-all duration-300 hover:shadow-lg hover:scale-[1.03] cursor-pointer">
                                    <div className="bg-gray-100 w-20 h-20 mx-auto group-hover:bg-green-300 rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
                                        <IconComponent
                                            size={40}
                                            className="text-black group-hover:text-white transition-colors duration-300"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-lg group-hover:text-green-300">
                                        {bike.name}
                                    </h3>
                                    <p className="text-gray-500">{bike.bikes} Bikes</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <button className="mt-10 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition">
                View all Categories
            </button>
        </motion.section>
    );
}

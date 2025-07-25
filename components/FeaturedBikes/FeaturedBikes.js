'use client';
import { useRef, useEffect, useState } from "react";
import { FaStar, FaHeart, FaBolt, FaGasPump, FaRoad } from "react-icons/fa";
import { GiTireIron } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import "swiper/css/navigation";

const bikes = [
    {
        name: "Ather 450X",
        price: 145000,
        reviews: 412,
        rating: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAGSOVt11fY8nUlMw9ohgTf35uQ5jdDM4Lw&s",
        ribbon: "Top Seller",
        ribbonColor: "green-600",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        downloads: "5.1m",
    },
    {
        name: "Ola S1 Pro",
        price: 139999,
        reviews: 520,
        rating: 5,
        image: "https://assets.otocapital.in/production/amethyst-ola-s1-pro-image.png",
        ribbon: "Editor's Pick",
        ribbonColor: "purple-600",
        avatar: "https://randomuser.me/api/portraits/women/21.jpg",
        downloads: "6.8m",
    },
    {
        name: "TVS iQube",
        price: 125000,
        reviews: 289,
        rating: 4,
        image: "https://img-cdn.evfy.in/products/iqube-PrimaryImage.webp",
        ribbon: "Value Buy",
        ribbonColor: "blue-600",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        downloads: "3.2m",
    },
    {
        name: "Vida V1 Pro",
        price: 145000,
        reviews: 180,
        rating: 4,
        image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/c/q/x/-original-imagz8xnkeykwmpc.jpeg?q=90&crop=false",
        ribbon: "Popular",
        ribbonColor: "red-500",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        downloads: "2.9m",
    },
    {
        name: "Bajaj Chetak EV",
        price: 130000,
        reviews: 305,
        rating: 5,
        image: "https://cdn.bajajauto.com/-/media/chetakv2/content-image/image-series/3502_image.webp",
        ribbon: "Classic EV",
        ribbonColor: "yellow-600",
        avatar: "https://randomuser.me/api/portraits/men/27.jpg",
        downloads: "3.7m",
    },
    {
        name: "Ola S1 Air",
        price: 110000,
        reviews: 198,
        rating: 4,
        image: "https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/ola-select-model-neon-1690531574765.jpg",
        ribbon: "Budget Pick",
        ribbonColor: "indigo-600",
        avatar: "https://randomuser.me/api/portraits/women/39.jpg",
        downloads: "2.4m",
    },
];


export default function FeaturedBikes() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <motion.section 

            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Featured & <span className="underline decoration-orange-400">Top Rated Bikes</span>
            </h2>
            <p className="text-gray-600 text-center mt-2">
                Here's a list of some of the most popular Bikes globally, based on sales and customer preferences
            </p>

            <div className="relative mt-10">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation]}
                    onSwiper={setSwiperInstance}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {bikes.map((bike, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden group">
                                {/* Ribbon */}
                                <div className="absolute top-0 left-0 z-10">
                                    <div className={`w-[100px] text-center text-white text-[10px] font-semibold py-[2px] rotate-[-45deg] translate-x-[-30px] translate-y-[20px] ${bike.ribbon === "Featured" ? "bg-red-500" : "bg-orange-500"}`}>
                                        {bike.ribbon}
                                    </div>
                                </div>

                                {/* Avatar */}
                                <img
                                    src={bike.avatar}
                                    alt="avatar"
                                    className="absolute top-2 right-2 w-10 h-10 rounded-full border-2 border-white shadow z-10"
                                />

                                {/* Image */}
                                <div className="flex items-center justify-center h-48 bg-white">
                                    <img src={bike.image} alt={bike.name} className="object-contain h-full hover:scale-105 transition-all duration-600" />
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        {Array.from({ length: bike.rating }).map((_, idx) => (
                                            <FaStar key={idx} />
                                        ))}
                                        <span className="ml-2 text-gray-500 text-sm">{bike.reviews} Reviews</span>
                                    </div>

                                    <div className="flex justify-between items-center mt-2">
                                        <h3 className="font-semibold text-lg">{bike.name}</h3>
                                        <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                            <FaBolt />
                                            {bike.downloads}
                                        </span>
                                    </div>

                                    {/* <div className="flex justify-between text-sm text-gray-600 mt-3">
                                        <div className="flex flex-col items-center">
                                            <FaBolt />
                                            <span>{bike.stats.brake}</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <FaRoad />
                                            <span>{bike.stats.mileage}</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <FaGasPump />
                                            <span>{bike.stats.fuel}</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <GiTireIron />
                                            <span>{bike.stats.tyre}</span>
                                        </div>
                                    </div> */}

                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-lg font-bold">
                                            ₹{bike.price} 
                                        </span>
                                        <div className="flex gap-2">
                                            <button className="border p-2 rounded-full hover:bg-gray-100">
                                                <FaHeart />
                                            </button>
                                            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm font-semibold">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button ref={prevRef} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100">
                    &#8592;
                </button>
                <button ref={nextRef} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100">
                    &#8594;
                </button>

                <div className="text-center mt-8">
                    <button
                        className="bg-black text-white hover:text-black px-6 py-2 rounded-md border-black border-2 hover:bg-white transition-colors duration-300"
                        onClick={() => window.location.href = '/listing'}
                    >
                        View All Bikes
                    </button>
                </div>
            </div>
        </motion.section>
    );
}

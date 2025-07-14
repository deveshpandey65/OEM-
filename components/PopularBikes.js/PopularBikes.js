"use client";

import { FaStar, FaBolt, FaGasPump, FaRoad } from "react-icons/fa";
import { GiTireIron } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const bikes = [
    {
        name: "Ather 450X",
        price: 145000,
        reviews: 412,
        rating: 4,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAGSOVt11fY8nUlMw9ohgTf35uQ5jdDM4Lw&s",
            "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/Ather-450X-Gen-3-review-featured-image-1200x675.jpg",
            "https://static.autox.com/uploads/2022/07/Ather-450X-Gen-3-Side-Profile.jpg"
        ],
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        downloads: "5.1m"
    },
    {
        name: "Ola S1 Pro",
        price: 139999,
        reviews: 520,
        rating: 5,
        images: [
            "https://assets.otocapital.in/production/amethyst-ola-s1-pro-image.png",
            "https://images.91wheels.com/assets/b_images/main/models/profile/profile1663059435.jpg",
            "https://img.etimg.com/thumb/msid-94274188,width-1200,height-900,imgsize-235782,overlay-etauto/photo.jpg"
        ],
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        downloads: "6.8m"
    },
    {
        name: "TVS iQube",
        price: 125000,
        reviews: 289,
        rating: 4,
        images: [
            "https://img-cdn.evfy.in/products/iqube-PrimaryImage.webp",
            "https://media.zigcdn.com/media/content/2021/Apr/iqube-1_600x400.jpg",
            "https://cdn1.acedms.com/photos/images/800x600/tvs-iQube-Electric-160420231137113.jpg"
        ],
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        downloads: "3.2m"
    },
    {
        name: "Vida V1 Pro",
        price: 145000,
        reviews: 180,
        rating: 4,
        images: [
            "https://rukminim3.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/c/q/x/-original-imagz8xnkeykwmpc.jpeg?q=90&crop=false",
            "https://media.zigcdn.com/media/model/2022/Oct/vida-v1-pro-right-side-view_600x400.jpg",
            "https://imgd.aeplcdn.com/1056x594/n/cw/ec/144203/vida-v1-right-front-three-quarter-2.png"
        ],
        avatar: "https://randomuser.me/api/portraits/women/62.jpg",
        downloads: "2.9m"
    },
    {
        name: "Bajaj Chetak EV",
        price: 130000,
        reviews: 305,
        rating: 5,
        images: [
            "https://cdn.bajajauto.com/-/media/chetakv2/content-image/image-series/3502_image.webp",
            "https://static.autox.com/uploads/2023/01/Bajaj-Chetak-EV-Front-Three-Quarter.jpg",
            "https://imgd.aeplcdn.com/1280x720/n/cw/ec/39089/chetak-right-front-three-quarter-2.jpeg"
        ],
        avatar: "https://randomuser.me/api/portraits/men/38.jpg",
        downloads: "3.7m"
    },
    {
        name: "Ola S1 Air",
        price: 110000,
        reviews: 198,
        rating: 4,
        images: [
            "https://imgd.aeplcdn.com/1280x720/n/bw/models/colors/ola-select-model-neon-1690531574765.jpg",
            "https://www.team-bhp.com/sites/default/files/styles/check_high_res/public/ola-s1-air-ev-03.jpg",
            "https://static.autox.com/uploads/2023/02/Ola-S1-Air-Review.jpg"
        ],
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        downloads: "2.4m"
    }
];


export default function PopularBikes() {
    return (
        <section className="bg-[#f9f9f9] py-20 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Most Popular <span className="underline decoration-[#ff9a1f]">Bikes</span>
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Here's a list of some of the most popular Bikes globally, based on sales and customer preferences
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {bikes.map((bike, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow p-4 flex flex-col lg:flex-row items-start gap-6 relative"
                    >
                        {/* Avatar */}
                        <Image
                            src={bike.avatar}
                            alt="user"
                            width={40}
                            height={40}
                            className="rounded-full absolute top-4 left-4 border-2 border-white shadow"
                        />

                        {/* Image Slider */}
                        <div className="w-full lg:w-1/2">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                className="w-full h-48"
                            >
                                {bike.images.map((img, idx) => (
                                    <SwiperSlide
                                        key={idx}
                                        className="flex items-center justify-center h-full"
                                    >
                                        <img
                                            src={img}
                                            alt={`${bike.name} ${idx + 1}`}
                                            className="object-contain h-full max-h-48"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Details */}
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-wrap justify-between items-center gap-2">
                                <div className="flex items-center text-yellow-500 text-sm">
                                    {Array.from({ length: bike.rating }).map((_, idx) => (
                                        <FaStar key={idx} />
                                    ))}
                                    <span className="ml-2 text-gray-500">{bike.reviews} Reviews</span>
                                </div>
                                <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                    <FaBolt size={12} /> {bike.downloads}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold mt-2">{bike.name}</h3>

                            {/* <div className="grid grid-cols-2 sm:grid-cols-4 text-sm text-gray-600 mt-4 gap-4">
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

                            <div className="flex justify-between items-center mt-4 flex-wrap gap-3">
                                <span className="text-lg font-bold">
                                    ₹{bike.price}
                                </span>
                                <div className="flex gap-2">
                                    <button className="border rounded-full p-2 hover:bg-gray-100">❤️</button>
                                    <button className="bg-black text-white px-4 py-2 rounded text-sm font-semibold">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

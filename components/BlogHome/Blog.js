"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const blogs = [
    {
        title: "Unlocking the Freedom of Travel: The Ultimate Guide.",
        description:
            "Are you planning your next adventure but feeling overwhelmed by the logistics of transportation...",
        date: "Apr 21, 2024",
        image:
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/blog/blog-bike-01.jpg",
    },
    {
        title: "Tips for a Seamless Rental Experience",
        description:
            "Book your rental car in advance to secure the best rates and availability, especially during...",
        date: "Apr 27, 2024",
        image:
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/blog/blog-bike-02.jpg",
    },
    {
        title: "Embark on Your Next Adventure with Confidence.",
        description:
            "With the freedom and flexibility of car rentals, the world is yours to explore...",
        date: "May 02, 2024",
        image:
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/blog/blog-bike-03.jpg",
    },
    {
        title: "Embark on Your Next Adventure with Confidence.",
        description:
            "With the freedom and flexibility of car rentals, the world is yours to explore...",
        date: "May 02, 2024",
        image:
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
    },
    {
        title: "Embark on Your Next Adventure with Confidence.",
        description:
            "With the freedom and flexibility of car rentals, the world is yours to explore...",
        date: "May 02, 2024",
        image:
            "https://dreamsrent.dreamstechnologies.com/html/template/assets/img/blog/blog-03.jpg",
    },
];

export default function BlogSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                    Contemporary News And <br />
                    Insights{" "}
                    <span className="underline decoration-[#ff9a1f] font-semibold">
                        For You
                    </span>
                </h2>
                <p className="text-gray-600 mt-3">
                    Here's a hypothetical blog post about car rental services
                </p>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10"
                >
                    {blogs.map((blog, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="rounded-md shadow border overflow-hidden bg-white h-full">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-[220px] object-cover hover:scale-110 transition-transform duration-300"

                                />
                                <div className="p-5">
                                    <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {blog.description}
                                    </p>

                                    <div className="mt-4 pt-4 border-t flex justify-between items-center text-sm text-gray-500">
                                        <span className="flex items-center gap-2">
                                            <FaCalendarAlt size={14} />
                                            {blog.date}
                                        </span>
                                        <button className="text-teal-700 font-semibold hover:underline flex items-center gap-1">
                                            Read More <FaArrowRight size={12} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* View All Blog Button */}
                <div className="text-center mt-8">
                    <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 text-sm font-medium">
                        View all Blog
                    </button>
                </div>
            </div>
        </section>
    );
}

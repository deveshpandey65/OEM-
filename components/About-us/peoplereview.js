'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: 'Riya Sharma',
        rating: 5.0,
        message:
            'NAVEauto made my vehicle purchase experience seamless. I booked, financed, and got it delivered without stepping out.',
        image: 'https://randomuser.me/api/portraits/women/25.jpg',
        quoteColor: 'text-[#558080]',
    },
    {
        name: 'Arjun Mehta',
        rating: 5.0,
        message:
            'Amazing service and support. The team helped me compare options and got my loan approved in just one day!',
        image: 'https://randomuser.me/api/portraits/men/31.jpg',
        quoteColor: 'text-[#ffa633]',
    },
    {
        name: 'Pooja Iyer',
        rating: 5.0,
        message:
            'Loved how everything was digital and hassle-free. The delivery was on time and well-coordinated. Highly recommend!',
        image: 'https://randomuser.me/api/portraits/women/45.jpg',
        quoteColor: 'text-[#558080]',
    },
    {
        name: 'Rohit Nambiar',
        rating: 5.0,
        message:
            'NAVEauto’s support team was super responsive. They even helped me figure out the best EV options in my city.',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
        quoteColor: 'text-[#ffa633]',
    },
];

export default function TestimonialSlider() {
    return (
        <section className="relative bg-black text-white py-20 px-4 md:px-10 overflow-hidden">
            {/* Diagonal Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffa633] -z-10 skew-x-[20deg] origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#ffa633] -z-10 skew-x-[-20deg] origin-bottom-left"></div>

            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold">What People Say About Us?</h2>
                <div className="w-14 h-1 mx-auto bg-[#ffa633] rounded-full mt-3 mb-4" />
                <p className="text-gray-300">
                    Hear what our happy customers have to say about their journey with NAVEauto.
                </p>
            </div>

            {/* Swiper Slider */}
            <div className="max-w-5xl mx-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className={`relative p-6 rounded-md shadow-lg h-full bg-white text-black hover:bg-[#007C91]`}>
                                <FaQuoteRight
                                    className={`absolute top-4 right-4 text-3xl opacity-20 ${t.quoteColor}`}
                                />
                                {/* Profile */}
                                <div className="flex items-center gap-4 mb-3">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                                    />
                                    <div>
                                        <h4 className="font-bold">{t.name}</h4>
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-sm" />
                                            ))}
                                            <span className="text-sm ml-1 opacity-80">({t.rating})</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <p className="text-sm text-black hover:text-white transition">{t.message}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

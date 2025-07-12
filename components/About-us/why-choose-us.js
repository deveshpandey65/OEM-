'use client';
import { FaVectorSquare, FaCrown, FaUserCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'End-to-End Convenience',
        description:
            'Finance, insurance, delivery, and support—everything in one platform, built to simplify your vehicle journey.',
        icon: FaVectorSquare,
        bgColor: 'bg-[#558080]',
    },
    {
        title: 'Hyperlocal & Human',
        description:
            'With on-ground teams in your city, we offer faster deliveries and real-time assistance whenever you need it.',
        icon: FaCrown,
        bgColor: 'bg-[#0c7c8e]',
    },
    {
        title: 'Trust at Every Step',
        description:
            'Verified dealers, transparent pricing, and no hidden costs. NAVEauto is built on trust, not tactics.',
        icon: FaUserCheck,
        bgColor: 'bg-[#ffa633]',
    },
];

export default function WhyChooseUs() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white py-20 px-4 md:px-10">
            
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
                <div className="w-14 h-1 mx-auto bg-[#ffa633] rounded-full mt-3 mb-4" />
                <p className="text-gray-500 max-w-xl mx-auto">
                    A full-stack mobility solution built for India—intelligent, local, and trustworthy from start to finish.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white hover:bg-black hover:text-white rounded-xl shadow p-8 text-center"
                        >
                            <div
                                className={`${feature.bgColor} text-white w-16 h-16 mx-auto rounded-md flex items-center justify-center mb-6`}
                            >
                                <Icon size={28} />
                            </div>
                            <h4 className="text-lg hover:text-white font-semibold mb-2">{feature.title}</h4>
                            <p className="hover:text-white text-sm">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
}

'use client';
import { FaVectorSquare, FaCrown, FaUserCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
const features = [
    {
        title: 'Easy & Fast Booking',
        description:
            'Completely carinate e business testing process whereas fully researched customer service. Globally extensive content with quality.',
        icon: FaVectorSquare,
        bgColor: 'bg-[#558080]',
    },
    {
        title: 'Many Pickup Location',
        description:
            'Enthusiastically magnetic initiatives with cross-platform sources. Dynamically target testing procedures through effective.',
        icon: FaCrown,
        bgColor: 'bg-[#0c7c8e]',
    },
    {
        title: 'Customer Satisfaction',
        description:
            'Globally user centric method interactive. Seamlessly revolutionize unique portals corporate collaboration.',
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
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white hover:bg-black hover:text-white   rounded-xl shadow p-8 text-center"
                        >
                            <div
                                className={`${feature.bgColor}  text-white w-16 h-16 mx-auto rounded-md flex items-center justify-center mb-6`}
                            >
                                <Icon size={28} />
                            </div>
                            <h4 className="text-lg hover:text-white font-semibold mb-2">{feature.title}</h4>
                            <p className=" hover:text-white text-sm">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
}

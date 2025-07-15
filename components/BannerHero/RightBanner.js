'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const bikeImages = [
    '/assets/img/bike.png',
    '/assets/img/bike1.png',
    '/assets/img/bike2.png',
    '/assets/img/bike1.png',
];

export default function RightBanner() {
    const [currentBike, setCurrentBike] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBike((prev) => (prev + 1) % bikeImages.length);
        }, 5000); // every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="block w-full max-w-[650px] aspect-[1.1] mx-auto  md:relative lg:block">
            {/* Background image */}
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-[70%] md:w-[100%] md:h-auto max-w-[650px] aspect-[1.1] mx-auto md:relative md:block"
            >
                <Image
                    src="/assets/img/bg-bike.png"
                    alt="triangle bg"
                    height={500}
                    width={500}
                    className="z-0 md:w-[90%] top-10 md:top-0 bottom-0 md:right-10 absolute object-cover"
                />
            </motion.div>

            {/* Animated bike image with auto-change */}
            <div className="absolute right-0 bottom-0 z-10 transform md:-translate-x-[150px] -translate-x-[100px] w-[70%] h-[50%] md:w-[500px] md:h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={bikeImages[currentBike]}
                        initial={{ x: 150, opacity: 0, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: -100, opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute w-full h-full"
                    >
                        <Image
                            src={bikeImages[currentBike]}
                            alt={`bike-${currentBike}`}
                            fill
                            className="object-contain mix-blend-multiply"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            
        </div>
    );
}

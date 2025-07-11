'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

export default function RightBanner() {
    return (
        <div
            className="relative w-full max-w-[650px] aspect-[1.1] mx-auto hidden md:relative lg:block"
        >
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full max-w-[650px] aspect-[1.1] mx-auto hidden md:relative lg:block"

            >
                <Image
                src="/assets/img/bg-bike.png"
                alt="triangle bg"
                height={500}
                width={500}
                className="z-0 bottom-0 right-10 absolute object-cover"
            />
            </motion.div>
            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.8 }} 
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute right-0 bottom-0 z-10 transform -translate-x-[150px]"
            >
                <Image
                    src="/assets/img/bike.png"
                    alt="bike"
                    height={500}
                    width={500}
                    className="object-contain mix-blend-multiply"
                />
            </motion.div>

        </div>
    );
}

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

export default function RightBanner() {
    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-[650px] aspect-[1.1] mx-auto hidden md:relative lg:block"
        >
            <Image
                src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg.png"
                alt="triangle bg"
                height={500}
                width={500}
                className="z-0 bottom-0 right-10 absolute object-cover"
            />
            <div className="absolute right-0 bottom-0 z-10 transform -translate-x-[150px]">
                <Image
                    src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/banner-img-01.png"
                    alt="bike"
                    height={500}
                    width={500}
                    className="object-contain"
                />
            </div>
        </motion.div>
    );
}

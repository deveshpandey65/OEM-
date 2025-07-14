'use client'
import { useEffect, useState } from 'react';

const taglines = [
    "INDIA's First Hyper Local Automobile Portal",
    "Lightning-fast application for every mile delivery",
    "Reshaping INDIA's mobility innovation",
    "App for peace of mind driving",
    "One country, one application for automobiles",
    "Hyperlocal marketplace for automobiles"
];

const HeroSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % taglines.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="h-40 hidden  sm:flex items-center justify-center bg-cover bg-center text-white text-center relative"
            style={{ backgroundImage: "url('/assets/img/hero-banner.jpg')" }} // replace with your background
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 max-w-3xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold transition-opacity duration-1000">
                    {taglines[index]}
                </h1>
                <p className="mt-4 text-lg text-gray-200">
                    Empowering local mobility with cutting-edge tech.
                </p>
            </div>
        </section>
    );
};

export default HeroSlider;

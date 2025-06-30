'use client';

export default function Quality() {
    return (
        <div className="bg-black text-white py-8 px-4 flex flex-col items-center justify-center overflow-hidden relative">
            {/* Marquee Wrapper */}
            <div className="w-full overflow-hidden">
                <div className="animate-marquee whitespace-nowrap flex gap-16 px-4">
                    {[
                        'Affordable Bike Rentals',
                        'High-Quality Bikes',
                        '24/7 Customer Support',
                        'Flexible Rental Plans',
                        'Adventure-Ready Options',
                        'Punctual Delivery',
                        'Trusted by Thousands',
                    ].map((text, index) => (
                        <span key={index} className="text-white text-2xl font-bold md:text-xl ">
                             {text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
